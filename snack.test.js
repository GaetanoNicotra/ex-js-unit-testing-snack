// SNACK PER LA MANIPOLAZIONE DI STRINGHE
describe('Manipolazione di stringhe', () => {

    // SNACK 1
    const { getInitials } = require("./snacks.js")

    test('La funzione getInitials restituisce le iniziali di un nome completo', () => {
        expect(getInitials('Marco Rossi')).toBe('M' + 'R')
        expect(getInitials('gianmarco pippo')).toBe('G' + 'P')
    });

    // SNACK 5
    const { isPalindrome } = require('./snacks.js')

    test('La funzione isPalindrome verifica se una stringa è un palindromo', () => {
        expect(isPalindrome('yamamay')).toBeTruthy()
    });
})

// ARRAY DI POSTS
let posts;

beforeEach(() => {
    posts = [
        { id: 1, title: 'Juventus', slug: 'Squadra Torinese di serie A' },
        { id: 2, title: 'Milan', slug: 'Squadra Milanese di serie A' },
        { id: 3, title: 'Roma', slug: 'Squadra Romana di serie A' }
    ]
});

// SNACK PER LA MANIPOLAZIONE DI ARRAY
describe('Manipolazione di array', () => {
    // SNACK 3
    const { average } = require('./snacks.js')

    test('La funzione average calcola la media aritmetica di un array di numeri', () => {
        expect(average([1, 4, 6, 3])).toBe(3.5)
    });

    // SNACK 7
    const { findPostById } = require('./snacks.js')



    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Juventus', slug: 'Squadra Torinese di serie A' })
        expect(() => findPostById(posts, "ciao")).toThrow('L\'ID deve essere un numero');
        expect(() => findPostById([2, 26], 1)).toThrow('L\'array non ha un formato corretto');

    })

    // SNACK 8 (BONUS)
    const { addPost } = require('./snacks.js')

    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più', () => {
        addPost(posts, { id: 4, title: 'Napoli', slug: 'Squadra Napoletana di serie A' })
        expect(posts).toHaveLength(4)
    })

    const { removePost } = require('./snacks.js')

    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno', () => {
        removePost(posts, 3)
        expect(posts).toHaveLength(2)
    })

    // SNACK 9 (BONUS)
    test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore', () => {
        expect(() => addPost(posts, { id: 3, title: 'Nuova', slug: 'Squadra di serie A' })).toThrow('id già esistente')
        expect(() => addPost(posts, { id: 6, title: 'Nuova 2', slug: 'Squadra Torinese di serie A' })).
            toThrow('slug già esistente')
    })
})


// SNACK PER LA GESTIONE DEGLI SLUG
describe('Manipolazione di slug', () => {
    // SNACK 2
    const { createSlug } = require('./snacks.js')

    test('La funzione createSlug restituisce una stringa in lowercase', () => {
        expect(createSlug('BUONGIORNO')).toBe('buongiorno')
    });

    // SNACK 4
    const { createSlug2 } = require('./snacks.js')

    test('La funzione createSlug sostituisce gli spazi con -', () => {
        expect(createSlug2('Ciao a tutti benvenuti')).toBe('Ciao-a-tutti-benvenuti')
    });

    // SNACK 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
        expect(() => createSlug('')).toThrow('Titolo non valido')
    });

    // SNACK 10 (BONUS)
    test('Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già', () => {
        expect(createSlug2("Squadra Romana di serie A", posts)).toBe("Squadra-Romana-di-serie-A-1")
    })
})
