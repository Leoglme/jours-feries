"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFeteByDate = exports.feteList = exports.datesFeries = exports.isFerie = exports.getJoursFeries = void 0;
const fetes_1 = require("./fetes");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
}
const datesFeries = [];
exports.datesFeries = datesFeries;
let currentYear = new Date().getFullYear();
const feteList = [];
exports.feteList = feteList;
const getJoursFeries = function getJoursFeries(year) {
    const _ref = arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            alsace: false,
        }, alsace = _ref.alsace;
    return Object.keys(fetes_1.fetes) // filter out alsace if needed
        .filter((fete) => {
        return alsace || !fetes_1.fetesAlsace.includes(fete);
    }) // get results
        .map((fete) => {
        const date = fetes_1.fetes[fete](parseInt(year));
        datesFeries.push(date);
        feteList.push({ fete, date });
        return _defineProperty({}, fete, date);
    }) // flatten dict
        .reduce((acc, fete) => {
        return Object.assign(acc, fete);
    }, {});
};
exports.getJoursFeries = getJoursFeries;
const isFerie = (date) => {
    const year = date.getFullYear();
    if (datesFeries.length === 0 || currentYear !== year) {
        getJoursFeries(year);
    }
    currentYear = year;
    return datesFeries.find(item => item.getTime() === date.getTime()) !== undefined;
};
exports.isFerie = isFerie;
const findFeteByDate = (date) => {
    const year = date.getFullYear();
    if (feteList.length === 0 || currentYear !== year) {
        getJoursFeries(year);
    }
    currentYear = year;
    return feteList.find(d => d.date.getTime() === date.getTime())?.fete;
};
exports.findFeteByDate = findFeteByDate;
//# sourceMappingURL=index.js.map