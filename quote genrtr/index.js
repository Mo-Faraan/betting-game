const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa"
    ];

const quote = document.getElementById("quote");
const usedq = new Set();

function genquote(){
    while (true){
        if (usedq.size >= quotes.length){
            usedq.clear();
        }
        const randomno = Math.floor(Math.random() * quotes.length);
        if (usedq.has(randomno)) continue;

        const randomq = quotes[randomno];
        quote.innerHTML = randomq;
        usedq.add(randomno);
        break;
    }

}