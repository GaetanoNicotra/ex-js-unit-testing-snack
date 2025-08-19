// SNACK 1
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}


// SNACK 2
function createSlug(stringa) {
    return stringa.toLowerCase()
}









module.exports = {
    getInitials,
    createSlug
}