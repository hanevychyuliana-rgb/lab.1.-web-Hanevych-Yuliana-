 let rates = {
        'km': 1000,
        'm': 1,
        'dm': 0.1, 
        'cm': 0.01,
        'mm': 0.001
    };
function run() {
    let value = parseFloat(document.getElementById('userInput').value);
    let from = document.getElementById('unitFrom').value;
    let to = document.getElementById('unitTo').value;
    let resultDisplay = document.getElementById('displayResult');

    // Перевірка, на число
    if (isNaN(value)) {
        resultDisplay.innerText = "результат: введіть число!";
        return;
    }

    let inMeters = value * rates[from];
    let result = inMeters / rates[to];

    // 4. Виводимо результат
    resultDisplay.innerHTML = "результат: <b>" + result + "</b> " + to;
}