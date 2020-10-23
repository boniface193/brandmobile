<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
         <v-btn class="elevation-0" v-bind="attrs" v-on="on" color="#edf0f0" depressed small ><v-icon>mdi-pencil-circle</v-icon></v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline d-flex justify-content-end"
          @click="dialog = false"
        >
          <v-icon color="#EB0808">mdi-close</v-icon>
        </v-card-title>

        <v-container class="px-12">
          <div class="d-flex">
            <div class="float-right">
              <v-img src="@/assets/photo.svg" width="70%"></v-img>
              <p class="upload-text">Upload Picture</p>
            </div>

            <v-spacer></v-spacer>

            <div class="">
              <h5>Edit Personal Information</h5>
            </div>
          </div>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> I accept </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      dialog: false,
    };
  },
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
</style>