import { format } from 'date-fns'

const FormatDate = (dateString: any) => {
    const date = new Date(dateString)
    return format(date, 'yyyy-MM-dd HH:mm a')
}
export default FormatDate
