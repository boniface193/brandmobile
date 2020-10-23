<template>
  <v-app>
   <Navbar/>

   <v-main>
     
   <router-view></router-view>
   </v-main>


  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="css" scoped>
.background {
  background-color: #edf0f0;
  height: 100%;
}

</style>
