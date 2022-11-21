import styles from "./zip.module.scss";
import cn from "classnames";

export default function ZIP({ modificator = "" }) {
	return (
		<form className={cn(styles.zip, modificator)}>
			<h3 className={styles.zip__title}>What is your ZIP Code?</h3>
			<div className={styles.zip__formGroup}>
				<label
					htmlFor="form-control--zip"
					className={cn("visually-hidden", styles.zip__label)}
				>
					Enter your your ZIP Code?
				</label>
				<input
					type="text"
					name="zip"
					id="form-control--zip"
					minLength={4}
					maxLength={6}
					// pattern="/^(?=.{2,6}$)(\d)/igm"
					required={true}
					placeholder="Enter ZIP Code"
					className={cn("formControl", styles.zip__formControl)}
				/>
				<div className={cn("formHelper", styles.zip__formHelper)}>
					Free, no-obligation estimates.
				</div>
			</div>
			<button type="submit" className={cn("btn", styles.zip__submit)}>
				Get estimate
			</button>
		</form>
	);
}
