/*
Stampare a schermo un messaggio all’interno di un h1, 
utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = Vue.createApp({
  data() {
    return {
      message: "Benvenuto in VUE",
      image:
        "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
    };
  },
});

app.mount("#root");
