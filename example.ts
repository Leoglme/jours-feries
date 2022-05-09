import {getJoursFeries, isFerie, datesFeries, feteList, findFeteByDate} from './src'

const noel = new Date(2022, 12, 25)

//Liste [fete]: Date
const list = getJoursFeries(2022)
console.log(list)

// Le jour est-il ferié ?
const res = isFerie(noel)
console.log(res)

//Liste {fete: string, date: Date}
console.log(datesFeries)

//Liste de noms de fête
console.log(feteList)

//Trouver le nom d'une fête avec sa date
const feteName = findFeteByDate(noel)
console.log(feteName)
