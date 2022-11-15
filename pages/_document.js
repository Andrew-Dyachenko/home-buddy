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
			<Html dir='ltr'>
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
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
