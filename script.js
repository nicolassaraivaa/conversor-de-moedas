const convertButton = document.querySelector("#convert-button")
const selectTo = document.querySelector("#convert-to-select")
const selectFrom = document.querySelector("#convert-from-select")


function convertValuesTo() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.96
    const euroToday = 5.38
    const libraToday = 6.28
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    if (selectTo.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (selectTo.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (selectTo.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (selectTo.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    /*Aqui vale para o from  ou seja o valor que vai querer converter*/ 

    if (selectFrom.value == "dolar-from") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "euro-from") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "libra-from"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

    }
    if (selectFrom.value == "real-from"){
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

    if (selectTo.value == "dolar") {
        currencyNameTo.innerHTML = "Dólar americano"
        currencyImgTo.src = "./assets/dolar.png"
    }

    if (selectTo.value == "euro") {
        currencyNameTo.innerHTML = "Euro"
        currencyImgTo.src = "./assets/euro.png"
    }
    if (selectTo.value == "libra"){
        currencyNameTo.innerHTML = "Libra"
        currencyImgTo.src ="./assets/libra.png"
    }
    if (selectTo.value == "real"){
        currencyNameTo.innerHTML = "Real"
        currencyImgTo.src = "./assets/real.png"

    }

    convertValuesTo()
}

function changeCurrencyFrom() {
    const currencyNameFrom = document.querySelector(".currency-from")
    const currencyImgFrom = document.getElementById("from-img")
        
    if (selectFrom.value == "dolar-from") {
        currencyNameFrom.innerHTML = "Dolar"
        currencyImgFrom.src = "./assets/dolar.png"
    }
    if (selectFrom.value == "real-from") {
        currencyNameFrom.innerHTML = "Real"
        currencyImgFrom.src = "./assets/real.png"
    }
    if (selectFrom.value == "euro-from") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImgFrom.src = "./assets/euro.png"
    }
    if (selectFrom.value == "libra-from") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImgFrom.src = "./assets/libra.png"
    }


}

selectTo.addEventListener("change", changeCurrencyTo)
selectFrom.addEventListener("change", changeCurrencyFrom)
convertButton.addEventListener("click", convertValuesTo )