/* eslint-disable prettier/prettier */
export const formatPrice = (props) =>
	new Intl.NumberFormat('sk', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 0
	}).format(props)
