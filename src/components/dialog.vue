<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="787">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="elevation-0"
          v-bind="attrs"
          v-on="on"
          color="#edf0f0"
          depressed
          small
          ><v-icon>mdi-pencil-circle</v-icon></v-btn
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

        <v-container class="px-12">
          <div class="my-5">
            <div class="float-right">
              <v-img src="@/assets/photo.svg" width="70%"></v-img>
              <p class="upload-text">Upload Picture</p>
            </div>

            <v-spacer></v-spacer>

            <div>
              <h5>Edit Personal Information</h5>
            </div>

            <v-form class="space-at-top" @submit.prevent="updatedUser(user.user_id)">
              <div class="row">
                <div class="col-6 py-0">
                  <label for="" class="smaller-text">Full Name</label>
                  <div>
                    <i
                      class="fas fa-user position-absolute mx-2 mt-2 text-primary"
                    ></i>
                    <input type="text" class="form-control pl-7" :value="`${user.first_name} ${user.last_name}`"/>
                  </div>
                </div>

                <div class="col-sm-8 py-0">
                  <label for="" class="smaller-text">Address</label>
                  <div>
                    <i
                      class="fas fa-map-marker-alt position-absolute mx-2 mt-2 text-primary"
                    ></i>
                    <input
                      type="text"
                      class="form-control pl-7"
                      :value="user.address"
                    />
                  </div>
                </div>

                <div class="col-sm-4 pt-7">
                  <div class="d-flex justify-content-end">
                    <i
                      class="fas fa-caret-down position-absolute mt-2 mr-2"
                    ></i>
                    <select class="form-control">
                      <option value="">City</option>
                    </select>
                  </div>
                </div>

                <div class="col-sm-4 pt-0">
                  <div class="d-flex justify-content-end">
                    <i
                      class="fas fa-caret-down position-absolute mt-2 mr-2"
                    ></i>
                    <select class="form-control">
                      <option value="">State</option>
                    </select>
                  </div>
                </div>

                <div class="row container">
                  <div class="col-6">
                    <label for="" class="smaller-text">Email</label>
                    <div>
                      <i
                        class="fas fa-envelope position-absolute mx-2 mt-2 text-primary"
                      ></i>
                      <input type="text" class="form-control pl-7" :value="user.email"/>
                    </div>
                  </div>

                  <div class="col-6">
                    <label for="" class="smaller-text">Phone Number</label>
                    <div>
                      <i
                        class="fas fa-phone position-absolute mx-2 mt-2 text-primary"
                      ></i>
                      <input
                        type="text"
                        class="form-control pl-7"
                        placeholder="+234"
                        :value="user.phone"
                      />
                    </div>
                  </div>
                </div>
              </div>

        <v-card-actions class="d-flex justify-content-center my-12">
          <button class="btn btn-primary w-25">
            Update
          </button>
        </v-card-actions>
            </v-form>
          </div>
        </v-container>

        <!-- <v-card-actions class="d-flex justify-content-center my-12">
          <button class="btn btn-primary w-25">
            Update
          </button>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  props: [],
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters(['user'])
  
  },
};
</script>

<style lang="css" scoped>
.smaller-text {
  text-align: left;
  font: normal normal normal 10px/20px sans-serif;
  letter-spacing: 0px;
  color: #2f323a;
  opacity: 0.57;
}

.form-control {
  outline: none;
  border: 0.5px solid #44099f;
}

.space-at-top {
  margin-top: 10%;
}
</style>