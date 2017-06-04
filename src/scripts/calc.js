import BigDecimal from 'bigdecimal';

function calc (text) {
    let i = 0;
    while (text.indexOf(' ', i) !== -1) { //удаление пробелов
        i = text.indexOf(' ', i);
        text = text.substring(0, i) + (((i - 1) === text.length) ? "" : text.substring(i + 1, text.length));
    }

    try {
        i = text.indexOf("+");
        i = (i !== -1) ? i : text.indexOf("-");
        i = (i !== -1) ? i : text.indexOf("*");
        i = (i !== -1) ? i : text.indexOf("/");

        let a = text.substring(0, i), b = text.substring(i + 1, text.length), c;

        switch (text.substring(i, i + 1)) {
            case "+":
                c = a + b;
                break;

            case "-":
                c = a - b;
                break;

            case "*":
                c = a * b;
                break;

            case "/":
                c = a / b;
                break;

            default:
                c = "";
                break;
        }

        c = new BigDecimal.BigDecimal(c).setScale(500).toPlainString()  + "";

        i = c.length;

        while (((c.substring(i - 1, i) === "0") || (c.substring(i - 1, i) === ".")) && (i !== 0)) { //удаление нулей в конце
            if (c.substring(i - 1, i) === ".") {
                c = c.substring(0, i - 1);
                break;
            }
            c = c.substring(0, i - 1);
            i -= 1;
        }

        return {line1: c};
    }
    catch (e) {
        return {line1: "Не верные даннные"};
    }
}

export default calc;