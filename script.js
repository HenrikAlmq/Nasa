import { exportApi } from './modules/apiCall.mjs';
import { listImages } from './modules/listImages.mjs';

const global = {
    dynamic: document.getElementById('dynamic'),
}
export { global };   

let test = exportApi();

//listImages();
debugger;
console.log(test);