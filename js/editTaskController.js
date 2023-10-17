function saveChangesInTask(id) {
    const task = getTaskById(id);
    const inputTask = model.inputs.editTaskPage;
    task.title = inputTask.title;
    task.description = inputTask.description;
    task.duedate = inputTask.duedate;
    model.app.currentPage = 'detailTask';
    model.inputs.detailTaskPage.id = id;
    updateView();
}