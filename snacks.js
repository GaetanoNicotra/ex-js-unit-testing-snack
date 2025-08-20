// SNACK 1
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}


// SNACK 2
function createSlug(stringa) {
    if (!stringa) {
        throw new Error('Titolo non valido')
    }
    return stringa.toLowerCase()
}


// SNACK 3
function average(array) {
    let sum = array.reduce((acc, n) => acc + n, 0);
    let media = (sum / (array.length));
    return media
}


// SNACK 4
function createSlug2(stringa, posts) {
    if (!stringa || stringa.trim() === '') {
        throw new Error('Titolo non valido');
    }

    let baseSlug = stringa.trim().split(' ').join('-');
    let slug = baseSlug;
    let counter = 1;

    if (posts) {
        const existingSlugs = posts.map(p => p.slug.split(' ').join('-'));

        while (existingSlugs.includes(slug)) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
    }

    return slug;
}


// SNACK 5
function isPalindrome(stringa) {
    const lettere = stringa.trim().split('');
    const lettereInverse = stringa.trim().split('').reverse();
    return lettere.join('') === lettereInverse.join('')
}


// SNACK 6
let posts = [
    { id: 1, title: 'Juventus', slug: 'Squadra Torinese di serie A' },
    { id: 2, title: 'Milan', slug: 'Squadra Milanese di serie A' },
    { id: 3, title: 'Roma', slug: 'Squadra Romana di serie A' }
]

// SNACK 7
function findPostById(posts, id) {
    if (typeof id !== 'number') {
        throw new Error('L\'ID deve essere un numero');
    }
    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error('L\'array non ha un formato corretto')
        }
    });
    return posts.find(p => p.id === id) || null;
}

// SNACK 8 (BONUS)
function addPost(posts, post) {

    const ids = posts.map(p => p.id)
    const slugs = posts.map(p => p.slug)
    if (ids.includes(post.id)) {
        throw new Error('id già esistente')
    }
    if (slugs.includes(post.slug)) {
        throw new Error('slug già esistente')
    }
    posts.push(post)
}

function removePost(posts, id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1)
}


module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    findPostById,
    addPost,
    removePost
}