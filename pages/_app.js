import "../src/styles/global.scss";
import { Fragment } from "react";
import Head from "next/head";

function App({ Component, pageProps }) {
	return (
		<Fragment>
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
