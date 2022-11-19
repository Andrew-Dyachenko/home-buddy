import Image from "next/image";
import styles from "./star.module.scss";

export default function Star({ type = "hollowed", size = 16 }) {
	return (
		<div className={styles.star}>
			<Image
				className={styles.star__image}
				src={`/img/star--${type}.png`}
				alt="Star"
				width={size}
				height={
					/* Aspect ratio of the star--(type).png */
					Math.round(size / (1681 / 1604))
				}
			/>
		</div>
	);
}
