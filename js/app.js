{//masala 01 bu forda qilingan
    const array = [2, 6, 3, 7]
    const arr = []
    for (let i = 0; i < array.length; i++) {
        arr[i] = array[i] ** 2
    }
    console.log(arr);
}
{//masala 01 bu whileda qilingan
    const array = [2, 6, 3, 7]
    const arr = []
    let i = 0
    while (i < array.length) {
        arr[i] = array[i] ** 2
        i++
    }
    console.log(arr);
}
{//masala 01 bu do whileda qilingan
    const array = [2, 6, 3, 7]
    const arr = []
    let i = 0
    do {
        arr[i] = array[i] ** 2
        i++
    } while (i < array.length)

    console.log(arr);
}

{//masala 02 bu forda qilingan
    const arr = [5, -3, 4, - 6]
    const array = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
    }
    console.log(array);

}
{//masala 02 bu while da qilingan
    const arr = [5, -3, 4, -6]
    const array = []
    let i = 0
    while (i < arr.length) {
        if (arr[i] < 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
        i++
    }
    console.log(array);

}
{//masala 02 bu do while da qilingan
    const arr = [5, -3, 4, -6]
    const array = []
    let i = 0
    do {
        if (arr[i] < 0) {
            array[i] = -arr[i];
        } else {
            array[i] = arr[i];
        }
        i++
    } while (i < arr.length)
    console.log(array);

}

{//masala 03 bu forda qilingan
    const ism = ["sarvar", "murod", "salim"]
    const yangi = []
    for (i = 0; i < ism.length; i++) {
        yangi[i] = ism[i] + "xon"
    }
    console.log(yangi);

}
{//masala 03 bu while da qilingan
    const ism = ["sarvar", "murod", "salim"]
    const yangi = []
    let i = 0
    while (i < ism.length) {
        yangi[i] = ism[i] + "xon"
        i++
    }
    console.log(yangi);
}
{//masala 03 bu while da qilingan
    const ism = ["sarvar", "murod", "salim"]
    const yangi = []
    let i = 0
    do {
        yangi[i] = ism[i] + "xon"
        i++
    } while (i < ism.length)
    console.log(yangi);

}

{ //masala 04 for da qilingan
    const shart = [true, false, true]
    const NEWshart = []
    for (i = 0; i < shart.length; i++) {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
    }
    console.log(NEWshart);

}
{ //masala 04 while da qilingan
    const shart = [true, false, true]
    const NEWshart = []
    let i = 0;
    while (i < shart.length) {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
        i++
    }
    console.log(NEWshart);

}
{ //masala 04 do while da qilingan
    const shart = [true, false, true]
    const NEWshart = []
    let i = 0;
    do {
        if (shart[i]) {
            NEWshart[i] = "Ha";
        } else {
            NEWshart[i] = "Yoq";
        }
        i++
    } while (i < shart.length)
    console.log(NEWshart);

}

