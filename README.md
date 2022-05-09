<h2 align="center">Jours fériés en France</h2>

<p>
 Librarie typescript pour calculer et intéragir avec les jours feriés en france 
</p>


![Language](https://img.shields.io/badge/language-typescript-blue.svg?style=flat)

<img alt="hero" height="500" src="https://dibodev-files.s3.eu-west-3.amazonaws.com/Capture+d%E2%80%99%C3%A9cran+2022-05-09+201917.jpg">



> Le code source se trouve sur le repo [jours-feries](https://github.com/Leoglme/jours-feries)

## Install

   ```sh
    $ git clone https://github.com/Leoglme/jours-feries
   ```

## Fonctionnalités

### getJoursFeries

```ts
import {getJoursFeries} from './lib'

// Liste [fete]: Date
const list = getJoursFeries(2022)
console.log(list)
```
#### resultat =>
```sh
{
  "Jour de l'an": 2021-12-31T23:00:00.000Z,
  'Fête du travail': 2022-04-30T22:00:00.000Z,
  'Victoire des alliés': 2022-05-07T22:00:00.000Z,
  'Fête Nationale': 2022-07-13T22:00:00.000Z,
  'Assomption': 2022-08-14T22:00:00.000Z,
  'Toussaint': 2022-10-31T23:00:00.000Z,
  'Armistice': 2022-11-10T23:00:00.000Z,
  'Noël': 2022-12-24T23:00:00.000Z,
  'Lundi de Pâques': 2022-04-17T22:00:00.000Z,
  'Ascension': 2022-05-25T22:00:00.000Z,
  'Lundi de Pentecôte': 2022-06-05T22:00:00.000Z
}
```
### isFerie
```ts
import {isFerie} from './lib'

const noel = new Date("2022-12-24T23:00:00.000Z")
// Le jour est-il ferié ?
const res = isFerie(noel)
console.log(res)
```
#### resultat =>
```js
true
```
### datesFeries
```ts
import {datesFeries} from './lib'

// Tableau de dates des jours feriés
console.log(datesFeries)
```
#### resultat =>
```sh
[                          
  2021-12-31T23:00:00.000Z,
  2022-04-30T22:00:00.000Z,
  2022-05-07T22:00:00.000Z,
  2022-07-13T22:00:00.000Z,
  2022-08-14T22:00:00.000Z,
  2022-10-31T23:00:00.000Z,
  2022-11-10T23:00:00.000Z,
  2022-12-24T23:00:00.000Z,
  2022-04-17T22:00:00.000Z,
  2022-05-25T22:00:00.000Z,
  2022-06-05T22:00:00.000Z 
]                  
```
### feteList
```ts
import {feteList} from './lib'

// Liste {fete: string, date: Date}
console.log(feteList)
```
#### resultat =>
```sh
[
  { fete: "Jour de l'an", date: 2021-12-31T23:00:00.000Z },
  { fete: 'Fête du travail', date: 2022-04-30T22:00:00.000Z },
  { fete: 'Victoire des alliés', date: 2022-05-07T22:00:00.000Z },
  { fete: 'Fête Nationale', date: 2022-07-13T22:00:00.000Z },
  { fete: 'Assomption', date: 2022-08-14T22:00:00.000Z },
  { fete: 'Toussaint', date: 2022-10-31T23:00:00.000Z },
  { fete: 'Armistice', date: 2022-11-10T23:00:00.000Z },
  { fete: 'Noël', date: 2022-12-24T23:00:00.000Z },
  { fete: 'Lundi de Pâques', date: 2022-04-17T22:00:00.000Z },
  { fete: 'Ascension', date: 2022-05-25T22:00:00.000Z },
  { fete: 'Lundi de Pentecôte', date: 2022-06-05T22:00:00.000Z }
]                 
```
### findFeteByDate
```ts
import {findFeteByDate} from './lib'

const noel = new Date("2022-12-24T23:00:00.000Z")
// Trouver le nom d'une fête avec sa date
const feteName = findFeteByDate(noel)
console.log(feteName)
```
#### resultat =>
```sh
Noël                
```

 

## License

Copyright (c) 2021 [Dibodev](https://dibodev.com/)
