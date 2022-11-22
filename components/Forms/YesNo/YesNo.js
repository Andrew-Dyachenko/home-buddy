export default function YesNo({ onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<div>
				<input
					type="radio"
					id="formControl--not-homeowner-or-not-authrized"
					name="homeowner-or-authrized"
					value="Yes"
					required={true}
				/>
				<label htmlFor="formControl--not-homeowner-or-not-authrized">Yes</label>
			</div>

			<div>
				<input
					type="radio"
					id="formControl--homeowner-or-authrized"
					name="homeowner-or-authrized"
					value="No"
					required={true}
				/>
				<label htmlFor="formControl--homeowner-or-authrized">No</label>
			</div>
			<button type='submit'>Next</button>
		</form>
	);
}
