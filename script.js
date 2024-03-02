//Number
/**
 * É a construtora de numeros, todo número possui as propriedades
 * e métodos do prototype de Number. Number também possui
 * alguns métodos.
*/
const ano = 2023;
const preco = new Number(99);

/**Number.isNaN() e Number.isInteger()
 * isNaN() é um método de Number, ou seja, não faz parto do 
 * protótipo. isInteger( ) verifica se é integral.
 */
Number.isNaN(NaN);  //TRUE
Number.isNaN(4 + 5); // FALSE

Number.isInteger(20); //true
Number.isInteger(23.6)//false

//Number.parseFloat() e Number.parseInt()
/**parseFloat() serve para retornarmos um número a partir
 * de uma string. A string deve começar com um número. 
 * parseInt()  recebe tabém um segundo parâmetro que é 
 * o Radix, 10 é para o decimal.
 */
parseFloat('99.50'); //Mesma função sem o Number
Number.parseFloat('99.50'); //99.5
Number.parseFloat('100 Reais'); //100
Number.parseFloat('RS Reais'); //NaN

parseInt('99.50', 10); //99
parseInt(5.43434335555, 10) //5
Number.parseInt('100 Reais', 10); //100

//n.toFixed(decimais)
/**Arredonda o número com base no total de casas decimais */
const valor = 2.99;
valor.toFixed(); //3

const carro = 1000.455;
carro.toFixed(2); //1000.46

const preco2 = 1499.49;
preco2.toFixed();
//console.log(+preco2.toFixed());

//n.toString(radix);
/**Transforma o número em uma string com
 * base no Radix. Use o 10 para sistema decimal
 */
const preco3 = 2.99;
preco3.toString(10); //'2.99'

//n.toLocaleString(lang, options);
//Formata o número de acordo com a língua e opções passadas

const preco4 = 59.49;
preco4.toLocaleString('es-US', { style: 'currency', currency: 'USD' })
preco4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// console.log(preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
// )
// console.log(preco4.toLocaleString('es-US', {style: 'currency', currency: 'USD'})
// )

//Math
/**É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns. */
//console.log(Math.PI); //3.14159
//console.log(Math.E) //2.718
//console.log(Math.LN10); //2.303 

//Math.abs(), Math.ceil(), Math.floor(), Math.round, Math.ramdom()
/**abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.
 * ceil() arredonda para cima, retornando sempre uma integral e floor para baixo
 * round() arredonda para o número integral mais próximo. */

Math.abs(-5.5)// 5.5 retorna sempre o valor absoluto(positivo)
Math.ceil(4.8334); //5 Retorna sempre arredondando para cima
Math.ceil(4.3); //5 Retorna sempre arredondando para cima
Math.floor(4.8334); //4 Retorna sempre arredondando para baixo
Math.floor(4.3); //4 Retorna sempre arredondando para baixo
Math.round(4.8334); //5 se for acima do meio arredonda para cima
Math.round(4.3); //4 se for abaixo do meio arredonda para baixo

// Math.max(), Math.min(), Math.random()
/**max()retorna o mior numero de uma lista de argumentos,
 * min() o numero menor e ramdom() um número aleatório entre 0 e 1. 
 */

Math.max(5, 3, 10, 40, 2); // 42
Math.min(5, 3, 10, 40, 2); // 2

Math.random() // 0.xxx
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500

//Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Math.floor(Math.random() * (max - min + 1)) + min;

//Exercícios
//Retorne um número aleatório entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050)) + 1050;
//console.log(aleatorio) 

//Retorne o maior numero da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNumeros)
const numeroMinimo = Math.min(...arrayNumeros)
//console.log(numeroMinimo)

//Crie uma função para limpar os preços 
//e retorne os números com centavos arredondados
//depois retorne a soma total
const listaPreco = ['R$ 59,99', 'R$ 100,222', 'R$ 230', 'r$ 200'];
function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;

    let soma = 0;
    listaPreco.forEach((preco) => {
        soma += limparPreco[1];
        //console.log(preco)
    })

}

limparPreco(listaPreco[1])

//Objeto Array 
/**Arrays armazenam uma coleção de elementos. Estes podem ser 
 * strings, arrays, boolean, number, functions, objects e mais
 */
const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 200 }],
function andar(nome) { console.log(nome) }];

const carros = new Array('Ford', ' Fiat', 'Honda');


//console.log(carros)

//Array.from();
/**Array.from() é um método utilizado para transformar array-like 
 * objects, em uma array.
 */

let li = document.querySelectorAll('li'); //NodeList
li = Array.from(li); // Array
const carros1 = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
}

const carrosArray = Array.from(1);

//Array.isArray();
/**Verifica se o valor passado é uma array e retorna um valor booleano */

let li1 = document.querySelectorAll('li'); //NodeList
Array.isArray(li1); // false

//li = Array.from(li); // Array
Array.isArray(li); //true
//console.log(Array.isArray(li1))

//Array.of(), Array(), e new Array()
/**Verifica se o valor passado é uma array e retorna um valor
 * booleano. A palavra chave new não é nessessaria para utilizar 
 * o construtor Array.
 */
Array.of(10); //[10]
Array.of(1, 2, 3); // [1, 2, 3]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1, 2, 3, 4); // [1, 2, 3, 4]

const frutas = ['Banana', 'Pêra', ['Uva roxa', 'Uva verde']];
//console.log(frutas[2][0].length)

//Métodos modificadores[].sort();
/**Os próximos métodos que vamos falar sobre, são métodos modificadores(mutador methods)
 * Além de retornarem um valor, eles modificam a array original. [].sort() organiza
 * pelo unicode.
 */

const instrumentos1 = ['guitarra', 'Baixo', 'Violão'];
instrumentos1.sort();
//console.log(instrumentos1); // ['baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
//console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

//[].unshift()  e [].push()
/** [].unshift() adiciona elementos ao início da array
 * e retorna o length da mesma. [].push() adiciona elementos ao final da
 * array e retorna o length da mesma.
*/

const carros2 = ['Ford', 'Fiat', 'Vw'];
carros2.unshift('Honda', 'Kia'); // length = 5
carros; // retorn ['Honda', 'Kia','Ford', 'Fiat', 'Vw' ]
//console.log(carros2)

carros2.push('Ferrari');
//console.log(carros2)

//[].shift()  e [].pop()
/**[].shift() remover o primeio elemento da array e retorna o mesmo.
 * [].pop() remove o último elemento da array e retorna o mesmo.
 */
const carros3 = ['Ford', 'Fiat', 'Vw', 'Honda'];
const primeiroCarro = carros3.shift(); // Ford
const ultimoCarro = carros3.pop(); //Honda'
//console.log(carros3)

//[].reverse()
/**[].reverse() inverte os itens da array e retorna a nova array. */
carros3.reverse()
//console.log(carros3)

//[].splice()
/**[].splice(index, remover, item1, item2, ....) 
 * adiciona valores na array a partir do index. Remove a quantidade de itens 
 * que for passada no segundo parâmetro(retorna esses itens).
*/
const carros4 = ['Ford', 'Fiat', 'Vw', 'Honda'];
carros4.splice(1, 0, 'Kia', 'Mustang'); // []


carros4.splice(3, 2, 'Ferrari'); // ['Fiat', 'Vw']
carros4; //  ['Ford', 'Kia', 'Mustang', 'Fiat', 'Vw', 'Honda']
//console.log(carros4)

//[].copyWithin()
/**[].copyWithin(alvo, inicio, final) a partir do alvo ele irá 
 * copiar a array començando do início até o final e vai preencher
 * a mesma com essa cópia. Caso omita os valores de início e final. 
 * ele irá utilizar como início o 0 e final o valor total da array.
 */
['item1', 'item2', 'item3', 'item4'].copyWithin(2, 0, 3);
// ['item1', 'item2', 'item1', 'item2']

['item1', 'item2', 'item3', 'item4'].copyWithin(-1);
// item1', 'item2', 'item3', 'item1']


//[].fill()
/**
 * [].fill(valor, inicio, final) preenche a array com o valor, 
 * do inicio até o fim.
 *  */
['item1', 'item2', 'item3', 'item4'].fill('banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

['item1', 'item2', 'item3', 'item4'].fill('Bamama', 2)
// ['item1', 'item2', 'Banana', 'Banana']

//['item1', 'item2', 'item3', 'item4'].fill('Bamama', 1, 3)
// ['item1', 'item2', 'Banana', 'item4']

//Métodos de acesso [].concat();
/**Os métodos abaixo não modificam a array original, apenas
 * retornam uma array modificada. [].concat() irá concatenar a array
 * com o valor passado.
 */
const transport1 = ['Barco', 'Avião'];
const transport2 = ['Carro', 'Moto'];
const transportes = transport1.concat(transport2);
// ['Barco', 'Avião', 'Carro', 'Moto']

const maisTranspontes = [].concat(transport1, transport2, 'Van', 'Trem')
//['Barco', 'Avião', 'Carro', 'Moto', 'Van', 'Trem']

/*[].includes(valor) verifica se a array possui o valor e retorna true ou
false. [].indexOf(valor) verifica se a array possui o valor e retorna 
o index do primeiro valor na array. Já o [].lastIndexOf(valor)  retorna o 
index do último.
*/
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5


//[].join()
/**[].join() junta todos os valores da array e retorna uma
 * string com eles. Se você passar um valor como parâmetro,
 * este será utilizado durante a junção de cada item da array
 */
const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
linguagens.join();  //'html, css, js, php, python'
linguagens.join(' '); // 'html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
//['<', '>Título Principal</', '>']

htmlString = htmlString.join('h1')
// <h1>Título Principal</h1>
//console.log(htmlString)

//slice()
/**[].slice(inicio, final) retorna os itens da array
 * começando pelo início e indo ate o valor de final.
 */
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.slice(3); // ['php', 'python']
linguagens2.slice(1, 4); // ['css', 'js', 'php']

const cloneLinguagens = linguagens2.slice();

//Exercícios

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
//Remova o primeiro valor de comidas e coloque em uma variável
//Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
//Adicione 'Peixe' e 'Batata' ao início do array

//const removerComida = comidas.pop(); //remove o último elemento
//const adicionarComida = comidas.push('Arroz'); //adiciona um elemento no final
//const removeComida = comidas.shift(); // remove o primeiro elemento
//const addComida = comidas.unshift('Peixe', 'Batata'); // adiciona elemento no inicio
//console.log(comidas)
//console.log(comidas)

const estudante = ['Marcio', 'Brenda', 'Jonas', 'Kleber', 'Julia'];
//Arrume os estudantes em ordem alfabeticas
//Inverta a ordem dos estudantes
//Verifique se Joana faz parte dos estudantes
//Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>
          `
//substitua section por ul e div com li 
//utilizando split e join

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda']
//Remova o último carro, mas antes de remover 
//salve o array original em outra variável


//[].forEatch()
/**[].forEatch(callback(itemAtual, index, array)) a função de callback
 * é executada para cada item da array. Ela possui
 * três argumentos, itemAtual(valor do item da array), index(index do valor na array) e array(array original).
*/

const carros6 = ['Ford', 'Fiat', 'Honda'];
carros6.forEach(function (item, index, array) {
    // console.log(item.toUpperCase());
});

//com Arrow Function
carros6.forEach((item, index, array) => {
    //console.log(item[0]);
});

//Arrou Function
const liA = document.querySelectorAll('li');

liA.forEach(i => i.classList.add('ativo'));

liA.forEach(function (item) {
    item.classList.add('ativar');
})

//[].map()
/**[].mapo(callback(itemAtual, index, array))
 * Funciona da mesma forma que o forEatch. porem ao invèm de retornar undefined, 
 * retorna uma array com valores atualizados de acordo com o return de cada iteraçã.
 */
const carros7 = ['Ford', 'Fiat', 'Honda'];
const newCarro = carros.map((item) => {
    return 'Carro ' + item;
})
//console.log(carros); //['Ford', ' Fiat', 'Honda']
//console.log(newCarro); // ['Carro Ford', 'Carro  Fiat', 'Carro Honda']

const aulas = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const tempoAulas = aulas.map(aula => aula.min);

//função normal
function nomeAulas(aula) {
    return aula.nome;
}

const ArrayAula = aulas.map(nomeAulas)

//console.log(ArrayAula)
//Armazenando a função na variável
const nomeAulas1 = function (aula) {
    return aula.min;
}

//Arrow Function
const nomeAulas2 = (aula) => aula.nome;

const arrayNomaAulas = aulas.map(nomeAulas2)
//console.log(arrayNomaAulas)
/**
 * O map() faz exatamento o que o forEatch faz a diferença é que todo
 * forEatch sempre retorna undefined por que o objetivo dele não é o retorn 
 * dele mas sim o que você vai fazer com o item, por exemplo quenaod você pega 
 * um NodeList e quer adicionar classe em todos os itens dessa lista. E essa mesma
 * interação pode acontecer com o map(), a diferença é que o map sempre vai retornar
 * um array, os valores que é retornado dele  
 */

//[].reduce()
/**[].reduce(callback(acululador, valorAtual, index, array), valorInicial)
 * executa a função de callback para cada item da Array. Um valor
 * especial existe nessa função de callback, ele é chamado de acumulador,
 * mas é na verdade apenas o retorno da iteração anterio.
 */

const aulas3 = [10, 25, 30];
const total1 = aulas3.reduce((acumulador, atual) => {
    return acumulador + atual;
}, 0);
// console.log(total1); //65

const total2 = aulas3.reduce((acc, cur) => acc + cur, 100);
//console.log(total2)

//Maior valor
const numeros1 = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros1.reduce((anterior, atual) => {
    //return anterior > atual ? anterior : atual;
    if (anterior > atual) {
        return anterior
    } else {
        return atual
    }
}, 0);

maiorNumero
//console.log(maiorNumero);

const numeros2 = [10, 25, 60, 5, 35, 10];
let total = numeros2.reduce((acumulador, numero, indice, original) => {
    // console.info(`${acumulador} total até o momento`);
    // console.info(`${numero} valor atual`);
    // console.info(`${indice} indice atual`);
    // console.info(`${original} array original`);
});

let arr = [175, 50, 25];

function subofArray(total, num) {
    return total - num;
}

function myGreeks(item) {
    console.log(arr.reduce(subofArray));
}

//myGreeks();

let arr1 = [10, 20, 30, 40 ,50, 60];

function sumofArray(sum, num) {
    return sum + num;
}

function myGreeks1(item) {
    console.log(arr1.reduce(subofArray))
}
//myGreeks1()

let arr2 = [1.5, 20.3, 11.1, 40.7];

function somarArray(sum, num){
    return sum + Math.round(num);
}

function myGreeks2(item) {
    //console.log(arr2.reduce(somarArray, 0))
}
myGreeks2()


const aulas1 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const listaAulas = aulas1.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, [])


//[].reduceRight();
/**Existe também  o método [].reduceRight(), a diferença é que este começa a iterar da direita para esquerda,
 *  enqanto o reduce itera da esquerda para direita.
 */

const frutas1 = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas1.reduceRight((acc, freuta) => acc + ' ' + frutas);
const frutasLeft = frutas.reduce((acc, frutas) => acc + ' ' + frutas);

frutasRight;  // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

 
//[].some()
/**[].some(), se pelo menos um return da iteração for truthy, ele retorna true. */
const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
    return fruta === 'Uva';
    //true
})

function maiorQue100(numero) {
    return numero > 100;
}

const numeros3 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros3.some(maiorQue100);

//[].every()
/**[].every(), se todos os returns das iterações forem truthy, o método irá 
 * retornar true. Se pelo menos um for falsy, ele irá retornar false.
 * 
 */
const frutas5 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta está vazia '', o que é um valor falsy
const arrayCheias = frutas5.every((fruta) => {
    return frutas5; // false
});

const numeros4 = [0, 43, 22, 88, 101, 2];
const maiorQue3 = numeros4.every(x => x  > 3); // true


//[].find() e [].findIndex()
/**[].find(), retorna o valor atual da primeira iteração que
 * retornar um valor truthy. Já o [].findIndex() ao ivés de retorna o valor, retorna o index deste valor na array.
 * 
 */
const frutas4 = ['Banana', 'Pêra', 'Uva', ''];
const buscarUva = frutas4.findIndex((fruta) => {
    return fruta === 'Uva';
}); //2

const numeros5 = [6, 43, 22, 88, 101,29];
//const buscarMaior45 = numeros5.find(x => x > 45); // 88

//[].filter()
/**[].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy. */
const frutas6 = ['Banana', undefined, null, '', 'Pêra', 'Uva', 0, 'Maçã'];
const arayLimpa = frutas6.filter((fruta) => {
    return fruta; // ['Banana', 'Uva', 'Maçã'];
});

const numeros6 = [6, 43, 22, 88, 101,29];
const buscarMaior45 = numeros5.filter(x => x > 45); //[88, 101]


const aulas2 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const maiores15 = aulas2.filter((aula) => {
    return aula.min > 15;
}); //{nome: "CSS 1", min: 20}, {"nome: JS 1", min: 25}

//Exercícios

//Selecione cada curso e retorne uma array
//com objetos contendo o título, descrição
//aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText;
    const descricao = curso.querySelector('p').innerText;
    const aulas = document.querySelector('.aulas').innerText;
    const horas = document.querySelector('.horas').innerText;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})

//console.log(objetosCurso)



//Retorne uma lista com os 
//números maiores que 100
const numeros7 = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros7.filter(n => n > 100);
//console.log(maioresQue100)


//verifique se Baixo faz parte
// da lista de nstrumentos e retorne true
const instrumentos2 = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const temBaixo =  instrumentos2.some((item) => {
    return item === 'Baixo';
})
//console.log(temBaixo)

// Retorne o valor total de compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');
    return acumulador + precoLimpo;
}, 0);
//console.log(valorTotal)

//Function1
const perimetro = new Function('lado', 'return lado * 4'); //nunca usar dessa forma

function somar (n1, n2, n3) {
    return n1 + n2;
}

function darOi(nome, idade) {
    //console.log('Oi para você ' + nome + '! ' + idade)
}

darOi.call({}, 'Emilio', 40)



function descricaoCarro(velocidade) {
    //console.log(this)
    //console.log(this.marca + ' ' + this.ano + velocidade)
}

descricaoCarro.call({marca: 'Astra', ano: 2007}, 1000)
//Com o call agora podemos mudar o valor do this

const carros8 = ['Ford', 'Fiat', 'VW'];

carros8.forEach.call(carros8, (item) => {
    //console.log(item)
});

//função construtora
function Dom(seletor) {
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe);
};

const h1 = new Dom('h1');
h1.ativo('ativado');

const ul = new Dom('ul');
ul.ativo('ativado');

const section = new Dom ('section');
section.ativo('ativado');



const $ = document.querySelectorAll.bind(document);

//Exercícios
//Retorne a soma total de caracteres dos 
//parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalParagrafos = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

//console.log(totalParagrafos)
//console.log(paragrafos)

//Crie uma funçapo que retorne novos elementos 
//html, com os seguites parâmetros
//tag, classe e conteudo
function novosElementos(tag, classe, conteudo) {
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : null;
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}
//console.log(novosElementos('h1', 'ativado', 'Hello'))

//Crie uma nova função utilizando a anterior como base 
//essa nova função deverá sempre criar h1 com o
//classe título. Porém  o parâmetro conteudo continuará dinâmico.
const h1Titulo = novosElementos.bind(null, 'h1', 'titulo');
const cursoJs = h1Titulo('Curso de JavaScript')
//console.log(cursoJs);

//Object
const carro1 = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' Buzinou'
    }
}

const honda = Object.create(carro1).init('Honda');
//console.log(honda.acelerar())

const ferrari = Object.create(carro1).init('Ferrari');

const toyota = Object.create(carro1).init('Toyota');
//console.log(toyota.buzinar())

const person = {
    nome: 'Jhon',
    idade: 41
}
//console.log(person['idade'])

const student = {
    name: 'Jhon',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
//console.log(console.log(student.marks))

//Métodos de objetos JavaScript
//Em JavaScript, u objeto também pode conter uma função.
const people = {
    name: 'Sam',
    age: 30,
    //using function as a value
    greet: () => {} //console.log('hello!')
        
}

people.greet();


//Object.assign()
const funcaoAutomovel = {
    acelerar() {
        return 'Acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}
//Object.assign(alvo, Obj1, Obj2, .....) adiciona ao alvo as propriedades e métodos 
//enumeráveis dos demais objetos.
//O assign irá modificar o objeto alvo. 
Object.assign(moto, funcaoAutomovel);
//console.log(moto)

//Object.defineProperties()
/**Object.defineProperties(alvo, propriedades)
 * adiciona ao alvo novas propriedades. A diferença aqui é
 * a possibilidade de serem definidas as caracteristicas dessas propriedades.
 */
const moto1 = {}
Object.defineProperties(moto1, {
    rodas: {
        value: 2,
        configurable: false, //impede deletar e mudanças de valor
        enumarable: true, //torna enumerável
    },
    capacete: {
        value: true,
        configurable: true,
        writable: false, //impede mudança de valor
    },
})

//get e set
/**É possível definirmos diferentes comportamentos para
 * get e set de uma propriedade. Lembrando que ao acionarmos 
 * uma propriedade obj.propriedade, a função get ´´e ativada 
 * e ao setarmos ob.propriedade = 'valor' a função de set é ativada.
 */
const moto2 = {}
Object.defineProperties(moto, {
    velocidade: {
        get() {
            return this._velocidade;
        },
        set(valor) {
            this._velocidade = 'Velocidade ' + valor;
        }
    },
})

/**Object.getOwnPropertyDescriptors(obj)
 * Lista todos os métodos e propriedades de um objeto, 
 * com as sas devidas configurações.
 */
Object.getOwnPropertyDescriptors(Array);
//Lista com métodos e propridades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
//Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptors(Array.prototype);
//Puxa de uma única propriedade



Object.keys(carro1); 
/**Retorna uma array com as chaves de todas
 *  as propriedade diretas e enumeráveis do objeto */

Object.values(carro1);
/**Retorna uma array com os valores do objeto */

Object.entries(carro1)  
/**Retorna uma array com arrays contendo chave e o valor */

Object.getOwnPropertyNames(carro1);
//Retorna Uma array com todas as propriedades diretas do objeto
//não retorna do prototipo

Object.getOwnPropertyNames(Array);
//length', 'name', 'prototype', 'isArray', 'from', 'of']


Object.getOwnPropertyNames(Array.prototype);
/**
 * ['length', 'constructor', 'at', 'concat',
 * 'copyWithin', 'fill', 'find', 'findIndex', 
 * 'findLast', 'findLastIndex', 'lastIndexOf', 
 * 'pop', 'push', 'reverse', 'shift', 'unshift', 
 * 'slice', 'sort', 'splice', 'includes', 'indexOf', 
 * 'join', 'keys', 'entries', 'values', 'forEach', 
 * 'filter', 'flat', 'flatMap', 'map', 'every', 'some', 
 * 'reduce', 'reduceRight', 'toLocaleString', 'toString', 
 * 'toReversed', 'toSorted', 'toSpliced', 'with']
 */

Object.getOwnPropertyNames(carro1)
//(4) ['rodas', 'init', 'acelerar', 'buzinar']


 Object.getPrototypeOf('');
 //Retorna o protótipo do objeto

 Object.is('');
 //Verifica se os objetos são iguais e retorna true ou false.
  

  Object.freeze(carro);
  //Impede qualquer mudança nas propriedades.

  Object.seal(carro);
  //Previne a adição de novas propriedades
  // e impede que as atuais sejam deletadas.

  Object.preventExtensions(carro);
  //Previne a adição de novas propriedades.

  //Verificar se o objeto está congelado(freeze).
  //console.log(Object.isFrozen(carro));
  
  //console.log(Object.isExtensible(carro));
  //Verifica se preventExtensions está ativo
  
  //console.log(Object.isSealed(carro));
  // Verifica se o objeto está selado


  //HTMLElement
  /**Todo elemento HTML do DOM herda propriedade e métodos 
   * do construtor HTMLElement.
  */
 const haga1 = document.querySelector('h1');
 console.log(haga1.dataset);
 
 //Dataset
 /**dataset é uma propriedade de HTMLElement, essa propriedade 
  * é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma
  * coleção de chave / valor, com todos os atributos do elemento 
  * html que começarem com data-.
  */



