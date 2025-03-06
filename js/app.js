{//masala 01
    let son = [1, 2, 3, 4, 5, 6]
    for (i = 0; i < son.length; i++) {
        if (son[i] % 2 === 1) {

            console.log(son[i] ** 2);
        }
    }
}
{//masala 02
    const nuber = [5, -6, 3, 4, -9]
    for (i = 0; i < nuber.length; i++) {
        if (nuber[i] < 0) {
            console.log(nuber[i]);

        }
    }
}
{//masala 03
    let a = 0
    const onliklar = []
    for (i = 10; i <= 100; i += 10, a++) {
        onliklar[a] = i

        //console.log(onliklar[a]);
        // agar arraydan tashqariga chiqarmoqchi bolsak 21 qatordagi codeni qolaymiz
    }
    console.log(onliklar);
    //mana ustoz ikkita yoli ham bor qaysini qilishni bilamay ikkalasini ham qildim
}
{//masala 04
    let array = [12, 45, 78, 23, 56, 89, 67];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    console.log(max)

}
{ //masala 05
    const fruits = ["apple", "banana", "cherry", "date"];
    fruits.reverse();

    console.log(fruits);

}
{ //masala 06
    const number = [3, 8, 12, 5, 9]
    const k = 12

    for (let i = 0; i < number.length; i++) {
        if (number[i] === k) {
            console.log(`${k} massivda mavjud`)
        }
    }


}
{//masala 07
    let son = [2, 4, 6, 8, 10]
    for (i = 0; i < son.length; i++) {
        console.log(son[i] ** 2);

    }

}
{ //masala 08
    const car = {
        brend: "tesla",
        model: "x modele"
    }
    car.year = 2023;
    console.log(car);

}
{// masala 09
    const student = {
        name: "husan",
        courses: ["Javascript", "React", "Node.js"]
    };
    for (i = 0; i < student.courses.length; i++) {
        console.log(student.courses[i]);
    }
}
{ //masala 10
    const user = {
        username: "coder123",
        password: "12345",
        email: "coder@example.com"
    };
    delete user.password
    console.log(user);


}
{ //masala 11
    let array1 = [1, 2, 3, 4, 5]
    let array2 = [4, 5, 6, 7, 8]
    let set1 = new Set(arr1)
    let allElements = []
    for (let i = 0; i < array2.length; i++) {
        if (set1.has(array2[i])) {
            allElements.push(arr2[i])
        }
    }

    console.log(allElements)

}
