import { Fragment } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Throne from "../components/Throne/Throne";

export default function Index() {
	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<Throne />
		</Fragment>
	);
}
