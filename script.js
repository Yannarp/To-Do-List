//Adding validation for empty input field
document.querySelector('#add').onclick = function () {
    if (document.querySelector('#new-task input').value.length == 0) {
      alert('Adicionar nova tarefa')
    }
  
    //Adding new task
    else {
      document.querySelector('#tasks').innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector('#new-task input').value}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt"></i>  
          </button>
        </div>
      `
      //Deleting a task
      let currentTask = document.querySelectorAll('.delete')
      for (let i = 0; i < currentTask.length; i++) {
        currentTask[i].onclick = function () {
          this.parentNode.remove()
        }
      }
  
      //Checking a finished task
      let tasks = document.querySelectorAll('.task')
      for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
          this.classList.toggle('completed')
        }
      }
  
      //Clearing the input field after each entry
      document.querySelector('#new-task input').value = ''
    }
  }
  
  // Switch Mode
  
  function changeMode() {
    changeClasses()
    changeText()
  }
  
    
  
  const logo = document.getElementById('logo')
  const tasks = document.getElementById('tasks')
  const newTask = document.getElementById('new-task')
  const body = document.getElementsByTagName('body')[0]
  button.addEventListener('click', changeMode)