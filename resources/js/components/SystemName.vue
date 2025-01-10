<template>
  <v-container fluid>
    <v-card style="max-height: 100%; background-color: #38a3a5">
      <v-card-title style="background-color: #223040; color: white"
        ><h3>Master Maintenance (SYSTEM NAME)</h3>
        <v-spacer></v-spacer>

        <v-btn class="button" @click="addDialog = true"
          >ADD SYSTEM <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-simple-table class="mt-6 table" fixed-header height="580px">
          <thead>
            <tr>
              <th>SYSTEM NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <!-- {{systemNameList}} -->
            <tr v-for="(item, i) in systemNameList" :key="i">
              <td>{{ item.SystemName }}</td>
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
          ADD SYSTEM
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="System Name"
            solo
            v-model="systemObj.SystemName"
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
        <v-card-title style="background-color: #223040; color: white"> EDIT SYSTEM </v-card-title>
        <v-card-text>
          <v-text-field label="SystemName" solo v-model="editObj.SystemName" class="mt-8">
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
      systemNameList: [],
      systemObj: { SystemName: null },
      editObj: { SystemName: null, PreSystemName: null },
    };
  }, // NOTE - END DATA
  methods: {
    insert() {
      axios
        .post(`api/systemName`, this.systemObj)
        .then((res) => {
          if (res.data instanceof Array) {
            this.systemNameList = res.data;
            alert("Insert Successful!");
            this.cancel();
          } else {
            console.log(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - END INSERT
    save() {
      axios
        .put(`api/systemName/update`, this.editObj)
        .then((res) => {
          console.log(res.data)
          if (res.data instanceof Array) {
            console.log(res.data);
            this.systemNameList = res.data;
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
      this.editObj.SystemName = item.SystemName;
      this.editObj.PreSystemName = item.SystemName;
      this.editObj.SystemNameID = item.SystemNameID;
      this.editDialog = true;
    }, //STUB - END EDIT
    deleteRestore(item) {
      axios
        .put(`api/systemName/deleterestore`, item)
        .then((res) => {
          this.systemNameList = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END deleteRestore
    cancel() {
      this.systemObj = { SystemName: null };
      this.editObj = { SystemName: null, PreSystemName: null };
      this.editDialog = false;
      this.addDialog = false;
    }, // STUB - END CANCEL
  }, // NOTE - END METHODS
  created() {
    axios
      .get(`api/systemName`)
      .then((res) => {
        this.systemNameList = res.data;
        // console.log(res.data);
      })
      .catch(({ response }) => {
        this.$router.push("/error/" + response.status);
      });
  }, // NOTE - EDN CREATED
};
</script>
