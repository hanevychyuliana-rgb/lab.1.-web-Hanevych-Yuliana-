function generateCompliment() {
    // масив із компліментами
    const compliments = [
        "Ти сьогодні виглядаєш просто неперевершено! ",
        "Твоя посмішка здатна осяяти весь світ! ",
        "У тебе неймовірне почуття стилю! ",
        "Ти дуже розумна та талановита людина! ",
        "Твоя енергія надихає оточуючих! ",
        "З тобою завжди дуже приємно спілкуватися! ",
        "Ти робиш цей світ кращим просто тим, що ти в ньому є! "
    ];

    // випадковий індекс 
    const randomIndex = Math.floor(Math.random() * compliments.length);

    // 3. випадкова фразу
    const randomCompliment = compliments[randomIndex];

    // 4. Виводимо результат 
    document.getElementById('complimentText').innerHTML = "<b>" + randomCompliment + "</b>";
}