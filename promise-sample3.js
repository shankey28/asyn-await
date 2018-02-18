const axios = require('axios');

const getExchangeRate = (from,to)=>{
    return axios.get(`https://api.fixer.io/latest?base=${from}`).then((response)=>{
        return response.data.rates[to];
    })
}

const listOfCountries = (currencyCode)=>{
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response)=>{
        return response.data.map((country)=>{
            return country.name;
        })
    })
}



const getExchangedetails = async (from, to)=>{
    let conversionrate = await getExchangeRate(from,to);
    let countryarr = await listOfCountries(to);
    let result = {
        conversionrate,
        countryarr
    };

    return result;
}

getExchangedetails('USD','INR').then((result)=>{
    console.log('Conversion rate: ',result['conversionrate']);
}).catch((e)=>{
    console.log('Error encountered',e);
})