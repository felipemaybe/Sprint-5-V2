//Crie uma array que contenha os nomes de Rafael, Manoel e Daniel'
//Crie uma função chamada positions. Esta função deverá receber como parâmetro o array contendo os nomes dos atletas.
//A posição do elemento no array representa sua posição na corrida.
//O competidor Daniel realizou o desafio extra, e ganhou um bônus. Ele sempre vai subir uma posição.
//Sendo assim, o Daniel trocará de lugar com quem estiver na posição a frente dele, caso haja.
//Verifique se a posição do elemento 'Daniel' no array é diferente de 0, caso seja, ele deverá trocar de lugar com quem está à sua frente. Caso contrário retorne; 'Daniel é o vencedor'
//Retorne o array resultante concatenado com a frase: 'Este é o pódio'.
//Chame a função usando o console.log(), para conseguir ler seu retorno

let arr = ["Rafael","Manoel","Daniel"]


function position(arr){

    let aux = arr.indexOf("Daniel")
    if(aux !==0){
      arr.fill("Daniel",1)
      arr.fill("Manoel",2)
       
    }else{

    return ("Daniel é o vencedor")
      
    }

    return arr + ("  Este é o pódio")
    
  }

  console.log(position(arr))
  