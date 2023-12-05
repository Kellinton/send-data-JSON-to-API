const objetos = [// array de objetos 
    {
        nome: 'Ace',
        idade: 19,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'Empresa X'
        },
        hobbies: ['Videogames', 'Basquete', 'Ler livros', 'Programar, Skate']
    },
    {
        nome: 'Luffy',
        idade: 18,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: ['Videogames', 'Skate']
    }

]


// JSON

// Converter objeto para JSON

const jsonDados = JSON.stringify(objetos);

console.log(jsonDados);
console.log(typeof jsonDados);

// Comverter JSON para objeto

const objDados = JSON.parse(jsonDados);

console.log(objDados);
console.log(typeof objDados);

objDados.map((pessoa) => {
    console.log(pessoa.nome)
})