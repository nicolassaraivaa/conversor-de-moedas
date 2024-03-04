const key = "c8e212157bfe0e74ec16c293"
const convertButton = document.querySelector("#convert-button")
const selectTo = document.querySelector("#convert-to-select")
const selectFrom = document.querySelector("#convert-from-select")
const currencyMapping = {
    real: "BRL",
    dolar: "USD",
    euro: "EUR",
    libra: "GBP"
};


async function convertValues() {
    
    const velueSelectFrom = currencyMapping[document.getElementById("convert-from-select").value];
    const velueSelectTo = document.getElementById("convert-to-select").value
    const api = (`https://v6.exchangerate-api.com/v6/c8e212157bfe0e74ec16c293/pair/${velueSelectFrom}/${velueSelectTo}`)
    const response = await fetch(api); /* Essas linhas de código fazem uma solicitação (fetch) para a URL especificada em api e aguardam a resposta (response). O await pausa a execução até que a operação seja concluída*/
    const dados = await response.json();  /* response.json() converte os dados da resposta para o formato JSON, e o resultado é armazenado na variável*/

    
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    
    /*Aqui vale para o TO  ou seja o valor que vai ser convertido*/ 
    if (selectTo.value == "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(dados.conversion_rate*inputCurrencyValue)
    }
    if (selectTo.value == "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(dados.conversion_rate*inputCurrencyValue)

    }
    if (selectTo.value == "GBP"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(dados.conversion_rate*inputCurrencyValue)
    }
    if (selectTo.value == "BRL"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dados.conversion_rate*inputCurrencyValue)
    }

    /*Aqui vale para o from  ou seja o valor que vai querer converter*/ 
    if (selectFrom.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" 
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }

}


function changeCurrencyTo() {
    const currencyNameTo = document.getElementById("currency-name")
    const currencyImgTo = document.querySelector(".currency-img")

    /*Aqui vale para o To  ou seja o valor convertido*/ 

    if (selectTo.value == "USD") {
        currencyNameTo.innerHTML = "Dólar americano"
        currencyImgTo.src = "./assets/dolar.png"
    }

    if (selectTo.value == "EUR") {
        currencyNameTo.innerHTML = "Euro"
        currencyImgTo.src = "./assets/euro.png"
    }
    if (selectTo.value == "GBP"){
        currencyNameTo.innerHTML = "Libra"
        currencyImgTo.src ="./assets/libra.png"
    }
    if (selectTo.value == "BRL"){
        currencyNameTo.innerHTML = "Real"
        currencyImgTo.src = "./assets/real.png"

    }

    convertValues()
}

/*Aqui vale para o from  ou seja o valor que vai querer converter*/ 

function changeCurrencyFrom() {
    const currencyNameFrom = document.querySelector(".currency-from")
    const currencyImgFrom = document.getElementById("from-img")
        
    if (selectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = "Dolar"
        currencyImgFrom.src = "./assets/dolar.png"
    }
    if (selectFrom.value == "real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImgFrom.src = "./assets/real.png"
    }
    if (selectFrom.value == "euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImgFrom.src = "./assets/euro.png"
    }
    if (selectFrom.value == "libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImgFrom.src = "./assets/libra.png"
    }
    convertValues()
}

selectTo.addEventListener("change", changeCurrencyTo)
selectFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)