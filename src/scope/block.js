const fruits = () => {
    if (true){
        var fruits1 = 'apple';
        let fruits2 = 'banana';
        const fruits3 = 'kiwi';
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);

    let x = 'let global 1';
    {
        let x = 'let global 2';
        console.log(x);
    }

    console.log(x);

    var y = 'var 1';
    {
        var y = 'var 2';
        console.log(y);
    }
    console.log(y);

    // closure erroneo
    const anotherFunction = () => {
        for (var i = 0; i <= 10; i++){
            setTimeout(() => {
                console.log(i);
            }, 1000)
        }
    }
    anotherFunction();
}

fruits();