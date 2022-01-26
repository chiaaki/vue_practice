Vue.createApp({
    data: function() {
        return {
            message: 'ToDoアプリケーション',
            todoCategory: false,
            todoCategories: [],
        }
    },
}).mount('#app')