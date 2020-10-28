<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="437">
      <template v-slot:activator="{ on, attr }">
        <v-btn color="#fff" small depressed v-bind="attr" v-on="on"
          ><v-icon size="20" color="#EB0808">mdi-trash-can</v-icon></v-btn
        >
      </template>

      <v-card>
        <v-btn
          class="headline float-right"
          depressed
          color="white"
          @click="dialog = false"
        >
          <v-icon color="#EB0808">mdi-close</v-icon>
        </v-btn>

        <div class="container text-center mt-5">
          <div class="d-flex justify-content-center">
            <div class="">
              <v-img
                src="@/assets/signs.svg"
                width="50px"
                class="text-center"
              ></v-img>
            </div>
          </div>
          <div class="mt-3">
            <p class="alert-text-sm">
              {{name}}
            </p>
          </div>
        </div>

        <v-card-actions class="d-flex justify-content-center mb-5">
          <div class="text-capitalize px-12 py-2 mr-8 shadow-sm"
            @click="delUser(desserts.id); dialog = false" v-html="yes"></div>
          <div  class="text-capitalize px-12 py-2 shadow-sm"
            @click="dialog = false" v-html="no"></div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  props: ["name", "no", "yes"],
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters(["desserts"])
  },

  methods: {
    ...mapActions(["delUser"]),
    // delUser(){
    //   this.delUser(desserts.id)
      // this.dialog = false
    // }
    }
};
</script>

<style lang="css">
.v-card.v-sheet.theme--light {
  border: solid 1px #44099f;
}

.v-overlay__scrim {
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(6px);
  /* filter: blur(20px); */
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
}

.upload-text {
  text-align: left;
  font: normal normal bold 9px/10px sans-serif;
  letter-spacing: 0px;
  color: #2f323a;
  opacity: 0.74;
}

.alert-text-sm {
  font: normal normal normal 14px/30px sans-serif;
  letter-spacing: 0px;
  color: #080808;
  opacity: 1;
}

div .text-center {
  width: 55%;
}
</style>