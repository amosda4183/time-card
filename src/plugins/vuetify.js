import '@fortawesome/fontawesome-free/css/all.css' 
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);

export default new Vuetify({ 
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: "#F4511E",
        secondary: "#5E35B1",
        accent: "#1A237E",
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#1B5E20",
        green:"#00cc00"
      },
    },
  },
 
});
