import styles from "./throne.module.scss";
import cn from "classnames";
import Image from "next/image";

export default function Throne() {
	return (
		<section className={styles.throne}>
			<div className={cn("container", styles.throne__container)}>
				<div className={styles.throne__filler}>
					<h1 className={styles.throne__title}>
						How{" "}
						<mark className={styles["throne__title-mark"]}>
							Over 410,000 Americans
						</mark>{" "}
						Increased Their Property Value{" "}
						<mark className={styles["throne__title-mark"]}>
							In Under 6 Hours*
						</mark>{" "}
						With This Simple Upgrade.
					</h1>
					<div className={styles.throne__text}>
						<p className={styles.throne__paragraph}>
							Ideal for detached and semi-detached homes with sloped roofs.
						</p>
					</div>
					<div className={styles.throne__media}>
						<figure className={styles.throne__figure}>
							<Image
								className={styles.throne__image}
								src='/img/facade.png'
								alt="Facade"
								width={581}
								height={326}
								objectFit='contain'
								sizes="(max-width: 375px) 343px, 581px"
								priority={true}
							/>
							<figcaption className='visually-hidden'>
								The facade, which depicts a part of a brick wall connected to
								the siding. A coniferous tree grows against the background of
								the wall
							</figcaption>
						</figure>
						<a
							href="https://google.com"
							rel="noreferrer"
							target="_blank"
							className={styles.throne__label}
						>
							<h6 className={styles["throne__label-title"]}>As seen on</h6>
							<figure className={styles["throne__label-figure"]}>
								<Image
									className={styles["throne__label-icon"]}
									src='/img/nbc.png'
									alt="Logo of the NBC"
									width={32}
									height={32}
									sizes="(max-width: 375px) 23.48px, 32px"
								/>
								<figcaption className='visually-hidden'>
									NBC - National Broadcasting Company
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
