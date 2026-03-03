function countChars() {
    // 1. Отримуємо текст 
    let text = document.getElementById('textInput').value;
    
    // 2. Рахуємо довжину
    let count = text.length;
    
    // 3. Виводимо результат
    let resultDisplay = document.getElementById('charResult');
    resultDisplay.innerHTML = "символів: <b>" + count + "</b>";
}