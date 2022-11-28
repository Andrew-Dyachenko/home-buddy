import styles from "./user.module.scss";
import cn from "classnames";

export default function User({
	onSubmit = (f) => f,
	modificator = "",
	hasError = true,
}) {
	return (
		<form onSubmit={onSubmit} className={cn(styles.form, modificator)}>
			<div
				className={cn(styles.form__group, "formGroup", {
					["formGroup_has_error"]: hasError,
				})}
			>
				<input
					type="text"
					name="name"
					id="formConrol--name"
					minLength={1}
					maxLength={29}
					required={true}
					pattern="[a-zA-Zа-яА-Я\d,\.\-_ ]{1,29}"
					placeholder="Full name"
					className={cn("formControl", styles.form__control)}
				/>
				<label
					htmlFor="formConrol--name"
					className={cn(/*"visually-hidden",*/ "formLabel", styles.form__label)}
				>
					Full name
				</label>
			</div>
			<div
				className={cn(styles.form__group, "formGroup", {
					["formGroup_has_error"]: hasError,
				})}
			>
				<input
					type="email"
					name="email"
					id="formConrol--email"
					required={true}
					placeholder="Email address"
					className={cn("formControl", styles.form__control)}
				/>
				<label
					htmlFor="formConrol--email"
					className={cn(/*"visually-hidden",*/ "formLabel", styles.form__label)}
				>
					Email address
				</label>
			</div>
			<button className={cn("btn", styles.form__submit)} type="submit">
				Next
			</button>
			<p className={styles.form__secure}>
				<span className={styles["form__secure-icon"]}>
					<svg
						width="10"
						height="13"
						viewBox="0 0 10 13"
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						preserveAspectRatio="xMinYMin"
					>
						<use
							xlinkHref="#secure-locker"
							className={cn("icon", "icon_lock")}
						/>
					</svg>
				</span>
				Safe, Secure and Confidential
			</p>
		</form>
	);
}
