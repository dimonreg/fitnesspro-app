// Программы тренировок
const workoutPrograms = {
    1: {
        title: "День 1: Грудь + Трицепс",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Динамическая разминка",
                description: "Круговые движения руками, разминка суставов, легкие отжимания от стены",
                duration: 300, // 5 минут в секундах
                sets: null,
                reps: null,
                tips: "Подготовьте плечевые суставы и грудные мышцы к нагрузке"
            },
            {
                phase: "main",
                name: "Жим штанги лежа",
                description: "Лягте на скамью, опустите штангу к груди, выжмите вверх",
                sets: 4,
                reps: "8-12",
                duration: 180,
                weight: () => getPersonalWeight("Жим штанги лежа"),
                tips: "Сведите лопатки, не отрывайте таз от скамьи",
                muscles: ["Грудь", "Трицепс", "Передние дельты"]
            },
            {
                phase: "main",
                name: "Жим гантелей на наклонной скамье",
                description: "Скамья под углом 30°, жмите гантели к верхней части груди",
                sets: 4,
                reps: "10-12",
                duration: 150,
                weight: () => getPersonalWeight("Жим гантелей на наклонной скамье"),
                tips: "Полная амплитуда, контролируемое движение",
                muscles: ["Верх груди", "Передние дельты"]
            },
            {
                phase: "main",
                name: "Отжимания на брусьях",
                description: "Наклоните корпус вперед для акцента на грудь",
                sets: 3,
                reps: "8-15",
                duration: 120,
                tips: "Не опускайтесь слишком низко, контролируйте движение",
                muscles: ["Грудь", "Трицепс"]
            },
            {
                phase: "main",
                name: "Разведение гантелей лежа",
                description: "Разводите руки в стороны, чувствуя растяжение груди",
                sets: 3,
                reps: "12-15",
                duration: 120,
                weight: () => getPersonalWeight("Разведение гантелей лежа"),
                tips: "Руки слегка согнуты, как будто обнимаете дерево",
                muscles: ["Грудь"]
            },
            {
                phase: "main",
                name: "Жим штанги узким хватом",
                description: "Хват на ширине плеч, локти близко к телу",
                sets: 4,
                reps: "8-12",
                duration: 150,
                weight: () => getPersonalWeight("Жим штанги узким хватом"),
                tips: "Основная работа трицепсами, не расставляйте локти",
                muscles: ["Трицепс", "Грудь"]
            },
            {
                phase: "main",
                name: "Разгибания рук на блоке",
                description: "Локти прижаты к бокам, разгибайте только предплечья",
                sets: 3,
                reps: "12-15",
                duration: 90,
                tips: "Полное разгибание, контролируйте негативную фазу",
                muscles: ["Трицепс"]
            },
            {
                phase: "main",
                name: "Французский жим лежа",
                description: "Опускайте вес за голову, работают только локти",
                sets: 3,
                reps: "10-12",
                duration: 120,
                weight: () => getPersonalWeight("Французский жим лежа"),
                tips: "Локти неподвижны, медленное опускание",
                muscles: ["Трицепс"]
            },
            {
                phase: "main",
                name: "Отжимания с узкой постановкой рук",
                description: "Руки образуют 'алмаз', локти к телу",
                sets: 3,
                reps: "8-15",
                duration: 90,
                tips: "Медленное выполнение, полная амплитуда",
                muscles: ["Трицепс", "Внутренняя часть груди"]
            },
            {
                phase: "cooldown",
                name: "Растяжка грудных мышц",
                description: "Растяжка в дверном проеме, боковые наклоны",
                duration: 300,
                tips: "Держите каждую позицию 30-60 секунд"
            }
        ]
    },
    
    2: {
        title: "День 2: Спина + Бицепс",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Разминка спины и рук",
                description: "Круговые движения плечами, наклоны, подтягивания на низкой перекладине",
                duration: 300,
                tips: "Подготовьте широчайшие мышцы к нагрузке"
            },
            {
                phase: "main",
                name: "Подтягивания широким хватом",
                description: "Хват шире плеч, тяните грудь к перекладине",
                sets: 4,
                reps: "6-12",
                duration: 180,
                tips: "Сводите лопатки, не раскачивайтесь",
                muscles: ["Широчайшие", "Ромбовидные", "Бицепс"]
            },
            {
                phase: "main",
                name: "Тяга штанги в наклоне",
                description: "Наклон 45°, тяните штангу к нижней части живота",
                sets: 4,
                reps: "8-12",
                duration: 150,
                weight: () => getPersonalWeight("Тяга штанги в наклоне"),
                tips: "Спина прямая, движение начинается лопатками",
                muscles: ["Широчайшие", "Ромбовидные", "Задние дельты"]
            },
            {
                phase: "main",
                name: "Тяга верхнего блока к груди",
                description: "Широкий хват, тяните к верхней части груди",
                sets: 4,
                reps: "10-12",
                duration: 120,
                tips: "Корпус слегка отклонен назад, грудь вперед",
                muscles: ["Широчайшие", "Ромбовидные"]
            },
            {
                phase: "main",
                name: "Тяга гантели одной рукой",
                description: "Упор коленом в скамью, тяните гантель к поясу",
                sets: 3,
                reps: "10-12",
                duration: 120,
                weight: () => getPersonalWeight("Тяга гантели одной рукой"),
                tips: "Максимальное сведение лопатки в верхней точке",
                muscles: ["Широчайшие", "Ромбовидные"]
            },
            {
                phase: "main",
                name: "Подтягивания обратным хватом",
                description: "Хват снизу на ширине плеч, акцент на бицепс",
                sets: 3,
                reps: "6-10",
                duration: 150,
                tips: "Локти к телу, чувствуйте работу бицепсов",
                muscles: ["Бицепс", "Широчайшие"]
            },
            {
                phase: "main",
                name: "Сгибания рук со штангой стоя",
                description: "Локти прижаты к бокам, подъем к плечам",
                sets: 4,
                reps: "8-12",
                duration: 120,
                weight: () => getPersonalWeight("Сгибания рук со штангой стоя"),
                tips: "Не раскачивайтесь, контролируйте движение",
                muscles: ["Бицепс"]
            },
            {
                phase: "main",
                name: "Молотковые сгибания с гантелями",
                description: "Нейтральный хват, подъем к плечам",
                sets: 3,
                reps: "10-12",
                duration: 90,
                weight: () => getPersonalWeight("Молотковые сгибания с гантелями"),
                tips: "Запястья прямые, можно чередовать руки",
                muscles: ["Бицепс", "Плечелучевая"]
            },
            {
                phase: "main",
                name: "Концентрированные сгибания",
                description: "Локоть упирается в бедро, изолированная работа",
                sets: 3,
                reps: "12-15",
                duration: 90,
                weight: () => getPersonalWeight("Концентрированные сгибания"),
                tips: "Медленно, чувствуйте каждое сокращение",
                muscles: ["Бицепс"]
            },
            {
                phase: "cooldown",
                name: "Растяжка спины и рук",
                description: "Вис на перекладине, растяжка широчайших, бицепсов",
                duration: 300,
                tips: "Расслабьте мышцы, глубокое дыхание"
            }
        ]
    },
    
    3: {
        title: "День 3: Ноги + Ягодицы",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Разминка ног",
                description: "Приседания без веса, выпады, круговые движения в тазобедренном суставе",
                duration: 300,
                tips: "Разогрейте все суставы ног"
            },
            {
                phase: "main",
                name: "Приседания со штангой",
                description: "Штанга на трапециях, ноги на ширине плеч, присед до параллели",
                sets: 5,
                reps: "8-12",
                duration: 180,
                weight: () => getPersonalWeight("Приседания со штангой"),
                tips: "Колени в направлении носков, спина прямая",
                muscles: ["Квадрицепс", "Ягодицы", "Задняя поверхность"]
            },
            {
                phase: "main",
                name: "Румынская становая тяга",
                description: "Штанга в руках, наклон с отведением таза назад",
                sets: 4,
                reps: "10-12",
                duration: 150,
                weight: () => getPersonalWeight("Румынская становая тяга"),
                tips: "Чувствуйте растяжение задней поверхности бедра",
                muscles: ["Задняя поверхность", "Ягодицы"]
            },
            {
                phase: "main",
                name: "Жим ногами в тренажере",
                description: "Ноги на ширине плеч, полная амплитуда движения",
                sets: 4,
                reps: "12-15",
                duration: 120,
                weight: () => getPersonalWeight("Жим ногами в тренажере"),
                tips: "Не блокируйте колени в верхней точке",
                muscles: ["Квадрицепс", "Ягодицы"]
            },
            {
                phase: "main",
                name: "Болгарские приседания",
                description: "Задняя нога на скамье, приседания на передней ноге",
                sets: 3,
                reps: "10-12",
                duration: 120,
                weight: () => getPersonalWeight("Болгарские приседания"),
                tips: "Основной вес на передней ноге, корпус слегка вперед",
                muscles: ["Квадрицепс", "Ягодицы"]
            },
            {
                phase: "main",
                name: "Выпады с гантелями",
                description: "Большой шаг вперед, опускание до угла 90° в коленях",
                sets: 3,
                reps: "12-15",
                duration: 120,
                weight: () => getPersonalWeight("Выпады с гантелями"),
                tips: "Корпус прямой, заднее колено почти касается пола",
                muscles: ["Квадрицепс", "Ягодицы"]
            },
            {
                phase: "main",
                name: "Подъемы на носки стоя",
                description: "Максимальный подъем на носки, полная амплитуда",
                sets: 4,
                reps: "15-20",
                duration: 90,
                weight: () => getPersonalWeight("Подъемы на носки стоя"),
                tips: "Задержка в верхней точке, медленное опускание",
                muscles: ["Икроножные"]
            },
            {
                phase: "main",
                name: "Подъемы на носки сидя",
                description: "Сидя в тренажере, подъем на носки с весом на коленях",
                sets: 3,
                reps: "15-20",
                duration: 90,
                tips: "Акцент на камбаловидные мышцы",
                muscles: ["Камбаловидные"]
            },
            {
                phase: "cooldown",
                name: "Растяжка ног",
                description: "Растяжка квадрицепса, задней поверхности, икр",
                duration: 300,
                tips: "Держите растяжку 30-60 секунд на каждую мышцу"
            }
        ]
    },
    
    4: {
        title: "День 4: Плечи + Пресс",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Разминка плеч",
                description: "Круговые движения руками, махи, разминка ротаторной манжеты",
                duration: 300,
                tips: "Тщательно разомните плечевые суставы"
            },
            {
                phase: "main",
                name: "Жим гантелей сидя",
                description: "Сидя на скамье, жим гантелей от плеч вверх",
                sets: 4,
                reps: "8-12",
                duration: 150,
                weight: () => getPersonalWeight("Жим гантелей сидя"),
                tips: "Спина прижата к спинке, полная амплитуда",
                muscles: ["Передние дельты", "Средние дельты"]
            },
            {
                phase: "main",
                name: "Разведение рук с гантелями в стороны",
                description: "Стоя, подъем рук в стороны до уровня плеч",
                sets: 4,
                reps: "12-15",
                duration: 120,
                weight: () => getPersonalWeight("Разведение рук с гантелями в стороны"),
                tips: "Ведите движение локтями, не поднимайте выше плеч",
                muscles: ["Средние дельты"]
            },
            {
                phase: "main",
                name: "Разведение рук в наклоне",
                description: "Наклон вперед 45°, разведение рук в стороны",
                sets: 4,
                reps: "12-15",
                duration: 120,
                weight: () => getPersonalWeight("Разведение рук в наклоне"),
                tips: "Акцент на задние дельты, небольшой изгиб в локтях",
                muscles: ["Задние дельты"]
            },
            {
                phase: "main",
                name: "Подъем гантелей перед собой",
                description: "Поочередный или одновременный подъем рук вперед",
                sets: 3,
                reps: "12-15",
                duration: 90,
                weight: () => getPersonalWeight("Подъем гантелей перед собой"),
                tips: "Не поднимайте выше уровня плеч",
                muscles: ["Передние дельты"]
            },
            {
                phase: "main",
                name: "Шраги с гантелями",
                description: "Подъем плеч вверх, максимальное сокращение трапеций",
                sets: 3,
                reps: "12-15",
                duration: 90,
                tips: "Только вертикальное движение, не вращайте плечами",
                muscles: ["Верхняя трапеция"]
            },
            {
                phase: "main",
                name: "Планка",
                description: "Упор на предплечьях, тело прямой линией",
                sets: 4,
                reps: "30-60 сек",
                duration: 90,
                tips: "Не прогибайтесь в пояснице, напрягите кор",
                muscles: ["Прямая мышца живота", "Кор"]
            },
            {
                phase: "main",
                name: "Скручивания",
                description: "Лежа на спине, подъем лопаток от пола",
                sets: 4,
                reps: "15-20",
                duration: 60,
                tips: "Не тяните шею руками, работает только пресс",
                muscles: ["Прямая мышца живота"]
            },
            {
                phase: "main",
                name: "Велосипед",
                description: "Лежа на спине, поочередное касание локтем противоположного колена",
                sets: 3,
                reps: "20-30",
                duration: 60,
                tips: "Контролируемое движение, полное скручивание",
                muscles: ["Косые мышцы живота"]
            },
            {
                phase: "main",
                name: "Подъемы ног лежа",
                description: "Лежа на спине, подъем прямых ног до 90°",
                sets: 3,
                reps: "12-15",
                duration: 60,
                tips: "Поясница прижата к полу, не опускайте ноги до конца",
                muscles: ["Нижняя часть пресса"]
            },
            {
                phase: "cooldown",
                name: "Растяжка плеч и кора",
                description: "Растяжка дельт, заминка для мышц кора",
                duration: 300,
                tips: "Расслабьте все мышцы, восстановите дыхание"
            }
        ]
    },
    
    5: {
        title: "День 5: Верх Тела",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Комплексная разминка верха",
                description: "Разминка всех суставов верхней части тела",
                duration: 300,
                tips: "Подготовьте все мышцы верха к комплексной нагрузке"
            },
            {
                phase: "main",
                name: "Отжимания от пола",
                description: "Классические отжимания с правильной техникой",
                sets: 4,
                reps: "10-20",
                duration: 120,
                tips: "Корпус прямой линией, полная амплитуда",
                muscles: ["Грудь", "Трицепс", "Передние дельты"]
            },
            {
                phase: "main",
                name: "Обратные отжимания",
                description: "Руки на скамье за спиной, отжимания спиной к скамье",
                sets: 3,
                reps: "10-15",
                duration: 120,
                tips: "Не опускайтесь слишком низко, акцент на трицепс",
                muscles: ["Трицепс", "Передние дельты"]
            },
            {
                phase: "main",
                name: "Тяга гантелей в наклоне",
                description: "Наклон 45°, тяга обеих гантелей к поясу",
                sets: 4,
                reps: "10-12",
                duration: 120,
                weight: () => getPersonalWeight("Тяга гантелей в наклоне"),
                tips: "Сводите лопатки, локти к телу",
                muscles: ["Широчайшие", "Ромбовидные"]
            },
            {
                phase: "main",
                name: "Жим гантелей лежа",
                description: "Жим гантелей на горизонтальной скамье",
                sets: 3,
                reps: "10-12",
                duration: 120,
                weight: () => getPersonalWeight("Жим гантелей лежа"),
                tips: "Полная амплитуда, контролируемое движение",
                muscles: ["Грудь", "Трицепс"]
            },
            {
                phase: "main",
                name: "Сгибания рук с гантелями",
                description: "Поочередные или одновременные сгибания",
                sets: 3,
                reps: "12-15",
                duration: 90,
                weight: () => getPersonalWeight("Сгибания рук с гантелями"),
                tips: "Локти неподвижны, полное сокращение",
                muscles: ["Бицепс"]
            },
            {
                phase: "main",
                name: "Жим Арнольда",
                description: "Вращение гантелей во время жима",
                sets: 3,
                reps: "10-12",
                duration: 120,
                tips: "Плавное движение, контроль во всех фазах",
                muscles: ["Все пучки дельт"]
            },
            {
                phase: "main",
                name: "Суперсет: Планка + Отжимания",
                description: "30 сек планка, затем отжимания до отказа",
                sets: 3,
                reps: "30 сек + макс",
                duration: 120,
                tips: "Без отдыха между упражнениями",
                muscles: ["Кор", "Грудь", "Трицепс"]
            },
            {
                phase: "cooldown",
                name: "Комплексная растяжка верха",
                description: "Растяжка всех мышц верхней части тела",
                duration: 300,
                tips: "Уделите внимание каждой мышечной группе"
            }
        ]
    },
    
    6: {
        title: "День 6: Функциональная",
        totalTime: 90,
        exercises: [
            {
                phase: "warmup",
                name: "Динамическая разминка",
                description: "Суставная гимнастика, активизация всех систем",
                duration: 300,
                tips: "Подготовьте тело к функциональным движениям"
            },
            {
                phase: "main",
                name: "Берпи",
                description: "Упор лежа → отжимание → прыжок в присед → прыжок вверх",
                sets: 4,
                reps: "8-12",
                duration: 120,
                tips: "Выполняйте в своем темпе, техника важнее скорости",
                muscles: ["Все тело"]
            },
            {
                phase: "main",
                name: "Скалолаз",
                description: "В планке поочередно подтягивайте колени к груди",
                sets: 4,
                reps: "30 сек",
                duration: 90,
                tips: "Держите бедра на месте, высокий темп",
                muscles: ["Кор", "Кардио"]
            },
            {
                phase: "main",
                name: "Приседания с прыжком",
                description: "Обычное приседание + взрывной прыжок вверх",
                sets: 4,
                reps: "10-15",
                duration: 120,
                tips: "Мягкое приземление, полное приседание",
                muscles: ["Ноги", "Ягодицы", "Кардио"]
            },
            {
                phase: "main",
                name: "Отжимания с хлопком",
                description: "Взрывные отжимания с хлопком в полете",
                sets: 3,
                reps: "5-10",
                duration: 120,
                tips: "Начните с обычных взрывных отжиманий",
                muscles: ["Грудь", "Трицепс", "Мощность"]
            },
            {
                phase: "main",
                name: "Выпады в прыжке",
                description: "Смена ног в прыжке из положения выпада",
                sets: 3,
                reps: "20 всего",
                duration: 120,
                tips: "Контролируйте приземление, руки помогают балансу",
                muscles: ["Ноги", "Ягодицы", "Баланс"]
            },
            {
                phase: "main",
                name: "Русские скручивания с весом",
                description: "Сидя, поворот корпуса с касанием веса пола",
                sets: 3,
                reps: "20-30",
                duration: 90,
                weight: () => getPersonalWeight("Русские скручивания с весом"),
                tips: "Ноги оторваны от пола, корпус под углом",
                muscles: ["Косые мышцы", "Кор"]
            },
            {
                phase: "main",
                name: "Dead Bug",
                description: "На спине, опускание противоположных руки и ноги",
                sets: 3,
                reps: "10 на сторону",
                duration: 90,
                tips: "Поясница прижата к полу, медленное движение",
                muscles: ["Глубокие мышцы кора"]
            },
            {
                phase: "main",
                name: "Боковая планка",
                description: "Планка на боку, удержание положения",
                sets: 3,
                reps: "30-45 сек",
                duration: 90,
                tips: "Прямая линия тела, для усложнения поднимите ногу",
                muscles: ["Косые мышцы", "Стабилизаторы"]
            },
            {
                phase: "main",
                name: "Круговая тренировка",
                description: "5 упражнений по 30 сек без отдыха: прыжки, отжимания, приседания, планка, скалолаз",
                sets: 2,
                reps: "5 х 30 сек",
                duration: 180,
                tips: "Максимальная интенсивность, 2 минуты отдых между кругами",
                muscles: ["Все тело", "Выносливость"]
            },
            {
                phase: "cooldown",
                name: "Заминка и растяжка",
                description: "Медленные движения, глубокая растяжка, дыхательные упражнения",
                duration: 300,
                tips: "Постепенно снижайте пульс, расслабьте все мышцы"
            }
        ]
    }
};

// Состояние приложения
let currentWorkout = null;
let currentExerciseIndex = 0;
let timerInterval = null;
let currentTime = 0;
let isTimerRunning = false;

// DOM элементы
const dayCards = document.querySelectorAll('.day-card');
const workoutModal = document.getElementById('workoutModal');
const closeBtn = document.getElementById('closeBtn');
const workoutTitle = document.getElementById('workoutTitle');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const exerciseCard = document.getElementById('exerciseCard');
const exercisePhase = document.getElementById('exercisePhase');
const exerciseName = document.getElementById('exerciseName');
const setsReps = document.getElementById('setsReps');
const exerciseDescription = document.getElementById('exerciseDescription');
const timer = document.getElementById('timer');
const startPauseBtn = document.getElementById('startPauseBtn');
const skipBtn = document.getElementById('skipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Новые элементы для статистики и настроек
const statsBtn = document.getElementById('statsBtn');
const settingsBtn = document.getElementById('settingsBtn');
const statsModal = document.getElementById('statsModal');
const settingsModal = document.getElementById('settingsModal');
const closeStatsBtn = document.getElementById('closeStatsBtn');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');

// Персональные параметры пользователя
const userProfile = {
    height: 180, // см
    weight: 71,  // кг
    experience: 'intermediate', // beginner, intermediate, advanced
    goal: 'muscle_gain' // muscle_gain, strength, endurance
};

// Калькулятор персональных весов
const personalWeights = {
    // Базовые упражнения (кг)
    squat: Math.round(userProfile.weight * 1.2), // 85кг
    deadlift: Math.round(userProfile.weight * 1.4), // 99кг  
    benchPress: Math.round(userProfile.weight * 0.9), // 64кг
    overheadPress: Math.round(userProfile.weight * 0.6), // 43кг
    
    // Гантели (кг за гантель)
    dumbbellPress: Math.round(userProfile.weight * 0.35), // 25кг
    dumbbellRow: Math.round(userProfile.weight * 0.4), // 28кг
    dumbbellCurl: Math.round(userProfile.weight * 0.2), // 14кг
    dumbbellShoulder: Math.round(userProfile.weight * 0.18), // 13кг
    
    // Собственный вес и вспомогательные
    pullups: 0, // собственный вес
    dips: 0,    // собственный вес
    planks: 60  // секунды
};

// Система прогрессии
const progressionSystem = {
    // Увеличение весов при успешном выполнении всех подходов
    increments: {
        barbell: 2.5,    // кг для штанги
        dumbbell: 1.25,  // кг для гантелей
        bodyweight: 1,   // дополнительные повторения
        time: 5          // секунды для упражнений на время
    },
    
    // Критерии для увеличения нагрузки
    criteria: {
        minRepsCompleted: 0.8, // 80% повторений выполнено
        consecutiveSessions: 2  // 2 успешные тренировки подряд
    },
    
    // Deload (снижение нагрузки для восстановления)
    deload: {
        frequency: 6, // каждые 6 недель
        reduction: 0.9 // снижение на 10%
    }
};

// Хранилище прогресса упражнений
let exerciseProgress = JSON.parse(localStorage.getItem('exerciseProgress')) || {};

// Настройки приложения
let appSettings = {
    soundEnabled: true,
    restTime: 90,
    autoStart: true,
    vibrationEnabled: true,
    keepScreenOn: false,
    autoProgression: true, // новый параметр
    progressionRate: 1.0   // множитель скорости прогрессии
};

// Статистика
let workoutStats = {
    totalWorkouts: 0,
    totalTime: 0,
    currentStreak: 0,
    lastWorkoutDate: null,
    completedDays: {},
    favoriteDay: null
};

// Загрузка настроек и статистики из localStorage
function loadData() {
    const savedSettings = localStorage.getItem('workoutSettings');
    const savedStats = localStorage.getItem('workoutStats');
    
    if (savedSettings) {
        appSettings = { ...appSettings, ...JSON.parse(savedSettings) };
        updateSettingsUI();
    }
    
    if (savedStats) {
        workoutStats = { ...workoutStats, ...JSON.parse(savedStats) };
        updateStatsUI();
    }
}

// Сохранение данных
function saveSettings() {
    localStorage.setItem('workoutSettings', JSON.stringify(appSettings));
}

function saveStats() {
    localStorage.setItem('workoutStats', JSON.stringify(workoutStats));
}

function saveProgress() {
    localStorage.setItem('exerciseProgress', JSON.stringify(exerciseProgress));
}

// Получение персонального веса для упражнения
function getPersonalWeight(exerciseName) {
    // Если есть сохраненный прогресс, используем его
    if (exerciseProgress[exerciseName]) {
        return exerciseProgress[exerciseName].currentWeight;
    }
    
    // Иначе используем стартовые веса на основе параметров
    const name = exerciseName.toLowerCase();
    
    if (name.includes('приседания') || name.includes('squat')) {
        return personalWeights.squat;
    } else if (name.includes('становая') || name.includes('deadlift')) {
        return personalWeights.deadlift;
    } else if (name.includes('жим штанги лежа') || name.includes('bench')) {
        return personalWeights.benchPress;
    } else if (name.includes('жим стоя') || name.includes('армейский')) {
        return personalWeights.overheadPress;
    } else if (name.includes('жим гантелей') || name.includes('гантел')) {
        return personalWeights.dumbbellPress;
    } else if (name.includes('тяга') && name.includes('гантел')) {
        return personalWeights.dumbbellRow;
    } else if (name.includes('сгибания') || name.includes('бицепс')) {
        return personalWeights.dumbbellCurl;
    } else if (name.includes('разведение') || name.includes('махи')) {
        return personalWeights.dumbbellShoulder;
    } else if (name.includes('подтягивания') || name.includes('отжимания на брусьях')) {
        return 0; // собственный вес
    } else {
        // Для остальных упражнений используем средний вес
        return Math.round(userProfile.weight * 0.25);
    }
}

// Инициализация прогресса упражнения
function initializeExerciseProgress(exerciseName) {
    if (!exerciseProgress[exerciseName]) {
        exerciseProgress[exerciseName] = {
            currentWeight: getPersonalWeight(exerciseName),
            lastUpdated: new Date().toISOString(),
            sessions: [],
            totalSessions: 0,
            successfulSessions: 0,
            needsDeload: false
        };
        saveProgress();
    }
}

// Обновление прогресса после выполнения упражнения
function updateExerciseProgress(exerciseName, setsCompleted, totalSets, repsCompleted, targetReps) {
    initializeExerciseProgress(exerciseName);
    
    const progress = exerciseProgress[exerciseName];
    const completionRate = repsCompleted / targetReps;
    const setsCompletionRate = setsCompleted / totalSets;
    
    // Записываем результат тренировки
    const sessionResult = {
        date: new Date().toISOString(),
        weight: progress.currentWeight,
        setsCompleted,
        totalSets,
        repsCompleted,
        targetReps,
        successful: completionRate >= progressionSystem.criteria.minRepsCompleted && 
                   setsCompletionRate >= progressionSystem.criteria.minRepsCompleted
    };
    
    progress.sessions.push(sessionResult);
    progress.totalSessions++;
    
    if (sessionResult.successful) {
        progress.successfulSessions++;
    }
    
    // Проверяем необходимость увеличения веса
    if (appSettings.autoProgression && shouldIncreaseWeight(exerciseName)) {
        increaseWeight(exerciseName);
    }
    
    // Проверяем необходимость deload
    if (shouldDeload(exerciseName)) {
        performDeload(exerciseName);
    }
    
    saveProgress();
}

// Проверка необходимости увеличения веса
function shouldIncreaseWeight(exerciseName) {
    const progress = exerciseProgress[exerciseName];
    const recentSessions = progress.sessions.slice(-progressionSystem.criteria.consecutiveSessions);
    
    return recentSessions.length >= progressionSystem.criteria.consecutiveSessions &&
           recentSessions.every(session => session.successful);
}

// Увеличение веса
function increaseWeight(exerciseName) {
    const progress = exerciseProgress[exerciseName];
    const name = exerciseName.toLowerCase();
    let increment = progressionSystem.increments.dumbbell;
    
    // Определяем размер увеличения в зависимости от типа упражнения
    if (name.includes('штанг') || name.includes('становая') || name.includes('приседания')) {
        increment = progressionSystem.increments.barbell;
    } else if (name.includes('подтягивания') || name.includes('отжимания') || name.includes('планка')) {
        increment = progressionSystem.increments.bodyweight;
    }
    
    // Применяем множитель скорости прогрессии
    increment *= appSettings.progressionRate;
    
    progress.currentWeight += increment;
    progress.lastUpdated = new Date().toISOString();
    
    // Показываем уведомление о прогрессии
    showProgressionNotification(exerciseName, increment);
}

// Проверка необходимости deload
function shouldDeload(exerciseName) {
    const progress = exerciseProgress[exerciseName];
    const weeksSinceStart = Math.floor(progress.totalSessions / 2); // примерно 2 тренировки в неделю
    
    return weeksSinceStart > 0 && 
           weeksSinceStart % progressionSystem.deload.frequency === 0 &&
           !progress.needsDeload;
}

// Выполнение deload
function performDeload(exerciseName) {
    const progress = exerciseProgress[exerciseName];
    progress.currentWeight *= progressionSystem.deload.reduction;
    progress.currentWeight = Math.round(progress.currentWeight * 4) / 4; // округляем до 0.25кг
    progress.needsDeload = true;
    
    showDeloadNotification(exerciseName);
}

// Уведомления о прогрессии
function showProgressionNotification(exerciseName, increment) {
    if (appSettings.soundEnabled) {
        playProgressionSound();
    }
    
    if (appSettings.vibrationEnabled) {
        vibrate([100, 50, 100, 50, 100]);
    }
    
    // Можно добавить визуальное уведомление
    console.log(`🎉 Прогрессия! ${exerciseName}: +${increment}кг`);
}

function showDeloadNotification(exerciseName) {
    console.log(`🔄 Deload неделя для ${exerciseName}`);
}

// Специальный звук прогрессии
function playProgressionSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Мелодичный звук успеха
    [440, 554, 659].forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime + index * 0.15);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime + index * 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + index * 0.15 + 0.3);
        
        oscillator.start(audioContext.currentTime + index * 0.15);
        oscillator.stop(audioContext.currentTime + index * 0.15 + 0.3);
    });
}

// Обработчики событий
dayCards.forEach(card => {
    card.addEventListener('click', () => {
        const day = card.dataset.day;
        startWorkout(day);
    });
});

closeBtn.addEventListener('click', closeWorkout);
startPauseBtn.addEventListener('click', toggleTimer);
skipBtn.addEventListener('click', skipExercise);
prevBtn.addEventListener('click', prevExercise);
nextBtn.addEventListener('click', nextExercise);

// Обработчики для статистики и настроек
statsBtn.addEventListener('click', openStats);
settingsBtn.addEventListener('click', openSettings);
closeStatsBtn.addEventListener('click', closeStats);
closeSettingsBtn.addEventListener('click', closeSettings);

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupPWA();
    setupSettingsHandlers();
});

// Функции управления тренировкой
function startWorkout(day) {
    currentWorkout = workoutPrograms[day];
    currentExerciseIndex = 0;
    
    if (!currentWorkout) return;
    
    workoutTitle.textContent = currentWorkout.title;
    workoutModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    displayCurrentExercise();
    updateProgress();
}

function closeWorkout() {
    workoutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    stopTimer();
    currentWorkout = null;
    currentExerciseIndex = 0;
}

function displayCurrentExercise() {
    if (!currentWorkout || currentExerciseIndex >= currentWorkout.exercises.length) {
        // Тренировка завершена
        completeWorkout();
        return;
    }
    
    const exercise = currentWorkout.exercises[currentExerciseIndex];
    
    // Обновляем фазу тренировки
    exercisePhase.textContent = getPhaseText(exercise.phase);
    exerciseCard.className = `exercise-card ${exercise.phase}`;
    
    // Основная информация
    exerciseName.textContent = exercise.name;
    exerciseDescription.textContent = exercise.description;
    
    // Подходы и повторения
    if (exercise.sets && exercise.reps) {
        let weightInfo = '';
        if (exercise.weight && typeof exercise.weight === 'function') {
            const currentWeight = exercise.weight();
            if (currentWeight > 0) {
                weightInfo = ` • ${currentWeight}кг`;
            }
        }
        setsReps.textContent = `${exercise.sets} подходов × ${exercise.reps} повторений${weightInfo}`;
    } else if (exercise.duration && exercise.phase !== 'main') {
        setsReps.textContent = `${Math.floor(exercise.duration / 60)} минут`;
    } else if (exercise.reps) {
        setsReps.textContent = exercise.reps;
    } else {
        setsReps.textContent = 'Выполняйте в своем темпе';
    }
    
    // Добавляем мышечные группы если есть
    updateMuscleGroups(exercise);
    
    // Добавляем советы если есть
    updateExerciseTips(exercise);
    
    // Показываем прогресс для силовых упражнений
    updateExerciseProgress(exercise);
    
    // Настройка таймера
    if (exercise.duration) {
        currentTime = exercise.duration;
        updateTimerDisplay();
        timer.style.display = 'block';
        document.querySelector('.timer-controls').style.display = 'flex';
    } else {
        timer.style.display = 'none';
        document.querySelector('.timer-controls').style.display = 'none';
    }
    
    // Обновляем состояние кнопок навигации
    updateNavigationButtons();
    
    // Сбрасываем таймер
    stopTimer();
    startPauseBtn.textContent = 'Старт';
}

function getPhaseText(phase) {
    const phaseTexts = {
        'warmup': 'Разминка',
        'main': 'Основная часть',
        'cooldown': 'Заминка',
        'rest': 'Отдых'
    };
    return phaseTexts[phase] || 'Упражнение';
}

function updateMuscleGroups(exercise) {
    // Удаляем существующие теги мышц
    const existingMuscles = document.querySelector('.muscle-groups');
    if (existingMuscles) {
        existingMuscles.remove();
    }
    
    if (exercise.muscles && exercise.muscles.length > 0) {
        const muscleContainer = document.createElement('div');
        muscleContainer.className = 'muscle-groups';
        
        exercise.muscles.forEach(muscle => {
            const muscleTag = document.createElement('span');
            muscleTag.className = 'muscle-tag';
            muscleTag.textContent = muscle;
            muscleContainer.appendChild(muscleTag);
        });
        
        document.querySelector('.exercise-details').appendChild(muscleContainer);
    }
}

function updateExerciseTips(exercise) {
    // Удаляем существующие советы
    const existingTips = document.querySelector('.exercise-tips');
    if (existingTips) {
        existingTips.remove();
    }
    
    if (exercise.tips) {
        const tipsContainer = document.createElement('div');
        tipsContainer.className = 'exercise-tips';
        tipsContainer.textContent = exercise.tips;
        document.querySelector('.exercise-details').appendChild(tipsContainer);
    }
}

// Обновление отображения прогресса упражнения
function updateExerciseProgress(exercise) {
    const progressElement = document.getElementById('exerciseProgress');
    const currentWeightElement = document.getElementById('currentWeight');
    const historyDotsElement = document.getElementById('historyDots');
    
    // Показываем прогресс только для силовых упражнений
    if (exercise.weight && typeof exercise.weight === 'function') {
        const exerciseName = exercise.name;
        initializeExerciseProgress(exerciseName);
        
        const progress = exerciseProgress[exerciseName];
        const currentWeight = exercise.weight();
        
        // Отображаем текущий вес
        if (currentWeight > 0) {
            currentWeightElement.textContent = `${currentWeight} кг`;
            progressElement.style.display = 'block';
            
            // Отображаем историю последних 5 сессий
            const recentSessions = progress.sessions.slice(-5);
            historyDotsElement.innerHTML = '';
            
            recentSessions.forEach(session => {
                const dot = document.createElement('div');
                dot.className = 'history-dot';
                
                if (session.successful) {
                    dot.classList.add('success');
                    dot.title = `${session.date.split('T')[0]} - Успешно`;
                } else {
                    const completion = (session.repsCompleted / session.targetReps) * 100;
                    if (completion >= 70) {
                        dot.classList.add('partial');
                        dot.title = `${session.date.split('T')[0]} - ${Math.round(completion)}%`;
                    } else {
                        dot.classList.add('failure');
                        dot.title = `${session.date.split('T')[0]} - Неудачно`;
                    }
                }
                
                historyDotsElement.appendChild(dot);
            });
        } else {
            progressElement.style.display = 'none';
        }
    } else {
        progressElement.style.display = 'none';
    }
}

function updateProgress() {
    if (!currentWorkout) return;
    
    const totalExercises = currentWorkout.exercises.length;
    const completedExercises = currentExerciseIndex;
    const progressPercentage = (completedExercises / totalExercises) * 100;
    
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${completedExercises}/${totalExercises} упражнений`;
}

function updateNavigationButtons() {
    prevBtn.disabled = currentExerciseIndex === 0;
    
    if (currentExerciseIndex >= currentWorkout.exercises.length - 1) {
        nextBtn.textContent = 'Завершить';
    } else {
        nextBtn.textContent = 'Далее →';
    }
}

function nextExercise() {
    if (currentExerciseIndex >= currentWorkout.exercises.length - 1) {
        completeWorkout();
        return;
    }
    
    currentExerciseIndex++;
    displayCurrentExercise();
    updateProgress();
}

function prevExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        displayCurrentExercise();
        updateProgress();
    }
}

function completeWorkout() {
    stopTimer();
    
    // Создаем экран завершения
    document.querySelector('.modal-body').innerHTML = `
        <div class="completion-screen">
            <div class="completion-icon">🎉</div>
            <h2>Тренировка завершена!</h2>
            <p>Отличная работа! Вы успешно завершили программу "${currentWorkout.title}"</p>
            <div class="completion-stats">
                <div class="stat">
                    <span class="stat-value">${currentWorkout.exercises.length}</span>
                    <span class="stat-label">упражнений</span>
                </div>
                <div class="stat">
                    <span class="stat-value">90</span>
                    <span class="stat-label">минут</span>
                </div>
            </div>
            <button class="btn btn-primary" onclick="closeWorkout()">Закрыть</button>
        </div>
    `;
    
    // Обновляем прогресс на 100%
    progressBar.style.width = '100%';
    progressText.textContent = `${currentWorkout.exercises.length}/${currentWorkout.exercises.length} упражнений`;
}

// Функции таймера
function toggleTimer() {
    if (isTimerRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    if (currentTime <= 0) return;
    
    isTimerRunning = true;
    startPauseBtn.textContent = 'Пауза';
    timer.classList.add('active');
    
    timerInterval = setInterval(() => {
        currentTime--;
        updateTimerDisplay();
        
        if (currentTime <= 0) {
            timerComplete();
        }
    }, 1000);
}

function pauseTimer() {
    isTimerRunning = false;
    startPauseBtn.textContent = 'Старт';
    timer.classList.remove('active');
    clearInterval(timerInterval);
}

function stopTimer() {
    isTimerRunning = false;
    timer.classList.remove('active');
    clearInterval(timerInterval);
    startPauseBtn.textContent = 'Старт';
}

function skipExercise() {
    stopTimer();
    nextExercise();
}

function timerComplete() {
    stopTimer();
    
    // Показываем уведомление
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Время вышло!', {
            body: 'Переходите к следующему упражнению',
            icon: '/favicon.ico'
        });
    }
    
    // Автоматически переходим к следующему упражнению через 2 секунды
    setTimeout(() => {
        nextExercise();
    }, 2000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Запрос разрешения на уведомления
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

// Обработка свайпов для мобильных устройств
let touchStartX = 0;
let touchEndX = 0;

workoutModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

workoutModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Свайп влево - следующее упражнение
            nextExercise();
        } else {
            // Свайп вправо - предыдущее упражнение
            prevExercise();
        }
    }
}

// Горячие клавиши
document.addEventListener('keydown', (e) => {
    if (!workoutModal.style.display || workoutModal.style.display === 'none') return;
    
    switch(e.key) {
        case 'Escape':
            closeWorkout();
            break;
        case ' ':
            e.preventDefault();
            toggleTimer();
            break;
        case 'ArrowLeft':
            prevExercise();
            break;
        case 'ArrowRight':
            nextExercise();
            break;
        case 'Enter':
            skipExercise();
            break;
    }
});

// CSS для экрана завершения (добавляем динамически)
const completionStyles = `
    .completion-screen {
        text-align: center;
        padding: 40px 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .completion-icon {
        font-size: 72px;
        margin-bottom: 20px;
        animation: bounce 1s infinite;
    }
    
    .completion-screen h2 {
        font-size: 28px;
        color: #2d3748;
        margin-bottom: 16px;
    }
    
    .completion-screen p {
        color: #718096;
        margin-bottom: 32px;
        line-height: 1.6;
    }
    
    .completion-stats {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }
    
    .stat {
        text-align: center;
    }
    
    .stat-value {
        display: block;
        font-size: 32px;
        font-weight: 700;
        color: #667eea;
        margin-bottom: 4px;
    }
    
    .stat-label {
        font-size: 14px;
        color: #718096;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;

// Добавляем стили для завершения
const styleSheet = document.createElement('style');
styleSheet.textContent = completionStyles;
document.head.appendChild(styleSheet);

// Функции для модальных окон статистики и настроек
function openStats() {
    updateStatsUI();
    statsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeStats() {
    statsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openSettings() {
    updateSettingsUI();
    settingsModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSettings() {
    settingsModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обновление UI статистики
function updateStatsUI() {
    document.getElementById('totalWorkouts').textContent = workoutStats.totalWorkouts;
    document.getElementById('totalTime').textContent = workoutStats.totalTime;
    document.getElementById('currentStreak').textContent = workoutStats.currentStreak;
    document.getElementById('favoriteDay').textContent = workoutStats.favoriteDay || '-';
    
    // Обновляем недельный прогресс
    updateWeeklyProgress();
}

// Обновление недельного прогресса
function updateWeeklyProgress() {
    const weekDays = document.querySelectorAll('.week-day');
    const today = new Date().getDay();
    const currentWeekStart = getWeekStart(new Date());
    
    weekDays.forEach((dayElement, index) => {
        const dayNumber = index + 1;
        const dayDate = new Date(currentWeekStart);
        dayDate.setDate(dayDate.getDate() + index);
        
        const dayKey = dayDate.toDateString();
        const indicator = dayElement.querySelector('.day-indicator');
        
        indicator.classList.remove('completed', 'current');
        
        if (workoutStats.completedDays[dayKey]) {
            indicator.classList.add('completed');
        }
        
        if (dayNumber === today) {
            indicator.classList.add('current');
        }
    });
}

// Получение начала недели
function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Понедельник как начало недели
    return new Date(d.setDate(diff));
}

// Обновление статистики после завершения тренировки
function updateWorkoutStats(dayNumber) {
    const today = new Date().toDateString();
    
    workoutStats.totalWorkouts++;
    workoutStats.totalTime += 90;
    workoutStats.completedDays[today] = dayNumber;
    
    // Обновляем streak
    updateStreak();
    
    // Обновляем любимый день
    updateFavoriteDay(dayNumber);
    
    saveStats();
}

// Обновление streak
function updateStreak() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (workoutStats.lastWorkoutDate) {
        const lastDate = new Date(workoutStats.lastWorkoutDate);
        const diffTime = Math.abs(today - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            workoutStats.currentStreak++;
        } else if (diffDays > 1) {
            workoutStats.currentStreak = 1;
        }
    } else {
        workoutStats.currentStreak = 1;
    }
    
    workoutStats.lastWorkoutDate = today.toDateString();
}

// Обновление любимого дня
function updateFavoriteDay(dayNumber) {
    const dayStats = {};
    Object.values(workoutStats.completedDays).forEach(day => {
        dayStats[day] = (dayStats[day] || 0) + 1;
    });
    
    let maxCount = 0;
    let favoriteDay = null;
    
    Object.entries(dayStats).forEach(([day, count]) => {
        if (count > maxCount) {
            maxCount = count;
            favoriteDay = `День ${day}`;
        }
    });
    
    workoutStats.favoriteDay = favoriteDay;
}

// Обновление UI настроек
function updateSettingsUI() {
    document.getElementById('soundEnabled').checked = appSettings.soundEnabled;
    document.getElementById('restTime').value = appSettings.restTime;
    document.getElementById('restTimeValue').textContent = appSettings.restTime;
    document.getElementById('autoStart').checked = appSettings.autoStart;
    document.getElementById('vibrationEnabled').checked = appSettings.vibrationEnabled;
    document.getElementById('keepScreenOn').checked = appSettings.keepScreenOn;
    document.getElementById('autoProgression').checked = appSettings.autoProgression;
    document.getElementById('progressionRate').value = appSettings.progressionRate;
    document.getElementById('progressionRateValue').textContent = appSettings.progressionRate + 'x';
}

// Настройка обработчиков настроек
function setupSettingsHandlers() {
    // Звук
    document.getElementById('soundEnabled').addEventListener('change', (e) => {
        appSettings.soundEnabled = e.target.checked;
        saveSettings();
    });
    
    // Время отдыха
    const restTimeSlider = document.getElementById('restTime');
    const restTimeValue = document.getElementById('restTimeValue');
    
    restTimeSlider.addEventListener('input', (e) => {
        appSettings.restTime = parseInt(e.target.value);
        restTimeValue.textContent = appSettings.restTime;
        saveSettings();
    });
    
    // Автопрогрессия
    document.getElementById('autoProgression').addEventListener('change', (e) => {
        appSettings.autoProgression = e.target.checked;
        saveSettings();
    });
    
    // Скорость прогрессии
    const progressionRateSlider = document.getElementById('progressionRate');
    const progressionRateValue = document.getElementById('progressionRateValue');
    
    progressionRateSlider.addEventListener('input', (e) => {
        appSettings.progressionRate = parseFloat(e.target.value);
        progressionRateValue.textContent = appSettings.progressionRate + 'x';
        saveSettings();
    });
    
    // Автостарт
    document.getElementById('autoStart').addEventListener('change', (e) => {
        appSettings.autoStart = e.target.checked;
        saveSettings();
    });
    
    // Вибрация
    document.getElementById('vibrationEnabled').addEventListener('change', (e) => {
        appSettings.vibrationEnabled = e.target.checked;
        saveSettings();
    });
    
    // Не выключать экран
    document.getElementById('keepScreenOn').addEventListener('change', (e) => {
        appSettings.keepScreenOn = e.target.checked;
        
        if (appSettings.keepScreenOn && 'wakeLock' in navigator) {
            requestWakeLock();
        } else if (wakeLock) {
            wakeLock.release();
        }
        
        saveSettings();
    });
    
    // Сброс статистики
    document.getElementById('clearStatsBtn').addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите сбросить всю статистику?')) {
            workoutStats = {
                totalWorkouts: 0,
                totalTime: 0,
                currentStreak: 0,
                lastWorkoutDate: null,
                completedDays: {},
                favoriteDay: null
            };
            saveStats();
            updateStatsUI();
        }
    });
    
    // Сброс прогресса весов
    document.getElementById('resetProgressBtn').addEventListener('click', () => {
        if (confirm('Вы уверены, что хотите сбросить весь прогресс весов? Веса вернутся к начальным значениям.')) {
            exerciseProgress = {};
            localStorage.removeItem('exerciseProgress');
            alert('Прогресс весов сброшен!');
        }
    });
}

// PWA функционал
let deferredPrompt;
let wakeLock = null;

function setupPWA() {
    // Обработка события установки PWA
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        const installBtn = document.getElementById('installBtn');
        installBtn.style.display = 'block';
        
        installBtn.addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('PWA установлено');
                }
                deferredPrompt = null;
                installBtn.style.display = 'none';
            });
        });
    });
    
    // Wake Lock API
    async function requestWakeLock() {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock активирован');
        } catch (err) {
            console.error('Wake Lock не поддерживается:', err);
        }
    }
}

// Звуковые уведомления
function playNotificationSound() {
    if (!appSettings.soundEnabled) return;
    
    // Создаем простой звуковой сигнал
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Вибрация для мобильных устройств
function vibrate(pattern = [200]) {
    if (appSettings.vibrationEnabled && 'vibrate' in navigator) {
        navigator.vibrate(pattern);
    }
}

// Переопределяем функцию завершения тренировки
const originalCompleteWorkout = completeWorkout;
function completeWorkout() {
    // Обновляем статистику
    updateWorkoutStats(parseInt(currentWorkout.title.charAt(5))); // Извлекаем номер дня
    
    // Звук и вибрация
    playNotificationSound();
    vibrate([200, 100, 200]);
    
    // Оригинальная логика завершения
    originalCompleteWorkout();
}

// Переопределяем функцию завершения таймера
const originalTimerComplete = timerComplete;
function timerComplete() {
    playNotificationSound();
    vibrate([100]);
    
    originalTimerComplete();
}

// Закрытие модальных окон при клике вне них
window.addEventListener('click', (e) => {
    if (e.target === statsModal) {
        closeStats();
    }
    if (e.target === settingsModal) {
        closeSettings();
    }
});
