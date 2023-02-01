
const nome = prompt('Qual o seu nome?')
console.log('Resposta ' + nome)
console.log(typeof nome)

const nascimento = prompt('Qual sua data de nascimento  xx/ xx/ xxxx  ?')
console.log('Resposta ' + nascimento)
console.log(typeof nascimento)


let endereço = prompt('Qual seu endereço?')
console.log('Resposta ' + endereço)
console.log(typeof endereço)

const cpf = Number(prompt('Qual seu CPF?'))
console.log('Resposta ' + cpf)
console.log(typeof cpf)


let escola = prompt('Qual sua escolaridade?')
console.log('Resposta ' + escola)
console.log(typeof escola)

let cnh = prompt('Você possui CNH ?')
console.log('Resposta ' + cnh)
console.log(typeof cnh)


let filhos = prompt('Você possui filhos ? ')
console.log('Resposta ' + filhos)
console.log(typeof filhos)

let cargo = prompt('Qual seu cargo atual?')
console.log('Resposta ' + cargo)
console.log(typeof cargo)

let salario = Number(prompt('Qual seu salário atual ?'))
console.log('Resposta ' + salario)
console.log(typeof salario)

let comissao = Number(prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero'))
console.log('Resposta ' + comissao)
console.log(typeof comisao)

const admisao = prompt('Informe o ano de admissão xx/xx/xxxx')
console.log('Resposta ' + admisao)
console.log(typeof admisao)


console.log('O(a)', nome, 'nasceu em ', nascimento, 'mora na endereço', endereço, 'possui o cpf', cpf, 'ele(a) possui cnh: ', cnh, 'ele possui filhos: ', filhos,
'ele(a) trabalha como: ', cargo, 'recebe o salario de: ', salario, 'ganha comissao: ', comissao, 'sua data de admissao foi: ', admisao)



