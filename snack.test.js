// SNACK 1
const { getInitials } = require("./snacks.js")

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Marco Rossi')).toBe('M' + 'R')
    expect(getInitials('gianmarco pippo')).toBe('G' + 'P')
})

