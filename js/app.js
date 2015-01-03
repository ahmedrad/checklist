
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var addTaskAction = document.getElementsByTagName('button')[0];
var editTaskActions = document.getElementsByClassName('edit');
var deleteTaskActions = document.getElementsByClassName('delete');
var checkBoxActions = document.querySelectorAll('input[type="checkbox"]');




var addTask = function(newTaskTitle) {
  console.log('adding task...')
};

var editTask = function(editTaskAction) {
  console.log('editing task...')
};

var deleteTask = function(deleteTaskAction) {
  console.log('deleting task...')
}

var completeTask = function(checkBoxAction) {
  console.log('completing task...')
}


var incompleteTask = function(checkBoxAction) {
  console.log('incompleting task...')
};


console.log(incompleteTasksHolder);
console.log(completedTasksHolder);
console.log(addTaskAction);
console.log(editTaskActions);
console.log(deleteTaskActions);
console.log(checkBoxActions);




