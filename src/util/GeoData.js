/*require('dotenv').config({ path: '../../.env'}); /*Testeado y funcional, fuente https://www.npmjs.com/package/dotenv */

const getCountries = async () =>{
    try {
        let response = await fetch('http://localhost:4001/countries', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });
        let data = await response.json();
        if (response.ok){
            return data;
        }
    } catch (error){
        console.log(error);
    }
}

export default getCountries;