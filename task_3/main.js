// let students = ["Андрей", "Иван", "стас"];
// students[50] = "Нидекс 50"
// console.log(students);

// let college = [["Андрей", "Иван", "стас"],[105, 111, 304]];
// college[1][1] = 112;
// let kab = college[1][1];
// console.log(college);

// let number = [1, 2, 3, 4, 5, 6, 7];

// const count_lenght = 5;

// if (number.length === count_lenght)
// {
//     console.log("ok");
// }
// else if (number.length < count_lenght)
// {
//     let result = count_lenght - number.length;
//     console.log(`Длинна вашего массива: ${number.length}. Длинну массива нужно увеличить до ${count_lenght}. Прибавьте ${result} элементов в массив.`);
// }
// else if (number.length > count_lenght)
// {
//     let result = number.length - count_lenght;
//     console.log(`Длинна вашего массива: ${number.length}. Длинну массива нужно уменьшить до ${count_lenght}. Отнимите ${result} элементов от массива.`);
// }

// let array = ["Tom", "Bob", 3, 4];
// console.log(array);

// let person = {
//     name: "Tom",
//     age: 18,
//     hobbies: ["Кушать", "Спать", "Просмотр кино"],
//     contacts: {
//         phone: [88005553255, 88905553255],
//         email: ["tom@example.com", "tom2@example.com"],
//         social: "www.github.com"
//     }
// }

// console.log(`Имя - ${person["name"]}, возраст - ${person["age"]}.`);
// console.log(person["hobbies"][2]);
// console.log(person["contacts"]["email"][0]);

let college = [
    {name: "Tom", age:23, group:"ИС-2-1"},
    {name: "Bob", age:15, group:"ИС-2-1"},
    {name: "Stan", age:23, group:"ИС-2-1"},
    {name: "Hurry", age:17, group:"ИС-4-1"},
];

const studentIndex = 1;

let studentAge = college[studentIndex]["age"];
let studentName = college[studentIndex]["name"];

if (studentAge >= 18)
{
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`);
}
else if (studentAge < 18)
{
    console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`);
}