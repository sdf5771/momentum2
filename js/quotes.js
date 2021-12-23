const quotes = [
{
    quotes: "Respect yourself and others will respect you.",
    author: "Confucius",
},
{
    quotes: "Genius is nothing but a great capacity for patience.",
    author: "Buffon",
},
{
    quotes: "The less their ability, the more their conceit.",
    author: "Ahad HaAm",
},
{
    quotes: "The most courageous act is still to think for yourself. Aloud.",
    author: "Gabriel Coco Chanel",
},
{
    quotes: "There is no great genius without some touch of madness.",
    author: "Seneca",
},
{
    quotes: "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
},
{
    quotes: "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza",
},
{
    quotes: "It's only when the tide goes out that you discover who's been swimming naked.",
    author: "Warren Buffett",
},
{
    quotes: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
},
{
    quotes: "He not busy being born is busy dying.",
    author: "Bob Dylan",
},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quotes;
author.innerText = todaysQuotes.author;