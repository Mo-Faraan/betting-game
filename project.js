// 1. deposit some money
//2. dete no of lines
// 3. bet amout
// 4. spin slot machine
//5. check user won
//6. give user winning
//7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOLS_COUNT = {
    A:2,
    B:4,
    C:6,
    D:8
};

const SYMBOL_VALUES = {
    A:5,
    B:4,
    C:3,
    D:2
};


const spin = () => {
    const symbols = [];
    for (const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for (let i=0; i<count; i++ ){
            symbols.push(symbol);
        };
    };
    const reels = [];
    for (let i=0; i<COLUMNS; i++){
        reels.push([]);
        const reelsymbols = [...symbols];
        for (let j=0; j<ROWS; j++){
            const randomindex = Math.floor(Math.random() * reelsymbols.length);
            const selectedsymbol = reelsymbols[randomindex];
            reels[i].push(selectedsymbol);
            reelsymbols.splice(randomindex,1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i=0; i<ROWS; i++){
         rows.push([]);
         for (let j=0; j<COLUMNS; j++){
            rows[i].push(reels[j][i]);
         }
    }
    return rows;
}


const deposit = () => {
    while (true){
        const depositamount = prompt("Enter the deposit amount = ");
        const numberdeposit = parseFloat(depositamount);
        if (isNaN(numberdeposit) || numberdeposit<=0 ){
            console.log("Invalid deposit :(");
        }
        else {
            return numberdeposit;
        };
    };

};

const numberoflines = () => {
    while(true)
    {
        const nooflines = prompt("Enter no of lines = ");
        const numberlines = parseFloat(nooflines);
        if (isNaN(numberlines) || numberlines <= 0 || numberlines > 3){
            console.log("invalid lines :(");
        }
        else{
            return numberlines;
        };
    }
};

const getbet =(balance, lines) => {
    while(true)
        {
            const bet = prompt("Enter bet per line = ");
            const numberbet = parseFloat(bet);
            if (isNaN(numberbet) || numberbet <= 0 || numberbet > (balance/lines)) {
                console.log("invalid bet :(");
            }
            else{
                return numberbet;
            };
        }
};

const printrows = (rows) => {
    for (const row of rows){
        let rowstring = "";
        for (const [i,symbol] of row.entries()){
            rowstring += symbol;
            if (i != row.length - 1){
                rowstring += " | ";
            }
        }
        console.log(rowstring);
    }
};

const getwinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row=0; row<lines; row++){
        const symbols = rows[row];
        let allsame = true;

        for (const symbol of symbols){
            if(symbol != symbols[0]){
                allsame = false;
                break;
            }
        }

        if(allsame){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        } 
    }
    return winnings;
}

const game = () => {
    let balance = deposit();
    while (true)
    {
        console.log("You have balance : "+balance);
        const nooflines = numberoflines();
        const bet = getbet(balance, nooflines);
        balance -= bet * nooflines;
        const reels = spin();
        const rows = transpose(reels);
        printrows(rows);
        const winnings = getwinnings(rows,bet,nooflines);
        balance += winnings;
        console.log("you won "+winnings.toString());

        if(balance <= 0){
            console.log("You ran out of money");
            break;
        }

        const playagain = prompt("Do u want to play again (y/n) = ");
        if (playagain!="y") break;

    }
};

game();

