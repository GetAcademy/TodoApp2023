function showEditViewForTask(id){
   model.app.currentPage = 'editTask'; 
   const task = getTaskById(id);
   const inputTask = model.inputs.editTaskPage;
   inputTask.id = id;
   inputTask.title = task.title;
   inputTask.description = task.description;
   inputTask.duedate = task.duedate;

   // for(let fieldName in task){
   //    //inputTask['title']
   //    inputTask[fieldName] = task[fieldName];
   // }

   updateView();
}

function showDetailViewForTask(id){
   model.app.currentPage = 'detailTask';            
   model.inputs.detailTaskPage.id = id;
   updateView();
}


function goToPage(newPage){
    model.app.currentPage = newPage;
    updateView();
 }