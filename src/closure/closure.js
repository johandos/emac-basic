const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: $${saveCoins}`)
}

moneyBox(5);
moneyBox(10);

const moneyBoxClosure = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money Box closure: $${saveCoins}`)
    }

    return countCoins;
}

let myMoneyBox = moneyBoxClosure()

myMoneyBox(5)
myMoneyBox(10)
myMoneyBox(6)
