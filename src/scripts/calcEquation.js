import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

/*
---Функции для вычислений---
 */
const fractionText = function fractionText (a, b, settings) {
    if (((a / b) === Math.round(a / b)) || !settings[FRACTION]) {
        return (a / b);
    }

    if (settings[SHORT_FRACTION]) {
        let c = Math.sqrt(a * a);
        let d = Math.sqrt(b * b);
        let i = 0;

        while (c !== d) {
            if (c > d) {
                c = c - d;
            }
            else {
                d = d - c;
            }

            i++; if (i > 1000000) { return `${a}/${b}`; }
        }

        return `${a / c}/${b / d}`;
    }

    return `${a}/${b}`;
};


/**
 * @return {string}
 */
const SqrtText = function SqrtText (a, settings) {
    if ((Math.round(Math.sqrt(a)) === Math.sqrt(a)) || settings[SQR]) {
        return Math.sqrt(a) + "";
    }
    return "√" + a;
};

const nearestPosition = function nearestPosition (pos1, pos2) {
    if (((pos1 < pos2) && (pos1 !== -1)) || (pos2 === -1)) {
        return pos1;
    }
    else {
        return pos2;
    }
};

const addNumber = function addNumber (number, text, n, n2, sizeX) {
    let newNumber;
    if (sizeX > 0) {
        if (n === (n2 - sizeX)) {
            newNumber = 1;
        }
        else {
            if (text.substring(n, n2 - sizeX) === "-") {
                newNumber = -1;
            }
            else {
                newNumber = parseFloat(text.substring(n, n2 - sizeX));
            }
        }
    }
    else {
        newNumber = parseFloat(text.substring(n, n2));
    }

    if (n > text.indexOf("=", 0)) {
        return number - newNumber;
    }
    else {
        return number + newNumber;
    }
};

const getX = function getX (a, b, c, one, settings) {
    let des = b*b-4*a*c;
    if ((Math.round(Math.sqrt(des)) === Math.sqrt(des)) || settings[SQR]) {
        if (one) {
            return fractionText((-1*b) - Math.sqrt(des), (2*a), settings);
        }
        else {
            return fractionText((-1*b) + Math.sqrt(des), (2*a), settings);
        }
    }
    else {
        if (one) {
            return `${-1*b}-√${des}/${2*a}`;
        }
        else {
            return `${-1*b}+√${des}/${2*a}`;
        }
    }
};

const viewNumber = function viewNumber(x) {
    return ((x < 0) ? "" : "+") + x;
};

const fractionBuilder = function fractionBuilder(topLine, answer) {
    let fractionLength = "";

    for (let i = 0; i < topLine.length; i = i + 1.45) {
        fractionLength = fractionLength + "—";
    }

    return `X=${fractionLength}=${answer}`;
};

/*
---Функции вывода ответа---
 */
const standardSqrEquation = function standardSqrEquation(a, b, c, settings) {
    let x1 = getX(a, b, c, true, settings);
    let x2 = getX(a, b, c, false, settings);

    let des = b*b-4*a*c;

    let line4Top = `${-1*b}-${SqrtText(des, settings)}`;
    let line6Top = `${-1*b}+${SqrtText(des, settings)}`;

    let x1Big = ((((-1*b)-Math.sqrt(des))/(2*a)) > (((-1*b)+Math.sqrt(des))/(2*a)));

    return {
        line4Top,
        line4Bottom: 2*a,
        line4: fractionBuilder(line4Top, x1),
        line6Top,
        line6Bottom: 2*a,
        line6: fractionBuilder(line6Top, x2),
        lineAnswer: `X=${x1Big ? x1 : x2}; X=${x1Big ? x2 : x1};`
    };
};

const des0SqrEquation = function des0SqrEquation(a, b, c, settings) {
    let line4Top = -1 * b;
    let line4Bottom = 2 * a;
    let answer = fractionText(line4Top, line4Bottom, settings);

    return {
        line4Top,
        line4Bottom: 2 * a,
        line4: fractionBuilder(line4Top, answer, settings),
        lineAnswer: `X=${answer};`
    };
};

const onlySqrEquation = function onlySqrEquation(a, b, c, settings) {
    let line1 = `${a}X^2=${-1*c}`;
    let line2 = `X^2=${fractionText(-1*c, a, settings)}`;

    if (((-1*c) / a) < 0) {
        return {
            line1,
            line2,
            line3: "X=НЕТ КОРНЕЙ",
            lineAnswer: "X=НЕТ КОРНЕЙ;"
        };
    }

    let line3;

    if (((c / a) === Math.round(c / a)) || !settings[FRACTION]) {
        line3 = `X=${SqrtText((-1*c) / a, settings)}`;
    }
    else {
        line3 = `X=√${fractionText(-1*c, a, settings)}`;
    }

    return {
        line1,
        line2,
        line3,
        lineAnswer: `${line3};`
    };
};

/*
---Функция для экспорта---
 */
const calcEquation = function calcEquation (text, settings) {
    let n = 0, n2, a = 0.0, b = 0.0, c = 0.0;

    text = text.toUpperCase();

    while (text.indexOf(' ', n) !== -1) {
        n = text.indexOf(' ', n);
        text = text.substring(0, n) + (((n - 1) === text.length) ? "" : text.substring(n + 1, text.length));
    }

    n = 0;

    if (text === "") {
        return {};
    }

    if ((text.indexOf("=", 0) === -1) || (text.indexOf("X", 0) === -1)) {
        return {
            line1: "Не верный формат уровнения данная версия программы поддерживает только квадратные и линейные уровнения без '*', '/', '(', ')'"
        };
    }

    try {
        while ((text.indexOf('-', n) !== -1) || (text.indexOf('+', n) !== -1) || (text.indexOf('=', n) !== -1)) {

            n2 = nearestPosition(text.indexOf('+', n), text.indexOf('-', n));           //поиск открывающего + или -
            n2 = (n === 0) ? 0 : n2;                                                    //корректировка при первом проходе
            n = nearestPosition(text.indexOf("=", n), n2);                              //поиск открывающего +- или =
            n = ((text.substring(n, n + 1) === "-") || (n === 0)) ? n : n + 1;          //корректировка на - или начало строки

            n2 = nearestPosition(text.indexOf("+", n + 1), text.indexOf("-", n + 1));   //поиск замыкающего + или -
            n2 = nearestPosition(n2, text.indexOf("=", n + 1));                         //поиск замыкающего +- или =
            n2 = (n2 === -1) ? text.length : n2;                                        //корректировка на конец строки

            if (text.substring(n2 - 1, n2) === "X") {
                b = addNumber(b, text, n, n2, 1);
            }
            else {
                if (text.substring(/*корректировка на промежутки меньше 3*/(n2 > 2) ? n2 - 3 : 0, n2) === "X^2") {
                    a = addNumber(a, text, n, n2, 3);
                }
                else {
                    c = addNumber(c, text, n, n2, 0);
                }
            }

            n = ((text.substring(n, n + 1) === "-") || (n === 0)) ? n + 1 : n;          //следующий шаг
        }
    }
    catch (e) {
        return {
            line1: "Не верный формат уровнения данная версия программы поддерживает только квадратные и линейные уровнения без '*', '/', '(', ')'"
        };
    }

    if ((a !== 0) && (b !== 0) && (c !== 0)) {
        let line1 = `${a}X^2${viewNumber(b)}X${viewNumber(c)}=0`;
        let line2 = `D=${b*b}-4*${a}*${c}=${b*b-4*a*c}`;

        if ((b*b-4*a*c) > 0) {
            return {
                line1,
                line2,
                ...standardSqrEquation(a, b, c, settings)};
        }

        if ((b*b-4*a*c) === 0) {
            return {
                line1,
                line2,
                ...des0SqrEquation(a, b, c, settings)};
        }

        return {
            line1,
            line2,
            line3: "D<0 X=НЕТ КОРНЕЙ",
            lineAnswer: "X=НЕТ КОРНЕЙ;"
        };
    }

    if ((a !== 0) && (b !== 0) && (c === 0)) {
        return {
            line1: `${a}X^2${viewNumber(b)}X=0`,
            line2: `X(${a}X${viewNumber(b)})=0`,
            line3: `X=0 или ${a}X${viewNumber(b)}=0`,
            line4: `${a}X=${-1*b}`,
            line5: `X=${fractionText(-1*b, a, settings)}`,
            lineAnswer: `X=0; X=${fractionText(-1*b, a, settings)};`
        };
    }

    if ((a !== 0) && (b === 0) && (c !== 0)) {
        return onlySqrEquation(a, b, c, settings);
    }

    if ((a === 0) && (b !== 0) && (c !== 0)) {
        return {
            line1: `${b}X=${-1*c}`,
            line2: `X=${fractionText(-1*c, b, settings)}`,
            lineAnswer: `X=${fractionText(-1*c, b, settings)};`
        };
    }

    if ((a !== 0) && (b === 0) && (c === 0)) {
        return {
            line1: `${a}X^2=0`,
            line2: 'X^2=0',
            line3: 'X=0',
            lineAnswer: 'X=0;'
        };
    }

    if ((a === 0) && (b !== 0) && (c === 0)) {
        return {
            line1: `${b}X=0`,
            line2: 'X=0',
            lineAnswer: 'X=0'
        };
    }

    if ((a === 0) && (b === 0) && (c !== 0)) {
        return {
            line1: `${c/2}=${c/-2}`,
            line2: 'X=НЕТ КОРНЕЙ',
            lineAnswer: 'X=НЕТ КОРНЕЙ;'
        };
    }

    return {
        line1: '0X=0',
        line2: 'X=R',
        lineAnswer: 'X=R;'
    };
};

export default calcEquation;