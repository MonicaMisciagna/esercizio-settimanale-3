/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let sum = 10 + 20;
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = (Math.floor(Math.random()*21))
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name:'Monica',
  surName:'Misciagna',
  age:27,
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age

console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills=['html','css','javascript']
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('bho')
console.log(me.skills)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()

console.log(me.skills)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice () {
 let rand= (Math.floor(Math.random()*7))
  return rand
}
let rand= dice();
console.log(rand)
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(x,y){
if (x > y) { 
  return x;
  
} else { return y;
  
}
}
let res= whoIsBigger(7,4);
console.log('il num maggiore è:'+ res)
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa) {
let stringhe= stringa.split(' ');
 return stringhe
}
let stringhe= splitMe('30 giorni a novembre')
console.log(stringhe)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa,booleano) {
  if (booleano==true) {
   return stringa.slice(1);
  } else {
  return stringa.slice(0, -1);
  }
}
let stringa= deleteOne('ciao', true)
console.log(stringa)
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
let soloLettere= stringa.replace(/\d/g,'');
return soloLettere;
}
let soloLettere= onlyLetters('ciao ho 7 cani')
console.log(soloLettere)

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
 
 if (email.includes("@") && email.includes(".it") || email.includes("@") && email.includes(".com")) {
    email = true;
      console.log(true)
    } else {
      email= false;
      console.log(false)
    }
    return
  }

let emailValida= isThisAnEmail('fssfsf')


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let today = new Date()
function whatDayIsIt(){
  var date = today.getDay()
  var name = [ "domenica","lunedi", "martedi", "mercoledi", "giovedi", "venerdi", "sabato",]
 return name[date]+' '+ date
}
let todayDate= whatDayIsIt()
console.log('Oggi è'+' '+ todayDate)

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n){
  let obj = {
    sum: 0,
    values: []   
  }
for(let i = 0; i < n; i++){
    let num = dice();
    obj.sum += num;
    obj.values.push(num);
  }
  return obj;
}

console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(day){
  let date = Date.parse(day);
  let gAttuale = new Date();
  let gg = gAttuale.getTime();
  let diff = Math.abs(gg - date);
 let giorni = Math.floor(diff / 1000 / 60 / 60 / 24); 
   return giorni;
}

let res9= howManyDays('1996-02-28');
console.log('sono trascorsi' + ' ' + res9+' '+'giorni dalla data inserita')
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  let date= new Date();
  let myCompl= new Date('1996-02-28');
  let isMyBirth = date.getDate() === myCompl.getDate() &&
                   date.getMonth() === myCompl.getMonth() &&
                  date.getFullYear() === myCompl.getFullYear();

  return isMyBirth;
}
let isMyBirth= isTodayMyBirthday()
console.log(isMyBirth)
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(obj, str){
delete obj[str];
return obj;
  }
  let res11= deleteProp(me,'name');
console.log(res11)
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(list){
  let newestYear = Number(list[0].Year);
  let newestTitle = list[0].Title;
 list.forEach(element => {
    if(Number(element.Year) > newestYear){
      newestYear = Number(element.Year);
      newestTitle = element.Title;
   }
  });
  return newestTitle;
}
let newMovieEver= newestMovie(movies)
console.log(newMovieEver)
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(arr) {
 return arr.length;
}
let res13 = countMovies(movies);
console.log(res13);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(arr) {
 let years = arr.map(movie=> {
    return movie.Year;
  });
return parseInt(years);
}
let years= onlyTheYears(movies)
console.log(years)

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(arr) {
let lastfilm = arr.filter((movie)=> {
    return movie.Year >= 1000 && movie.Year <= 1999;
  });
return lastfilm;
}
let lastfilm = onlyInLastMillennium(movies);
console.log(lastfilm);
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(){
  let year = 0;
  let sum = 0;
  movies.forEach((film)=>{
    year = Number(film.Year);
    sum +=year
  })
  return sum
}
console.log(sumAllTheYears())
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(movie, string) {
  
  let abbina = movies.filter((movie)=> {return movie.Title.includes(string);
    });
  
    return abbina;
  }
  let abbina= searchByTitle(movies,'Lord')
  console.log(abbina)
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies, str) {
 let result= {
 yesFilm:[],
 noFilm:[],
} 
for (let i = 0; i < movies.length; i++) {
   let movie = movies[i];
   if (movie.Title.includes(str)) {
        result.yesFilm.push(movie.Title);
      } else {
        result.noFilm.push(movie.Title);
      }
    };
    return result;
 }
let result= searchAndDivide(movies,'Lord')
console.log(result)
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(index) {
  if (index>= 0 && index < movies.length) {
    let arr19 = movies.slice(0, index).concat(movies.slice(index + 1));

    return arr19;
  } 
}
let arr19= removeIndex(5)
console.log(arr19)


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

let selezionare= document.querySelector('#container')
console.log(selezionare)


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
let tabella= document.querySelectorAll('td')
console.log(tabella)
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function ciclo(arr) {
  for (let i = 0; i < arr.length; i++) {
   console.log(arr[i].innerText)
    
  }
}
ciclo(tabella);
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function getColor() {
let linker=document.querySelectorAll('a');
for (var i = 0; i < linker.length; i++) {
  linker[i].style.backgroundColor = "red";
}
}
getColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function agg() {
  let nodopar= document.querySelector('#myList');
 let eleList= document.createElement('li');
 eleList.innerText='tanti gattini';
nodopar.appendChild(eleList)
}
agg();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuota() {
 let myList= document.querySelector('#myList')
 myList.innerHTML=''
}
svuota();
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass() {
  let tr = document.querySelectorAll('tr')
  for (let i = 0; i < tr.length; i++) {
    tr[i].classList='test'
    
  }
}
 addClass();
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(n) {
  for (let i = 1; i <= n; i++) {
    let albero = '';
    for (let y = 1; y <= i; y++) {
      albero += '*';
    }
    console.log(albero);
  }
}
halfTree(6)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function tree2(num){
  for(let i = 0; i <= num; i++){
    let albero = ""
    for(let x = 0; x < num - i; x++){
      albero += " "
    }
    for(let y = 0; y<i; y++){
      albero += " *"
    }
    console.log(albero)
  }
}
tree2(6)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let prime= isItPrime(145)
console.log(prime)