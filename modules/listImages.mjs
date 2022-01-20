//import { exportApi } from '/apiCall.mjs';
import { global } from '../script.js';

export function listImages() {
    exportApi().forEach(element => {
        global.dynamic.innerHTML="";
        
        global.dynamic.insertAdjacentHTML("afterbegin",'<div class="card" style="width: 18rem;"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>');
    });
    
}

