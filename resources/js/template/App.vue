<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      v-if="!this.$router.history.current.path.includes('/error')"
    >
      <v-list dense>
        <v-subheader>LIST OF PAGES:</v-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group :value="false" prepend-icon="mdi-cog">
          <template v-slot:activator>
            <v-list-item-title>MASTER<br />MAINTENANCE</v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in mastermains" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      v-if="!this.$router.history.current.path.includes('/error')"
      style="background-color: #223040"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      <span style="display: flex"
        ><img :src="url + `/rns//images/rnsPic.png`" width="65px" height="65px" />
        <h2 class="pt-3" style="color: white">{{ headerName }}</h2></span
      >
      <v-spacer></v-spacer>
      <div style="right: 25px">
        <p class="mr-5 mt-3" style="color:white">
          {{ date }}<span style="display: block; left: 5px">{{ time }}</span>
        </p>
      </div>
    </v-app-bar>

    <v-main class="ma-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import moment from "moment";
export default {
  data: () => ({
    date: "",
    time: "",
    url: window.location.origin,
    mastermains: [
      { text: "Programmer", icon: "mdi-code-braces-box", to: "Programmer" },
      { text: "System", icon: "mdi-card-bulleted-settings", to: "System" },
      { text: "Requestor", icon: "mdi-human-greeting", to: "Requestor" },
      { text: "Type", icon: "mdi-format-list-bulleted-type", to: "Type" },
      { text: "Kind", icon: "mdi-collage", to: "Kind" },
    ],
    drawer: false,
    items: [{ text: "MAIN PAGE", icon: "mdi-home", to: "main" }],
  }),
  computed: {
    headerName() {
      return this.$route.name == "main" ? "MASTER TRANSACTION" : "RELEASE NOTE SYSTEM";
    },
  },
  mounted() {
    setInterval(() => {
      this.date = moment().format("LL");
      this.time = moment().format("LTS dddd");
    }, 1000);
  },
};
</script>
