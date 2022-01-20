
export function exportApi() {
    
    let button = document.getElementById('button');

    let dateAPI = "2021-05-10";
    let rover = "Curiosity";

    button.addEventListener("click", () => {
        sendApiRequest(dateAPI, rover);
    });


   
    async function sendApiRequest(dateAPI, rover) {
        debugger;
        let API_KEY = "XZ8Ryto558Nax2OqbPAJsYsSlx7J6qTqPOCcWusS"
        let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${dateAPI}&api_key=${API_KEY}`);
        //console.log(response);
        let data = await response.json()
        console.log(data);

    }
}

