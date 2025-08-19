//SNACK 1
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}

module.exports = {
    getInitials
}