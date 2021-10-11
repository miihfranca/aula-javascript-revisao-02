// 1) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch,
// e revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes.

// a) Caso o comprador queira o incubação, retorne: “Compra efetuada com sucesso”.
// b) Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”.
// c) Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui”.

function  compra ( veiculo ) {
    if  ( veiculo  ==  "hatch" ) {
        console . log ( "Compra efetuada com sucesso" )
    }  else  if  ( veiculo  ==  "sedans"  ||  veiculo  ==  "motocicletas"  ||  veiculo  ==  "caminhonetes" )  {
        console . log ( "Tem certeza que não prefere este modelo?" )
    }  else  {
        console . log ( "Não trabalhamos com este tipo de automóvel aqui" )
    }
}
compra ( "selecione o veiculo" )

// 2) Criar um bloco de código, onde deve ter três variáveis ​​do tipo inteiro: a, b, c. Verifique se:
// a) Se todos os lados são iguais, o triângulo será equilátero;
// b) Se todos os lados principais diferentes, será escaleno;
// c) Se nenhuma das duas condições anteriores para atendida, será isósceles.


    var  a  =  1
    var  b  =  2
    var  c  =  1
    if  ( a  ===  b  &&  b  ===  c  &&  c  ===  a )  {
        console . log ( "O triângulo é equilátero" )
    }  else  if  ( 'a! =  b  &&  b! =  c  &&  c! =  a ') {
        console . log ( "O trinângulo é escaleno" )
    }  else{
        console . log ( "O trinângulo é isósceles" )
    }
 

// 3) Construa uma função que receba um número.
// a) Se o número positivo, mostrar a informação de que ele é positivo.
// b) Se o número negativo, mostrar a informação de que ele é negativo.

function  numero ( valor ) {
if ( valor  =>  0 ) {
    console . log ( "positivo" )
}  else{
    console . log ( "negativo" )
}
}
numero ( - 8 )