// Data una lista della spesa,
// Stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while.

// Data una lista della spesa
const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

// Creo la variabile per selezionare l'elemento nell'html
const listItem = document.querySelector('#list-item');

// Dichiaro la variabile i
let i = 0;

// Apro il ciclo while definendo la condizione
while(i<list.length) {
    
    console.log(list[i]);
    // Creo la variabile per stampare in html ogni elemento dell'array
    const printItem = `<li>${list[i]}</li>`;
    listItem.innerHTML += printItem;
    // Fisso la condizione per non far entrare nel loop il ciclo
    i++
}