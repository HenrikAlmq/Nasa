import { sendApiRequest } from './modules/apiCall.mjs';
import { exportShowElement } from './modules/showElement.mjs';


exportShowElement();


let button = document.getElementById('button');

let inputDate = "05-10";
let inputRover = "Curiosity";



let test =  button.addEventListener("click", () => {
     await sendApiRequest(inputDate, inputRover);
});


console.log(test);

