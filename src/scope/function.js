//Function scope

function greetings(){
    let userName = 'Ana';

    console.log('Ana');
    if(userName === 'Ana')
        console.log(`Hello ${userName}!`);
}

greetings();//Ana
            // Hello Ana!
console.log(userName);//userName is not defined