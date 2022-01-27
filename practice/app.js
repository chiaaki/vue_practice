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
}).mount('#app')