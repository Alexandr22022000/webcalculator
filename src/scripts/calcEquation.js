let sqr, fraction, shortFraction;

function calcEquation (text, sqrSet, fractionSet, shortFractionSet) {
    sqr = sqrSet;
    fraction = fractionSet;
    shortFraction = shortFractionSet;

    let n = 0, n2, a = 0.0, b = 0.0, c = 0.0,
        line1 = "", line2 = "", line3 = "", line4 = "", line4Top = "", line4Bottom = "", line5 = "", line6 = "", line6Top = "", line6Bottom = "", lineAnswer = "";

    text = text.toUpperCase();

    while (text.indexOf(' ', n) !== -1) { //удаление пробелов
        n = text.indexOf(' ', n);
        text = text.substring(0, n) + (((n - 1) === text.length) ? "" : text.substring(n + 1, text.length));
    }

    n = 0;

    if (text === "") {   //остановка вычеслений если нет уровнения
        return {
            line1: "",
            line2: "",
            line3: "",
            line4: "",
            line4Top: "",
            line4Bottom: "",
            line5: "",
            line6: "",
            line6Top: "",
            line6Bottom: "",
            lineAnswer: ""
        };
    }

    if ((text.indexOf("=", 0) === -1) || (text.indexOf("X", 0) === -1)) {
        return {
            line1: "Не верный формат уровнения данная версия программы поддерживает только квадратные и линейные уровнения без '*', '/', '(', ')'",
            line2: "",
            line3: "",
            line4: "",
            line4Top: "",
            line4Bottom: "",
            line5: "",
            line6: "",
            line6Top: "",
            line6Bottom: "",
            lineAnswer: ""
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

        if ((a !== 0) && (b !== 0) && (c !== 0)) {                              //полное квадратное уровнение
            line1 = (a + "X^2" + ((b > 0) ? "+" : "") + b + "X" + ((c > 0) ? "+" : "") + c + "=0");             //упрошенный вид
            line2 = ("D=" + b*b + "-4*" + a + "*" + c + "=" + (b*b-4*a*c));                                     //дескреминант

            if ((b*b-4*a*c) > 0) {                                              //если D > 0
                let x1 = getX(a, b, c, true);
                let x2 = getX(a, b, c, false);

                line4Top = (-1*b + "-" + SqrtText(b*b-4*a*c));                                                  //верх первой дроби
                line4Bottom = (2*a + "");                                                                       //низ первой дроби

                let drobLength = "";
                for (let i = 0; i < line4Top.length; i = i + 1.45) {                                            //добовление подчеркиваний по длинне первой дроби
                    drobLength = drobLength + "—";
                }

                line4 = ("X=" + drobLength + "=" + x1);                                                         //первая дробь

                line6Top = (-1*b + "+" + SqrtText(b*b-4*a*c));                                                  //верх второй дроби
                line6Bottom = (2*a + "");                                                                       //низ второй дроби

                drobLength = "";
                for (let i = 0; i < line6Top.length; i = i + 1.45) {                                            //добовление подчеркиваний по длинне второй дроби
                    drobLength = drobLength + "—";
                }

                line6 = ("X=" + drobLength + "=" + x2);                                                         //вторая дробь

                let x1Big = ((((-1*b)-Math.sqrt(b*b-4*a*c))/(2*a)) > (((-1*b)+Math.sqrt(b*b-4*a*c))/(2*a)));    //какой Х больше

                lineAnswer = ("X=" + (x1Big ? x1 : x2) + "; X=" + (x1Big ? x2 : x1) + ";");                     //ответ
            }
            else {
                if ((b*b-4*a*c) === 0) {                                        //если D=0
                    line4Top = (-1 * b + "");                                                                   //верх дроби
                    line4Bottom = (2 * a + "");                                                                 //низ дроби

                    let drobLength = "";
                    for (let i = 0; i < line4Top.length; i = i + 1.45) {                                        //добовление подчеркиваний по длинне дроби
                        drobLength = drobLength + "—";
                    }

                    line4 = ("X=" + drobLength + "=" + (fractionText(-1 * b,2 * a)));                               //дробь

                    lineAnswer = ("X=" + fractionText(-1 * b, 2 * a) + ";");                                        //ответ
                }
                else {                                                          //если D<0
                    line3 = ("D<0 X=НЕТ КОРНЕЙ");
                    lineAnswer = ("X=НЕТ КОРНЕЙ;");
                }
            }
        }
        else {
            if ((a !== 0) && (b !== 0) && (c === 0)) {                          //если не полное квадратное уровнение с вынесением за скобку
                line1 = (a + "X^2" + ((b > 0) ? "+" : "") + b + "X=0");                                         //упрощеный вид
                line2 = ("X(" + a + "X" + ((b > 0) ? "+" : "") + b + ")=0");                                    //вынесение за скобку
                line3 = ("X=0  или  " + a + "X" + ((b > 0) ? "+" : "") + b + "=0");                             //разбитее на 2 уровнения
                line4 = (a + "X=" + -1*b);                                                                      //решение второго уровнения
                line5 = ("X=" + fractionText(-1*b, a));                                                             //ответ второго уровнения
                lineAnswer = ("X=0; X=" + fractionText(-1*b, a) + ";");                                             //ответ
            }
            else {
                if ((a !== 0) && (b === 0) && (c !== 0)) {                      //если не полное квадратное уровнение только с Х^2
                    line1 = (a + "X^2=" + -1*c);                                                                //упрощенный вид
                    line2 = ("X^2=" + fractionText(-1*c, a));                                                       //решение
                    if (((-1*c) / a) >= 0) {                                                                    //если X^2 >= 0
                        line3 = ("X=" + ((((c / a) === Math.round(c / a)) || !fraction) ?
                            SqrtText((-1*c) / a) :
                            "√" + fractionText(-1*c, a)));                                                          //ответ уровнения
                        lineAnswer = (line3 + ";");                                                             //ответ
                    }
                    else {                                                      // если X^2 < 0
                        line3 = ("X=НЕТ КОРНЕЙ");
                        lineAnswer = ("X=НЕТ КОРНЕЙ;");
                    }
                }
                else {
                    if ((a === 0) && (b !== 0) && (c !== 0)) {                  //если обычне линейное уровнение
                        line1 = (b + "X=" + -1*c);                                  //упрощенный вид
                        line2 = ("X=" + fractionText(-1*c, b));                         //решение
                        lineAnswer = ("X=" + fractionText(-1*c, b) + ";");              //ответ
                    }
                    else {
                        if ((a !== 0) && (b === 0) && (c === 0)) {              //если X^2=0
                            line1 = (a + "X^2=0");
                            line2 = ("X^2=0");
                            line3 = ("X=0");
                            lineAnswer = ("X=0;");
                        }
                        else {
                            if ((a === 0) && (b !== 0) && (c === 0)) {          //если X=0
                                line1 = (b + "X=0");
                                line2 = ("X=0");
                                lineAnswer = ("X=0;");
                            }
                            else {
                                if ((a === 0) && (b === 0) && (c !== 0)) {      //если -5=5
                                    line1 = (c/2 + "=" + c/-2);
                                    line2 = ("X=НЕТ КОРНЕЙ");
                                    lineAnswer = ("X=НЕТ КОРНЕЙ;");
                                }
                                else {                                          //если 0=0
                                    line1 = ("0X=0");
                                    line2 = ("X=R");
                                    lineAnswer = ("X=R;");
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    catch (e) {
        return {
            line1: "Не верный формат уровнения данная версия программы поддерживает только квадратные и линейные уровнения без '*', '/', '(', ')'",
            line2: "",
            line3: "",
            line4: "",
            line4Top: "",
            line4Bottom: "",
            line5: "",
            line6: "",
            line6Top: "",
            line6Bottom: "",
            lineAnswer: ""
        };
    }

    return {
        line1,
        line2,
        line3,
        line4,
        line4Top,
        line4Bottom,
        line5,
        line6,
        line6Top,
        line6Bottom,
        lineAnswer
    };
}

/**
 * @return {string}
 */
function fractionText (a, b) {                          //вывод сокращенных дробей
    if (((a / b) === Math.round(a / b)) || !fraction) {
        return (a / b) + "";                                //если все считается
    }

    if (shortFraction) {                                    //нужно ли сокращять?
        let c = Math.sqrt(a * a);
        let d = Math.sqrt(b * b);
        let i = 0;

        while (c !== d) {                                   //поиск НОД
            if (c > d) {
                c = c - d;
            }
            else {
                d = d - c;
            }

            i++; if (i > 1000000) { return a + "/" + b; }   //предахранитель
        }

        return (a / c) + "/" + (b / d);                     //вывод сокращенной дроби
    }

    return a + "/" + b;                                     //вывод не посчитанной дроби
}

/**
 * @return {string}
 */
function SqrtText (a) {             //вывод вынесенных корней
    if ((Math.round(Math.sqrt(a)) === Math.sqrt(a)) || sqr) {
        return Math.sqrt(a) + "";
    }
    return "√" + a;
}

function nearestPosition (pos1, pos2) {
    if (((pos1 < pos2) && (pos1 !== -1)) || (pos2 === -1)) {
        return pos1;
    }
    else {
        return pos2;
    }
}

function addNumber (number, text, n, n2, sizeX) {
    let addNumber;
    if (sizeX > 0) {
        if (n === (n2 - sizeX)) {
            addNumber = 1;
        }
        else {
            if (text.substring(n, n2 - sizeX) === "-") {
                addNumber = -1;
            }
            else {
                addNumber = parseFloat(text.substring(n, n2 - sizeX));
            }
        }
    }
    else {
        addNumber = parseFloat(text.substring(n, n2));
    }

    if (n > text.indexOf("=", 0)) {
        return number - addNumber;
    }
    else {
        return number + addNumber;
    }
}

function getX (a, b, c, one) {
    if ((Math.round(Math.sqrt(b*b-4*a*c)) === Math.sqrt(b*b-4*a*c)) || sqr) {
        if (one) {
            return fractionText((-1*b) - Math.sqrt(b*b-4*a*c), (2*a));
        }
        else {
            return fractionText((-1*b) + Math.sqrt(b*b-4*a*c), (2*a));
        }
    }
    else {
        if (one) {
            return (-1*b) + "-√" + (b*b-4*a*c) + "/" + (2*a);
        }
        else {
            return (-1*b) + "+√" + (b*b-4*a*c) + "/" + (2*a);
        }
    }
}

export default calcEquation;