function openTab(evt, tabName) {
    // Получаем все элементы с классом "tab-content" и скрываем их
    var tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(function(content) {
        content.classList.remove("active");
    });

    // Получаем все элементы с классом "tab-button" и убираем класс "active"
    var tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Показываем текущую вкладку и добавляем "active" к кнопке, которая открыла вкладку
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

/* звук при нажатии картинки */

function playSound(soundId) {
    var sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    } else {
        console.error('Элемент с id "' + soundId + '" не найден');
    }
}
