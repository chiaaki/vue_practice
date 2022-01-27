Vue.createApp({
    data: function() {
        return {
            author: '',
            
            message: 'ToDoアプリケーション',
            todoCategory: false,
            todoCategories: [],
        }
    },
}).mount('#app')