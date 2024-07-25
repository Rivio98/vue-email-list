const { createApp } = Vue;

createApp({
    data() {
        return {
            generatedEmail: [],
        }
    },
    created() {
        this.generateTenEmails();
    },
    methods: {
        generateTenEmails() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
                    this.generatedEmail.push(resp.data.response)
                });
            }
        }
    }
}).mount('#app');
