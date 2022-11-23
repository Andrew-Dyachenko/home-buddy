import styles from "./yesno.module.scss";
import cn from "classnames";

export default function YesNo({ onSubmit = (f) => f, modificator = "" }) {
	return (
		<form onSubmit={onSubmit} className={cn(styles.form, modificator)}>
			<div className={styles.form__group}>
				<input
					type="radio"
					id="formControl--not-homeowner-or-not-authrized"
					name="homeowner-or-authrized"
					value="Yes"
					required={true}
					className={cn("visually-hidden", styles.form__control)}
				/>
				<label
					htmlFor="formControl--not-homeowner-or-not-authrized"
					className={styles.form__label}
				>
					<svg
						width="56"
						height="56"
						viewBox="0 0 56 56"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						preserveAspectRatio="xMinYMin"
					>
						<use
							xlinkHref="#check--rounded"
							className={cn(
								"icon",
								"icon_check_rounded",
								cn(styles["dialog__dismiss-icon"], styles["form__label-icon"]),
							)}
						/>
					</svg>
					Yes
				</label>
			</div>
			<div className={styles.form__group}>
				<input
					type="radio"
					id="formControl--homeowner-or-authrized"
					name="homeowner-or-authrized"
					value="No"
					required={true}
					className={cn("visually-hidden", styles.form__control)}
				/>
				<label
					htmlFor="formControl--homeowner-or-authrized"
					className={styles.form__label}
				>
					<svg
						width="56"
						height="56"
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
								cn(styles["dialog__dismiss-icon"], styles["form__label-icon"]),
							)}
						/>
					</svg>
					No
				</label>
			</div>
			<button className={cn("btn", styles.form__submit)} type="submit">
				Next
			</button>
		</form>
	);
}
