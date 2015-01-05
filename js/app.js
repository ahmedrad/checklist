
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var addTaskAction = document.getElementsByTagName('button')[0];
var editTaskActions = document.getElementsByClassName('edit');
var deleteTaskActions = document.getElementsByClassName('delete');
var checkBoxActions = document.querySelectorAll('input[type="checkbox"]');




var addTask = function() {
  console.log('adding task...')
};

var editTask = function() {
  console.log('editing task...');
  console.log(this);
};

var deleteTask = function() {
  console.log('deleting task...')
}

var checkBoxHandler = function() {
  console.log('handle checkbox');
  console.log(this);
}


console.log(incompleteTasksHolder);
console.log(completedTasksHolder);
console.log(addTaskAction);
console.log(editTaskActions);
console.log(deleteTaskActions);
console.log(checkBoxActions);

addTaskAction.onclick = addTask;

// function bindEditAction(element, index, array) {
//   element.onclick = editTask(element);
// }


// function bindDeleteAction(element, index, array) {
//   element.onclick = deleteTask(element);
// }

// Note ellision, there is no member at 2 so it isn't visited
for(i=0; i<editTaskActions.length;i++)
{
  editTaskActions[i].onclick = editTask;
}

for(i=0; i<deleteTaskActions.length;i++)
{
  deleteTaskActions[i].onclick = deleteTask;
}

for(i=0; i<deleteTaskActions.length;i++)
{
  checkBoxActions[i].onchange = checkBoxHandler;
}







