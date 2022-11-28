import styles from "./zip.module.scss";
import cn from "classnames";

export default function ZIP({
	modificator = "",
	onSubmit = (f) => f,
	completed = false,
	hasError = true,
}) {
	return (
		<form className={cn(styles.zip, modificator)} onSubmit={onSubmit}>
			<h3 className={styles.zip__title}>What is your ZIP Code?</h3>
			<div
				className={cn(styles.zip__formGroup, "formGroup", {
					["formGroup_has_error"]: hasError,
				})}
			>
				<input
					type="text"
					name="zip"
					id="form-control--zip"
					minLength={4}
					maxLength={6}
					pattern="\d{4,6}"
					required={true}
					placeholder="Enter ZIP Code"
					className={cn("formControl", styles.zip__formControl)}
					disabled={completed}
				/>
				<label
					htmlFor="form-control--zip"
					className={cn(/*"visually-hidden", */ "formLabel", styles.zip__label)}
				>
					Enter ZIP Code
				</label>
			</div>
			<div className={cn("formHelper", styles.zip__formHelper)}>
				Free, no-obligation estimates.
			</div>
			<button
				type="submit"
				className={cn("btn", styles.zip__submit)}
				disabled={completed}
			>
				{completed ? "Estimate completed!" : "Get estimate"}
			</button>
		</form>
	);
}
