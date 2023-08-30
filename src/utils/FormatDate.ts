import { format } from 'date-fns'

export  const FormatTime = (dateString: any) => {
    const date = new Date(dateString)
    return format(date, 'yyyy-MM-dd HH:mm a')
}
export const FormatDate = (dateString: any) => {
    const date = new Date(dateString)
    return format(date, 'yyyy-MM-dd')
}
// export default FormatDate

