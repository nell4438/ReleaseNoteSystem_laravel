<template>
  <v-container fluid>
    <v-card style="max-height: 100%; background-color: #38a3a5">
      <v-card-title style="background-color: #223040; color: white"
        ><h3>Master Maintenance (KIND)</h3>
        <v-spacer></v-spacer>

        <v-btn class="button" @click="addDialog = true"
          >ADD KIND <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-simple-table class="mt-6 table" fixed-header height="580px">
          <thead>
            <tr>
              <th>TYPE</th>
              <th>KIND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in kindList" :key="i">
              <td>{{ item.typeOfRequest }}</td>
              <td>{{ item.kindOfRequest }}</td>
              <td>
                <v-icon v-if="!item.deleted_at" color="blue" @click="edit(item)"
                  >mdi-content-save</v-icon
                >
                <v-icon
                  :color="item.deleted_at ? '#FF9800' : '#F44336'"
                  @click="deleteRestore(item)"
                >
                  {{ item.deleted_at ? "mdi-delete-restore" : "mdi-delete" }}
                </v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <!-- ADD DIALOG -->
    <v-dialog v-model="addDialog" persistent max-width="600px"
      ><v-card style="background-color: #1498a3">
        <v-card-title style="background-color: #223040; color: white">
          ADD KIND
        </v-card-title>
        <v-card-text>
          <!-- {{ typeList }} -->
          <v-select
            class="mt-8"
            v-model="kindObj.typeOfRequest"
            :items="typeList"
            item-value="typeID"
            item-text="typeOfRequest"
            clearable
            outlined
            label="TYPE"
            solo
            prepend-inner-icon="mdi-ticket-account"
          ></v-select>
          <v-text-field label="KIND" solo v-model="kindObj.kindOfRequest" class="mt-4">
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" style="color: white" class="button" @click="cancel()"
            >Close <v-icon right>mdi-cancel</v-icon>
          </v-btn>
          <v-btn color="#38A3A5" style="color: white" class="button" @click="insert()"
            >Save <v-icon right>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >
    <!-- END ADD DIALOG -->

    <!-- EDIT DIALOG -->
    <v-dialog v-model="editDialog" persistent max-width="600px"
      ><v-card style="background-color: #1498a3">
        <v-card-title style="background-color: #223040; color: white">
          EDIT KIND
        </v-card-title>
        <v-card-text>
          <!-- {{ editObj }} -->
          <!-- {{ typeList }} -->
          <v-select
            class="mt-8"
            v-model="editObj.typeID"
            :items="typeList"
            item-value="typeID"
            item-text="typeOfRequest"
            clearable
            outlined
            label="TYPE"
            solo
            prepend-inner-icon="mdi-ticket-account"
          ></v-select>
          <v-text-field label="KIND" solo v-model="editObj.kindOfRequest" class="mt-4">
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" style="color: white" class="button" @click="cancel()"
            >Close <v-icon right>mdi-cancel</v-icon>
          </v-btn>
          <v-btn color="#38A3A5" style="color: white" class="button" @click="save()"
            >Save <v-icon right>mdi-content-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card></v-dialog
    >

    <!-- END EDIT DIALOG -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      typeLists: null,
      addDialog: false,
      editDialog: false,
      typeListValue: null,
      typeList: [],
      kindList: [],
      kindObj: { kindID: null, typeOfRequest: null, kindOfRequest: null },
      editObj: { kindID: null, typeID: null, typeOfRequest: null, kindOfRequest: null },
    };
  }, // NOTE - END DATA
  methods: {
    insert() {
      axios
        .post(`api/kind`, this.kindObj)
        .then((res) => {
          if (res.data instanceof Array) {
            this.kindList = res.data;
            alert("Insert Successful!");
            this.cancel();
          } else {
            console.log(res.data);
            alert(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - END INSERT
    save() {
      axios
        .put(`api/kind/update`, this.editObj)
        .then((res) => {
          if (res.data instanceof Array) {
            console.log(res.data);
            this.kindList = res.data;
            alert("Update Successful!");
            this.cancel();
          } else {
            alert(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END SAVE => UPDATE
    edit(item) {
      // console.log(item);
      this.editObj.typeOfRequest = item.typeOfRequest;
      this.editObj.kindOfRequest = item.kindOfRequest;
      this.editObj.kindID = item.kindID;
      this.editObj.typeID = item.typeID;
      this.editDialog = true;
    }, //STUB - END EDIT
    deleteRestore(item) {
      axios
        .put(`api/kind/deleterestore`, item)
        .then((res) => {
          this.kindList = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END deleteRestore
    cancel() {
      this.kindObj = { typeOfRequest: null };
      this.editObj = { typeOfRequest: null, PretypeOfRequest: null };
      this.typeListValue = null;
      this.editDialog = false;
      this.addDialog = false;
    }, // STUB - END CANCEL
  }, // NOTE - END METHODS
  created() {
    axios
      .get(`api/type`)
      .then((res) => {
        this.typeList = res.data;
        axios
          .get(`api/kind`)
          .then((res) => {
            this.kindList = res.data;
          })
          .catch(({ response }) => {
            this.$router.push("/error/" + response.status);
          });
      })
      .catch(({ response }) => {
        this.$router.push("/error/" + response.status);
      });
  }, // NOTE - EDN CREATED
};
</script>
