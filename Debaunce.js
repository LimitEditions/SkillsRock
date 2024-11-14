function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer); // Сбрасываем предыдущий таймер
        timer = setTimeout(() => {
            func.apply(this, args); // Вызываем функцию с заданными аргументами и контекстом
        }, delay);
    };
}

// Пример использования
const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
}, 2000);

debouncedFunction();
debouncedFunction(); // Этот вызов сбросит таймер и предотвратит мгновенный вызов функции.