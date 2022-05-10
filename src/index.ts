import {fetes, fetesAlsace} from "./fetes";

function _defineProperty(obj: { [key: string]: unknown }, key: string, value: Date) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

const datesFeries: Date[] = []
let currentYear: number = new Date().getFullYear()
const feteList: { fete: string, date: Date }[] = []

const getJoursFeries = function getJoursFeries(year: number | string) {
    const _ref =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {
                    alsace: false,
                },
        alsace = _ref.alsace;

    return Object.keys(fetes) // filter out alsace if needed
        .filter((fete) => {
            return alsace || !fetesAlsace.includes(fete);
        }) // get results
        .map((fete) => {
            const date = (fetes as { [key: string]: Function })[fete](parseInt(<string>year));
            datesFeries.push(date)
            feteList.push({fete, date})
            return _defineProperty({}, fete, date);
        }) // flatten dict
        .reduce((acc, fete) => {
            return Object.assign(acc, fete);
        }, {});
};

const isFerie = (date: Date): boolean => {
    const year = date.getFullYear()
    if (datesFeries.length === 0 || currentYear !== year) {
        getJoursFeries(year)
    }
    currentYear = year;
    return datesFeries.find(item => item.getTime() === date.getTime()) !== undefined;
}

const findFeteByDate = (date: Date): string | undefined => {
    const year = date.getFullYear()
    if (feteList.length === 0 || currentYear !== year) {
        getJoursFeries(year)
    }
    currentYear = year;
    return feteList.find(d => d.date.getTime() === date.getTime())?.fete
}

export {getJoursFeries, isFerie, datesFeries, feteList, findFeteByDate}
