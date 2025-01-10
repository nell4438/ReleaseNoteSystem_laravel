<template>
  <v-container fluid>
    <v-card style="max-height: 100%; background-color: #38a3a5">
      <v-card-title style="background-color: #223040; color: white"
        ><h3>Master Maintenance (REQUESTOR)</h3>
        <v-spacer></v-spacer>

        <v-btn class="button" @click="addDialog = true"
          >ADD REQUESTOR <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-simple-table class="mt-6 table" fixed-header height="580px">
          <thead>
            <tr>
              <th>REQUESTOR NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in requestorList" :key="i">
              <td>{{ item.RequestorName }}</td>
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
          ADD REQUESTOR
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="REQUESTOR NAME"
            solo
            v-model="reqObj.RequestorName"
            class="mt-8"
          >
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
        <v-card-title style="background-color: #223040; color: white"> EDIT REQUESTOR </v-card-title>
        <v-card-text>
          <v-text-field
            label="REQUESTOR NAME"
            solo
            v-model="editObj.RequestorName"
            class="mt-8"
          >
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
      addDialog: false,
      editDialog: false,
      requestorList: [],
      reqObj: { RequestorName: null },
      editObj: { RequestorName: null, PreRequestorName: null },
    };
  }, // NOTE - END DATA
  methods: {
    insert() {
      axios
        .post(`api/requestor`, this.reqObj)
        .then((res) => {
          if (res.data instanceof Array) {
            this.requestorList = res.data;
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
        .put(`api/requestor/update`, this.editObj)
        .then((res) => {
          // console.log(res.data)
          if (res.data instanceof Array) {
            // console.log(res.data);
            this.requestorList = res.data;
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
      this.editObj.RequestorName = item.RequestorName;
      this.editObj.PreRequestorName = item.RequestorName;
      this.editObj.requestorID = item.requestorID;
      this.editDialog = true;
    }, //STUB - END EDIT
    deleteRestore(item) {
      axios
        .put(`api/requestor/deleterestore`, item)
        .then((res) => {
          this.requestorList = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END deleteRestore
    cancel() {
      this.reqObj = { RequestorName: null };
      this.editObj = { RequestorName: null, PreRequestorName: null };
      this.editDialog = false;
      this.addDialog = false;
    }, // STUB - END CANCEL
  }, // NOTE - END METHODS
  created() {
    axios
      .get(`api/requestor`)
      .then((res) => {
        this.requestorList = res.data;
        // console.log(res.data);
      })
      .catch(({ response }) => {
        this.$router.push("/error/" + response.status);
      });
  }, // NOTE - EDN CREATED
};
</script>
