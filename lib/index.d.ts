declare const datesFeries: Date[];
declare const feteList: {
    fete: string;
    date: Date;
}[];
declare const getJoursFeries: (year: number | string) => {
    [key: string]: unknown;
};
declare const isFerie: (date: Date) => boolean;
declare const findFeteByDate: (date: Date) => string | undefined;
export { getJoursFeries, isFerie, datesFeries, feteList, findFeteByDate };
