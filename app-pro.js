// FitnessPro - Professional Training App
// Application State Management

class FitnessApp {
    constructor() {
        this.state = {
            currentWorkout: null,
            currentExercise: 0,
            currentSet: 0,
            workoutStartTime: null,
            isPaused: false,
            timer: {
                isRunning: false,
                timeLeft: 120,
                interval: null,
                type: 'rest' // 'rest' or 'exercise'
            },
            user: {
                weight: 75,
                height: 170,
                workoutTime: '10:00-12:00',
                goal: 'muscle_gain'
            },
            customWorkouts: this.loadCustomWorkouts(),
            workoutHistory: this.loadWorkoutHistory(),
            achievements: this.loadAchievements()
        };

        this.workoutTemplates = this.getWorkoutTemplates();
        this.init();
    }

    // Initialize the application
    init() {
        this.loadTodayWorkout();
        this.renderWorkout();
        this.bindEvents();
        this.updateProgressDisplay();
        
        // Load saved data
        this.loadAppState();
        
        // Register service worker
        this.registerServiceWorker();
    }

    // Workout Templates - Professional gym routines
    getWorkoutTemplates() {
        return {
            // Push Day (Chest, Shoulders, Triceps)
            push: {
                name: "Грудь + Плечи + Трицепс",
                subtitle: "Push Day • Толкающие движения",
                duration: 90,
                exercises: [
                    {
                        name: "Жим штанги лежа",
                        sets: 4,
                        reps: "6-8",
                        weight: "80кг",
                        restTime: 180,
                        type: "compound",
                        muscle: "chest",
                        instructions: "Базовое упражнение для груди. Опускайте штангу до касания груди, выжимайте взрывным движением."
                    },
                    {
                        name: "Жим гантелей на наклонной",
                        sets: 3,
                        reps: "8-10",
                        weight: "32кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "chest",
                        instructions: "Угол наклона 30-45°. Контролируйте движение, растягивайте грудные в нижней точке."
                    },
                    {
                        name: "Жим штанги стоя",
                        sets: 4,
                        reps: "6-8",
                        weight: "55кг",
                        restTime: 180,
                        type: "compound",
                        muscle: "shoulders",
                        instructions: "Базовое упражнение для плеч. Держите корпус напряженным, выжимайте строго вверх."
                    },
                    {
                        name: "Жим гантелей сидя",
                        sets: 3,
                        reps: "10-12",
                        weight: "24кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "shoulders",
                        instructions: "Сидя с поддержкой спины. Полная амплитуда движения."
                    },
                    {
                        name: "Разводка гантелей лежа",
                        sets: 3,
                        reps: "12-15",
                        weight: "18кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "chest",
                        instructions: "Изолирующее упражнение. Концентрируйтесь на растяжении грудных мышц."
                    },
                    {
                        name: "Французский жим лежа",
                        sets: 3,
                        reps: "10-12",
                        weight: "40кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "triceps",
                        instructions: "Работают только предплечья. Локти зафиксированы."
                    },
                    {
                        name: "Отжимания на брусьях",
                        sets: 3,
                        reps: "8-12",
                        weight: "Собственный",
                        restTime: 90,
                        type: "compound",
                        muscle: "triceps",
                        instructions: "Наклон корпуса вперед для акцента на грудь, вертикально - на трицепс."
                    }
                ]
            },

            // Pull Day (Back, Biceps)
            pull: {
                name: "Спина + Бицепс",
                subtitle: "Pull Day • Тянущие движения",
                duration: 85,
                exercises: [
                    {
                        name: "Становая тяга",
                        sets: 4,
                        reps: "5-6",
                        weight: "100кг",
                        restTime: 180,
                        type: "compound",
                        muscle: "back",
                        instructions: "Королева упражнений. Держите спину прямой, тяните пятками в пол."
                    },
                    {
                        name: "Подтягивания широким хватом",
                        sets: 4,
                        reps: "6-10",
                        weight: "Собственный",
                        restTime: 120,
                        type: "compound",
                        muscle: "back",
                        instructions: "Тяните грудью к перекладине. Контролируйте негативную фазу."
                    },
                    {
                        name: "Тяга штанги в наклоне",
                        sets: 4,
                        reps: "8-10",
                        weight: "70кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "back",
                        instructions: "Наклон 45°. Тяните к нижней части груди, сводите лопатки."
                    },
                    {
                        name: "Тяга верхнего блока",
                        sets: 3,
                        reps: "10-12",
                        weight: "65кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "back",
                        instructions: "Тяните к верхней части груди. Отклоняйтесь слегка назад."
                    },
                    {
                        name: "Тяга гантели в наклоне",
                        sets: 3,
                        reps: "10-12",
                        weight: "32кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "back",
                        instructions: "Одной рукой. Полная амплитуда, сводите лопатку в верхней точке."
                    },
                    {
                        name: "Подъем штанги на бицепс",
                        sets: 3,
                        reps: "10-12",
                        weight: "40кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "biceps",
                        instructions: "Локти прижаты к корпусу. Не раскачивайтесь."
                    },
                    {
                        name: "Молотки с гантелями",
                        sets: 3,
                        reps: "12-15",
                        weight: "16кг",
                        restTime: 60,
                        type: "isolation",
                        muscle: "biceps",
                        instructions: "Нейтральный хват. Работает брахиалис и предплечья."
                    }
                ]
            },

            // Leg Day
            legs: {
                name: "Ноги + Ягодицы",
                subtitle: "Leg Day • День ног",
                duration: 95,
                exercises: [
                    {
                        name: "Приседания со штангой",
                        sets: 4,
                        reps: "6-8",
                        weight: "90кг",
                        restTime: 180,
                        type: "compound",
                        muscle: "legs",
                        instructions: "Король упражнений для ног. Приседайте до параллели или ниже."
                    },
                    {
                        name: "Румынская тяга",
                        sets: 4,
                        reps: "8-10",
                        weight: "70кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "legs",
                        instructions: "Акцент на заднюю поверхность бедра. Отводите таз назад."
                    },
                    {
                        name: "Жим ногами",
                        sets: 3,
                        reps: "12-15",
                        weight: "120кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "legs",
                        instructions: "Ставьте ноги на ширине плеч в верхней части платформы."
                    },
                    {
                        name: "Выпады с гантелями",
                        sets: 3,
                        reps: "10-12",
                        weight: "20кг",
                        restTime: 90,
                        type: "compound",
                        muscle: "legs",
                        instructions: "Шагайте достаточно широко. Опускайтесь до касания коленом пола."
                    },
                    {
                        name: "Сгибания ног лежа",
                        sets: 3,
                        reps: "12-15",
                        weight: "40кг",
                        restTime: 90,
                        type: "isolation",
                        muscle: "legs",
                        instructions: "Изолирующее упражнение для бицепса бедра."
                    },
                    {
                        name: "Разгибания ног сидя",
                        sets: 3,
                        reps: "15-20",
                        weight: "45кг",
                        restTime: 60,
                        type: "isolation",
                        muscle: "legs",
                        instructions: "Квадрицепс. Делайте паузу в верхней точке."
                    },
                    {
                        name: "Подъемы на носки стоя",
                        sets: 4,
                        reps: "15-20",
                        weight: "60кг",
                        restTime: 60,
                        type: "isolation",
                        muscle: "calves",
                        instructions: "Полная амплитуда. Пауза в верхней и нижней точках."
                    }
                ]
            },

            // Upper Body
            upper: {
                name: "Верх тела",
                subtitle: "Upper Body • Комплексная тренировка",
                duration: 100,
                exercises: [
                    {
                        name: "Жим штанги лежа",
                        sets: 4,
                        reps: "8-10",
                        weight: "75кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "chest",
                        instructions: "Средний хват, контролируйте негативную фазу."
                    },
                    {
                        name: "Тяга штанги в наклоне",
                        sets: 4,
                        reps: "8-10",
                        weight: "65кг",
                        restTime: 120,
                        type: "compound",
                        muscle: "back",
                        instructions: "Балансируйте нагрузку между грудью и спиной."
                    },
                    {
                        name: "Жим гантелей сидя",
                        sets: 3,
                        reps: "10-12",
                        weight: "22кг",
                        restTime: 90,
                        type: "compound",
                        muscle: "shoulders",
                        instructions: "Плечи. Полная амплитуда движения."
                    },
                    {
                        name: "Подтягивания средним хватом",
                        sets: 3,
                        reps: "8-12",
                        weight: "Собственный",
                        restTime: 90,
                        type: "compound",
                        muscle: "back",
                        instructions: "Средний хват активнее включает бицепс."
                    },
                    {
                        name: "Отжимания на брусьях",
                        sets: 3,
                        reps: "10-15",
                        weight: "Собственный",
                        restTime: 90,
                        type: "compound",
                        muscle: "triceps",
                        instructions: "Универсальное упражнение для груди и трицепса."
                    },
                    {
                        name: "Подъем штанги на бицепс",
                        sets: 3,
                        reps: "10-12",
                        weight: "35кг",
                        restTime: 60,
                        type: "isolation",
                        muscle: "biceps",
                        instructions: "Классическое упражнение для бицепса."
                    }
                ]
            }
        };
    }

    // Load today's workout based on day of week
    loadTodayWorkout() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        
        // Weekly split
        const weeklyPlan = {
            1: 'push',    // Monday
            2: 'pull',    // Tuesday  
            3: 'legs',    // Wednesday
            4: 'upper',   // Thursday
            5: 'push',    // Friday
            6: 'pull',    // Saturday
            0: 'legs'     // Sunday
        };

        const workoutType = weeklyPlan[dayOfWeek];
        this.state.currentWorkout = this.getWorkout(workoutType);
        
        // Update UI
        this.updateWorkoutTitle();
    }

    // Get workout (template or custom)
    getWorkout(type) {
        // Check if user has custom version
        if (this.state.customWorkouts[type]) {
            return this.state.customWorkouts[type];
        }
        
        // Return template
        return this.workoutTemplates[type];
    }

    // Update workout title and subtitle
    updateWorkoutTitle() {
        const workout = this.state.currentWorkout;
        if (!workout) return;

        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dateStr = today.toLocaleDateString('ru-RU', options);

        document.getElementById('workoutTitle').textContent = workout.name;
        document.getElementById('workoutSubtitle').textContent = 
            `${dateStr} • ${this.state.user.workoutTime}`;
        document.getElementById('progressDetails').textContent = 
            `${workout.exercises.length} упражнений • ~${workout.duration} минут`;
    }

    // Render workout exercises
    renderWorkout() {
        const workout = this.state.currentWorkout;
        if (!workout) return;

        const exerciseList = document.getElementById('exerciseList');
        exerciseList.innerHTML = '';

        workout.exercises.forEach((exercise, index) => {
            const exerciseElement = this.createExerciseElement(exercise, index);
            exerciseList.appendChild(exerciseElement);
        });

        this.updateProgress();
    }

    // Create exercise element
    createExerciseElement(exercise, index) {
        const div = document.createElement('div');
        div.className = `exercise-item ${index === this.state.currentExercise ? 'active' : ''}`;
        div.dataset.index = index;

        const completedSets = exercise.completedSets || 0;
        const status = completedSets >= exercise.sets ? 'completed' : 
                      index === this.state.currentExercise ? 'active' : 'pending';

        div.innerHTML = `
            <div class="exercise-header">
                <h3 class="exercise-name">${exercise.name}</h3>
                <span class="exercise-status ${status}">
                    ${status === 'completed' ? 'Выполнено' : 
                      status === 'active' ? 'Активно' : 'Ожидание'}
                </span>
            </div>
            
            <div class="exercise-details">
                <div class="exercise-detail">
                    <div class="exercise-detail-value">${completedSets}/${exercise.sets}</div>
                    <div class="exercise-detail-label">Подходы</div>
                </div>
                <div class="exercise-detail">
                    <div class="exercise-detail-value">${exercise.reps}</div>
                    <div class="exercise-detail-label">Повторения</div>
                </div>
                <div class="exercise-detail">
                    <div class="exercise-detail-value">${exercise.weight}</div>
                    <div class="exercise-detail-label">Вес</div>
                </div>
            </div>

            <div class="timer-section ${index === this.state.currentExercise ? 'active' : ''}">
                <div class="timer-display" id="timer-${index}">
                    ${this.formatTime(exercise.restTime)}
                </div>
                <div class="timer-controls">
                    <button class="btn-icon btn-secondary" onclick="app.startTimer(${index}, ${exercise.restTime})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="5,3 19,12 5,21"></polygon>
                        </svg>
                    </button>
                    <button class="btn-icon btn-secondary" onclick="app.pauseTimer()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                    </button>
                    <button class="btn-icon btn-secondary" onclick="app.resetTimer(${index}, ${exercise.restTime})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23,4 23,10 17,10"></polyline>
                            <polyline points="1,20 1,14 7,14"></polyline>
                            <path d="M20.49,9A9,9,0,0,0,5.64,5.64L1,10m22,4l-4.64,4.36A9,9,0,0,1,3.51,15"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="exercise-actions">
                <button class="action-btn complete-set-btn" onclick="app.showQuickLog(${index})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8Z"></path>
                        <polyline points="14,2 14,8 20,8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                    Записать подход
                </button>
                <button class="action-btn skip-btn" onclick="app.skipExercise(${index})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="5,4 15,12 5,20"></polygon>
                        <line x1="19" y1="5" x2="19" y2="19"></line>
                    </svg>
                    Пропустить
                </button>
                <button class="action-btn btn-secondary" onclick="app.openExerciseEditor(${index})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V11"></path>
                        <path d="M18.5,2.5a2.12,2.12,0,0,1,3,3L12,15l-4,1,1-4Z"></path>
                    </svg>
                    Редактировать
                </button>
            </div>
        `;

        return div;
    }

    // Exercise editor
    openExerciseEditor(exerciseIndex) {
        const exercise = this.state.currentWorkout.exercises[exerciseIndex];
        
        const modalContent = `
            <div class="exercise-editor">
                <h3>Редактировать упражнение</h3>
                
                <div class="input-group">
                    <label class="input-label">Название</label>
                    <input type="text" class="input" id="editName" value="${exercise.name}">
                </div>
                
                <div class="log-inputs">
                    <div class="input-group">
                        <label class="input-label">Подходы</label>
                        <input type="number" class="input" id="editSets" value="${exercise.sets}">
                    </div>
                    <div class="input-group">
                        <label class="input-label">Повторения</label>
                        <input type="text" class="input" id="editReps" value="${exercise.reps}">
                    </div>
                </div>
                
                <div class="log-inputs">
                    <div class="input-group">
                        <label class="input-label">Вес</label>
                        <input type="text" class="input" id="editWeight" value="${exercise.weight}">
                    </div>
                    <div class="input-group">
                        <label class="input-label">Отдых (сек)</label>
                        <input type="number" class="input" id="editRest" value="${exercise.restTime}">
                    </div>
                </div>
                
                <div class="input-group">
                    <label class="input-label">Инструкции</label>
                    <textarea class="input" id="editInstructions" rows="3" style="resize: vertical; min-height: 80px;">${exercise.instructions || ''}</textarea>
                </div>
                
                <div class="exercise-actions">
                    <button class="action-btn complete-set-btn" onclick="app.saveExerciseEdit(${exerciseIndex})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="20,6 9,17 4,12"></polyline>
                        </svg>
                        Сохранить
                    </button>
                    <button class="action-btn btn-secondary" onclick="app.addNewExercise(${exerciseIndex})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Добавить упражнение
                    </button>
                    <button class="action-btn skip-btn" onclick="app.deleteExercise(${exerciseIndex})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3,6 5,6 21,6"></polyline>
                            <path d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        Удалить
                    </button>
                </div>
            </div>

            <style>
                .exercise-editor .input-group {
                    margin-bottom: var(--space-lg);
                }
                
                .exercise-editor .input {
                    width: 100%;
                }
                
                .exercise-editor textarea.input {
                    font-family: inherit;
                    line-height: 1.5;
                }
                
                .exercise-editor .log-inputs {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-md);
                    margin-bottom: var(--space-lg);
                }
                
                .exercise-editor .exercise-actions {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-md);
                }
                
                .exercise-editor .action-btn {
                    width: 100%;
                }
            </style>
        `;

        this.openModal('Редактирование упражнения', modalContent);
    }

    saveExerciseEdit(exerciseIndex) {
        const exercise = this.state.currentWorkout.exercises[exerciseIndex];
        
        // Update exercise properties
        exercise.name = document.getElementById('editName').value;
        exercise.sets = parseInt(document.getElementById('editSets').value);
        exercise.reps = document.getElementById('editReps').value;
        exercise.weight = document.getElementById('editWeight').value;
        exercise.restTime = parseInt(document.getElementById('editRest').value);
        exercise.instructions = document.getElementById('editInstructions').value;

        // Save custom workout
        this.saveCustomWorkout();

        // Re-render
        this.renderWorkout();
        this.closeModal();

        this.showNotification('Упражнение обновлено!', 'success');
    }

    addNewExercise(afterIndex) {
        const newExercise = {
            name: "Новое упражнение",
            sets: 3,
            reps: "8-12",
            weight: "20кг",
            restTime: 90,
            type: "isolation",
            muscle: "custom",
            instructions: "Добавьте описание упражнения"
        };

        // Insert after current exercise
        this.state.currentWorkout.exercises.splice(afterIndex + 1, 0, newExercise);

        // Save and re-render
        this.saveCustomWorkout();
        this.renderWorkout();
        this.closeModal();

        this.showNotification('Упражнение добавлено!', 'success');
    }

    deleteExercise(exerciseIndex) {
        if (confirm('Удалить это упражнение?')) {
            this.state.currentWorkout.exercises.splice(exerciseIndex, 1);
            this.saveCustomWorkout();
            this.renderWorkout();
            this.closeModal();
            this.showNotification('Упражнение удалено!', 'warning');
        }
    }

    // Save custom workout
    saveCustomWorkout() {
        const today = new Date().getDay();
        const weeklyPlan = {
            1: 'push', 2: 'pull', 3: 'legs', 4: 'upper', 5: 'push', 6: 'pull', 0: 'legs'
        };
        const workoutType = weeklyPlan[today];
        
        this.state.customWorkouts[workoutType] = this.state.currentWorkout;
        this.saveToStorage('customWorkouts', this.state.customWorkouts);
    }

    // Timer functions
    startTimer(exerciseIndex, duration) {
        this.state.timer.timeLeft = duration;
        this.state.timer.isRunning = true;
        this.state.timer.exerciseIndex = exerciseIndex;

        this.state.timer.interval = setInterval(() => {
            this.state.timer.timeLeft--;
            this.updateTimerDisplay(exerciseIndex);

            if (this.state.timer.timeLeft <= 0) {
                this.timerComplete();
            }
        }, 1000);

        this.updateTimerDisplay(exerciseIndex);
    }

    pauseTimer() {
        if (this.state.timer.interval) {
            clearInterval(this.state.timer.interval);
            this.state.timer.isRunning = false;
        }
    }

    resetTimer(exerciseIndex, duration) {
        this.pauseTimer();
        this.state.timer.timeLeft = duration;
        this.updateTimerDisplay(exerciseIndex);
    }

    updateTimerDisplay(exerciseIndex) {
        const timerElement = document.getElementById(`timer-${exerciseIndex}`);
        if (timerElement) {
            timerElement.textContent = this.formatTime(this.state.timer.timeLeft);
            
            // Add visual feedback
            if (this.state.timer.timeLeft <= 10 && this.state.timer.isRunning) {
                timerElement.classList.add('animate-pulse');
            } else {
                timerElement.classList.remove('animate-pulse');
            }
        }
    }

    timerComplete() {
        this.pauseTimer();
        
        // Vibrate if supported
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200, 100, 200]);
        }

        // Sound notification
        this.playNotificationSound();

        // Visual notification
        this.showNotification('Время отдыха закончилось!', 'success');
    }

    // Quick log functions
    showQuickLog(exerciseIndex) {
        this.state.currentExercise = exerciseIndex;
        const exercise = this.state.currentWorkout.exercises[exerciseIndex];
        
        // Pre-fill with previous values if available
        const logWeight = document.getElementById('logWeight');
        const logReps = document.getElementById('logReps');
        
        logWeight.value = exercise.weight.replace('кг', '').replace('Собственный', '0');
        logReps.value = exercise.reps.split('-')[0]; // Take first number from range
        
        document.getElementById('quickLog').classList.remove('hidden');
        logWeight.focus();
    }

    hideQuickLog() {
        document.getElementById('quickLog').classList.add('hidden');
    }

    completeSet() {
        const exerciseIndex = this.state.currentExercise;
        const exercise = this.state.currentWorkout.exercises[exerciseIndex];
        const weight = document.getElementById('logWeight').value;
        const reps = document.getElementById('logReps').value;

        // Update exercise
        exercise.completedSets = (exercise.completedSets || 0) + 1;
        exercise.lastWeight = weight;
        exercise.lastReps = reps;

        // Log the set
        this.logSet(exerciseIndex, weight, reps);

        // Hide quick log
        this.hideQuickLog();

        // Re-render exercise
        this.renderWorkout();

        // Move to next exercise if current is complete
        if (exercise.completedSets >= exercise.sets) {
            this.moveToNextExercise();
        }

        // Update progress
        this.updateProgress();
        
        // Show success feedback
        this.showNotification(`Подход записан: ${weight}кг × ${reps}`, 'success');
    }

    // Utility functions
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updateProgress() {
        const workout = this.state.currentWorkout;
        if (!workout) return;

        let completedExercises = 0;
        let totalSets = 0;
        let completedSets = 0;

        workout.exercises.forEach(exercise => {
            totalSets += exercise.sets;
            completedSets += exercise.completedSets || 0;
            if ((exercise.completedSets || 0) >= exercise.sets) {
                completedExercises++;
            }
        });

        const progressPercent = Math.round((completedSets / totalSets) * 100);
        
        // Update progress circle
        const progressCircle = document.getElementById('progressCircle');
        const progressText = document.getElementById('progressText');
        
        if (progressCircle && progressText) {
            progressCircle.style.background = 
                `conic-gradient(var(--accent-primary) ${progressPercent * 3.6}deg, var(--bg-primary) 0deg)`;
            progressText.textContent = `${progressPercent}%`;
        }

        // Update progress title
        const progressTitle = document.getElementById('progressTitle');
        if (progressTitle) {
            if (progressPercent === 0) {
                progressTitle.textContent = 'Готов к тренировке';
            } else if (progressPercent < 100) {
                progressTitle.textContent = `Тренировка в процессе`;
            } else {
                progressTitle.textContent = 'Тренировка завершена!';
            }
        }
    }

    updateProgressDisplay() {
        this.updateProgress();
    }

    // Storage functions
    saveToStorage(key, data) {
        localStorage.setItem(`fitnessPro_${key}`, JSON.stringify(data));
    }

    loadFromStorage(key) {
        const data = localStorage.getItem(`fitnessPro_${key}`);
        return data ? JSON.parse(data) : null;
    }

    loadCustomWorkouts() {
        return this.loadFromStorage('customWorkouts') || {};
    }

    loadWorkoutHistory() {
        return this.loadFromStorage('workoutHistory') || [];
    }

    loadAchievements() {
        return this.loadFromStorage('achievements') || {
            unlocked: [],
            stats: {
                totalWorkouts: 0,
                totalSets: 0,
                currentStreak: 0
            }
        };
    }

    loadAppState() {
        const savedState = this.loadFromStorage('appState');
        if (savedState) {
            this.state = { ...this.state, ...savedState };
        }
    }

    saveAppState() {
        this.saveToStorage('appState', {
            currentExercise: this.state.currentExercise,
            currentSet: this.state.currentSet,
            workoutStartTime: this.state.workoutStartTime
        });
    }

    // Modal functions
    openModal(title, content) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalContent').innerHTML = content;
        document.getElementById('modal').classList.add('active');
    }

    closeModal() {
        document.getElementById('modal').classList.remove('active');
    }

    // Notification system
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style notification
        notification.style.cssText = `
            position: fixed;
            top: calc(env(safe-area-inset-top, 0px) + 20px);
            left: 50%;
            transform: translateX(-50%);
            background: var(--bg-secondary);
            color: var(--text-primary);
            padding: 16px 24px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            z-index: 10000;
            animation: slideUp 0.3s ease-out;
            max-width: 90%;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-out reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Sound notification
    playNotificationSound() {
        // Create audio context for notification sound
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const audioCtx = new (AudioContext || webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

            oscillator.start(audioCtx.currentTime);
            oscillator.stop(audioCtx.currentTime + 0.5);
        }
    }

    // Service Worker registration
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/fitnesspro-app/sw-pro.js')
                    .then(function(registration) {
                        console.log('SW registered: ', registration);
                    }).catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    }

    // Event handlers
    bindEvents() {
        // Auto-save on state changes
        setInterval(() => {
            this.saveAppState();
        }, 30000); // Save every 30 seconds

        // Handle page visibility
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveAppState();
            }
        });
    }

    // Navigation and other utility methods
    moveToNextExercise() {
        if (this.state.currentExercise < this.state.currentWorkout.exercises.length - 1) {
            this.state.currentExercise++;
            this.renderWorkout();
        }
    }

    skipExercise(exerciseIndex) {
        const exercise = this.state.currentWorkout.exercises[exerciseIndex];
        exercise.completedSets = exercise.sets;
        this.renderWorkout();
        this.updateProgress();
        this.showNotification('Упражнение пропущено', 'warning');
    }

    logSet(exerciseIndex, weight, reps) {
        const logEntry = {
            date: new Date().toISOString(),
            exerciseIndex,
            exerciseName: this.state.currentWorkout.exercises[exerciseIndex].name,
            weight: parseFloat(weight) || 0,
            reps: parseInt(reps) || 0
        };

        if (!this.state.workoutHistory) {
            this.state.workoutHistory = [];
        }

        this.state.workoutHistory.push(logEntry);
        this.saveToStorage('workoutHistory', this.state.workoutHistory);
    }
}

// Global functions for HTML onclick handlers
let app;

function showQuickLog(exerciseIndex) {
    app.showQuickLog(exerciseIndex);
}

function hideQuickLog() {
    app.hideQuickLog();
}

function completeSet() {
    app.completeSet();
}

function openModal(type) {
    if (type === 'statistics') {
        app.openModal('Статистика', '<p>Статистика тренировок в разработке...</p>');
    } else if (type === 'achievements') {
        app.openModal('Достижения', '<p>Система достижений в разработке...</p>');
    } else if (type === 'settings') {
        app.openModal('Настройки', '<p>Настройки приложения в разработке...</p>');
    }
}

function closeModal() {
    app.closeModal();
}

function switchTab(tab) {
    // Handle navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.nav-item').classList.add('active');
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    app = new FitnessApp();
});
