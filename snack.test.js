// SNACK 1
const { getInitials } = require("./snacks.js")

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Marco Rossi')).toBe('M' + 'R')
    expect(getInitials('gianmarco pippo')).toBe('G' + 'P')
})


// SNACK 2
const { createSlug } = require('./snacks.js')

test('La funzione createSlug restituisce una stringa in lowercase', () => {
    expect(createSlug('BUONGIORNO')).toBe('buongiorno')
})


// SNACK 3
const { average } = require('./snacks.js')

test('La funzione average calcola la media aritmetica di un array di numeri', () => {
    expect(average([1, 4, 6, 3])).toBe(3.5)
})

// SNACK 4
const { createSlug2 } = require('./snacks.js')

test('La funzione createSlug sostituisce gli spazi con -', () => {
    expect(createSlug2('Ciao a tutti benvenuti')).toBe('Ciao-a-tutti-benvenuti')
})


// SNACK 5
const { isPalindrome } = require('./snacks.js')

test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
    expect(isPalindrome('yamamay')).toBeTruthy()
})


// SNACK 6

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
    expect(() => createSlug('')).toThrow('Titolo non valido')
})


// SNACK 7
const { findPostById } = require('./snacks.js')

const posts = [
    { id: 1, title: 'Juventus', slug: 'Squadra Torinese di serie A' },
    { id: 2, title: 'Milan', slug: 'Squadra Milanese di serie A' },
    { id: 3, title: 'Roma', slug: 'Squadra Romana di serie A' }
]

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Juventus', slug: 'Squadra Torinese di serie A' })
    expect(() => findPostById(posts, "ciao")).toThrow('L\'ID deve essere un numero');
    expect(() => findPostById([2, 26], 1)).toThrow('L\'array non ha un formato corretto');

})