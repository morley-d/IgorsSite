const userSurname = document.querySelector('[name="surname"]');     //элемент input с фамилией
const userName = document.querySelector('[name="name"]');           //элемент input с именем
const result = document.querySelector('[name="result"]');
const goodsElements = document.querySelectorAll('[name="goods"]');  //элементы checkbox с товарами goods
const countElements = document.querySelectorAll('[type="number"]'); //элементы input с кол-вом
const btn = document.querySelector(".btn");         //элемент button
const resultElem = document.querySelector(".sum");  //элемент span для итоговой суммы
let total = 0; //переменная для хранения итоговой суммы
resultElem.textContent = "0 р.";
//-------------------------------------------------------------------------------------------------------
const indexGoods = {
    "checkbox1": "expresso",
    "checkbox2": "americano",
    "checkbox3": "latte",
    "checkbox4": "capuchino",
    "checkbox5": "chocolate_muffin",
    "checkbox6": "blueberry_muffin",
    "checkbox7": "apple_tart"
}

function getKey(val) {
    for (let key in indexGoods) {
        if (indexGoods[key] === val) return key;
    }
    return "";
}
//-------------------------------------------------------------------------------------------------------
//этот объект нужен для хранения количества каждого товара
//либо, вы можете создать переменные/массив для хранения значений 
//-------------------------------------------------------------------------------------------------------
const countGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}
//-------------------------------------------------------------------------------------------------------
//этот объект нужен для хранения цены каждого товара
//т.е. если товар выбран, записываем его цену, если не выбран - записываем 0
//либо, вы можете создать переменные/массив для хранения значений
//-------------------------------------------------------------------------------------------------------
const choicePriceGoods = { 
    "expresso": 0,
    "americano": 0,
    "latte": 0,
    "capuchino": 0,
    "chocolate_muffin": 0,
    "blueberry_muffin": 0,
    "apple_tart": 0
}
//-------------------------------------------------------------------------------------------------------
//создайте функцию, которая будет считать итоговую сумму, подумайте над формулой.
//-------------------------------------------------------------------------------------------------------
function total_sum() {
    total = 0; 
    for (let key in choicePriceGoods) {
        total += choicePriceGoods[key] * countGoods[key];
    }
    resultElem.textContent = `${total} р.`;
    result.value = total;
}
//-------------------------------------------------------------------------------------------------------
//для каждого элемента input с кол-вом нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значения на значение в input
//-------------------------------------------------------------------------------------------------------
countElements.forEach(elem => {
    elem.addEventListener("change", function () {
        changed_product = document.getElementById(getKey(elem.id)); 
        if (changed_product.checked) {
            let q = Number.parseInt(elem.value);
            if (q < 0) q = 1;   
            countGoods[elem.id] = q;
            elem.value = `${q}`;
        } 
        else {
            let q = Number.parseInt(elem.value);
            if (q < 0) q = 0;   
            countGoods[elem.id] = q;
            elem.value = `${q}`;    
        }
        total_sum();        
    });  
});
//-------------------------------------------------------------------------------------------------------
//для каждого элемента checkbox нужно повесить событие на изменение change, 
//по которому в объекте должны меняться значение на цену, если чекбокс выбран
//или обратно на 0, если чекбокс не выбран
//-------------------------------------------------------------------------------------------------------
goodsElements.forEach(product => {
    product.addEventListener("change", function () {        
        if (product.checked) {
            choicePriceGoods[indexGoods[product.id]] = Number.parseInt(product.value);
            let q = Number.parseInt(document.getElementById(indexGoods[product.id]).value);
            if (q === 0) {
                countGoods[indexGoods[product.id]] = 1;
                document.getElementById(indexGoods[product.id]).value = "1";
            }
            else
                countGoods[indexGoods[product.id]] = q;
        } else {
            choicePriceGoods[indexGoods[product.id]] = 0;
            countGoods[indexGoods[product.id]] = 0;
            document.getElementById(indexGoods[product.id]).value = "0";
        }
        total_sum();
    });
});
//-------------------------------------------------------------------------------------------------------
//по клику на кнопку должен появиться alert с текстом
//-------------------------------------------------------------------------------------------------------
btn.addEventListener("click", function () {

    alert(`Заказчик: ${userSurname.value} ${userName.value}\nИтого: ${total} р.`);
});