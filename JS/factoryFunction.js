//criando objeto manualmente
var nomePessoa = {
	nome: 'Maria',
	idade: 22
};

console.log(nomePessoa);

//criando objeto via factory function
var criarPessoa = function(nome, idade){
	return {
		nome: nome,
		idade: idade
	};
};

var pessoaViaFactory = criarPessoa('João', 23);
console.log(pessoaViaFactory);

//criando objeto via constructor

var Pessoa = function(nome,idade){
	this.nome = nome;
	this.idade = idade;
};

var pessoaViaConstructor = new Pessoa("José", 15);
console.log(pessoaViaConstructor);

