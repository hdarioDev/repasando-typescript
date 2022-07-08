import { subDays, format } from 'date-fns'

const date = new Date(1998, 1, 28) // 0 -> enero
const rta = subDays(date, 30) // DIAS A RESTAR
const str = format(rta, 'DD-MM-YYYY')
console.log(str);
