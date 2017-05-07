new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            {title: 'Item 1'},
            {title: 'Item 2'},
            {title: 'Item 3'}
        ]
    },
    methods: {
        addItem: function() {
            this.total += 9.99;
        }
    }
});