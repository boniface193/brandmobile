<template>
  <div class="background">
    <v-container>
      <v-row class="height-30">
        <v-col>
          <div class="d-flex justify-content-end mb-5">
            <v-btn class="text-capitalize text text-color white--text mr-4">
              Resend Invitation
              <v-icon class="ml-2">mdi-email</v-icon>
            </v-btn>
            <v-btn class="text-capitalize text text-color white--text">
              Invite User
              <v-icon class="ml-2">mdi-plus-circle</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4">
          <v-icon class="float-right mr-5">mdi-pencil-circle</v-icon>
          <div class="d-flex">
            <div>
              <v-img src="@/assets/photo.svg" width="75px"></v-img>
              <p class="upload-text">Upload Picture</p>
            </div>
            <h3 class="upload-text-lg mt-7 ml-4">Moshood Aremu</h3>
          </div>

          <div>
            <div class="table-text my-7">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-email</v-icon>
              Moshood@brandmobileafrica.com
            </div>

            <div class="table-text my-7">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-phone</v-icon>
              +234 818 655 1442
            </div>

            <div class="table-text my-7 d-flex">
              <v-icon color="#5064CC" size="30" class="mr-2"
                >mdi-map-marker</v-icon
              >
              <p class="mb-0">
                #25B, Adewole Kolawole Crescent, off Admiralty way, Lekki, Phase
                1, Lagos, Nigeria.
              </p>
            </div>

            <div class="my-7 d-flex">
              <v-icon color="#5064CC" size="30" class="mr-2">mdi-lock</v-icon>
              <p class="pwd mb-0 mt-3">Change Password</p>
            </div>
          </div>
        </v-col>
        <v-col sm="8">
          <!-- table -->
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <p class="table-head ma-5">Users</p>
              </thead>
              <tbody>
                <tr v-for="(index, item) in desserts" :key="item.name">
                  <td>
                    <v-icon size="34">{{ index.avatar }}</v-icon>
                  </td>
                  <td :class="{'disabled': !index.is_active || !index.is_activated}">{{ index.name }}</td>
                  <td :class="{'disabled': !index.is_active || !index.is_activated}">{{ index.email }}</td>
                  <td>
                    <v-select v-if="index.is_active" color="#5064cc" :items="index.items"></v-select>
                    <v-select v-else color="#5064cc" disabled filled dense :items="index.items"></v-select>
                  </td>
                  <td>
                    <div class="d-flex mr-2" v-if="index.is_activated">
                      <v-btn color="#fff" small depressed class="ml-5" v-if="index.is_active"><v-icon size="20" color="#EB0808">mdi-cancel</v-icon></v-btn>
                      <v-btn color="#fff" small depressed v-else  class="ml-5"><v-icon size="20" color="green">mdi-lock-open-variant</v-icon></v-btn>
                      <v-btn color="#fff" small depressed><v-icon size="20" color="#EB0808">mdi-trash-can</v-icon></v-btn>
                    </div>
                    <v-btn v-else
                      class="text-capitalize text btn-sm text-color white--text"
                    >
                      Resend Invitation
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-btn
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
export default {
  name: "home",
  data() {
    return {
      desserts: [
        {
          avatar: "mdi-account-circle",
          name: "Munachim Anyamene",
          email: "Munachim@brandmobileafrica.com",
          items: ["Admin", "User"],
          is_active: true,
          is_activated: true
        },
        {
          avatar: "mdi-account-circle",
          name: "Munachim Anyamene",
          email: "Munachim@brandmobileafrica.com",
          items: ["Admin", "User"],
          is_active: true,
          is_activated: true
        },
        {
          avatar: "mdi-account-circle",
          name: "Eclair",
          email: "Munachim@brandmobileafrica.com",
          items: ["Admin", "User"],
          is_active: true,
          is_activated: false
        },
        {
          avatar: "mdi-account-circle",
          name: "Cupcake",
          email: "Munachim@brandmobileafrica.com",
          items: ["Admin", "User"],
          is_active: false,
          is_activated: true
        },
        {
          avatar: "mdi-account-circle",
          name: "Gingerbread",
          email: "Munachim@brandmobileafrica.com",
          items: ["Admin", "User"],
          is_active: false,
          is_activated: false
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.background {
  background-color: #edf0f0;
}
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

.disabled{
  color: #B6B7BA;
}
</style>