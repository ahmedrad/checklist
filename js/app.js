
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

var addTaskAction = document.getElementsByTagName('button')[0];


var addTask = function() {
  console.log('adding task...')
  var newTaskName = document.getElementById('new-task').value;
  if (newTaskName === '')
    {return;}
  var newTask = '<li><input type="checkbox"><label>'+newTaskName+'</label><input type="text"><button class="edit">Edit</button><button class="delete">Delete</button></li>';
  incompleteTasksHolder.insertAdjacentHTML('beforeend', newTask);
  wireActions();
  console.log('added Task')
};

var editTask = function() {
  console.log('editing task...');
  var task = this.parentNode;
  var currentClass = task.className;
  var input = task.querySelector('input[type="text"]')
  var label = task.getElementsByTagName('label')[0]
  if (currentClass === 'editMode')
    {
      task.className = '';
      label.innerHTML = input.value;
    }
  else
    {
      task.className = 'editMode';
      input.value = label.innerHTML;
    }
};

var deleteTask = function() {
  console.log('deleting task...')
  var task = this.parentNode;
  console.log(task);
  var taskParent = task.parentNode;
  console.log(taskParent);
  taskParent.removeChild(task);
  wireActions();
  console.log('task deleted')
}

var checkBoxHandler = function() {
  console.log('handle checkbox');
  var task = this.parentNode;
  var taskParent = task.parentNode;
  if (taskParent.id === 'completed-tasks')
    {
      incompleteTasksHolder.appendChild(task);
    }
  else
    {
      completedTasksHolder.appendChild(task);
    }

}


addTaskAction.onclick = addTask;
 
var wireActions = function() {

  var editTaskActions = document.getElementsByClassName('edit');
  var deleteTaskActions = document.getElementsByClassName('delete');
  var checkBoxActions = document.querySelectorAll('input[type="checkbox"]');

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

  console.log(incompleteTasksHolder);
  console.log(completedTasksHolder);
  console.log(addTaskAction);
  console.log(editTaskActions);
  console.log(deleteTaskActions);
  console.log(checkBoxActions);
};

wireActions();







