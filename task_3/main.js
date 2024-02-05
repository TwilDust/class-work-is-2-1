// let students = ["Андрей", "Иван", "стас"];
// students[50] = "Нидекс 50"
// console.log(students);

// let college = [["Андрей", "Иван", "стас"],[105, 111, 304]];
// college[1][1] = 112;
// let kab = college[1][1];
// console.log(college);

let number = [1, 2, 3, 4, 5, 6, 7];

const count_lenght = 5;

if (number.length === count_lenght)
{
    console.log("ok");
}
else if (number.length < count_lenght)
{
    let result = count_lenght - number.length;
    console.log(`Длинна вашего массива: ${number.length}. Длинну массива нужно увеличить до ${count_lenght}. Прибавьте ${result} элементов в массив.`);
}
else if (number.length > count_lenght)
{
    let result = number.length - count_lenght;
    console.log(`Длинна вашего массива: ${number.length}. Длинну массива нужно уменьшить до ${count_lenght}. Отнимите ${result} элементов от массива.`);
}