//Оголоси функцію isEnoughCapacity, яка очікує два параметри:

//products — об’єкт, у якому ключі містять назви товарів, а значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
//containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.


//Функція обчислює загальну кількість товарів в об'єкті products і повертає true, якщо вона менша або дорівнює containerSize, і false — якщо ні.



//Встав код нижче після оголошення функції для перевірки. Залиш його для перевірки ментором.

function isEnoughCapacity(products, containerSize) {
  const values = Object.values(products);
  let total = 0;
  for (const value of values) {
    total += value;
  }
  return total <= containerSize ? true : false;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false


