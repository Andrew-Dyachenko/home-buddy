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

import cn from "classnames";

import referenceStyles from "../components/Reference/reference.module.scss";
import dialogStyles from "../components/Dialog/dialog.module.scss";

export default function Index() {
	const [isDialogOpened, showDialog] = useState(false);
	const [dialogStep, setDialogStep] = useState(1);
	const [ZIPHasError, setZIPHasError] = useState(false);
	const [UserHasError, setUserHasError] = useState(false);

	const onZIPSubmit = (e) => {
		const { target } = e;
		setZIPHasError(!target.checkValidity());
		e.preventDefault();
		showDialog(true);
	};

	const onSubmitNext = (event) => {
		event.preventDefault();
		const { target } = event;
		setDialogStep(dialogStep + 1);

		if (dialogStep === 1) {
			const { target } = event;
			const [yes, no] = target;

			setHomeownerOrAuthrized(yes.checked ? true : no.checked ? false : null);
		}

		if (dialogStep >= 2) {
			setUserHasError(!target.checkValidity());
			setEstimateCompleted(true);
			showDialog(false);
		}
	};
	const [estimateCompleted, setEstimateCompleted] = useState(false);
	const [homeownerOrAuthrized, setHomeownerOrAuthrized] = useState(null);
	const dialogTitles = [
		"Are you homeowner or authrized to make property changes?",
		"Who should I prepare this estimate for?",
	];

	return (
		<Fragment>
			<Head>
				<title>Home</title>
			</Head>
			<Header inert={isDialogOpened} />
			<Throne inert={isDialogOpened} />
			<Main inert={isDialogOpened}>
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
						hasError={ZIPHasError}
					/>
				</Reference>
			</Main>
			<Footer inert={isDialogOpened} />
			<Dialog
				title={dialogTitles[dialogStep - 1]}
				isOpen={isDialogOpened}
				showDialog={showDialog}
				childrenAsSteps={true}
				step={dialogStep}
				homeownerOrAuthrized={homeownerOrAuthrized}
			>
				<YesNo
					onSubmit={onSubmitNext}
					modificator={cn(
						dialogStyles.dialog__form,
						dialogStyles["dialog__form--yesno"],
					)}
				/>
				<User
					onSubmit={onSubmitNext}
					modificator={cn(
						dialogStyles.dialog__form,
						dialogStyles["dialog__form--user"],
					)}
					hasError={UserHasError}
				/>
			</Dialog>
		</Fragment>
	);
}
