Vue.createApp({
    data: function() {
        return {
            todos: [
                {
                    title: 'タスク1',
                },
                {
                    title: 'タスク2',
                },
            ],
            count: 0,

            todoTitle: '',
            todoTitle2: '',
            todoTitle3: '',
            todoTitle04: '',

            author: '',

            message: 'ToDoアプリケーション',
            todoCategory: false,
            todoCategories: [],
        }
    },
    watch: {
        todos: {
            handler: function(next, prev) {
                console.log('todosに変更がありました')
            },
            deep: true,
        },
    },
    methods: {
        onClick: function(event) {
            this.todos[1].title = 'たすく2'
        },
        
        onClickCountUp: function(event) {
            console.log(event)
            this.count += 1
        },
    },
    computed: {
        todoTitleText: function() {
            return 'todoTitleは、' + this.todoTitle04 + 'です。'
        },

        dateFormat: function() {
            const date = new Date()

            return date.getFullYear() + ' / ' + (date.getMonth() + 1)
        },
        joinedToDoCategories: function() {
            return this.todoCategories.join(' / ')
        },
        categoryText: function() {
            return '選択されているカテゴリー：' + this.joinedToDoCategories
        },
    },
}).mount('#app')