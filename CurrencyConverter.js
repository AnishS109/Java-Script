const fromAmount= document.querySelector(".amount");
const convertedAmount = document.querySelector(".convertedAmount");
const fromCurrency = document.querySelector(".fromCurrency");
const toCurrency = document.querySelector(".toCurrency");
const result = document.querySelector("#res");

const countries = [ 
    {code: "USD" , fullName:"United States Dollar"},
    {code: "INR" , fullName:"Indian Rupees"},
    {code: "AUD" , fullName:"Australian Dollar"},
    {code: "TWD" , fullName:"Taiwan New Dollar"},
    {code: "RUB" , fullName:"Russian Ruble"}
];

countries.forEach(countries =>{
    const option1 = document.createElement("option");
    option1.value = countries.code;
    option1.innerText = `${countries.code} (${countries.fullName})`;
    fromCurrency.appendChild(option1)

    const option2 = document.createElement("option");
    option2.value = countries.code;
    option2.innerText = `${countries.code} (${countries.fullName})`;
    toCurrency.appendChild(option2)

    fromCurrency.value = "INR";
    toCurrency.value = "USD";
    convertedAmount.value = 0.0119
});

const getExchangeRate = async () =>{
    const amount = parseFloat(fromAmount.value);
    const fromCurrencyChoose = fromCurrency.value;
    const toCurrencyChoose = toCurrency.value;

    const response = await fetch (`https://api.exchangerate-api.com/v4/latest/${fromCurrencyChoose}`);
    const data = await response.json();
    
    const convertionRate = data.rates[toCurrencyChoose];
    const conversionAmount = (amount * convertionRate);
    
    convertedAmount.value = conversionAmount;
    result.innerText = `${amount} ${fromCurrencyChoose} = ${convertedAmount.value} ${toCurrencyChoose}`

}

fromAmount.addEventListener("input", getExchangeRate);
fromCurrency.addEventListener("change", getExchangeRate);
toCurrency.addEventListener("change", getExchangeRate);
window.addEventListener("load", getExchangeRate);



/*const amountelement = document.querySelector(".amount")
const fromCurrencyelement = document.querySelector(".fromCurrency")
const toCurrencyelement = document.querySelector(".toCurrency")
const convertedAmountelement = document.querySelector(".convertedAmount")
const resultelement = document.querySelector(".result")

const country = [
    {code: "USD" , fullName:"United States Dollar"},
    {code: "INR" , fullName:"Indian Rupees"},
    {code: "AUD" , fullName:"Australian Dollar"},
    {code: "TWD" , fullName:"Taiwan New Dollar"},
    {code: "RUB" , fullName:"Russian Ruble"}
];

country.forEach(countries =>{
    const option1 = document.createElement("option");
    option1.value = country.code;
    option1.innerText = (`${countries.code} ${countries.fullName}`)
    fromCurrencyelement.appendChild(option1);
    
    const option2 = document.createElement("option");
    option2.value = country.code;
    option2.innerText = (`${countries.code} ${countries.fullName}`)
    toCurrencyelement.appendChild(option2);

});

const getExchangeRate =  async () =>{
    const amountEnter = parseFloat(amountelement.value);
    const fromCurrency = fromCurrencyelement.value;
    const toCurrency = toCurrencyelement.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    const data = await response.json();

    const conversionRated = data.rates(toCurrency);
    const convertedAmount = amountEnter * conversionRated;

    convertedAmountelement.value = convertedAmount;
}

amountelement.addEventListener("input" , getExchangeRate);*/
