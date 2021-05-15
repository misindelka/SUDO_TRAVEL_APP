import { differenceInMonths } from 'date-fns'

export const isItemNew = (props) => differenceInMonths(new Date(), new Date(props)) < 6
