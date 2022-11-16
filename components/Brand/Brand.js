import Link from "next/link";
import styles from "./brand.module.scss";

export default function Brand({ href = "/", slogan = "" }) {
	return (
		<Link href={href} className={styles.brand}>
			<div className={styles.brand__forehead}>
				HomeBuddy
				<span className={styles.brand__dot}>.</span>
			</div>
			{slogan && <small className={styles.brand__slogan}>{slogan}</small>}
		</Link>
	);
}
