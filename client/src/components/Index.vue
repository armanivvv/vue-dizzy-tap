<template>
  <div>
    <section>

      <v-parallax dark
        style="background-image: linear-gradient(-225deg, rgba(0,101,168,0.6) 0%, rgba(0,36,61,0.6) 50%), url('https://res.cloudinary.com/dyocdwgu9/image/upload/v1546229301/Dizzy Lounge/barbkg.jpg'); background-size: cover;"
        height="650">
        <v-layout align-center column justify-center >
          <v-flex xs12>
            <!-- tom collins -->
            <!-- <div class="cocktail collins">
              <div class="cocktail__glass cocktail__glass-long">
                <div class="orange"></div>
                <div class="cherry"></div>
                <div class="ice">
                  <div class="ice__cube cube-1"></div>
                  <div class="ice__cube cube-2"></div>
                  <div class="ice__cube cube-3"></div>
                </div>
              </div>
            </div> -->

            <!-- negroni -->
            <div class="cocktail negroni">
              <div class="cocktail__glass cocktail__glass-short">
                <div class="orange"></div>
                <div class="orange"></div>
                <div class="ice">
                  <div class="ice__cube cube-1"></div>
                  <div class="ice__cube cube-2"></div>
                  <div class="ice__cube cube-3"></div>
                  <div class="ice__cube cube-4"></div>
                </div>
              </div>
            </div>
          </v-flex>
          <h1 class="white--text mb-2 display-1 text-xs-center">Dizzy Tap Lounge</h1>
          <div class="subheading mb-3 text-xs-center">Drinks Recipe Maker</div>
          <v-flex xs12>

              <v-dialog v-model="dialogl" persistent max-width="400px">
                <v-btn round slot="activator" class="primary" dark>
                  <v-icon left dark>fingerprint</v-icon>
                  Sign In
                </v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Sign In</span>
                  </v-card-title>
                  <div class="danger-alert" v-html="error" />
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Email*" required v-model="email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password*" type="password"
                            required v-model="password"
                            autocomplete="new-password"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialogl = false">Close</v-btn>
                    <v-btn dark class="primary" @click="login">Sign In</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog v-model="dialogr" persistent max-width="400px">
                <v-btn round slot="activator" class="primary" dark>
                  <v-icon left dark>face</v-icon>
                  Join Now
                </v-btn>
                <v-card>
                  <v-card-title>
                    <span class="headline">Join Now</span>
                  </v-card-title>
                  <div class="danger-alert" v-html="error" />
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Email*" required v-model="email"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field label="Password*" type="password"
                            required v-model="password"
                            autocomplete="new-password"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialogr = false">Close</v-btn>
                    <v-btn dark class="primary" @click="register">Join Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            <!-- <v-btn
              round
              class="primary"
              dark
              :to="{
                name: 'login'
              }"
            >
              <v-icon left dark>fingerprint</v-icon>
              Login
            </v-btn>
            <v-btn
              round
              class="primary"
              dark
              :to="{
                name: 'register'
              }"
            >
              <v-icon left dark>face</v-icon>
              Sign Up
            </v-btn> -->
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Welcome to Dizzy Tap Lounge</h2>
            <span class="subheading">
              Enjoy Responsibly!
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text text--lighten-2">local_bar</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Find Your Drinks</div>
                  </v-card-title>
                  <v-card-text>
                    Find recipes for your favorite drinks.
                    Create personalised recipes.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text text--lighten-2">favorite_border</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Bookmark Recipes</div>
                  </v-card-title>
                  <v-card-text>
                    Boomark your favorite recipes.
                    Keep track of your viewing history.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="primary--text text--lighten-2">whatshot</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Search Ingredients</div>
                  </v-card-title>
                  <v-card-text>
                    Search based on what you have and find
                    the perfect recipe.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <v-footer class="primary">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            using <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            by <a class="white--text" href="https://github.com/armanivvv">Armani</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
</div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      dialogl: false,
      dialogr: false,
      email: '',
      password: '',
      error: null,
    };
  },

  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'cocktails',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },

    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'cocktails',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};

</script>

<style>

*, *:before, *:after {
  box-sizing: inherit;
}

.cocktail .description {
  text-align: center;
  padding-top: 10px;
  font-size: 14px;
  line-height: 20px;
}
.cocktail .description .ingredient {
  display: block;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: rgba(255, 255, 255, 0.5);
}
.cocktail .description .ingredient.top {
  padding-top: 15px;
}

/* Ingredient: orange */
/* Ingredient ice */
/* cocktails */
.cocktail {
  float: left;
  min-width: 200px;
  min-height: 350px;
  padding: 80px 60px 0;
  width: 33%;
}
@media all and (max-width: 600px) {
  .cocktail {
    width: 50%;
  }
}
@media all and (max-width: 600px) {
  .cocktail {
    width: 100%;
  }
}
.cocktail .cocktail__glass {
  margin: 0 auto;
}
.cocktail.collins {
  padding-top: 184px;
}
.cocktail.negroni {
  padding-top: 250px;
}
.cocktail.martini {
  padding-top: 89px;
}
.cocktail.martini .description {
  padding-top: 42px;
}
.cocktail .ice .ice__cube {
  background: rgba(255, 255, 255, 0.2);
  width: 28px;
  height: 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  position: absolute;
  bottom: 4px;
  left: 5px;
}
.cocktail .ice .ice__cube:nth-child(1) {
  left: 3px;
  transform: rotate(20deg) translate3d(0, 0, 0);
}
.cocktail .ice .ice__cube:nth-child(2) {
  left: 28px;
  transform: rotate(35deg) translate3d(0, 0, 0);
}
.cocktail .ice .ice__cube:nth-child(3) {
  left: 48px;
  transform: rotate(55deg) translate3d(0, 0, 0);
}
.cocktail .ice .ice__cube.cube-3 {
  transform: rotate(55deg) translate3d(-18px, 9px, 0);
}
.cocktail .orange {
  position: absolute;
  right: 16px;
  top: 4px;
  transform: rotate(250deg);
  overflow: hidden;
  width: 56px;
  height: 28px;
  animation: float 3s infinite alternate linear;
}
.cocktail .orange:before {
  content: "";
  position: absolute;
  background-color: orange;
  width: 100%;
  height: 200%;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #ffc04d, inset 0 0 0 10px #ffdb99;
}
.cocktail .cherry {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #C40000;
  position: relative;
  left: 34px;
  top: 10px;
  animation: float-simple 5s infinite alternate linear;
}
.cocktail .cherry:before {
  content: '';
  background-color: transparent;
  width: 46px;
  height: 34px;
  border-radius: 50% / 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #C40000;
  border-right: none;
  border-top: none;
  border-bottom: none;
  display: block;
  position: absolute;
  top: -26px;
  left: 6px;
  transform: rotate(15deg);
}
.cocktail .olive {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(128, 128, 0, 0.5);
  position: relative;
  left: -4px;
  top: -38px;
  animation: float-simple 5s infinite alternate linear;
}
.cocktail .olive:before {
  content: '';
  background-color: transparent;
  width: 46px;
  height: 30px;
  border: 1px solid #dEb887;
  border-right: none;
  border-top: none;
  border-bottom: none;
  display: block;
  position: absolute;
  top: -30px;
  left: 10px;
}
.cocktail .cocktail__glass-long {
  position: relative;
  width: 64px;
  height: 130px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.cocktail .cocktail__glass-long:after {
  content: '';
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  animation: fill-long 0.6s forwards ease;
}
.cocktail .cocktail__glass-short {
  position: relative;
  width: 76px;
  height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.cocktail .cocktail__glass-short:after {
  content: '';
  background: rgba(230, 45, 13, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  animation: fill-short 0.6s forwards ease;
  /*
  @include keyframes( "fill") {
    100% {height: ($glass-long-h - 10px);}
  }
  */
}
.cocktail .cocktail__glass-short .orange {
  position: absolute;
  right: 12px;
  top: -8px;
  transform: rotate(15deg);
  overflow: hidden;
  width: 56px;
  height: 28px;
  animation: float-simple 3s infinite alternate linear;
}
.cocktail .cocktail__glass-short .orange:before {
  content: "";
  position: absolute;
  background-color: orange;
  width: 100%;
  height: 200%;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #ffc04d, inset 0 0 0 10px #ffdb99;
}
.cocktail .cocktail__glass-classic {
  position: relative;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid rgba(255, 255, 255, 0.3);
  /* fill */
  /* gambo */
}
.cocktail .cocktail__glass-classic:before {
  content: '';
  width: 0;
  height: 0;
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;
  border-top: 18px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  top: -40px;
  left: -36px;
  animation: fill-classic 0.6s forwards ease;
  transform: translate3d(0, 0, 0) scale(0);
  transform-origin: 50% bottom;
}
.cocktail .cocktail__glass-classic:after {
  content: '';
  position: absolute;
  left: -2px;
  bottom: -54px;
  height: 56px;
  width: 4px;
  background: rgba(255, 255, 255, 0.3);
}
.cocktail .cocktail__glass-classic .stand {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 5px solid rgba(255, 255, 255, 0.3);
  position: relative;
  left: -14px;
  top: 32px;
}

@keyframes float {
  50% {
    transform: rotate(260deg) translate3d(-2px, 1px, 0);
  }
}
@keyframes float-simple {
  50% {
    transform: rotate(15deg) translate3d(0px, 2px, 0);
  }
}
@keyframes fill-classic {
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
@keyframes fill-long {
  100% {
    height: 110px;
  }
}
@keyframes fill-short {
  100% {
    height: 54px;
  }
}

</style>
