export const timeFormater = (number:number) => {
    let hours: number | string   = Math.floor(number / 3600);
    let minutes: number | string   = Math.floor((number - (hours * 3600)) / 60);
    let seconds: number | string   = number - (hours * 3600) - (minutes * 60);
  
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  //Time formater to get an HH/MM/SS format instead of seconds