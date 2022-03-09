Vue.createApp({
    data: function() {
        return {
            items2: [
                {
                    id: 1,
                    name: 'item-1',
                },
                {
                    id: 2,
                    name: 'item-2',
                },
            ],

            object: {
                name: 'ヤマダ',
                age: 40,
                gender: '女',
            },

            items: ['item-1', 'item-2'],

            value: 7,

            isShow: false,

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