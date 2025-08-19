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