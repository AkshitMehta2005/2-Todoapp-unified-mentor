document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');
  const newTodoInput = document.getElementById('new-todo');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTodo();
  });

  function addTodo() {
      const todoText = newTodoInput.value.trim();
      if (todoText !== '') {
          const li = document.createElement('li');
          li.textContent = todoText;

          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'delete';
          deleteButton.addEventListener('click', () => {
              todoList.removeChild(li);
          });

          li.appendChild(deleteButton);
          li.addEventListener('click', () => {
              li.classList.toggle('completed');
          });

          todoList.appendChild(li);
          newTodoInput.value = '';
      }
  }
});
