// SNACK 1
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}


// SNACK 2
function createSlug(stringa) {
    return stringa.toLowerCase()
}


// SNACK 3
function average(array) {
    let sum = array.reduce((acc, n) => acc + n, 0);
    let media = (sum / (array.length));
    return media
}


// SNACK 4
function createSlug2(stringa) {
    return stringa.split(' ').join('-');
}






module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2
}