const prompt = require('prompt-sync');
const input = prompt();

let a = input("Digite uma palavra: ")


while (a != "sair") {

    a = input("Digite outra palavra: ");

}