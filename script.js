
import { sendApiRequest } from './modules/apiCall.mjs';
import { exportShowElement } from './modules/showElement.mjs';
import { listImages } from './modules/listImages.mjs';
//import { editImage } from './modules/editImage.mjs'

const global = {
    dynamic: document.getElementById('dynamic'),
    button: document.getElementById('button'),
    stepOne: document.getElementById('stepOne'),
    stepTwo: document.getElementById('stepTwo'),
    stepThree: document.getElementById('stepThree'),
    stepFour: document.getElementById('stepFour')
}
export { global };

//exportShowElement();

listImages("05-10", "Opportunity");


export function setTimelineActive(element){ //Sätter timlinen till active för varje del parameter att skicka med: stepOne/stepTwo/stepThree/stepFour
    global.stepOne.style.backgroundColor = "#3b82f6";
    global.stepTwo.style.backgroundColor = "#3b82f6";
    global.stepThree.style.backgroundColor = "#3b82f6";
    global.stepFour.style.backgroundColor = "#3b82f6";
    
    element.style.backgroundColor = "black";
}