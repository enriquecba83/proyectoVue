const {createApp} = Vue;

createApp({
    data() {
        return {
            titulo: "Primera Pre entrega 'CONTADOR' By Enrique Cativa",
            contador: 0,
        }
    },
    methods: {
        incrementar: function() {
            this.contador = this.contador + 1;
        },
        decrementar: function() {
            this.contador = this.contador - 1;
        }
    }
}).mount("#app")