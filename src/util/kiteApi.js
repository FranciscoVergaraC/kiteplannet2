const requestUrl = 'http://localhost:4001/';

const getSpots = async () =>{
    try {
        let response = await fetch('http://localhost:4001/spot', {
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

export default getSpots;