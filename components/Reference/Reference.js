import Image from "next/image";
import styles from "./reference.module.scss";
import cn from "classnames";

export default function Reference({
	children = "Nothing to hug. Put something here...",
}) {
	return (
		<section className={styles.reference}>
			<figure className={styles.reference__figure} area-hidden="true">
				<Image
					className={styles.reference__image}
					src="/img/american-dream-house.png"
					alt="American dream house"
					fill={true}
				/>
				<figcaption className="visually-hidden">
					Classic private house with a garage like from the American dream
				</figcaption>
			</figure>
			<div className={cn("callout", styles.reference__callout)}>
				<Image
					className="callout__image"
					src="/img/piggy-bank--solid.png"
					alt="Star"
					width={20}
					height={19}
				/>
				You will be surprised how affordable gutter guards are!
			</div>
			<h3 className={styles.reference__title}>
				See How Much Gutter Guards Cost In The XX, XXX Area
			</h3>
			<div className={styles.reference__hug}>{children}</div>
		</section>
	);
}
