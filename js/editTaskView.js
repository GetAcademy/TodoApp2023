function updateViewEditTask() {
    const id = model.inputs.editTaskPage.id;
    const task = getTaskById(id);
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Rediger oppgave</h1>

        ${createEditFieldHtml('Tittel', 'title', 'text', task.title)}
        ${createEditFieldHtml('Beskrivelse', 'description', 'text', task.description)}
        ${createEditFieldHtml('Frist', 'duedate', 'date', task.duedate)}
        <button onclick="saveChangesInTask(${id})">Lagre endringer</button>
    `;
}


function createEditFieldHtml(label, fieldName, type, defaultValue) {
    if (!type) type = 'text';
    if(!defaultValue) defaultValue = '';
    const value = type == 'number' ? 'valueAsNumber' : 'value';
    return  /*HTML*/`
        ${label}: <br/>
        <input 
            type="${type}"
            oninput="model.inputs.addTaskPage.${fieldName}=this.${value}"
            value="${model.inputs.addTaskPage[fieldName] || defaultValue}"
            />
        <br/>
        `;
}