<template>
  <v-container fluid>
    <v-card style="max-height: 100%; background-color: #38a3a5">
      <v-card-title style="background-color: #223040; color: white"
        ><h3>Master Maintenance (PROGRAMMER)</h3>
        <v-spacer></v-spacer>

        <v-btn class="button" @click="addDialog = true"
          >ADD PROGRAMMER <v-icon right>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-simple-table class="mt-6 table" fixed-header height="580px">
          <thead>
            <tr>
              <th>PROGRAMMER</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in programmerlist" :key="i">
              <td>{{ item.programmer }}</td>
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
          ADD PROGRAMMER
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Programmer"
            solo
            v-model="programmerObj.programmer"
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
        <v-card-title style="background-color: #223040; color: white"> EDIT PROGRAMMER </v-card-title>
        <v-card-text>
          <v-text-field label="Programmer" solo v-model="editObj.programmer" class="mt-8">
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
      programmerlist: [],
      programmerObj: { programmer: null },
      editObj: { programmer: null, PreProgrammer: null },
    };
  }, // NOTE - END DATA
  methods: {
    insert() {
      axios
        .post(`api/programmer`, this.programmerObj)
        .then((res) => {
          if (res.data instanceof Array) {
            this.programmerlist = res.data;
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
        .put(`api/programmer/update`, this.editObj)
        .then((res) => {
          // console.log(res.data)
          if (res.data instanceof Array) {
            // console.log(res.data);
            this.programmerlist = res.data;
            alert("Update Successful!");
            this.cancel();
          } else {
            alert(res.data);
            // console.log(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END SAVE => UPDATE
    edit(item) {
      // console.log(item);
      this.editObj.programmer = item.programmer;
      this.editObj.PreProgrammer = item.programmer;
      this.editObj.programmerID = item.programmerID;
      this.editDialog = true;
    }, //STUB - END EDIT
    deleteRestore(item) {
      axios
        .put(`api/programmer/deleterestore`, item)
        .then((res) => {
          this.programmerlist = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END deleteRestore
    cancel() {
      this.programmerObj = { programmer: null };
      this.editObj = { programmer: null, PreProgrammer: null };
      this.editDialog = false;
      this.addDialog = false;
    }, // STUB - END CANCEL
  }, // NOTE - END METHODS
  created() {
    axios
      .get(`api/programmer`)
      .then((res) => {
        this.programmerlist = res.data;
        // console.log(res.data);
      })
      .catch(({ response }) => {
        this.$router.push("/error/" + response.status);
      });
  }, // NOTE - EDN CREATED
};
</script>
