export function exportShowElement() {

    let dynamic = document.getElementById('dynamic');
    let select = document.createElement('select');
    let roverArray = ["Curiosity", "Spirit", "Opportunity"];
    
    for (let i = 0; i < roverArray.length; i++)
    {
        let option = document.createElement('option');
        option.innerHTML = roverArray[i];
        select.appendChild(option);
    }
    
    dynamic.appendChild(select);

    let createInput = document.createElement('input');
    createInput.placeholder = "MM/DD";
    dynamic.appendChild(createInput);

    let createButton = document.createElement('button');
    createButton.innerText = "Nästa";
    dynamic.appendChild(createButton);
}
