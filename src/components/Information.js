import React from 'react';
import '../style/Information.css';

const Information = () => (
    <div className="information">
        <h1 className="information__h">Решение уравнений:</h1>
        <p className="information__p">Это онлайн калькулятор квадратных и линейных уравнений. Данное приложение дает не только ответ, но и решение. В строку ввода можно вводить уравнения в виде любого многочлена не содержавшим скобки и умножения, кроме умножения на X.</p>
        <p className="information__p">Примеры:</p>
        <p className="information__p">4X^2+6X-12=0</p>
        <p className="information__p">X-36=X^2+28X</p>
        <p className="information__p">-X^2=-55</p>
        <h1 className="information__h">Калькулятор:</h1>
        <p className="information__p">Этот онлайн калькулятор вычисляет числа неограниченной длинны, выводя их в полном виде, не представляя в виде степени, за исключением иррациональных дробей, которые округляются до 1000 чисел после запятой. В строку ввода вводится два числа разделенные знаком действия (+, -, / или *).</p>
    </div>
);

export default Information;