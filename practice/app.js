Vue.createApp({
    data: function() {
        return {
            todoTitle: '',
            todoTitle2: '',
            todoTitle3: '',

            author: '',

            message: 'ToDoアプリケーション',
            todoCategory: false,
            todoCategories: [],
        }
    },
    computed: {
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