const pessoa = {
    nome: 'Carla',
    sobrenome: 'Souza',
    idade: '26',
    profissao: 'Dev Frontend'
}
console.log(pessoa)
// sem desestruct
// let nome = pessoa.nome
// let sobrenome = pessoa.sobrenome
// let idade = pessoa.idade
// let profissao = pessoa.profissao

// console.log(nome, sobrenome, idade, profissao)

// com desestruct
let {nome, sobrenome, idade, profissao} = pessoa

console.log(nome, sobrenome, idade, profissao)