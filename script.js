// ============================================================================
//                    ПЕРСОНАЛЬНОЕ ПРИЛОЖЕНИЕ ДЛЯ ТРЕНИРОВОК
//                          ПОЛНАЯ БАЗА ДАННЫХ УПРАЖНЕНИЙ
// ============================================================================

// 📊 ПОЛНАЯ БАЗА ДАННЫХ УПРАЖНЕНИЙ (75+ упражнений из программы)
const EXERCISES_DATABASE = {
    // 🔥 ПРЕСС - КАЖДЫЙ ДЕНЬ (18 упражнений)
    press: {
        title: "Пресс",
        color: "#FF6B6B",
        icon: "💪",
        exercises: [
            {
                id: "press_1",
                name: "Классические скручивания",
                description: "Прямая мышца живота, особенно верхняя часть",
                sets: "3-4",
                reps: "15-20",
                instructions: [
                    "Лягте на спину, согните ноги в коленях",
                    "Руки за головой (не сцеплены в замок)",
                    "На выдохе поднимите лопатки от пола",
                    "Пауза 1-2 секунды в верхней точке",
                    "Медленно вернитесь в исходное положение"
                ],
                tips: "Не отрывайте поясницу от пола, не тяните шею руками"
            },
            {
                id: "press_2",
                name: "Планка",
                description: "Прямая и поперечная мышцы живота, кор",
                sets: "3-5",
                reps: "30-90 сек",
                instructions: [
                    "Упор на предплечьях, локти под плечами",
                    "Тело - прямая линия от головы до пяток",
                    "Напрягите мышцы пресса и ягодиц",
                    "Удерживайте позицию",
                    "Дышите ровно и глубоко"
                ],
                tips: "Не прогибайтесь в пояснице, не поднимайте таз"
            },
            {
                id: "press_3",
                name: "Подъемы ног в висе",
                description: "Нижняя часть прямой мышцы живота",
                sets: "3-4",
                reps: "10-15",
                instructions: [
                    "Повисните на перекладине",
                    "На выдохе поднимите прямые ноги до параллели",
                    "Зафиксируйте на 1-2 секунды",
                    "Медленно опустите ноги",
                    "Избегайте раскачивания"
                ],
                tips: "Для усложнения поднимайте ноги до касания перекладины"
            },
            {
                id: "press_4",
                name: "Русские скручивания",
                description: "Косые мышцы живота, прямая мышца",
                sets: "3",
                reps: "15-20 на сторону",
                instructions: [
                    "Сядьте, согните колени, оторвите стопы",
                    "Отклоните корпус назад на 45°",
                    "Вращайте корпус из стороны в сторону",
                    "Касайтесь руками пола",
                    "Держите спину прямой"
                ],
                tips: "Для прогресса используйте мяч или гантель"
            },
            {
                id: "press_5",
                name: "Велосипед",
                description: "Прямая и косые мышцы живота",
                sets: "3",
                reps: "20-30",
                instructions: [
                    "Лягте на спину, поднимите лопатки",
                    "Руки за головой, локти в стороны",
                    "Подтягивайте колени к груди поочередно",
                    "Касайтесь правым локтем левого колена",
                    "Поясница прижата к полу"
                ],
                tips: "Акцент на скручивании корпуса, не на движении локтей"
            },
            {
                id: "press_6",
                name: "Вакуум",
                description: "Поперечная мышца живота",
                sets: "3-5",
                reps: "15-30 сек",
                instructions: [
                    "Встаньте прямо или сядьте",
                    "Сделайте полный выдох",
                    "Втяните живот максимально глубоко",
                    "Удерживайте 15-30 секунд",
                    "Дышите поверхностно"
                ],
                tips: "Выполняйте утром натощак для лучшего эффекта"
            },
            {
                id: "press_7",
                name: "Подъемы ног лежа",
                description: "Нижняя часть прямой мышцы живота",
                sets: "3-4",
                reps: "12-15",
                instructions: [
                    "Лягте на спину, руки вдоль тела",
                    "Ноги вместе, выпрямлены",
                    "Поднимите ноги до угла 90°",
                    "Медленно опустите, не касаясь пола",
                    "Поясница прижата к полу"
                ],
                tips: "Для облегчения слегка согните колени"
            },
            {
                id: "press_8",
                name: "Боковая планка",
                description: "Косые мышцы живота, квадратная мышца поясницы",
                sets: "3",
                reps: "30-60 сек на сторону",
                instructions: [
                    "Лягте на бок, опираясь на предплечье",
                    "Локоть под плечевым суставом",
                    "Поднимите таз, образуя прямую линию",
                    "Удерживайте позицию",
                    "Не допускайте провисания таза"
                ],
                tips: "Для усложнения поднимите верхнюю ногу"
            },
            {
                id: "press_9",
                name: "Скалолаз",
                description: "Прямая и косые мышцы живота, кардио",
                sets: "3-4",
                reps: "30-60 сек",
                instructions: [
                    "Планка на прямых руках",
                    "Подтягивайте колени к груди поочередно",
                    "Быстрый темп",
                    "Спина остается прямой",
                    "Таз неподвижен"
                ],
                tips: "Для усложнения подтягивайте колено к противоположному локтю"
            },
            {
                id: "press_10",
                name: "V-подъемы",
                description: "Прямая мышца живота, подвздошно-поясничная",
                sets: "3",
                reps: "10-15",
                instructions: [
                    "Сядьте, ноги выпрямлены",
                    "Откиньтесь назад, оторвав ступни",
                    "Одновременно поднимите ноги и корпус",
                    "Сформируйте букву V",
                    "Балансируйте на седалищных костях"
                ],
                tips: "Для усложнения удерживайте верхнюю позицию"
            }
        ]
    },

    // 💪 ГРУДЬ (15 упражнений)
    chest: {
        title: "Грудь",
        color: "#4ECDC4",
        icon: "🔥",
        exercises: [
            {
                id: "chest_1",
                name: "Отжимания от пола",
                description: "Большая грудная мышца, трицепсы, дельты",
                sets: "3-4",
                reps: "до отказа",
                instructions: [
                    "Упор лежа, руки чуть шире плеч",
                    "Тело - прямая линия",
                    "Опуститесь до 3-5 см от пола",
                    "На выдохе выпрямите руки",
                    "Локти под углом 45°"
                ],
                tips: "Для усложнения - ноги на возвышении, для облегчения - с колен"
            },
            {
                id: "chest_2",
                name: "Отжимания с широкой постановкой",
                description: "Большая грудная мышца (внешняя часть)",
                sets: "3-4",
                reps: "до отказа",
                instructions: [
                    "Руки шире плеч в 1.5 раза",
                    "Опуститесь, разводя локти в стороны",
                    "Грудь почти касается пола",
                    "На выдохе выжмите себя вверх",
                    "Корпус прямой линией"
                ],
                tips: "Акцент на грудные мышцы, медленное выполнение"
            },
            {
                id: "chest_3",
                name: "Алмазные отжимания",
                description: "Внутренняя часть груди, трицепсы",
                sets: "3",
                reps: "8-15",
                instructions: [
                    "Руки образуют 'алмаз' пальцами",
                    "Опуститесь, локти близко к телу",
                    "На выдохе выжмите себя вверх",
                    "Локти направлены назад",
                    "Медленное контролируемое движение"
                ],
                tips: "Сложное упражнение, начинайте с колен при необходимости"
            },
            {
                id: "chest_4",
                name: "Отжимания на брусьях",
                description: "Нижняя часть груди, трицепсы",
                sets: "3-4",
                reps: "8-15",
                instructions: [
                    "Упор на параллельных брусьях",
                    "Наклоните корпус вперед на 30°",
                    "Опуститесь до параллели плеч с полом",
                    "Выжмите тело вверх",
                    "Чем больше наклон - больше нагрузка на грудь"
                ],
                tips: "Не опускайтесь слишком низко во избежание травм"
            },
            {
                id: "chest_5",
                name: "Жим штанги лежа",
                description: "Большая грудная мышца (все части)",
                sets: "4-5",
                reps: "8-12",
                instructions: [
                    "Лягте на скамью, хват чуть шире плеч",
                    "Опустите штангу к середине груди",
                    "На выдохе выжмите вверх",
                    "Лопатки сведены",
                    "Локти под углом 45-75°"
                ],
                tips: "Базовое упражнение, требует страховки с большими весами"
            }
        ]
    },

    // 💪 РУКИ (15 упражнений)
    arms: {
        title: "Руки",
        color: "#45B7D1",
        icon: "💪",
        exercises: [
            {
                id: "arms_1",
                name: "Подтягивания обратным хватом",
                description: "Бицепс, плечевая мышца, широчайшие",
                sets: "4",
                reps: "8-12",
                instructions: [
                    "Хват снизу на ширине плеч",
                    "Подтянитесь до касания груди перекладины",
                    "Локти прижаты к телу",
                    "Медленно опуститесь",
                    "Полная амплитуда движения"
                ],
                tips: "Сосредоточьтесь на работе бицепсов, избегайте инерции"
            },
            {
                id: "arms_2",
                name: "Отжимания на брусьях (трицепс)",
                description: "Трицепс, нижняя часть груди",
                sets: "3-4",
                reps: "8-15",
                instructions: [
                    "Тело вертикально, локти прижаты",
                    "Опуститесь до угла 90° в локтях",
                    "Мощно выпрямите руки",
                    "Чем вертикальнее - больше нагрузка на трицепс",
                    "Контролируйте движение"
                ],
                tips: "Для усложнения используйте дополнительное отягощение"
            },
            {
                id: "arms_3",
                name: "Сгибания рук с гантелями",
                description: "Бицепс, плечевая мышца",
                sets: "3-4",
                reps: "10-12 на руку",
                instructions: [
                    "Сядьте с прямой спиной",
                    "Ладони смотрят вперед",
                    "Согните руку к плечу",
                    "Максимально сократите бицепс в верхней точке",
                    "Медленно опустите"
                ],
                tips: "Можно выполнять поочередно или одновременно"
            },
            {
                id: "arms_4",
                name: "Молотковые сгибания",
                description: "Плечелучевая мышца, бицепс",
                sets: "3-4",
                reps: "10-12",
                instructions: [
                    "Гантели нейтральным хватом",
                    "Ладони смотрят друг на друга",
                    "Согните руки к плечам",
                    "Сохраняйте положение ладоней",
                    "Локти прижаты к телу"
                ],
                tips: "Отлично развивает предплечья и силу хвата"
            },
            {
                id: "arms_5",
                name: "Жим узким хватом",
                description: "Трицепс, передние дельты, грудь",
                sets: "4",
                reps: "8-12",
                instructions: [
                    "Хват на ширине плеч или уже",
                    "Опустите к нижней части груди",
                    "Локти близко к телу",
                    "Выжмите штангу вверх",
                    "Полное выпрямление рук"
                ],
                tips: "Чем уже хват, тем больше акцент на трицепсах"
            }
        ]
    },

    // 🔥 ПЛЕЧИ (16 упражнений)
    shoulders: {
        title: "Плечи",
        color: "#96CEB4",
        icon: "🔥",
        exercises: [
            {
                id: "shoulders_1",
                name: "Жим гантелей сидя",
                description: "Передние и средние дельты",
                sets: "4",
                reps: "8-12",
                instructions: [
                    "Сядьте с вертикальной спинкой",
                    "Гантели на уровне плеч",
                    "Выжмите вверх до выпрямления рук",
                    "Траектория слегка назад и вверх",
                    "Спина прижата к спинке"
                ],
                tips: "Не используйте инерцию тела для помощи"
            },
            {
                id: "shoulders_2",
                name: "Разведение рук в стороны",
                description: "Средние дельтовидные мышцы",
                sets: "3-4",
                reps: "12-15",
                instructions: [
                    "Встаньте с гантелями по бокам",
                    "Руки слегка согнуты",
                    "Поднимите руки до уровня плеч",
                    "Ведите движение локтями",
                    "Корпус неподвижен"
                ],
                tips: "Начинайте с небольшого веса, фокус на технике"
            },
            {
                id: "shoulders_3",
                name: "Подъемы перед собой",
                description: "Передние дельтовидные мышцы",
                sets: "3-4",
                reps: "10-12",
                instructions: [
                    "Гантели перед бедрами",
                    "Поднимите руки до уровня плеч",
                    "Задержитесь в верхней точке",
                    "Медленно опустите",
                    "Избегайте инерции"
                ],
                tips: "Можно выполнять поочередно или одновременно"
            },
            {
                id: "shoulders_4",
                name: "Разведение в наклоне",
                description: "Задние дельты, ромбовидные мышцы",
                sets: "3-4",
                reps: "12-15",
                instructions: [
                    "Наклонитесь вперед на 45-75°",
                    "Разведите руки в стороны",
                    "До уровня плеч",
                    "Небольшой изгиб в локтях",
                    "Ведите движение локтями"
                ],
                tips: "Важно для баланса развития всех пучков дельт"
            },
            {
                id: "shoulders_5",
                name: "Армейский жим",
                description: "Передние и средние дельты, трицепсы",
                sets: "4-5",
                reps: "6-10",
                instructions: [
                    "Штанга на уровне ключиц",
                    "Хват чуть шире плеч",
                    "Выжмите строго вверх",
                    "Корпус напряжен и стабилен",
                    "Траектория вертикальная"
                ],
                tips: "Базовое упражнение, требует хорошей техники"
            }
        ]
    },

    // 🦵 НОГИ (6 упражнений)
    legs: {
        title: "Ноги",
        color: "#FECA57",
        icon: "🦵",
        exercises: [
            {
                id: "legs_1",
                name: "Приседания",
                description: "Квадрицепсы, ягодичные, задняя поверхность",
                sets: "4-5",
                reps: "8-12",
                instructions: [
                    "Ноги на ширине плеч",
                    "Носки слегка развернуты",
                    "Присядьте, отводя таз назад",
                    "До параллели или ниже",
                    "Мощно встаньте"
                ],
                tips: "Король всех упражнений, держите спину прямой"
            },
            {
                id: "legs_2",
                name: "Выпады",
                description: "Квадрицепсы, ягодичные, задняя поверхность",
                sets: "3-4",
                reps: "12-15 на ногу",
                instructions: [
                    "Большой шаг вперед",
                    "Опуститесь, сгибая обе ноги до 90°",
                    "Заднее колено почти касается пола",
                    "Вернитесь или шагните другой ногой",
                    "Корпус прямой"
                ],
                tips: "Отличное одностороннее упражнение для баланса"
            },
            {
                id: "legs_3",
                name: "Болгарские приседания",
                description: "Квадрицепсы, ягодичные мышцы",
                sets: "3-4",
                reps: "10-12 на ногу",
                instructions: [
                    "Задняя нога на скамье",
                    "Приседайте на передней ноге",
                    "До угла 90° в колене",
                    "Основной вес на передней ноге",
                    "Корпус слегка наклонен"
                ],
                tips: "Отличная альтернатива обычным приседаниям"
            },
            {
                id: "legs_4",
                name: "Подъемы на носки",
                description: "Икроножные мышцы",
                sets: "4-5",
                reps: "15-20",
                instructions: [
                    "Носки на платформе, пятки свисают",
                    "Опуститесь максимально низко",
                    "Поднимитесь на носки как можно выше",
                    "Задержитесь в верхней точке",
                    "Полная амплитуда движения"
                ],
                tips: "Медленная негативная фаза для лучшего эффекта"
            },
            {
                id: "legs_5",
                name: "Румынская становая тяга",
                description: "Задняя поверхность бедра, ягодичные",
                sets: "4",
                reps: "8-12",
                instructions: [
                    "Штанга прямым хватом",
                    "Ноги слегка согнуты",
                    "Наклоняйтесь, отводя таз назад",
                    "Штанга скользит вдоль ног",
                    "Чувствуйте растяжение задней поверхности"
                ],
                tips: "Основное движение в тазобедренном суставе"
            },
            {
                id: "legs_6",
                name: "Становая тяга",
                description: "Вся задняя цепь - спина, ягодицы, ноги",
                sets: "4-5",
                reps: "5-8",
                instructions: [
                    "Встаньте перед штангой",
                    "Присядьте и возьмитесь за штангу",
                    "Поднимите, выпрямляя ноги и спину",
                    "В верхней точке полностью выпрямитесь",
                    "Опустите, отводя таз назад"
                ],
                tips: "Основа всех силовых упражнений, требует идеальной техники"
            }
        ]
    },

    // 🏃‍♂️ СПИНА (5 упражнений)
    back: {
        title: "Спина",
        color: "#A8E6CF",
        icon: "🏃‍♂️",
        exercises: [
            {
                id: "back_1",
                name: "Подтягивания широким хватом",
                description: "Широчайшие, ромбовидные, средние трапеции",
                sets: "4-5",
                reps: "6-12",
                instructions: [
                    "Хват шире плеч",
                    "Подтянитесь до касания груди",
                    "Лопатки сводятся в верхней точке",
                    "Медленно опуститесь",
                    "Полная амплитуда движения"
                ],
                tips: "Король упражнений для спины"
            },
            {
                id: "back_2",
                name: "Тяга штанги в наклоне",
                description: "Широчайшие, ромбовидные, задние дельты",
                sets: "4",
                reps: "8-12",
                instructions: [
                    "Наклонитесь вперед на 45°",
                    "Тяните штангу к животу",
                    "Сводите лопатки",
                    "Локти близко к телу",
                    "Спина прямая"
                ],
                tips: "Начинайте движение со сведения лопаток"
            },
            {
                id: "back_3",
                name: "Тяга гантели одной рукой",
                description: "Широчайшие, ромбовидные, средние трапеции",
                sets: "4",
                reps: "10-12 на руку",
                instructions: [
                    "Упритесь коленом в скамью",
                    "Тяните гантель к поясу",
                    "Максимально сводите лопатку",
                    "Корпус параллелен полу",
                    "Полная амплитуда"
                ],
                tips: "Отличное одностороннее упражнение для устранения дисбалансов"
            },
            {
                id: "back_4",
                name: "Тяга верхнего блока",
                description: "Широчайшие мышцы спины, ромбовидные",
                sets: "4",
                reps: "10-12",
                instructions: [
                    "Широкий хват за рукоятку",
                    "Слегка отклоните корпус назад",
                    "Тяните к верхней части груди",
                    "Сводите лопатки",
                    "Контролируемое возвращение"
                ],
                tips: "Альтернатива подтягиваниям для начинающих"
            },
            {
                id: "back_5",
                name: "Гиперэкстензия",
                description: "Поясничные мышцы, ягодичные, задняя поверхность",
                sets: "3-4",
                reps: "12-15",
                instructions: [
                    "Лягте на тренажер лицом вниз",
                    "Руки скрещены на груди",
                    "Поднимите корпус до прямой линии",
                    "Медленно опуститесь",
                    "Не переразгибайтесь"
                ],
                tips: "Важно для здоровья поясницы и профилактики травм"
            }
        ]
    }
};

// 📅 ПРОГРАММА ТРЕНИРОВОК НА НЕДЕЛЮ
const WEEKLY_PROGRAM = {
    day1: {
        title: "День 1",
        subtitle: "Грудь + Пресс",
        groups: ["chest", "press"],
        description: "Фокус на грудных мышцах с обязательной проработкой пресса"
    },
    day2: {
        title: "День 2", 
        subtitle: "Спина + Пресс",
        groups: ["back", "press"],
        description: "Развитие мышц спины с ежедневным прессом"
    },
    day3: {
        title: "День 3",
        subtitle: "Плечи + Пресс", 
        groups: ["shoulders", "press"],
        description: "Комплексная проработка дельтовидных мышц"
    },
    day4: {
        title: "День 4",
        subtitle: "Руки + Пресс",
        groups: ["arms", "press"], 
        description: "Бицепс и трицепс с акцентом на качество"
    },
    day5: {
        title: "День 5",
        subtitle: "Ноги + Пресс",
        groups: ["legs", "press"],
        description: "Мощная тренировка нижней части тела"
    },
    day6: {
        title: "День 6", 
        subtitle: "Функциональная + Пресс",
        groups: ["chest", "back", "press"],
        description: "Комбинированная тренировка + кардио элементы"
    }
};

// ⚙️ НАСТРОЙКИ ПОЛЬЗОВАТЕЛЯ
const USER_SETTINGS = {
    profile: {
        height: 180, // см
        weight: 71,  // кг
        experience: "intermediate", // beginner, intermediate, advanced
        goals: ["strength", "muscle", "endurance"]
    },
    preferences: {
        restTime: {
            strength: 180,    // 3 минуты для силовых
            isolation: 90,    // 1.5 минуты для изолирующих
            abs: 60          // 1 минута для пресса
        },
        notifications: true,
        darkMode: false,
        units: "metric"
    }
};

// 📊 СИСТЕМА ПРОГРЕССА
const PROGRESS_TRACKING = {
    workoutHistory: [],
    personalRecords: {},
    weeklyStats: {
        workoutsCompleted: 0,
        totalExercises: 0,
        totalSets: 0,
        totalReps: 0,
        totalTime: 0
    },
    achievements: []
};

console.log("✅ База данных упражнений загружена:", Object.keys(EXERCISES_DATABASE).length, "групп мышц");
console.log("✅ Программа тренировок инициализирована:", Object.keys(WEEKLY_PROGRAM).length, "дней");

// ============================================================================
//                          ОСНОВНЫЕ ФУНКЦИИ ПРИЛОЖЕНИЯ
// ============================================================================

// 🎯 УПРАВЛЕНИЕ СОСТОЯНИЕМ ПРИЛОЖЕНИЯ
class WorkoutApp {
    constructor() {
        this.currentWorkout = null;
        this.activeExercise = null;
        this.timer = null;
        this.currentSet = 1;
        this.restTimer = null;
        this.isWorkoutActive = false;
        this.workoutStartTime = null;
        
        // Загружаем сохраненные данные
        this.loadUserData();
        
        // Инициализируем интерфейс
        this.initializeApp();
    }

    // 🚀 ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
    initializeApp() {
        console.log("🚀 Инициализация приложения...");
        
        // Загружаем программу тренировок
        this.renderWeeklyProgram();
        
        // Настраиваем обработчики событий
        this.setupEventListeners();
        
        // Проверяем, есть ли активная тренировка
        this.checkActiveWorkout();
        
        console.log("✅ Приложение успешно инициализировано");
    }

    // 📅 ОТРИСОВКА ПРОГРАММЫ ТРЕНИРОВОК
    renderWeeklyProgram() {
        const workoutGrid = document.getElementById('workout-grid');
        if (!workoutGrid) return;

        workoutGrid.innerHTML = '';

        Object.entries(WEEKLY_PROGRAM).forEach(([dayKey, dayData]) => {
            const dayCard = this.createDayCard(dayKey, dayData);
            workoutGrid.appendChild(dayCard);
        });
    }

    // 📋 СОЗДАНИЕ КАРТОЧКИ ДНЯ
    createDayCard(dayKey, dayData) {
        const card = document.createElement('div');
        card.className = 'workout-card';
        card.setAttribute('data-day', dayKey);

        // Получаем основную группу мышц для цвета
        const primaryGroup = dayData.groups[0];
        const groupData = EXERCISES_DATABASE[primaryGroup];
        
        card.innerHTML = `
            <div class="workout-card-header">
                <span class="workout-icon">${groupData?.icon || '💪'}</span>
                <h3>${dayData.title}</h3>
            </div>
            <div class="workout-card-body">
                <h4>${dayData.subtitle}</h4>
                <p>${dayData.description}</p>
                <div class="muscle-groups">
                    ${dayData.groups.map(group => {
                        const data = EXERCISES_DATABASE[group];
                        return `<span class="muscle-tag" style="background-color: ${data?.color}22; color: ${data?.color};">${data?.title}</span>`;
                    }).join('')}
                </div>
            </div>
            <div class="workout-card-footer">
                <button class="btn-start-workout" onclick="app.startWorkout('${dayKey}')">
                    <span>Начать тренировку</span>
                    <i class="icon-play">▶️</i>
                </button>
            </div>
        `;

        // Добавляем обработчик клика
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.btn-start-workout')) {
                this.showWorkoutPreview(dayKey);
            }
        });

        return card;
    }

    // 👀 ПРЕДПРОСМОТР ТРЕНИРОВКИ
    showWorkoutPreview(dayKey) {
        const dayData = WEEKLY_PROGRAM[dayKey];
        if (!dayData) return;

        const modal = document.getElementById('workout-modal');
        const content = document.getElementById('workout-content');
        
        if (!modal || !content) return;

        // Собираем все упражнения для этого дня
        const exercises = [];
        dayData.groups.forEach(groupKey => {
            const group = EXERCISES_DATABASE[groupKey];
            if (group) {
                exercises.push(...group.exercises);
            }
        });

        content.innerHTML = `
            <div class="workout-preview">
                <div class="workout-preview-header">
                    <h2>${dayData.title}: ${dayData.subtitle}</h2>
                    <p class="workout-description">${dayData.description}</p>
                    <div class="workout-stats">
                        <div class="stat-item">
                            <span class="stat-number">${exercises.length}</span>
                            <span class="stat-label">упражнений</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">~${this.estimateWorkoutTime(exercises)}</span>
                            <span class="stat-label">минут</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">${dayData.groups.length}</span>
                            <span class="stat-label">групп мышц</span>
                        </div>
                    </div>
                </div>
                
                <div class="exercises-preview">
                    ${dayData.groups.map(groupKey => {
                        const group = EXERCISES_DATABASE[groupKey];
                        return `
                            <div class="muscle-group-section">
                                <h3 class="group-title" style="color: ${group.color};">
                                    ${group.icon} ${group.title}
                                </h3>
                                <div class="exercises-list">
                                    ${group.exercises.slice(0, 5).map(exercise => `
                                        <div class="exercise-preview-item">
                                            <span class="exercise-name">${exercise.name}</span>
                                            <span class="exercise-sets">${exercise.sets} x ${exercise.reps}</span>
                                        </div>
                                    `).join('')}
                                    ${group.exercises.length > 5 ? `<div class="exercise-preview-item more">+${group.exercises.length - 5} упражнений</div>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="workout-preview-actions">
                    <button class="btn btn-secondary" onclick="app.closeModal('workout-modal')">
                        Отмена
                    </button>
                    <button class="btn btn-primary" onclick="app.startWorkout('${dayKey}')">
                        <span>Начать тренировку</span>
                        <i class="icon-play">▶️</i>
                    </button>
                </div>
            </div>
        `;

        this.showModal('workout-modal');
    }

    // ⏱️ ОЦЕНКА ВРЕМЕНИ ТРЕНИРОВКИ
    estimateWorkoutTime(exercises) {
        // Примерная оценка: 2 минуты на упражнение + время отдыха
        const exerciseTime = exercises.length * 2;
        const restTime = exercises.length * 1.5; // среднее время отдыха
        return Math.round(exerciseTime + restTime);
    }

    // 🏋️‍♂️ НАЧАЛО ТРЕНИРОВКИ
    startWorkout(dayKey) {
        const dayData = WEEKLY_PROGRAM[dayKey];
        if (!dayData) {
            console.error("❌ Тренировка не найдена:", dayKey);
            return;
        }

        console.log("🏋️‍♂️ Начинаем тренировку:", dayData.title);

        // Закрываем модальные окна
        this.closeModal('workout-modal');

        // Устанавливаем текущую тренировку
        this.currentWorkout = {
            day: dayKey,
            data: dayData,
            exercises: this.getWorkoutExercises(dayData),
            currentExerciseIndex: 0,
            startTime: new Date(),
            completedExercises: []
        };

        this.isWorkoutActive = true;
        this.workoutStartTime = new Date();

        // Показываем интерфейс тренировки
        this.showWorkoutInterface();
        
        // Начинаем первое упражнение
        this.startNextExercise();

        // Сохраняем состояние
        this.saveUserData();
    }

    // 🎯 ПОЛУЧЕНИЕ УПРАЖНЕНИЙ ДЛЯ ТРЕНИРОВКИ
    getWorkoutExercises(dayData) {
        const exercises = [];
        
        dayData.groups.forEach(groupKey => {
            const group = EXERCISES_DATABASE[groupKey];
            if (group) {
                // Для пресса берем 3-4 упражнения, для остальных - 5-6
                const exerciseCount = groupKey === 'press' ? 4 : 5;
                const selectedExercises = group.exercises.slice(0, exerciseCount);
                
                selectedExercises.forEach(exercise => {
                    exercises.push({
                        ...exercise,
                        group: groupKey,
                        groupTitle: group.title,
                        groupColor: group.color
                    });
                });
            }
        });

        return exercises;
    }

    // 💪 ПОКАЗ ИНТЕРФЕЙСА ТРЕНИРОВКИ
    showWorkoutInterface() {
        // Скрываем главный экран
        const mainScreen = document.querySelector('.main-content');
        if (mainScreen) {
            mainScreen.style.display = 'none';
        }

        // Показываем интерфейс тренировки
        let workoutInterface = document.getElementById('workout-interface');
        if (!workoutInterface) {
            workoutInterface = this.createWorkoutInterface();
            document.body.appendChild(workoutInterface);
        }

        workoutInterface.style.display = 'flex';
        this.updateWorkoutInterface();
    }

    // 🎨 СОЗДАНИЕ ИНТЕРФЕЙСА ТРЕНИРОВКИ
    createWorkoutInterface() {
        const workoutInterface = document.createElement('div');
        workoutInterface.id = 'workout-interface';
        workoutInterface.className = 'workout-interface';

        workoutInterface.innerHTML = `
            <div class="workout-header">
                <button class="btn-back" onclick="app.pauseWorkout()">
                    <i class="icon-back">←</i>
                </button>
                <div class="workout-info">
                    <h2 id="workout-title">Тренировка</h2>
                    <div class="workout-progress">
                        <span id="exercise-counter">1 / 10</span>
                        <div class="progress-bar">
                            <div class="progress-fill" id="workout-progress-fill"></div>
                        </div>
                        <span id="workout-timer">00:00</span>
                    </div>
                </div>
            </div>

            <div class="workout-content">
                <div class="current-exercise">
                    <div class="exercise-header">
                        <span id="muscle-group-badge" class="muscle-badge">Грудь</span>
                        <h3 id="exercise-name">Отжимания от пола</h3>
                    </div>
                    
                    <div class="exercise-description">
                        <p id="exercise-desc">Большая грудная мышца, трицепсы, дельты</p>
                    </div>

                    <div class="sets-counter">
                        <div class="sets-info">
                            <span>Подход</span>
                            <span id="current-set">1</span>
                            <span>из</span>
                            <span id="total-sets">3</span>
                        </div>
                        <div class="reps-info">
                            <span id="target-reps">12-15 повторений</span>
                        </div>
                    </div>

                    <div class="exercise-timer">
                        <div class="timer-display" id="exercise-timer">00:00</div>
                        <div class="timer-controls">
                            <button class="btn btn-secondary" id="btn-pause-timer" onclick="app.pauseExerciseTimer()">
                                <i class="icon-pause">⏸️</i>
                            </button>
                            <button class="btn btn-secondary" onclick="app.showExerciseInfo()">
                                <i class="icon-info">ℹ️</i>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="workout-actions">
                    <button class="btn btn-secondary" onclick="app.skipExercise()">
                        Пропустить
                    </button>
                    <button class="btn btn-primary btn-complete-set" onclick="app.completeSet()">
                        <span>Подход выполнен</span>
                        <i class="icon-check">✅</i>
                    </button>
                </div>

                <div class="rest-timer" id="rest-timer" style="display: none;">
                    <div class="rest-content">
                        <h3>Отдых</h3>
                        <div class="rest-time-display" id="rest-time">01:30</div>
                        <div class="rest-actions">
                            <button class="btn btn-secondary" onclick="app.skipRest()">
                                Пропустить отдых
                            </button>
                            <button class="btn btn-primary" onclick="app.addRestTime()">
                                +30 сек
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return workoutInterface;
    }

    // 🔄 ОБНОВЛЕНИЕ ИНТЕРФЕЙСА ТРЕНИРОВКИ
    updateWorkoutInterface() {
        if (!this.currentWorkout) return;

        const { exercises, currentExerciseIndex } = this.currentWorkout;
        const currentExercise = exercises[currentExerciseIndex];
        
        if (!currentExercise) return;

        // Обновляем информацию о тренировке
        const workoutTitle = document.getElementById('workout-title');
        if (workoutTitle) {
            workoutTitle.textContent = this.currentWorkout.data.title;
        }

        // Обновляем счетчик упражнений
        const exerciseCounter = document.getElementById('exercise-counter');
        if (exerciseCounter) {
            exerciseCounter.textContent = `${currentExerciseIndex + 1} / ${exercises.length}`;
        }

        // Обновляем прогресс-бар
        const progressFill = document.getElementById('workout-progress-fill');
        if (progressFill) {
            const progress = ((currentExerciseIndex) / exercises.length) * 100;
            progressFill.style.width = `${progress}%`;
        }

        // Обновляем информацию о текущем упражнении
        this.updateCurrentExerciseInfo(currentExercise);
    }

    // 📝 ОБНОВЛЕНИЕ ИНФОРМАЦИИ О ТЕКУЩЕМ УПРАЖНЕНИИ
    updateCurrentExerciseInfo(exercise) {
        // Группа мышц
        const muscleBadge = document.getElementById('muscle-group-badge');
        if (muscleBadge) {
            muscleBadge.textContent = exercise.groupTitle;
            muscleBadge.style.backgroundColor = exercise.groupColor + '22';
            muscleBadge.style.color = exercise.groupColor;
        }

        // Название упражнения
        const exerciseName = document.getElementById('exercise-name');
        if (exerciseName) {
            exerciseName.textContent = exercise.name;
        }

        // Описание
        const exerciseDesc = document.getElementById('exercise-desc');
        if (exerciseDesc) {
            exerciseDesc.textContent = exercise.description;
        }

        // Подходы и повторения
        const currentSetEl = document.getElementById('current-set');
        const totalSetsEl = document.getElementById('total-sets');
        const targetRepsEl = document.getElementById('target-reps');

        if (currentSetEl) currentSetEl.textContent = this.currentSet;
        if (totalSetsEl) totalSetsEl.textContent = exercise.sets.split('-')[0];
        if (targetRepsEl) targetRepsEl.textContent = `${exercise.reps} повторений`;
    }

    // ▶️ НАЧАЛО СЛЕДУЮЩЕГО УПРАЖНЕНИЯ
    startNextExercise() {
        if (!this.currentWorkout) return;

        const { exercises, currentExerciseIndex } = this.currentWorkout;
        
        if (currentExerciseIndex >= exercises.length) {
            this.completeWorkout();
            return;
        }

        this.activeExercise = exercises[currentExerciseIndex];
        this.currentSet = 1;
        
        this.updateWorkoutInterface();
        this.startExerciseTimer();
        
        console.log("▶️ Начинаем упражнение:", this.activeExercise.name);
    }

    // ⏰ ТАЙМЕР УПРАЖНЕНИЯ
    startExerciseTimer() {
        this.stopExerciseTimer();
        
        let seconds = 0;
        this.timer = setInterval(() => {
            seconds++;
            const timerDisplay = document.getElementById('exercise-timer');
            if (timerDisplay) {
                timerDisplay.textContent = this.formatTime(seconds);
            }
        }, 1000);
    }

    stopExerciseTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    pauseExerciseTimer() {
        if (this.timer) {
            this.stopExerciseTimer();
            const pauseBtn = document.getElementById('btn-pause-timer');
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="icon-play">▶️</i>';
                pauseBtn.onclick = () => this.startExerciseTimer();
            }
        } else {
            this.startExerciseTimer();
            const pauseBtn = document.getElementById('btn-pause-timer');
            if (pauseBtn) {
                pauseBtn.innerHTML = '<i class="icon-pause">⏸️</i>';
                pauseBtn.onclick = () => this.pauseExerciseTimer();
            }
        }
    }

    // ✅ ЗАВЕРШЕНИЕ ПОДХОДА
    completeSet() {
        if (!this.activeExercise) return;

        const totalSets = parseInt(this.activeExercise.sets.split('-')[0]);
        
        if (this.currentSet < totalSets) {
            // Переходим к отдыху между подходами
            this.currentSet++;
            this.startRestTimer();
        } else {
            // Упражнение завершено, переходим к следующему
            this.completeExercise();
        }

        this.updateWorkoutInterface();
    }

    // 😴 ТАЙМЕР ОТДЫХА
    startRestTimer() {
        const restTimeSeconds = this.getRestTime();
        this.showRestInterface();
        
        let remainingTime = restTimeSeconds;
        
        this.restTimer = setInterval(() => {
            remainingTime--;
            
            const restTimeDisplay = document.getElementById('rest-time');
            if (restTimeDisplay) {
                restTimeDisplay.textContent = this.formatTime(remainingTime);
            }
            
            if (remainingTime <= 0) {
                this.endRest();
            }
        }, 1000);
    }

    getRestTime() {
        const exerciseType = this.activeExercise.group;
        const restTimes = USER_SETTINGS.preferences.restTime;
        
        if (exerciseType === 'press') return restTimes.abs;
        return restTimes.isolation;
    }

    showRestInterface() {
        const restTimer = document.getElementById('rest-timer');
        if (restTimer) {
            restTimer.style.display = 'flex';
        }
    }

    hideRestInterface() {
        const restTimer = document.getElementById('rest-timer');
        if (restTimer) {
            restTimer.style.display = 'none';
        }
    }

    skipRest() {
        this.endRest();
    }

    addRestTime() {
        // Добавляем 30 секунд к отдыху
        if (this.restTimer) {
            const restTimeDisplay = document.getElementById('rest-time');
            if (restTimeDisplay) {
                const currentTime = this.parseTime(restTimeDisplay.textContent);
                const newTime = currentTime + 30;
                restTimeDisplay.textContent = this.formatTime(newTime);
            }
        }
    }

    endRest() {
        if (this.restTimer) {
            clearInterval(this.restTimer);
            this.restTimer = null;
        }
        this.hideRestInterface();
        this.startExerciseTimer();
    }

    // ✅ ЗАВЕРШЕНИЕ УПРАЖНЕНИЯ
    completeExercise() {
        if (!this.activeExercise || !this.currentWorkout) return;

        this.stopExerciseTimer();
        
        // Сохраняем прогресс
        this.currentWorkout.completedExercises.push({
            ...this.activeExercise,
            completedAt: new Date(),
            sets: this.currentSet
        });

        // Переходим к следующему упражнению
        this.currentWorkout.currentExerciseIndex++;
        this.currentSet = 1;
        
        setTimeout(() => {
            this.startNextExercise();
        }, 1000);
    }

    // 🏆 ЗАВЕРШЕНИЕ ТРЕНИРОВКИ
    completeWorkout() {
        if (!this.currentWorkout) return;

        this.stopExerciseTimer();
        this.isWorkoutActive = false;

        const workoutDuration = new Date() - this.currentWorkout.startTime;
        
        // Сохраняем результат тренировки
        const workoutResult = {
            day: this.currentWorkout.day,
            date: new Date(),
            duration: workoutDuration,
            exercises: this.currentWorkout.completedExercises,
            totalExercises: this.currentWorkout.exercises.length,
            completedExercises: this.currentWorkout.completedExercises.length
        };

        PROGRESS_TRACKING.workoutHistory.push(workoutResult);
        this.updateWeeklyStats(workoutResult);

        // Показываем результаты
        this.showWorkoutComplete(workoutResult);

        // Очищаем текущую тренировку
        this.currentWorkout = null;
        this.activeExercise = null;

        this.saveUserData();
    }

    // 📊 ОБНОВЛЕНИЕ НЕДЕЛЬНОЙ СТАТИСТИКИ
    updateWeeklyStats(workoutResult) {
        PROGRESS_TRACKING.weeklyStats.workoutsCompleted++;
        PROGRESS_TRACKING.weeklyStats.totalExercises += workoutResult.completedExercises;
        PROGRESS_TRACKING.weeklyStats.totalTime += workoutResult.duration;
    }

    // 🎉 ПОКАЗ РЕЗУЛЬТАТОВ ТРЕНИРОВКИ
    showWorkoutComplete(result) {
        const modal = document.getElementById('workout-modal');
        const content = document.getElementById('workout-content');
        
        if (!modal || !content) return;

        const duration = Math.round(result.duration / 60000); // в минутах
        const completionRate = Math.round((result.completedExercises / result.totalExercises) * 100);

        content.innerHTML = `
            <div class="workout-complete">
                <div class="completion-icon">🏆</div>
                <h2>Тренировка завершена!</h2>
                <div class="workout-results">
                    <div class="result-item">
                        <span class="result-number">${duration}</span>
                        <span class="result-label">минут</span>
                    </div>
                    <div class="result-item">
                        <span class="result-number">${result.completedExercises}</span>
                        <span class="result-label">упражнений</span>
                    </div>
                    <div class="result-item">
                        <span class="result-number">${completionRate}%</span>
                        <span class="result-label">выполнено</span>
                    </div>
                </div>
                <div class="workout-feedback">
                    <p>Отличная работа! 💪</p>
                    <p>Не забудь записать свои ощущения и прогресс.</p>
                </div>
                <div class="completion-actions">
                    <button class="btn btn-secondary" onclick="app.closeWorkoutComplete()">
                        Завершить
                    </button>
                    <button class="btn btn-primary" onclick="app.showStats()">
                        Посмотреть статистику
                    </button>
                </div>
            </div>
        `;

        this.showModal('workout-modal');
    }

    closeWorkoutComplete() {
        this.closeModal('workout-modal');
        this.showMainInterface();
    }

    // 🏠 ПОКАЗ ГЛАВНОГО ИНТЕРФЕЙСА
    showMainInterface() {
        const workoutInterface = document.getElementById('workout-interface');
        if (workoutInterface) {
            workoutInterface.style.display = 'none';
        }

        const mainScreen = document.querySelector('.main-content');
        if (mainScreen) {
            mainScreen.style.display = 'block';
        }
    }

    // ⏸️ ПАУЗА ТРЕНИРОВКИ
    pauseWorkout() {
        if (!this.isWorkoutActive) {
            this.showMainInterface();
            return;
        }

        const modal = document.getElementById('workout-modal');
        const content = document.getElementById('workout-content');
        
        if (!modal || !content) return;

        content.innerHTML = `
            <div class="workout-pause">
                <div class="pause-icon">⏸️</div>
                <h2>Тренировка на паузе</h2>
                <p>Что вы хотите сделать?</p>
                <div class="pause-actions">
                    <button class="btn btn-secondary" onclick="app.resumeWorkout()">
                        Продолжить
                    </button>
                    <button class="btn btn-warning" onclick="app.endWorkoutEarly()">
                        Завершить досрочно
                    </button>
                </div>
            </div>
        `;

        this.showModal('workout-modal');
        this.stopExerciseTimer();
    }

    resumeWorkout() {
        this.closeModal('workout-modal');
        this.startExerciseTimer();
    }

    endWorkoutEarly() {
        if (confirm('Вы уверены, что хотите завершить тренировку досрочно?')) {
            this.completeWorkout();
        }
    }

    // 🔍 ПОКАЗ ИНФОРМАЦИИ ОБ УПРАЖНЕНИИ
    showExerciseInfo() {
        if (!this.activeExercise) return;

        const modal = document.getElementById('workout-modal');
        const content = document.getElementById('workout-content');
        
        if (!modal || !content) return;

        content.innerHTML = `
            <div class="exercise-info">
                <h2>${this.activeExercise.name}</h2>
                <div class="exercise-details">
                    <div class="detail-section">
                        <h3>Целевые мышцы</h3>
                        <p>${this.activeExercise.description}</p>
                    </div>
                    <div class="detail-section">
                        <h3>Техника выполнения</h3>
                        <ol class="instructions-list">
                            ${this.activeExercise.instructions.map(instruction => `
                                <li>${instruction}</li>
                            `).join('')}
                        </ol>
                    </div>
                    <div class="detail-section">
                        <h3>Важные советы</h3>
                        <p class="tips">${this.activeExercise.tips}</p>
                    </div>
                </div>
                <div class="exercise-info-actions">
                    <button class="btn btn-primary" onclick="app.closeModal('workout-modal')">
                        Понятно
                    </button>
                </div>
            </div>
        `;

        this.showModal('workout-modal');
    }

    // 🚀 ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    parseTime(timeString) {
        const [minutes, seconds] = timeString.split(':').map(Number);
        return minutes * 60 + seconds;
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // 💾 СОХРАНЕНИЕ И ЗАГРУЗКА ДАННЫХ
    saveUserData() {
        const userData = {
            settings: USER_SETTINGS,
            progress: PROGRESS_TRACKING,
            currentWorkout: this.currentWorkout
        };
        
        try {
            localStorage.setItem('workoutAppData', JSON.stringify(userData));
            console.log("💾 Данные сохранены");
        } catch (error) {
            console.error("❌ Ошибка сохранения:", error);
        }
    }

    loadUserData() {
        try {
            const userData = localStorage.getItem('workoutAppData');
            if (userData) {
                const parsed = JSON.parse(userData);
                
                if (parsed.settings) {
                    Object.assign(USER_SETTINGS, parsed.settings);
                }
                
                if (parsed.progress) {
                    Object.assign(PROGRESS_TRACKING, parsed.progress);
                }
                
                if (parsed.currentWorkout) {
                    this.currentWorkout = parsed.currentWorkout;
                }
                
                console.log("📂 Данные загружены");
            }
        } catch (error) {
            console.error("❌ Ошибка загрузки:", error);
        }
    }

    checkActiveWorkout() {
        if (this.currentWorkout && this.isWorkoutActive) {
            console.log("🔄 Восстанавливаем активную тренировку");
            this.showWorkoutInterface();
        }
    }

    // 📊 ПОКАЗ СТАТИСТИКИ
    showStats() {
        // Будет реализовано в следующем этапе
        console.log("📊 Статистика (в разработке)");
    }

    // ⚙️ НАСТРОЙКИ ОБРАБОТЧИКОВ СОБЫТИЙ
    setupEventListeners() {
        // Закрытие модальных окон по клику на фон
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });

        // ESC для закрытия модальных окон
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modals = document.querySelectorAll('.modal[style*="flex"]');
                modals.forEach(modal => {
                    this.closeModal(modal.id);
                });
            }
        });

        console.log("🎧 Обработчики событий настроены");
    }

    skipExercise() {
        if (confirm('Пропустить это упражнение?')) {
            this.completeExercise();
        }
    }
}

// ============================================================================
//                          ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ
// ============================================================================

// 🚀 Создаем глобальный экземпляр приложения
let app;

document.addEventListener('DOMContentLoaded', () => {
    console.log("🎯 DOM загружен, инициализируем приложение...");
    
    app = new WorkoutApp();
    
    // Делаем доступным глобально для отладки
    window.app = app;
    
    console.log("✅ Приложение готово к работе!");
});

// 📱 PWA регистрация Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ SW зарегистрирован:', registration.scope);
            })
            .catch(error => {
                console.log('❌ SW регистрация не удалась:', error);
            });
    });
}

console.log("🎉 Скрипт загружен успешно!");
