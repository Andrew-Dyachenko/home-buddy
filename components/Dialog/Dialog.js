import React, { useRef, useEffect, useCallback, Children } from "react";
import styles from "./dialog.module.scss";
import cn from "classnames";

export default function Dialog({
	children,
	isOpen = false,
	title = "Modal dialog title",
	showDialog = (f) => f,
	childrenAsSteps = false,
	step = 1,
	homeownerOrAuthrized = null,
}) {
	const dialog = useRef(null);
	const onESC = useCallback(
		(event) => {
			if (event.key === "Escape") {
				//if esc key was not pressed in combination with ctrl or alt or shift
				const isNotCombinedKey = !(
					event.ctrlKey ||
					event.altKey ||
					event.shiftKey
				);

				if (isNotCombinedKey) {
					// alert("Escape key was pressed with out any group keys");
					showDialog(false);
				}
			}
		},
		[showDialog],
	);

	const outsideClick = useCallback(
		(event) => {
			if (!dialog.current.contains(event.target)) {
				showDialog(false);
			}
		},
		[showDialog],
	);

	const headerTitles = [
		"Please choose one of the variants below",
		"Please fill your first name and email below",
	];

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		document.addEventListener("keydown", onESC);
		document.addEventListener("click", outsideClick);

		return () => {
			document.removeEventListener("keydown", onESC);
			document.removeEventListener("click", outsideClick);
		};
	});

	return (
		<dialog
			ref={dialog}
			open={isOpen}
			className={styles.dialog}
			aria-labelledby={title.replace(/\s/gim, "")}
			tabIndex={-1}
		>
			<div className={styles.dialog__hug}>
				<div className={styles.dialog__header}>
					<div
						className={cn(
							styles.dialog__container,
							styles["dialog__container--header"],
						)}
					>
						<h3
							className={cn("visually-hidden", styles["dialog__header-title"])}
						>
							{childrenAsSteps === false
								? null
								: React.Children.map(children, (child, index) => {
										if (step === index + 1) {
											return headerTitles[index];
										}
								  })}
						</h3>
						<button
							onClick={() => showDialog(false)}
							className={styles.dialog__dismiss}
							aria-label="Close modal dialog"
						>
							<svg
								width="21"
								height="21"
								viewBox="0 0 56 56"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								preserveAspectRatio="xMinYMin"
							>
								<use
									xlinkHref="#cross--rounded"
									className={cn(
										"icon",
										"icon_cross_rounded",
										styles["dialog__dismiss-icon"],
									)}
								/>
							</svg>
							<span className="visually-hidden">Close modal dialog</span>
						</button>
					</div>
					{childrenAsSteps && (
						<div className={styles.dialog__progress}>
							<div
								className={styles["dialog__progress-bar"]}
								role="progressbar"
								aria-label="Geting estimate progress"
								style={{
									width: `${(100 / Children.toArray(children).length) * step}%`,
								}}
								aria-valuenow={(100 / Children.toArray(children).length) * step}
								aria-valuemin="0"
								aria-valuemax="100"
							/>
						</div>
					)}
				</div>
				<div className={styles.dialog__body}>
					<div
						className={cn(
							"container",
							styles.dialog__container,
							styles["dialog__container--body"],
						)}
					>
						<h4
							id={title.replace(/\s/gim, "")}
							className={styles.dialog__title}
						>
							{title}
						</h4>
						{homeownerOrAuthrized !== null && (
							<p className={styles.dialog__output}>
								Your choice:
								<strong>
									<output>
										{" "}
										{homeownerOrAuthrized === true ? "Yes" : "No"}
									</output>
								</strong>
							</p>
						)}
						{childrenAsSteps === false
							? children
							: React.Children.map(children, (child, index) => {
									if (step === index + 1) {
										// console.log("child:", child);
										return child;
										// return React.cloneElement(child, {
										// 	// className: child.props.className,
										// 	// props2: 2,
										// });
									}
							  })}
					</div>
				</div>
			</div>
		</dialog>
	);
}
