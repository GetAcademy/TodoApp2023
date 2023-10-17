function updateViewDetailTask() {
    const id = model.inputs.detailTaskPage.id;
    let task = getTaskById(id);

    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Se på oppgave</h1>

        <b>Tittel</b><br/>${task.title}<br/>
        <b>Beskrivelse</b><br/>${task.description}<br/>

        <button onclick="showEditViewForTask(${id})">Rediger</button>
    `;
}

