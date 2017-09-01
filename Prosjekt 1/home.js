// Simply returns various contents from a json file
function getTicker(){
    let url = 'https://api.cryptonator.com/api/ticker/doge-usd';
    fetch(url)
    .then(x => x.json())
    .then((out) => {
        let ticker = out.ticker.base;
        let price = out.ticker.price;
        let change = out.ticker.change;
        let ticker_val = ticker + " $" + price + " - Change: " + change;
        console.log(ticker_val)
        let coin = document.getElementById("dogecoin");
        coin.textContent = ticker_val;
    })
    .catch(err => console.error(err));
}

// Flashes a coloured (comic sans) text on the screen for 700 ms
function show_quote(text){
    let wow = document.getElementsByClassName("wow")[0];
    wow.textContent = text;
    wow.style.display = "flex";
    wow.style.opacity = 1;
    wow.style.animation = "fadein 0.5s";
    let multiplier = Math.random() < 0.5? -1:1;
    let randomDeg = multiplier * Math.floor(Math.random() * 150).toString();
    wow.style.transform = "rotate("+randomDeg+"deg)";
    setTimeout(function(){
        wow.style.display = "none";
    }, 700);
}

// Read more button
function readMoar() {
    let btn = document.getElementsByClassName("readMoar")[0];
    let text = document.getElementsByClassName("moarText")[0];
    if (btn.textContent == "moar info plz?"){
        text.style.display = "flex";
        text.style.opacity = 1;
        text.style.animation = "fadein 0.5s";
        btn.textContent = "hide thx"
        show_quote("such information");
    }
    else {
        text.style.display = "none";
        btn.textContent = "moar info plz?";
    }
}

function toggleDoge(){
    let bigdoge = document.getElementById("bigdoge");
    let disp = bigdoge.style.display
    if (disp == "inline"){
        bigdoge.style.display = "none";
    }
    else {
        show_quote("much photogenic");
        bigdoge.style.display = "inline";

    }
}

var homecontent = document.getElementById("home_content");
var othercontent = document.getElementById("other_content");
function home(){
    show_quote("go home plz");
    othercontent.style.display = "none";
    homecontent.style.display = "inline";
    homecontent.style.opacity = 1;
    homecontent.style.animation = "fadein 0.5s";
}

function info(){
    show_quote("useless page");
    othercontent.style.display = "inline";
    homecontent.style.display = "none";
    othercontent.style.opacity = 1;
    othercontent.style.animation = "fadein 0.5s";
}

function locationHashChanged() {
    if (location.hash === "#home") {
        home();
    }
    else if (location.hash === "#info") {
        info();
    }
}

function startUp() {
    let doge = document.getElementById("doge_head");
    let footer = document.getElementsByClassName("footer")[0];
    let header = document.getElementsByClassName("header")[0];
    homecontent.style.opacity = 1;
    window.addEventListener("scroll", function() {
        doge.style.transform = "rotate("+window.pageYOffset+"deg)";
        header.style.opacity = 1 - window.pageYOffset/500;
        // doge.style.opacity = 1 - window.pageYOffset/500; // magic number, based on pixels
    });
    locationHashChanged();
    window.onhashchange = locationHashChanged;

    getTicker();
}

