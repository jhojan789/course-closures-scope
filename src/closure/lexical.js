const num1 = 0;

function externalFunction(){
    const num2 = 1;

    console.log(num1);

    function internal1(){
        const num3 = 2;
        console.log(num1,num2);
        function internal2(){
            console.log(num1,num2,num3);
        }
        return internal2();
    }
    return internal1();
}

externalFunction();