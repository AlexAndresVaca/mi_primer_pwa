const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        }
    },
    methods: {
        sumar() {
            this.count++;
        },
        restar() {
            this.count--;
        }
    },
})