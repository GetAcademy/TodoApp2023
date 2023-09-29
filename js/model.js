const model = {
    app: {
        currentPage: 'addOrEditTask',
    },
    inputs: {
        todayPage: {
            currentDate: '2023-09-28',
        },
        weekPage: {
            fromDate: '2023-09-25',
        },
        addTaskPage: {
            id: 2,
            title: null,
            description: null,
            duration: 30,
            recurring: 'Gjentas ikke',
            priority: 'Vanlig',
            duedate: null,
        },
        editTaskPage: {
            id: 2,
            title: null,
            description: null,
            duration: 30,
            recurring: 'Gjentas ikke',
            priority: 'Vanlig',
            duedate: null,
        },
    },
    // data
    tasks: [
        {
            id: 1,
            title: 'Vask',
            description: 'Vask bad første etasje',
            duration: 30,
            recurring: 'Gjentas ikke',
            priority: 'Vanlig',
            duedate: "2023-09-27",
        },
        {
            id: 2,
            title: 'Vask',
            description: 'Vask bad andre etasje',
            duration: 30,
            recurring: 'Gjentas ikke',
            priority: 'Vanlig',
            duedate: "2023-09-28",
        },
        {
            id: 3,
            title: 'Vask',
            description: 'Vask bad tredje etasje',
            duration: 30,
            recurring: 'Gjentas ikke',
            priority: 'Vanlig',
            duedate: "2023-09-29",
        },
    ],
};
