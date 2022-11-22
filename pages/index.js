import { Fragment, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Throne from "../components/Throne/Throne";
import Features from "../components/Features/Features";
import Main from "../components/Main";
import Image from "next/image";
import Reference from "../components/Reference";
import ZIP from "../components/Forms/ZIP";
import Footer from "../components/Footer";
import Dialog from "../components/Dialog";
import YesNo from "../components/Forms/YesNo";
import User from "../components/Forms/User";

import referenceStyles from "../components/Reference/reference.module.scss";

export default function Index() {
	const [isDialogOpened, showDialog] = useState(true);
	const onZIPSubmit = (e) => {
		e.preventDefault();
		showDialog(true);
	};
	const [dialogStep, setDialogStep] = useState(1);
	const onSubmitNext = (event) => {
		event.preventDefault();
		setDialogStep(dialogStep + 1);

		if (dialogStep === 1) {
			const { target } = event;
			const [yes, no] = target;

			setHomeownerOrAuthrized(yes.checked ? true : no.checked ? false : null);
		}

		if (dialogStep >= 2) {
			setEstimateCompleted(true);
			showDialog(false);
		}
	};
	const [estimateCompleted, setEstimateCompleted] = useState(false);
	const [homeownerOrAuthrized, setHomeownerOrAuthrized] = useState(null);

	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			<Header inert={isDialogOpened} areaHidden={isDialogOpened} />
			<Throne inert={isDialogOpened} areaHidden={isDialogOpened} />
			<Main inert={isDialogOpened} areaHidden={isDialogOpened}>
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
					<ZIP
						modificator={referenceStyles.reference__zip}
						onSubmit={onZIPSubmit}
						completed={estimateCompleted}
					/>
				</Reference>
			</Main>
			<Footer inert={isDialogOpened} areaHidden={isDialogOpened} />
			<Dialog
				title="Are you homeowner or authrized to make property changes?"
				isOpen={isDialogOpened}
				showDialog={showDialog}
				childrenAsSteps={true}
				step={dialogStep}
			>
				<YesNo onSubmit={onSubmitNext} />
				<User
					onSubmit={onSubmitNext}
					homeownerOrAuthrized={homeownerOrAuthrized}
				/>
			</Dialog>
		</Fragment>
	);
}
