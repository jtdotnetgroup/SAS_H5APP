import moment from 'moment'

export function format(dateTime) {
	return moment(dateTime).format('YYYY-MM-DD HH:mm')
}
