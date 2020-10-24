<template>
  <div class="background">
    <v-container>
      <v-row class="height-30">
        <v-col>
          <div class="d-flex justify-content-end">
            <v-btn
              depressed
              small
              v-if="is_invite"
              @click="is_invite = false"
              color="#edf0f0"
              ><v-icon color="#EB0808">mdi-close-circle</v-icon></v-btn
            >
            <div v-else>
              <v-btn class="text-capitalize text text-color white--text mr-4">
                Resend Invitation
                <v-icon class="ml-2">mdi-email</v-icon>
              </v-btn>
              <v-btn
                class="text-capitalize text text-color white--text"
                @click="inviteUser()"
              >
                Invite User
                <v-icon class="ml-2">mdi-plus-circle</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4">
          <div class="float-right mr-5">
            <modal />
          </div>
          <div class="d-flex">
            <div>
              <v-img
                v-if="user.image_url"
                :src="user.image_url"
                width="75px"
              ></v-img>
              <v-img v-else src="@/assets/photo.svg" width="75px"></v-img>
              <p class="upload-text">Upload Picture</p>
            </div>
            <h3 class="upload-text-lg mt-7 ml-4">
              {{ user.first_name }} {{ user.last_name }}
            </h3>
          </div>

          <div>
            <div class="table-text mt-5">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-email</v-icon>
              {{ user.email }}
            </div>

            <div class="table-text mt-5">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-phone</v-icon>
              {{ user.phone }}
            </div>

            <div class="table-text mt-5 d-flex">
              <v-icon color="#5064CC" size="30" class="mr-2"
                >mdi-map-marker</v-icon
              >
              <p class="mb-0">
                {{ user.address }}
              </p>
            </div>

            <div class="mt-5 d-flex" v-if="is_changePwd" @click="changePwd()">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-lock</v-icon>
              <v-btn depressed color="#EDF0F0" class="pwd text-capitalize pt-2"
                >Change Password</v-btn
              >
            </div>

            <v-form :class="{ 'd-none': is_changePwd }">
              <div class="d-flex table-text">
                <v-icon color="#5064CC" size="30" class="mr-2">mdi-lock</v-icon>
                <v-text-field
                  color="#2F323A"
                  name="pwd"
                  label="Old Password"
                  id="old"
                  type="password"
                >
                </v-text-field>
              </div>

              <div class="d-flex table-text">
                <v-icon color="#5064CC" size="30" class="mr-2">mdi-lock</v-icon>
                <v-text-field
                  color="#2F323A"
                  name="pwd"
                  label="New Pasword"
                  id="new"
                  type="password"
                >
                </v-text-field>
              </div>

              <div class="d-flex table-text">
                <v-icon color="#5064CC" size="30" class="mr-2">mdi-lock</v-icon>
                <v-text-field
                  color="#2F323A"
                  name="pwd"
                  label="Confirm Password"
                  id="confirm"
                  type="password"
                >
                </v-text-field>
              </div>
              <v-btn
                class="text-capitalize text text-color white--text float-right"
              >
                Update Password
              </v-btn>
            </v-form>
          </div>
        </v-col>
        <v-col sm="8">
          <!-- table -->
          <v-card class="elevation-3">
            <v-card-text class="pb-0">
              <p class="table-head mb-0">Users</p>
            </v-card-text>
            <v-card-title class="pa-0" v-if="is_invite">
              <v-container class="mx-12">
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      name="name"
                      label="Type Email Address"
                      id="id"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-select items="Admin" v-model="value"></v-select>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                      class="text-capitalize text btn-sm text-color white--text px-8 mt-5"
                    >
                      Invite User
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-title>

            <v-simple-table>
              <template v-slot:default>
                <thead></thead>
                <tbody>
                  <tr v-for="(item) in desserts" :key="item.user_id">
                    <td>
                      <v-img
                        v-if="item.image_url"
                        :src="item.image_url"
                        width="34"
                      ></v-img>
                      <v-icon v-else size="34">mdi-account-circle</v-icon>
                    </td>
                    <td
                      :class="{
                        disabled: !item.is_active || !item.has_activated,
                      }"
                    >
                      {{ item.first_name }}
                    </td>
                    <td
                      :class="{
                        disabled: !item.is_active || !item.has_activated,
                      }"
                    >
                      {{ item.email }}
                    </td>
                    <td>
                      <v-select
                        v-if="item.is_active"
                        color="#5064cc"
                        items="Admin"
                      ></v-select>
                      <v-select
                        v-else
                        color="#5064cc"
                        disabled
                        filled
                        dense
                        items="Admin"
                      ></v-select>
                    </td>
                    <td>
                      <div class="d-flex mr-2" v-if="item.has_activated">
                        <v-btn
                          color="#fff"
                          small
                          depressed
                          class="ml-5"
                          v-if="item.is_active"
                          ><v-icon size="20" color="#EB0808"
                            >mdi-cancel</v-icon
                          ></v-btn
                        >
                        <v-btn color="#fff" small depressed v-else class="ml-5"
                          ><v-icon size="20" color="green"
                            >mdi-lock-open-variant</v-icon
                          ></v-btn
                        >

                        <alert />
                      </div>
                      <v-btn
                        v-else
                        class="text-capitalize text btn-sm text-color white--text"
                      >
                        Resend Invitation
                      </v-btn>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
          <v-btn
            v-if="is_changePwd"
            class="text-capitalize text text-color white--text my-5 float-right px-12"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import modal from "@/components/dialog";
import alert from "@/components/alert";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    modal,
    alert,
  },
  data() {
    return {
      is_invite: false,
      errorAlert: false,
      is_changePwd: true,
    };
  },

  computed: {
    ...mapGetters(['desserts']),
    ...mapGetters(['user'])
  
  },

  mounted() {
    this.$store.dispatch('getContent')
  },

  methods: {
    changePwd() {
      this.is_changePwd = false;
    },

    inviteUser() {
      this.is_invite = true;
    },
  },
};
</script>

<style lang="css" scoped>
.text {
  text-align: center;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0px;
}

.text-color {
  background: #5064cc !important;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
}

.text-width {
  width: 50%;
}

.height-30 {
  margin-top: 5%;
}

.table-head {
  text-align: left;
  font: normal normal normal 17px/28px sans-serif;
  letter-spacing: 0px;
  color: #5064cc;
  opacity: 1;
}

.table-text {
  text-align: left;
  font-family: sans-serif;
  font: normal normal normal 12px/29px sans-serif;
  letter-spacing: 0px;
  color: #2f323a;
  opacity: 1;
}

.upload-text {
  text-align: left;
  font: normal normal bold 9px/10px sans-serif;
  letter-spacing: 0px;
  color: #2f323a;
  opacity: 0.74;
}

.upload-text-lg {
  text-align: left;
  text-decoration: underline;
  font: normal normal normal 22px/29px sans-serif;
  letter-spacing: 0px;
  color: #44099f;
  opacity: 1;
}

.pwd {
  text-align: left;
  text-decoration: underline;
  font: italic normal normal 14px/20px sans-serif;
  letter-spacing: 0px;
  color: #5064cc;
  opacity: 1;
}

.disabled {
  color: #b6b7ba;
}

.v-card.v-sheet.theme--light {
  border: solid 1px #fff;
}
</style>