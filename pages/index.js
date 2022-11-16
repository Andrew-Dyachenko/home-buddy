import { Fragment } from "react";
import Head from "next/head";
// import styles from "./index.module.scss";
// import cn from "classnames";
import Header from "../components/Header/Header";

export default function Index() {
	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
		</Fragment>
	);
}
