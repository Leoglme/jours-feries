import {getJoursFeries, isFerie, datesFeries, feteList, findFeteByDate} from './lib'

const noel = new Date("2022-12-24T23:00:00.000Z")

// Liste [fete]: Date
const list = getJoursFeries(2022)
console.log(list)

// Le jour est-il ferié ?
const res = isFerie(noel)
console.log(res)

// Tableau de dates des jours feriés
console.log(datesFeries)

// Liste {fete: string, date: Date}
console.log(feteList)

// Trouver le nom d'une fête avec sa date
const feteName = findFeteByDate(noel)
console.log(feteName)
