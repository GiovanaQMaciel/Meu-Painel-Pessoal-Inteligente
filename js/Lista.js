class TodoApp {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.currentFilter = 'all';
        this.editingId = null;
        
        this.initializeElements();
        this.bindEvents();
        this.render();
    }

            initializeElements() {
                this.taskInput = document.getElementById('taskInput');
                this.addBtn = document.getElementById('addBtn');
                this.tasksContainer = document.getElementById('tasksContainer');
                this.emptyState = document.getElementById('emptyState');
                this.filterBtns = document.querySelectorAll('.filter-btn');
                this.stats = document.getElementById('stats');
                this.totalTasks = document.getElementById('totalTasks');
                this.pendingTasks = document.getElementById('pendingTasks');
                this.completedTasks = document.getElementById('completedTasks');
            }

            bindEvents() {
                this.addBtn.addEventListener('click', () => this.addTask());
                this.taskInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.addTask();
                });

                this.filterBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        this.setFilter(e.target.dataset.filter);
                    });
                });
            }

            generateId() {
                return Date.now().toString(36) + Math.random().toString(36).substr(2);
            }

            addTask() {
                const text = this.taskInput.value.trim();
                if (!text) return;

                if (this.editingId) {
                    this.updateTask(this.editingId, text);
                    this.editingId = null;
                    this.addBtn.textContent = 'Adicionar';
                } else {
                    const task = {
                        id: this.generateId(),
                        text: text,
                        completed: false,
                        createdAt: new Date().toISOString()
                    };
                    this.tasks.unshift(task);
                }

                this.taskInput.value = '';
                this.saveTasks();
                this.render();
            }

            updateTask(id, newText) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    task.text = newText;
                }
            }

            toggleTask(id) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    task.completed = !task.completed;
                    this.saveTasks();
                    this.render();
                }
            }

            deleteTask(id) {
                const taskElement = document.querySelector(`[data-id="${id}"]`);
                if (taskElement) {
                    taskElement.classList.add('removing');
                    setTimeout(() => {
                        this.tasks = this.tasks.filter(t => t.id !== id);
                        this.saveTasks();
                        this.render();
                    }, 300);
                }
            }

            editTask(id) {
                const task = this.tasks.find(t => t.id === id);
                if (task) {
                    this.taskInput.value = task.text;
                    this.taskInput.focus();
                    this.editingId = id;
                    this.addBtn.textContent = 'Atualizar';
                }
            }

            setFilter(filter) {
                this.currentFilter = filter;
                this.filterBtns.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === filter);
                });
                this.render();
            }

            getFilteredTasks() {
                switch (this.currentFilter) {
                    case 'pending':
                        return this.tasks.filter(t => !t.completed);
                    case 'completed':
                        return this.tasks.filter(t => t.completed);
                    default:
                        return this.tasks;
                }
            }

            createTaskElement(task) {
                const taskElement = document.createElement('div');
                taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
                taskElement.setAttribute('data-id', task.id);

                taskElement.innerHTML = `
                    <div class="task-checkbox ${task.completed ? 'checked' : ''}" onclick="todoApp.toggleTask('${task.id}')"></div>
                    <div class="task-text">${this.escapeHtml(task.text)}</div>
                    <div class="task-actions">
                        <button class="edit-btn" onclick="todoApp.editTask('${task.id}')">✏️</button>
                        <button class="delete-btn" onclick="todoApp.deleteTask('${task.id}')">🗑️</button>
                    </div>
                `;

                return taskElement;
            }

            escapeHtml(text) {
                const div = document.createElement('div');
                div.textContent = text;
                return div.innerHTML;
            }

            updateStats() {
                const total = this.tasks.length;
                const completed = this.tasks.filter(t => t.completed).length;
                const pending = total - completed;

                this.totalTasks.textContent = total;
                this.pendingTasks.textContent = pending;
                this.completedTasks.textContent = completed;

                this.stats.style.display = total > 0 ? 'flex' : 'none';
            }

            render() {
                const filteredTasks = this.getFilteredTasks();
                
                // Limpar container
                this.tasksContainer.innerHTML = '';

                if (filteredTasks.length === 0) {
                    if (this.tasks.length === 0) {
                        this.tasksContainer.appendChild(this.emptyState);
                    } else {
                        const emptyFilter = document.createElement('div');
                        emptyFilter.className = 'empty-state';
                        emptyFilter.innerHTML = `
                            <div style="font-size: 4rem; margin-bottom: 20px;">🔍</div>
                            <h3>Nenhuma tarefa encontrada</h3>
                            <p>Não há tarefas ${this.currentFilter === 'pending' ? 'pendentes' : 'concluídas'}</p>
                        `;
                        this.tasksContainer.appendChild(emptyFilter);
                    }
                } else {
                    filteredTasks.forEach(task => {
                        this.tasksContainer.appendChild(this.createTaskElement(task));
                    });
                }

                this.updateStats();
            }

            saveTasks() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
        }

        // Inicializar a aplicação
    // Inicializar a aplicação
    const todoApp = new TodoApp();