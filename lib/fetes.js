"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetesAlsace = exports.fetes = void 0;
const addDays = function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};
const paques = function paques(year) {
    const a = year % 19, 
    // century
    b = parseInt(String(year / 100)), 
    // years after century
    c = year % 100, d = (19 * a +
        b -
        parseInt(String(b / 4)) -
        parseInt(String((parseInt(String(b - (b + 8) / 25)) + 1) / 3)) +
        15) %
        30, e = (32 + 2 * (b % 4) + 2 * parseInt(String(c / 4)) - d - (c % 4)) % 7, f = d + e - 7 * parseInt(String((a + 11 * d + 22 * e) / 451)) + 114, month = parseInt(String(f / 31)), day = (f % 31) + 1;
    return new Date(year, month - 1, day);
};
const lundiDePaques = function lundiDePaques(year) {
    return addDays(paques(year), 1);
};
const vendrediSaint = function vendrediSaint(year) {
    return addDays(paques(year), -2);
};
const ascension = function ascension(year) {
    return addDays(paques(year), 39);
};
const lundiDePentecote = function lundiDePentecote(year) {
    return addDays(paques(year), 50);
};
const jourDeLAn = function jourDeLAn(year) {
    return new Date(year, 0, 1);
};
const feteDuTravail = function feteDuTravail(year) {
    return new Date(year, 4, 1);
};
const victoireDesAllies = function victoireDesAllies(year) {
    return new Date(year, 4, 8);
};
const feteNationale = function feteNationale(year) {
    return new Date(year, 6, 14);
};
const assomption = function assomption(year) {
    return new Date(year, 7, 15);
};
const toussaint = function toussaint(year) {
    return new Date(year, 10, 1);
};
const armistice = function armistice(year) {
    return new Date(year, 10, 11);
};
const noel = function noel(year) {
    return new Date(year, 11, 25);
};
const saintEtienne = function saintEtienne(year) {
    return new Date(year, 11, 26);
};
const fetes = {
    "Jour de l'an": jourDeLAn,
    "Fête du travail": feteDuTravail,
    "Victoire des alliés": victoireDesAllies,
    "Fête Nationale": feteNationale,
    Assomption: assomption,
    Toussaint: toussaint,
    Armistice: armistice,
    Noël: noel,
    "Lundi de Pâques": lundiDePaques,
    Ascension: ascension,
    "Lundi de Pentecôte": lundiDePentecote,
    "Vendredi Saint": vendrediSaint,
    "Saint Étienne": saintEtienne
};
exports.fetes = fetes;
const fetesAlsace = ["Vendredi Saint", "Saint Étienne"];
exports.fetesAlsace = fetesAlsace;
//# sourceMappingURL=fetes.js.map