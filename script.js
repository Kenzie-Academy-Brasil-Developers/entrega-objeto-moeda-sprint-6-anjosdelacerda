console.log('oi')

class Coin {
    constructor(){
        this._state = 0
    }

    get state(){
        return this._state
    }

    set state(novoState){
        this._state = novoState
    }

    static flip(){
        let ladoDaMoeda = Math.floor(Math.random() * 2)
        
        this._state = ladoDaMoeda
       
        return this._state
        
    }

    static toString(){
        if(this._state == 0){
            return "Heads"
        }else if(this._state == 1){
            return "Tails"
        }else{
            return "Não é uma moeda"
        }
    }

    static toHTML(){
        let imagem = document.createElement('div') 

        if(this._state == 0){
            imagem.innerHTML =`<img src="img/cara.png">`
            
        }

        if(this._state == 1){
            imagem.innerHTML =`<img src="img/coroa.png">`
        }
        
        return imagem 

    }


}

let moeda = new Coin()



function display20Flips() {
    const results = [];
    const div = document.querySelector('.printCoin')
    const divResults = document.createElement('div')
    for(let i = 0; i < 20; i++){

        let moedaSorteada = Coin.flip()
        let caraOuCoroa = Coin.toString(moedaSorteada)
        results.push(caraOuCoroa)

    }

    results.forEach((moedaJogada)=>{
        let moedaLi = document.createElement('li')
        let moedaString = moedaJogada.toString()
        moedaLi.innerText=`${moedaString}`
        divResults.appendChild(moedaLi)
    
    })

    div.appendChild(divResults)
   
  }


  function display20Images() {
    const results = [];
    const div = document.querySelector('.printCoin')
    const divResults = document.createElement('div')
    for(let i = 0; i < 20; i++){
        let moedaSorteada = Coin.flip()
        console.log(moedaSorteada)
        let caraOuCoroa = Coin.toHTML(moedaSorteada)
        console.log(caraOuCoroa)
        results.push(caraOuCoroa)
    }

    results.forEach((moedaJogada) =>{
        divResults.appendChild(moedaJogada)
    })

    div.appendChild(divResults)
   
  }


  display20Flips()
  display20Images()