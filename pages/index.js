import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Throne from "../components/Throne/Throne";
import Features from "../components/Features/Features";
import Main from "../components/Main";
import Image from "next/image";
import Reference from "../components/Reference";
import ZIP from "../components/Forms/ZIP";
import Footer from "../components/Footer";

import referenceStyles from "../components/Reference/reference.module.scss";

export default function Index() {
	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<Throne />
			<Main>
				<Features />
				<div className="callout callout--affordable">
					<div className="callout__media">
						<Image
							className="callout__image"
							src="/img/piggy-bank--solid.png"
							alt="Star"
							width={20}
							height={19}
						/>
					</div>
					You will be surprised how affordable gutter guards are!
				</div>
				<Reference>
					<ZIP modificator={referenceStyles.reference__zip} />
				</Reference>
			</Main>
			<Footer />
		</Fragment>
	);
}
