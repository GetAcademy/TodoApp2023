function getTaskById(id) {
    return getObjectById(id, model.tasks);
    // for (let task of model.tasks) {
    //     if (task.id == id) return task;
    // }
    // return null;
}

function getObjectById(id, array) {
    for (let obj of array) {
        if (obj.id == id) return obj;
    }
    return null;
}