// sem arrow function
function soma(x, y) {
    return x + y
}

const multiplicacao = function(x,y){
    return x * y
}

console.log(multiplicacao(5, 5))

// com arrow function
const dividir = (x, y) => {
    return x / y
}
console.log(dividir(5, 5))

const objeto = () => ({nome: 'Carla,', sobrenome: 'Souza'})
