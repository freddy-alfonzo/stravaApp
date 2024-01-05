
export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//gets the name of the month
export const getMonths = (month:number) => {

    if (month === -1) return "December" 
    if (month === -2) return "November"
    else return months[month]

}
//gets the specific timestamp format that api accepts to only show activities of that month
export const getThisAndNextMonthTime = (monthInt:number) =>{
    const getThisMonth = new Date().setMonth(monthInt)
    const get1stDay = new Date(getThisMonth).setDate(1)
    const getThis00Hour = Math.round((new Date(get1stDay).setHours(0,0,0)) / 1000)

    
    const getNextMonth = new Date().setMonth(monthInt + 1)
    const getNext1stDay = new Date(getNextMonth).setDate(1)
    const getNext00Hour = Math.round((new Date(getNext1stDay).setHours(0,0,0)) / 1000)

    return [getThis00Hour, getNext00Hour]
}