Vue.createApp({
    data: function() {
        return {
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCatgory: '',
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
        }
    },
}).mount('#app')