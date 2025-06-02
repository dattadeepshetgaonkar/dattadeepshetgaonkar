
function createTaskElement(taskText) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const taskHTML = `
    <div class="task-left">
      <input type="checkbox" class="task-check">
      <span class="task-text">${taskText}</span>
    </div>
    <button class="remove-btn" title="Delete">X</button>
  `;
  li.innerHTML = taskHTML;


  const checkbox = li.querySelector('.task-check');
  const textSpan = li.querySelector('.task-text');
  checkbox.addEventListener('change', function () {
    textSpan.classList.toggle('completed', checkbox.checked);
  });


  li.querySelector('.remove-btn').addEventListener('click', function () {
    li.style.transition = 'opacity 0.3s, transform 0.3s';
    li.style.opacity = '0';
    li.style.transform = 'translateX(40px)';
    setTimeout(() => li.remove(), 300);
  });

  return li;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;
  const li = createTaskElement(taskText);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
  taskInput.focus();
}

document.getElementById('addBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});
