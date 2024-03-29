import Document, { Html, Head, Main, NextScript } from "next/document";
import packageJSON from "../package.json";

const { author, contributors, description } = packageJSON;

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html dir='ltr' lang="en">
				<Head>
					<meta name="description" content={description} />
					<meta
						name="author"
						content={`author: ${author}, contributors: ${contributors.join(
							", ",
						)}`}
					/>
					<meta name="msapplication-TileColor" content="#fa8c16" />
					<meta
						name="msapplication-TileImage"
						content="./favicon/mstile-144x144.png"
					/>
					<meta name="msapplication-config" content="./browserconfig.xml" />
					<meta name="theme-color" content="#ffffff" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="./favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="./favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="./favicon/android-chrome-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="./favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="./site.webmanifest" />
					<link
						rel="mask-icon"
						href="./favicon/safari-pinned-tab.svg"
						color="#2f54eb"
					/>
					<link rel="shortcut icon" href="./favicon/favicon.ico" />
					{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
						rel="stylesheet"
					/> */}
				</Head>
				<body>
					<noscript>
						You need to enable JavaScript to run this app.
						<div>
							<img src="https://mc.yandex.ru/watch/91366449" style={{position: 'absolute', left: '-9999px'}} alt="yandex metrika noscript watcher"/>
						</div>
					</noscript>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
