<template>
  <v-container fluid class="pa-0">
    <Background>
      <v-container fluid class="dark-background rounded-lg white--text">
        <h2 class="text-h2 font-weight-back">About us</h2>
        <v-divider></v-divider>

        <v-container fluid>
          <v-col class="pa-5">
            <h4 class="text-h4">Learning Partner</h4>
            <section>
              <p>
                Bienvenido a Learning Partner.<br />
                Learning Parter es un lector de documentos de texto en formato
                PDF. Está integrado con un diccionario de Inglés que permite
                llevar una lectura cómoda y fluida, al tiempo que aprendes
                nuevas palabras y comprendes a plenitud las ideas del texto.
              </p>
              <p>
                Welcome to Learning Partner.<br />
                Learning Partner is a PDF text document reader. It includes an
                English dictionary that will allow you to make a comfortable and
                fluent reading, while you learn new words and fully understand
                the ideas of the text.
              </p>
            </section>
          </v-col>

          <v-divider></v-divider>

          <v-col class="pa-5">
            <h4 class="text-h4">Team developer</h4>

            <section class="developers-section">
              <v-row no-gutters align="center">
                <v-col>Stiven Herrera Sierra</v-col>
                <v-col class="d-flex justify-end">
                  <a
                    class="btn-email"
                    target="_blank"
                    href="mailto:herreras.stiven@gmail.com?subject=Learning Partner"
                    >Send an email
                  </a>
                </v-col>
              </v-row>

              <v-row no-gutters align="center">
                <v-col>Mario Alberto López Ocampo</v-col>
                <v-col class="d-flex justify-end">
                  <a
                    class="btn-email"
                    target="_blank"
                    href="mailto:herreras.stiven@gmail.com?subject=Learning Partner"
                    >Send an email</a
                  >
                </v-col>
              </v-row>
            </section>
          </v-col>
        </v-container>

        <v-divider></v-divider>
      </v-container>
    </Background>

    <Footer></Footer>
  </v-container>
</template>

<script>
import Background from "../components/Background.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Background,
    Footer,
  },
};
</script>

<style scoped>
.dark-background {
  background-color: #1c1f20b9;
}

p {
  font-size: 16px !important;
}

h4 {
  text-align: center;
}

.btn-email {
  text-decoration: none;
  display: block;
  padding: 7px 5px;
  width: 120px;
  background-color: #0dcaf0;
  color: black !important;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  margin: 4px 0px;
}

.btn-email:hover {
  color: white !important;
  background-color: #222222;
}

.developers-section {
  margin-right: auto;
  margin-left: auto;
  width: 40%;
}
</style>