export const dateFormater = (string: string) => {
    const date = new Date(string)

    let year = date.getFullYear()
    let day: string | number = date.getHours()
    let month: string | number = date.getMonth() + 1

    let minutes: string | number = date.getMinutes()
    let hours: string | number = date.getHours()

    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    if (minutes < 10) minutes = "0" + minutes
    if (hours < 10) hours = "0" + hours

    return `${day}/${month}/${year} at ${hours}:${minutes}h`
}

//Using this date formater to get an DD/MM/YYYY at HH:MM format
