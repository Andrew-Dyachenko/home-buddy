import "../src/styles/global.scss";
import { Fragment } from "react";
import Head from "next/head";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

function App({ Component, pageProps }) {
	return (
		<Fragment>
			<style jsx={true} global={true}>
				{`
				body {
					font-family: ${montserrat.style.fontFamily};
					}
				`}
			</style>
			<Head>
				<title>Home Buddy</title>
				{/* Warning: viewport meta tags should not be used in _document.js's <Head> */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default App;
