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
    if (datesFeries.length === 0) {
        getJoursFeries(date.getFullYear());
    }
    return datesFeries.includes(date);
};
exports.isFerie = isFerie;
const findFeteByDate = (date) => {
    var _a;
    if (feteList.length === 0) {
        getJoursFeries(date.getFullYear());
    }
    return (_a = feteList.find(d => d.date === date)) === null || _a === void 0 ? void 0 : _a.fete;
};
exports.findFeteByDate = findFeteByDate;
//# sourceMappingURL=index.js.map