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
          <div class="my-5" v-for="users in user" :key="users.id">
            <div class="float-right">
              <v-img v-if="users.image_url" :src="users.image_url"></v-img>
              <v-img v-else src="@/assets/photo.svg" width="70%"></v-img>
              <p class="upload-text">Upload Picture</p>
            </div>

            <v-spacer></v-spacer>

            <div>
              <h5>Edit Personal Information</h5>
            </div>

            <v-form class="space-at-top" @submit.prevent="updateUser(users)">
              <div class="row">
                <div class="col-6 py-0">
                  <label for="" class="smaller-text">Full Name</label>
                  <div>
                    <i
                      class="fas fa-user position-absolute mx-2 mt-2 text-primary"
                    ></i>
                    <input v-model="fullname" type="text" class="form-control pl-7" />
                  </div>
                </div>

                <div class="col-sm-8 py-0">
                  <label for="" class="smaller-text">Address</label>
                  <div>
                    <i
                      class="fas fa-map-marker-alt position-absolute mx-2 mt-2 text-primary"
                    ></i>
                    <input
                    v-model="address"
                      type="text"
                      class="form-control pl-7"
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
                      <input v-model="email" type="text" class="form-control pl-7" />
                    </div>
                  </div>

                  <div class="col-6">
                    <label for="" class="smaller-text">Phone Number</label>
                    <div>
                      <i
                        class="fas fa-phone position-absolute mx-2 mt-2 text-primary"
                      ></i>
                      <input
                      v-model="phone"
                        type="text"
                        class="form-control pl-7"
                        placeholder="+234"
                      />
                    </div>
                  </div>
                </div>
              </div>

        <v-card-actions class="d-flex justify-content-center my-12">
          <button type="submit" class="btn btn-primary w-25">
            Update
          </button>
        </v-card-actions>
            </v-form>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  props: [],
  data() {
    return {
      dialog: false,
      fullname: '',
      address: '',
      phone: '',
      email: '',
    };
  },

  computed: {
    ...mapGetters(['user'])
    
 
  },

  methods: {
    ...mapActions(["updateData"]),
    updateUser(users){
      const updatedata = {
        id: users.id,
        first_name: this.fullname,
        email: this.email,
        phone: this.phone,
        address: this.address,
        image_url: users.image_url
      }

      this.updateData(updatedata);
      alert('Updated successfully!');
      this.dialog = false
    }
  }
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