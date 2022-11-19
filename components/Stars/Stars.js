import styles from "./stars.module.scss";
import Star from "./Star";

export default function Stars({ maxLength = 5, rating = 0, size = 16 }) {
	const roundedMaxLength = Math.round(maxLength);

	if (roundedMaxLength <= 0) {
		return null;
	}

	return (
		<ol className={styles.stars}>
			{[...Array(maxLength)].map((el, index) => {
				let starType = "hollowed";
				const remain = rating - index;

				if (remain >= 1) {
					starType = "solid";
				} else if (remain >= 0.5 && remain < 1) {
					starType = "halfed";
				}

				return (
					<li key={`star-${index}`} className={styles.stars__item}>
						<Star type={starType} size={size} />
					</li>
				);
			})}
		</ol>
	);
}
