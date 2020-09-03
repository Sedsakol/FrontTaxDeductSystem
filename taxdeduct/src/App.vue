<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">เข้าสู่ระบบ</span>
      </v-btn>
      <v-btn
        target="_blank"
        text
      >
        <span class="mr-2">เข้าสู่ระบบ</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>