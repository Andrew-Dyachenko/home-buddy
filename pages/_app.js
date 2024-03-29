import "../src/styles/global.scss";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
});

function App({ Component, pageProps }) {
	useEffect(() => {
		// <!-- Yandex.Metrika counter -->
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(91366449, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true
			});
		// <!-- /Yandex.Metrika counter -->
	 }, []);
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
			{/* Global SVG Sprite */}
			<svg style={{ display: "none" }}>
				<defs>
					<symbol id="check--rounded" viewBox="0 0 56 56">
						<title>Rounded check</title>
						<path
							xmlns="http://www.w3.org/2000/svg"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.8"
							d="M39.9571 20.4434L24.6445 35.7561L16.0468 27.1583"
						/>
						<rect
							fill="transparent"
							xmlns="http://www.w3.org/2000/svg"
							width="53.2"
							height="53.2"
							x="1.4"
							y="1.4"
							strokeWidth="2.8"
							rx="26.6"
						/>
					</symbol>
					<symbol id="cross--rounded" viewBox="0 0 56 56">
						<title>Rounded cross</title>
						<path
							xmlns="http://www.w3.org/2000/svg"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.8"
							d="M38.1523 17.8496L17.8516 38.1504"
						/>
						<path
							xmlns="http://www.w3.org/2000/svg"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2.8"
							d="M17.8516 17.8496L38.1523 38.1504"
						/>
						<rect
							fill="transparent"
							xmlns="http://www.w3.org/2000/svg"
							width="53.2"
							height="53.2"
							x="1.4"
							y="1.4"
							strokeWidth="2.8"
							rx="26.6"
						/>
					</symbol>
					<symbol id="secure-locker" viewBox="0 0 10 13">
						<title>Secure locker</title>
						<path
							xmlns="http://www.w3.org/2000/svg"
							fill="#646464"
							d="M8.99922 5.69961H8.19922V3.29961C8.19922 1.53961 6.75922 0.0996094 4.99922 0.0996094C3.23922 0.0996094 1.79922 1.53961 1.79922 3.29961V5.69961H0.999219C0.599219 5.69961 0.199219 6.09961 0.199219 6.49961V12.0996C0.199219 12.4996 0.599219 12.8996 0.999219 12.8996H8.99922C9.39922 12.8996 9.79922 12.4996 9.79922 12.0996V6.49961C9.79922 6.09961 9.39922 5.69961 8.99922 5.69961ZM5.79922 11.2996H4.19922L4.51922 9.53961C4.11922 9.37961 3.79922 8.89961 3.79922 8.49961C3.79922 7.85961 4.35922 7.29961 4.99922 7.29961C5.63922 7.29961 6.19922 7.85961 6.19922 8.49961C6.19922 8.97961 5.95922 9.37961 5.47922 9.53961L5.79922 11.2996ZM6.59922 5.69961H3.39922V3.29961C3.39922 2.41961 4.11922 1.69961 4.99922 1.69961C5.87922 1.69961 6.59922 2.41961 6.59922 3.29961V5.69961Z"
						/>
					</symbol>
				</defs>
			</svg>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default App;
