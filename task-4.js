document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('input');
    const addTaskBtn = document.getElementById('button');
    const taskList = document.getElementById('taskList');
    loadTasks();
    button.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        };
    });
    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText !== '') {
            let li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', function() {
                this.remove();
                saveTasks();
            });
            taskList.appendChild(li);
            taskInput.value = '';
            saveTasks();
        } else{
            alert('Пожалуйста, введите задачу.');
        };
    };

    function saveTasks() {
        let tasks = [];
        document.querySelectorAll('#taskList li').forEach(function(taskLi) {
            tasks.push(taskLi.textContent.slice(0, -1));
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        let savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            let tasks = JSON.parse(savedTasks);
            tasks.forEach(function(taskText) {
                let li = document.createElement('li');
                li.textContent = taskText;
                li.addEventListener('click', function() {
                    this.remove();
                    saveTasks();
                });
                taskList.appendChild(li);
            });
        }
    }
});