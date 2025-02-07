// Dados fornecidos
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
    'walk', 'car', 'van', 'car', 'truck'];

// 1. Filtra inventores nascidos de 1500 a 1599
function bornIn1500s(inventors) {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
}

// 2. Retorna array com os primeiros e últimos nomes dos inventores
function getNames(inventors) {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
}

// 3. Ordena os inventores pela data de nascimento do mais antigo para o mais novo
function sortByBirthYear(inventors) {
    return inventors.sort((a, b) => a.year - b.year);
}

// 4. Identifica por quantos anos todos os inventores estiveram vivos juntos
function totalYearsLived(inventors) {
    return inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
}

// 5. Ordena os inventores pelos anos vividos
function sortByYearsLived(inventors) {
    return inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
}

// 6. Remove as redundâncias da lista de dados
function removeDuplicates(data) {
    return [...new Set(data)];
}

// Exibindo os resultados na página
document.getElementById('bornIn1500s').textContent = JSON.stringify(bornIn1500s(inventors), null, 2);
document.getElementById('getNames').textContent = JSON.stringify(getNames(inventors), null, 2);
document.getElementById('sortByBirthYear').textContent = JSON.stringify(sortByBirthYear(inventors), null, 2);
document.getElementById('totalYearsLived').textContent = totalYearsLived(inventors);
document.getElementById('sortByYearsLived').textContent = JSON.stringify(sortByYearsLived(inventors), null, 2);
document.getElementById('removeDuplicates').textContent = JSON.stringify(removeDuplicates(data), null, 2);
