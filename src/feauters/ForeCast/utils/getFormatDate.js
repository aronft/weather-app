import { format, parse } from 'date-fns'

export const getCurrentDayFormat = (dateTime) => {
    const date = parse(dateTime, 'yyyy-MM-dd', new Date())
    return `${format(date, 'E')}. ${format(date, 'd')} ${format(date, 'LLL')}`
}
