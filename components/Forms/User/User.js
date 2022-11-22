export default function User({
	onSubmit = (f) => f,
	homeownerOrAuthrized = null,
}) {
	return (
		<form onSubmit={onSubmit}>
			{homeownerOrAuthrized !== null && (
				<p>
					Your choice:
					<strong>
						<output>{homeownerOrAuthrized === true ? "Yes" : "No"}</output>
					</strong>
				</p>
			)}

			<label htmlFor='formConrol--name'>Full name</label>
			<input
				type='text'
				name='name'
				id='formConrol--name'
				required={true}
				placeholder="Full name"
			/>
			<label htmlFor='formConrol--email'>Email address</label>
			<input
				type='email'
				name='email'
				id='formConrol--email'
				required={true}
				placeholder="Email address"
			/>
			<button type='submit'>Next</button>
		</form>
	);
}
