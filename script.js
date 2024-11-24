//document.addEventListener('DOMContentLoaded', () => {
 // const addButton = document.getElementById('add-todo-btn');
  //const inputField = document.getElementById('todo-input');
  //const todoList = document.getElementById('todo-list');

  //addButton.addEventListener('click', () => {
    //const task = inputField.value.trim();
    //if (task) {
      //const listItem = document.createElement('li');
     // listItem.textContent = task;

      //listItem.addEventListener('click', () => {
        //listItem.remove();
      //});

     // todoList.appendChild(listItem);
     // inputField.value = '';
   // }
  //});

  //inputField.addEventListener('keypress', (e) => {
    //if (e.key === 'Enter') {
     // addButton.click();
   // }
  //});
//});
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('add-todo-btn');
  const inputField = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Function to create a new to-do item
  const createTodoItem = (task) => {
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const textSpan = document.createElement('span');
    textSpan.textContent = task;
    textSpan.className = 'todo-text';
    listItem.appendChild(textSpan);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    listItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';
    deleteButton.className = 'delete-btn';
    listItem.appendChild(deleteButton);

    // Edit functionality
    editButton.addEventListener('click', () => {
      const newTask = prompt('Edit your task:', textSpan.textContent);
      if (newTask !== null && newTask.trim() !== '') {
        textSpan.textContent = newTask.trim();
      }
    });

    // Remove functionality
    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });

    return listItem;
  };

  // Add new task
  addButton.addEventListener('click', () => {
    const task = inputField.value.trim();
    if (task) {
      const listItem = createTodoItem(task);
      todoList.appendChild(listItem);
      inputField.value = '';
    }
  });

  // Add task on pressing Enter
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addButton.click();
    }
  });
});