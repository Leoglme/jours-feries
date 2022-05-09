"use strict";
exports.__esModule = true;
exports.fetesAlsace = exports.fetes = void 0;
var addDays = function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};
var paques = function paques(year) {
    var a = year % 19, 
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
var lundiDePaques = function lundiDePaques(year) {
    return addDays(paques(year), 1);
};
var vendrediSaint = function vendrediSaint(year) {
    return addDays(paques(year), -2);
};
var ascension = function ascension(year) {
    return addDays(paques(year), 39);
};
var lundiDePentecote = function lundiDePentecote(year) {
    return addDays(paques(year), 50);
};
var jourDeLAn = function jourDeLAn(year) {
    return new Date(year, 0, 1);
};
var feteDuTravail = function feteDuTravail(year) {
    return new Date(year, 4, 1);
};
var victoireDesAllies = function victoireDesAllies(year) {
    return new Date(year, 4, 8);
};
var feteNationale = function feteNationale(year) {
    return new Date(year, 6, 14);
};
var assomption = function assomption(year) {
    return new Date(year, 7, 15);
};
var toussaint = function toussaint(year) {
    return new Date(year, 10, 1);
};
var armistice = function armistice(year) {
    return new Date(year, 10, 11);
};
var noel = function noel(year) {
    return new Date(year, 11, 25);
};
var saintEtienne = function saintEtienne(year) {
    return new Date(year, 11, 26);
};
var fetes = {
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
var fetesAlsace = ["Vendredi Saint", "Saint Étienne"];
exports.fetesAlsace = fetesAlsace;
