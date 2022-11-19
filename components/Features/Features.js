import Image from "next/image";
import styles from "./features.module.scss";
import cn from "classnames";
import Stars from "../Stars";

export default function Features() {
	return (
		<div className={styles.features}>
			<div className={cn("container", styles.throne__container)}>
				<ul className={styles.features__list}>
					{/* 1 */}
					<li className={styles.features__item}>
						<div className={styles.features__media}>
							<Image
								className={styles.features__image}
								src="/img/certificate-stamp.png"
								alt="Logo of the NBC"
								width={50}
								height={50}
								sizes="(max-width: 375px) 50px, 56px"
							/>
						</div>
						<div className={styles.features__infoblock}>
							<div className={styles.features__text}>
								Lifetime warranty with 100% no-clog guarantee
							</div>
						</div>
					</li>
					{/* 2 */}
					<li className={styles.features__item}>
						<div className={styles.features__media}>
							<Image
								className={styles.features__image}
								src="/img/modern-house.png"
								alt="Logo of the NBC"
								width={47}
								height={47}
								sizes="(max-width: 375px) 47px, 53px"
							/>
						</div>
						<div className={styles.features__infoblock}>
							<div className={styles.features__text}>Fits most homes</div>
						</div>
					</li>
					{/* 3 */}
					<li className={styles.features__item}>
						<div className={styles.features__media}>
							<Image
								className={styles.features__image}
								src="/img/piggy-bank.png"
								alt="Logo of the NBC"
								width={47}
								height={44}
								sizes="(max-width: 375px) 47px, 53px"
							/>
						</div>
						<div className={styles.features__infoblock}>
							<div className={styles.features__text}>
								Installs over existing gutters saving you thousands
							</div>
						</div>
					</li>
					{/* 4 */}
					<li className={styles.features__item}>
						<div className={styles.features__media}>
							<Image
								className={styles.features__image}
								src="/img/rating-start.png"
								alt="Logo of the NBC"
								width={47}
								height={47}
								sizes="(max-width: 375px) 47px, 53px"
							/>
						</div>
						<div className={styles.features__infoblock}>
							<Stars rating={4.5} />
							<div className={styles.features__text}>Сustomer ratin</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
