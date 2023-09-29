function updateViewAddTask() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Legge til ny oppgave</h1>

        ${createAddFieldHtml('Tittel', 'title')}
        ${createAddFieldHtml('Beskrivelse', 'description')}
        ${createAddFieldHtml('Varighet', 'duration', 'number')}
        ${createAddFieldHtml('Gjentakelse', 'recurring')}
        ${createAddFieldHtml('Frist', 'duedate', 'date')}
        <button onclick="addTask()">Legg til</button>
    `;
}


function createAddFieldHtml(label, fieldName, type, defaultValue) {
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