// SNACK 1
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return nome.charAt(0) + cognome.charAt(0)
}

test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
    expect(getInitials('Marco Rossi')).toBe('M' + 'R')
})

