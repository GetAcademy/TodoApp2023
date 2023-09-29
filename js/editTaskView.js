function updateViewEditTask() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Endre eller legge til ny oppgave</h1>

        ${createEditFieldHtml('Tittel', 'title')}
        ${createEditFieldHtml('Beskrivelse', 'description')}
        ${createEditFieldHtml('Varighet', 'duration', 'number')}
        ${createEditFieldHtml('Gjentakelse', 'recurring')}
        ${createEditFieldHtml('Frist', 'duedate', 'date')}
        <button>Lagre</button>
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
            oninput="model.inputs.addOrEditTaskPage.${fieldName}=this.${value}"
            value="${model.inputs.addOrEditTaskPage[fieldName] || defaultValue}"
            />
        <br/>
        `;
}
