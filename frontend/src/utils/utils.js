export const hideCardNumber = (cardNumber) => {
    const numbers = cardNumber.split(` `);
    const maxIndex = numbers.length - 1;
    const newNumber = numbers.reduce((sum, item, index) => {
        item = index === maxIndex ? item : `****`;
        return sum + ` ` + item; 
    }, ``);
    return(newNumber);
};

export const extend = (firstObject, secondObject) => {
    return Object.assign({}, firstObject, secondObject);
};

export const copyArray = (array) => {
    return [...array];
};