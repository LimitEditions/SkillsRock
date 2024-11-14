function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Если obj не объект или массив, возвращаем его
    }

    // Создаем новый объект или массив в зависимости от типа obj
    const clone = Array.isArray(obj) ? [] : {};

    // Рекурсивно копируем все свойства объекта или элементы массива
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}

// Пример использования
const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const copy = deepClone(original);
copy.address.city = 'Los Angeles';

console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles