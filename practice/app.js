Vue.createApp({
    data: function() {
        return {
            defaultColor: 'blue',

            isActive: false,
        }
    },
    computed: {
        className: function() {
            return {
                'is-active': this.isActive,
                'is-inactive': !this.isActive,
            }
        },
    },
}).mount('#app')