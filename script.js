
import { sendApiRequest } from './modules/apiCall.mjs';
import { exportShowElement } from './modules/showElement.mjs';
import { listImages } from './modules/listImages.mjs';

const global = {
    dynamic: document.getElementById('dynamic'),
    button: document.getElementById('button'),
    stepOne: document.getElementById('stepOne'),
    stepTwo: document.getElementById('stepTwo'),
    stepTree: document.getElementById('stepTree'),
    stepFour: document.getElementById('stepFour')
}
export { global };

//exportShowElement();

listImages("05-10", "Opportunity");


export function setTimelineActive(element){
    element.style.backgroundColor = "black";
}