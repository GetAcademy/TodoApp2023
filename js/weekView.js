function updateViewWeek(){
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Uke (alle oppgaver foreløpig)</h1>
        <ul>
            ${createTaskHtml()}
        </ul>
    `;
}

function createTaskHtml(){
    let html = '';
    for(let task of model.tasks){
        html += /*HTML*/`
            <li>            
                ${task.title} - 
                ${task.description}
                <button onclick="showDetailViewForTask(${task.id})">velg</button>
            </li>
        `;
    }
    return html;
}