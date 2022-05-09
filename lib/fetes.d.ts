declare const fetes: {
    "Jour de l'an": (year: number) => Date;
    "F\u00EAte du travail": (year: number) => Date;
    "Victoire des alli\u00E9s": (year: number) => Date;
    "F\u00EAte Nationale": (year: number) => Date;
    Assomption: (year: number) => Date;
    Toussaint: (year: number) => Date;
    Armistice: (year: number) => Date;
    Noël: (year: number) => Date;
    "Lundi de P\u00E2ques": (year: number) => Date;
    Ascension: (year: number) => Date;
    "Lundi de Pentec\u00F4te": (year: number) => Date;
    "Vendredi Saint": (year: number) => Date;
    "Saint \u00C9tienne": (year: number) => Date;
};
declare const fetesAlsace: string[];
export { fetes, fetesAlsace };
