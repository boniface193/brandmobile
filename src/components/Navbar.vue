<template>
  <nav>
    <v-app-bar v-for="users in user" :key="users.id" dense flat app color="#EDF0F0" class="elevation-1">
      <v-app-bar-nav-icon v-if="!drawer" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>

      <v-badge color="#E24040" content="9" overlap>
        <v-icon color="#848589">mdi-bell</v-icon>
      </v-badge>
      <v-toolbar-title class="text-size grey--text ml-3">
        Updated 29 min ago
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-img v-if="users.image_url" :src="users.image_url" max-width="25" ></v-img>
      <v-badge v-else color="#44099F" overlap icon="mdi-account"> </v-badge>
      <v-toolbar-title class="text-size grey--text ml-3">
        Hi, {{users.last_name}}
      </v-toolbar-title>
      <v-icon color="#44099F" size="23" class="ml-5 mr-1"
        >mdi-help-circle-outline</v-icon
      >
      <v-toolbar-title class="text-size grey--text"> Help </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app class="dark" width="200" dark v-model="drawer">
      <v-container>
        <img
          src="https://brandmobileafrica.com/images/bma-log.png"
          alt="brand mobile logo"
          width="50%"
        />
      </v-container>
      <v-list class="mt-12 pa-0" nav tile>
        <v-list-item
          active-class="bg-white rounded-0"
          class="pa-0"
          v-for="item in items"
          :key="item.key"
          link
          router
          :to="item.routes"
        >
          <div class="w-100">
            <v-list-item-content class="mx-3">
              <v-list-item-title class="text-size-md">
                <v-img :src="item.icon" width="13%" class="float-left"></v-img>
                <div class="ml-12" :class="{ linkColor: item.active }">
                  {{ item.title }}
                </div>
              </v-list-item-title>
            </v-list-item-content>
            <v-divider class="ma-0"></v-divider>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      drawer: true,
      users: '',
      items: [
        {
          title: "Dashboard",
          icon: require("../assets/window.svg"),
          routes: "/",
          active: true,
        },
        { title: "Clients", icon: require("../assets/hotel.svg") },
        { title: "Audience", icon: require("../assets/target.svg") },
        { title: "Games", icon: require("../assets/dice.svg") },
        { title: "Redemption", icon: require("../assets/coupon.svg") },
      ],
    };
  },

   computed: {
    ...mapGetters(['user'])
  },
};
</script>

<style lang="css" scoped>
.text-size {
  font-size: 10px;
}

.linkColor {
  color: #44099f;
}

.text-size-md {
  font-weight: normal;
  color: #fff;
  font: normal normal normal 14px/21px sans-serif;
  letter-spacing: 0px;
}

a:hover {
  text-decoration: none;
  /* color: #44099F; */
}

.v-list-item__title.text-size-md:visited {
  color: #44099f;
}

.v-list-item__title.text-size-md:active {
  color: #44099f;
}

.v-list-item__title.text-size-md::after {
  color: #44099f;
}

.v-list-item__title.text-size-md::before {
  color: #44099f;
}

.v-list-item__title.text-size-md:target {
  color: #44099f;
}
</style>