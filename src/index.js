"use strict";
exports.__esModule = true;
exports.findFeteByDate = exports.feteList = exports.datesFeries = exports.isFerie = exports.getJoursFeries = void 0;
var fetes_1 = require("./fetes");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
}
var datesFeries = [];
exports.datesFeries = datesFeries;
var feteList = [];
exports.feteList = feteList;
var getJoursFeries = function getJoursFeries(year) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            alsace: false
        }, alsace = _ref.alsace;
    return Object.keys(fetes_1.fetes) // filter out alsace if needed
        .filter(function (fete) {
        return alsace || !fetes_1.fetesAlsace.includes(fete);
    }) // get results
        .map(function (fete) {
        var date = fetes_1.fetes[fete](parseInt(year));
        datesFeries.push(date);
        feteList.push({ fete: fete, date: date });
        return _defineProperty({}, fete, date);
    }) // flatten dict
        .reduce(function (acc, fete) {
        return Object.assign(acc, fete);
    }, {});
};
exports.getJoursFeries = getJoursFeries;
var isFerie = function (date) {
    if (datesFeries.length === 0) {
        getJoursFeries(date.getFullYear());
    }
    return datesFeries.includes(date);
};
exports.isFerie = isFerie;
var findFeteByDate = function (date) {
    var _a;
    if (feteList.length === 0) {
        getJoursFeries(date.getFullYear());
    }
    return (_a = feteList.find(function (d) { return d.date === date; })) === null || _a === void 0 ? void 0 : _a.fete;
};
exports.findFeteByDate = findFeteByDate;
