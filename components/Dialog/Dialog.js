import React, { useState, useEffect, useCallback, Children } from "react";
import styles from "./dialog.module.scss";

export default function Dialog({
	children,
	isOpen = false,
	title = "Modal dialog title",
	showDialog = (f) => f,
	childrenAsSteps = false,
	step = 1,
}) {
	// const [step, nextStep] = useState(1);
	const onESC = useCallback(
		(event) => {
			// console.log("event: ", event);
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

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		document.addEventListener("keydown", onESC);

		return () => {
			document.removeEventListener("keydown", onESC);
		};
	});

	return (
		<dialog
			open={isOpen}
			className={styles.dialog}
			aria-labelledby={title.replace(/\s/gim, "")}
			area-hidden={isOpen === false ? "true" : null}
			tabIndex={-1}
		>
			<div className={styles.dialog__header}>
				<button
					onClick={() => showDialog(false)}
					className={styles.dialog__dismiss}
				>
					Close modal dialog
				</button>
			</div>
			{childrenAsSteps && (
				<progress
					max="100"
					value={(100 / Children.toArray(children).length) * step}
				>
					{`${(100 / Children.toArray(children).length) * step}%`}
				</progress>
			)}
			<h3 id={title.replace(/\s/gim, "")}>{title}</h3>
			{childrenAsSteps === false
				? children
				: React.Children.map(children, (child, index) => {
						// console.log("index: ", index);
						if (step === index + 1) {
							return React.cloneElement(child, {
								// props1: 1,
								// props2: 2,
							});
						}
				  })}
		</dialog>
	);
}
