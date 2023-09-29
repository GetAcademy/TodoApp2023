function selectTask(id){
    model.inputs.detailTaskPage.id = id;
    model.app.currentPage = 'detailTask';            
    updateView();
}


function selectTaskForEdit(id){
    const task = model.input.editTask;
    task.id = id;
    // slå opp dette objektet i model.tasks og kopiere verdiene over i model.input.editTask
    // task.title = '';
    // task.description = '';
    // model.app.currentPage = 'editTask';
    updateView();
}