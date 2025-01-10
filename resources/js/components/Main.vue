<template>
  <v-container fluid>
    <v-card style="max-height: 100%; background-color: #223040">
      <v-card-text>
        <v-container class="mt-2" fluid>
          <v-card style="background-color: #38a3a5" height="100%" width="100%">
            <!-- <v-row justify="start" class="ml-5"> -->
            <!-- <v-col cols="auto"> -->
            <div style="display: flex" class="pt-3 pl-3">
              <v-btn class="button" @click="addDialog = true"
                >ADD JOB <v-icon right>mdi-plus</v-icon>
              </v-btn>
              <!-- <br /> -->
              <v-chip class="ma-2" label color="#FF6961" small>
                <v-checkbox
                  v-model="selected"
                  value="OVERDUE"
                  label="OVER DUE"
                ></v-checkbox>
              </v-chip>
              <v-chip class="ma-2" label color="#78A2CC" small>
                <v-checkbox
                  v-model="selected"
                  value="DUETODAY"
                  label="DUE TODAY"
                ></v-checkbox>
              </v-chip>

              <v-chip class="ma-2" label color="#FDFD96" small>
                <v-checkbox
                  v-model="selected"
                  value="OVETOMORROW"
                  label="DUE TOMORROW"
                ></v-checkbox>
              </v-chip>
            </div>

            <br />
            <div style="display: flex" class="mt-n6 pl-3">
              <!-- ----------------------------------new line -->
              <v-chip class="ma-2" label color="#f3f2ed" small>
                <v-checkbox
                  v-model="selectedStatus"
                  value="NOTSTARTED"
                  label="NOT STARTED"
                ></v-checkbox>
              </v-chip>
              <v-chip class="ma-2" label color="#1498a3" small>
                <v-checkbox style="color: white" v-model="selectedStatus" value="ONGOING">
                  <template v-slot:label>
                    <span class="checkBoxLabelWhite">ONGOING </span>
                  </template></v-checkbox
                >
              </v-chip>
              <v-chip class="ma-2" label color="#0a0a0a" small>
                <v-checkbox style="color: white" v-model="selectedStatus" value="PENDING">
                  <template v-slot:label>
                    <span class="checkBoxLabelWhite">PENDING </span>
                  </template></v-checkbox
                >
              </v-chip>
              <v-chip class="ma-2" label color="#f56230" small>
                <v-checkbox
                  style="color: white"
                  v-model="selectedStatus"
                  value="USERAPPROVAL"
                  ><template v-slot:label>
                    <span class="checkBoxLabelWhite">USER'S APPROVAL</span>
                  </template></v-checkbox
                >
              </v-chip>
              <v-chip class="ma-2" label color="#ca340f" small>
                <v-checkbox v-model="selectedStatus" style="color: white" value="BACKJOB">
                  <template v-slot:label>
                    <span class="checkBoxLabelWhite">BACK JOB </span>
                  </template></v-checkbox
                >
              </v-chip>
              <v-chip class="ma-2" label color="#398c34" small>
                <v-checkbox style="color: white" v-model="selectedStatus" value="FINISHED"
                  ><template v-slot:label>
                    <span class="checkBoxLabelWhite">FINISHED</span>
                  </template></v-checkbox
                >
              </v-chip>
              <v-chip class="ma-2" label color="#7f7f7f" small>
                <v-checkbox
                  style="color: white"
                  v-model="selectedStatus"
                  value="CANCELLED"
                >
                  <template v-slot:label>
                    <span class="checkBoxLabelWhite">CANCELLED</span>
                  </template></v-checkbox
                >
              </v-chip>
            </div>
            <!-- </v-col> -->
            <!-- </v-row> -->
          </v-card>
        </v-container>
        <v-simple-table class="mt-6 table--border" fixed-header dense height="430px">
          <thead class="table--border">
            <tr>
              <th class="table--border">CODE</th>
              <th class="table--border">SYSTEM NAME</th>
              <th class="table--border">REQUESTOR</th>
              <th class="table--border">DETAILS</th>
              <th class="table--border">INCHARGE</th>
              <th class="table--border">TYPE</th>
              <th class="table--border">KIND</th>
              <th class="table--border">RECEIVED STARTED</th>
              <th class="table--border">DUE FINISHED</th>
              <th class="table--border">PRIORITY</th>
              <th class="table--border">STATUS</th>
              <th class="table--border">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <!-- {{
              filteredtransactionList
            }} -->
            <tr
              v-for="(item, i) in filteredtransactionList"
              :key="i"
              :style="styleRow(item)"
            >
              <td class="table--border" style="white-space: nowrap">{{ item.code }}</td>
              <td class="table--border">{{ item.systemName }}</td>
              <!-- <td>{{ item.kindID }}</td> -->
              <td class="table--border">{{ item.RequestorName }}</td>
              <td class="table--border">{{ item.details }}</td>
              <td class="table--border">{{ item.programmer }}</td>
              <td class="table--border">{{ item.typeOfRequest }}</td>
              <td class="table--border">{{ item.kindOfRequest }}</td>
              <td class="table--border" style="white-space: nowrap">
                {{ item.receivedDate }} /<br />
                {{ item.startedDate ? item.startedDate : "" }}
                <v-icon v-if="!item.startedDate">mdi-calendar-remove</v-icon>
              </td>
              <td class="table--border" style="white-space: nowrap">
                {{ item.dueDate }} /<br />{{ item.finishedDate ? item.finishedDate : "" }}
                <v-icon v-if="!item.finishedDate">mdi-calendar-remove</v-icon>
              </td>
              <td class="table--border">{{ item.priority }}</td>
              <td
                class="table--border"
                :style="
                  item.status == 'Finished' ? 'color:green; font-weight: bold;' : ''
                "
              >
                {{ item.status }}
              </td>
              <td class="table--border">
                <div class="d-flex flex-row">
                  <v-btn
                    fab
                    small
                    elevation="5"
                    v-if="!item.deleted_at && item.status != 'Finished'"
                  >
                    <v-icon color="blue" @click="edit(item)">
                      mdi-content-save</v-icon
                    > </v-btn
                  >&nbsp;
                  <v-btn fab small elevation="5"
                    ><v-icon
                      :color="item.deleted_at ? '#FF9800' : '#F44336'"
                      @click="deleteRestore(item)"
                    >
                      {{ item.deleted_at ? "mdi-delete-restore" : "mdi-delete" }}
                    </v-icon></v-btn
                  >
                </div>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <!-- ADD DIALOG -->
    <v-dialog v-model="addDialog" persistent max-width="900px"
      ><v-card style="background-color: #38a3a5; color: white" width="900px">
        <v-card-title style="background-color: #223040"> ADD JOB </v-card-title>
        <v-card-text>
          <!-- {{ programmerList }} -->
          <!-- {{ systemNameList }} -->
          <!-- {{ typeList }} -->
          <!-- {{ kindList }} -->
          <!-- {{ requestorList }} -->
          <v-row class="mt-8">
            <v-col cols="3">
              <span class="white--text">Developer:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.programmerID"
                :items="programmerList"
                item-value="programmerID"
                item-text="programmer"
                clearable
                outlined
                label="Developer"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- System NAme -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">System Name:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.SystemNameID"
                :items="systemNameList"
                item-value="SystemNameID"
                item-text="SystemName"
                clearable
                outlined
                label="System Name"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- TYPE -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">TYPE:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.typeID"
                :items="typeList"
                item-value="typeID"
                item-text="typeOfRequest"
                clearable
                outlined
                label="TYPE"
                solo
                dense
                @change="kindFilter(mainObj.typeID)"
              ></v-select>
            </v-col>
          </v-row>
          <!-- KIND -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">KIND:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.kindID"
                :items="kindList"
                item-value="kindID"
                item-text="kindOfRequest"
                clearable
                outlined
                label="KIND"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- PRIORITY -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">PRIORITY:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.priority"
                :items="priorityList"
                item-value="priority"
                item-text="priority"
                clearable
                outlined
                label="PRIORITY"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- REQUESTOR -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">REQUESTOR:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.requestorID"
                :items="requestorList"
                item-value="requestorID"
                item-text="RequestorName"
                clearable
                outlined
                label="REQUESTOR"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- STATUS -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">STATUS:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="mainObj.status"
                :items="statusList"
                item-value="status"
                item-text="status"
                clearable
                outlined
                label="STATUS"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>

          <!-- DETAILS -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">DETAILS:</span>
            </v-col>
            <v-col cols="9">
              <v-textarea
                v-model="mainObj.details"
                clearable
                solo
                no-resize
                rows="3"
                clear-icon="mdi-close-circle"
                label="DETAILS"
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- RECEIVED -->
          <v-row class="mt-n8">
            <v-col cols="2">
              <span class="white--text">RECEIVED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                disabled
                v-model="receivedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="RECEIVED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="mainObj.receivedDate"
                    outlined
                    dense
                    solo
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="mainObj.receivedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <!-- STARTED -->
            <v-col cols="2">
              <span class="white--text">STARTED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="startedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="STARTED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="mainObj.startedDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="mainObj.startedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <!-- 2ND -->
          <!-- DUE -->
          <v-row class="mt-n8">
            <v-col cols="2">
              <span class="white--text">DUE:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="dueMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="DUE"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="mainObj.dueDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="mainObj.dueDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <!-- FINISHED -->
            <v-col cols="2">
              <span class="white--text">FINISHED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="finishedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="FINISHED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="mainObj.finishedDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="mainObj.finishedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
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

    <!-- EDIT DIALOG -->
    <!-- ADD DIALOG -->
    <v-dialog v-model="editDialog" persistent max-width="900px"
      ><v-card style="background-color: #38a3a5; color: white" width="900px">
        <v-card-title style="background-color: #223040"> EDIT JOB </v-card-title>
        <!-- {{ editObj }} -->
        <v-card-text>
          <!-- {{ programmerList }} -->
          <!-- {{ systemNameList }} -->
          <!-- {{ typeList }} -->
          <!-- {{ kindList }} -->
          <!-- {{ requestorList }} -->
          <v-row class="mt-8">
            <v-col cols="3">
              <span class="white--text">Developer:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.programmerID"
                :items="programmerList"
                item-value="programmerID"
                item-text="programmer"
                clearable
                outlined
                label="Developer"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- System NAme -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">System Name:</span>
            </v-col>
            <v-col cols="9">
              {{systemNameList}}
              <v-select
                v-model="editObj.SystemNameID"
                :items="systemNameList"
                item-value="SystemNameID"
                item-text="SystemName"
                clearable
                outlined
                label="System Name"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- TYPE -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">TYPE:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.typeID"
                :items="typeList"
                item-value="typeID"
                item-text="typeOfRequest"
                clearable
                outlined
                label="TYPE"
                solo
                dense
                @change="kindFilter(editObj.typeID)"
              ></v-select>
            </v-col>
          </v-row>
          <!-- KIND -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">KIND:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.kindID"
                :items="kindList"
                item-value="kindID"
                item-text="kindOfRequest"
                clearable
                outlined
                label="KIND"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- PRIORITY -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">PRIORITY:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.priority"
                :items="priorityList"
                item-value="priority"
                item-text="priority"
                clearable
                outlined
                label="PRIORITY"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- REQUESTOR -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">REQUESTOR:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.requestorID"
                :items="requestorList"
                item-value="requestorID"
                item-text="RequestorName"
                clearable
                outlined
                label="REQUESTOR"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>
          <!-- STATUS -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">STATUS:</span>
            </v-col>
            <v-col cols="9">
              <v-select
                v-model="editObj.status"
                :items="statusList"
                item-value="status"
                item-text="status"
                clearable
                outlined
                label="STATUS"
                solo
                dense
              ></v-select>
            </v-col>
          </v-row>

          <!-- DETAILS -->
          <v-row class="mt-n8">
            <v-col cols="3">
              <span class="white--text">DETAILS:</span>
            </v-col>
            <v-col cols="9">
              <v-textarea
                v-model="editObj.details"
                clearable
                solo
                no-resize
                rows="3"
                clear-icon="mdi-close-circle"
                label="DETAILS"
              ></v-textarea>
            </v-col>
          </v-row>
          <!-- RECEIVED -->
          <v-row class="mt-n8">
            <v-col cols="2">
              <span class="white--text">RECEIVED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="editreceivedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="RECEIVED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="editObj.receivedDate"
                    outlined
                    dense
                    solo
                    v-on="on"
                    disabled
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="editObj.receivedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <!-- STARTED -->
            <v-col cols="2">
              <span class="white--text">STARTED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="editstartedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="STARTED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="editObj.startedDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="editObj.startedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <!-- 2ND -->
          <!-- DUE -->
          <v-row class="mt-n8">
            <v-col cols="2">
              <span class="white--text">DUE:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="editdueMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="DUE"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="editObj.dueDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="editObj.dueDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <!-- FINISHED -->
            <v-col cols="2">
              <span class="white--text">FINISHED:</span>
            </v-col>
            <v-col cols="4">
              <v-menu
                v-model="editfinishedMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="FINISHED"
                    prepend-inner-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-model="editObj.finishedDate"
                    outlined
                    dense
                    solo
                    clearable
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  :min="dateNow"
                  v-model="editObj.finishedDate"
                  @input="hideCalendar()"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
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
import moment from "moment";
export default {
  data() {
    return {
      dateNow: moment().format("YYYY-MM-DD"),
      selected: [],
      selectedStatus: [],
      receivedMenu: false,
      editreceivedMenu: false,
      dueMenu: false,
      editdueMenu: false,
      startedMenu: false,
      editstartedMenu: false,
      finishedMenu: false,
      editfinishedMenu: false,
      // filteredtransactionList: null,
      transactionList: null,
      typeList: null,
      kindList: null,
      programmerList: null,
      systemNameList: null,
      requestorList: null,
      addDialog: false,
      editDialog: false,

      priorityList: [
        {
          priority: "Immediate",
        },
        {
          priority: "Low",
        },
        {
          priority: "Normal",
        },
        {
          priority: "Urgent",
        },
      ],
      statusList: [
        {
          status: "Back Job",
        },
        {
          status: "Cancelled",
        },
        {
          status: "Finished",
        },
        {
          status: "Not Yet Started",
        },
        {
          status: "On Going",
        },
        {
          status: "Pending",
        },
        {
          status: "PL Confirmation",
        },
        {
          status: "User's Confirmation",
        },
      ],
      editObj: {
        programmerID: null,
        SystemNameID: null,
        requestorID: null,
        kindID: null,
        typeID: null,
        details: null,
        status: null,
        priority: null,
        receivedDate: null,
        dueDate: null,
        startedDate: null,
        finishedDate: null,
      },
      mainObj: {
        programmerID: null,
        SystemNameID: null,
        requestorID: null,
        kindID: null,
        typeID: null,
        details: null,
        status: null,
        priority: null,
        receivedDate: moment().format("YYYY-MM-DD"),
        dueDate: null,
        startedDate: null,
        finishedDate: null,
      },
    };
  }, // NOTE - END DATA
  methods: {
    styleRow(item) {
      let dateToday = moment().format("YYYY-MM-DD");
      let dateTome = moment().clone().add(1, "days").format("YYYY-MM-DD");
      if (item.status == "Finished") {
        return "";
      } else if (item.dueDate == dateToday) {
        return "background-color:#78A2CC";
      } else if (item.dueDate == dateTome) {
        return "background-color:#FDFD96";
      } else if (item.dueDate < dateToday) {
        return "background-color:#FF6961";
      }
    },
    hideCalendar() {
      this.receivedMenu = false;
      this.editreceivedMenu = false;

      this.dueMenu = false;
      this.editdueMenu = false;

      this.startedMenu = false;
      this.editstartedMenu = false;

      this.finishedMenu = false;
      this.editfinishedMenu = false;
    },
    insert() {
      axios
        .post(`api/transaction`, this.mainObj)
        .then((res) => {
          if (res.data instanceof Array) {
            this.transactionList = res.data;
            alert("Insert Successful!");
            console.log(res.data);
            this.cancel();
          } else {
            // console.log(res.data);
            alert(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - END INSERT
    kindFilter(type) {
      // console.log(type);
      // return 0;
      axios
        .get(`api/kind/${type}`)
        .then((res) => {
          // console.log(res.data);
          this.kindList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    },
    cancel() {
      this.editDialog = false;
      this.addDialog = false;
      this.mainObj = {
        programmerID: null,
        SystemNameID: null,
        requestorID: null,
        kindID: null,
        typeID: null,
        details: null,
        status: null,
        priority: null,
        receivedDate: moment().format("YYYY-MM-DD"),
        dueDate: null,
        startedDate: null,
        finishedDate: null,
      };
    }, // STUB - END CANCEL
    async getType() {
      axios
        .get(`api/type`)
        .then((res) => {
          this.typeList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - END GETTYPE
    async getProgrammer() {
      await axios
        .get(`api/programmer`)
        .then((res) => {
          this.programmerList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END GETPROGRAMMER
    async getSystemName() {
      await axios
        .get(`api/systemName`)
        .then((res) => {
          this.systemNameList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - END GETSYSTEMNAME
    async getRequestor() {
      await axios
        .get(`api/requestor`)
        .then((res) => {
          this.requestorList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - GETREQUESTOR
    async getTransaction() {
      await axios
        .get(`api/transaction`)
        .then((res) => {
          this.transactionList = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, //STUB - GETTRANSUCTION
    filterDropDownData(data) {
      return data.filter((r) => {
        return r.deleted_at == null ? r : "";
      });
    }, //STUB - filterDropDownData

    deleteRestore(item) {
      axios
        .put(`api/transaction/deleterestore`, item)
        .then((res) => {
          this.transactionList = res.data;
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END deleteRestore
    async edit(item) {
      await axios
        .get(`api/kind/${item.typeID}`)
        .then((res) => {
          // console.log(res.data);
          this.kindList = this.filterDropDownData(res.data);
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
      this.editObj = { ...item };
      this.editObj.startedDate = this.editObj.startedDate
        ? this.editObj.startedDate
        : null;
      this.editObj.finishedDate = this.editObj.finishedDate
        ? this.editObj.finishedDate
        : null;
      this.editDialog = true;
    }, // STUB - END edit
    save() {
      axios
        .put(`api/transaction/update`, this.editObj)
        .then((res) => {
          if (res.data instanceof Array) {
            console.log(res.data);
            this.transactionList = res.data;
            alert("Update Successful!");
            this.cancel();
          } else {
            console.log(res.data);
          }
        })
        .catch(({ response }) => {
          this.$router.push("/error/" + response.status);
        });
    }, // STUB - END save
  }, // NOTE - END METHODS
  async created() {
    this.getType();
    this.getProgrammer();
    this.getSystemName();
    this.getRequestor();
    this.getTransaction();
  }, // NOTE - EDN CREATED
  computed: {
    filteredtransactionList() {
      let toReturnDue = [];
      let toReturnStatus = [];
      let toReturnAll = [];
      let dateToday = moment().format("YYYY-MM-DD");
      let dateTome = moment().clone().add(1, "days").format("YYYY-MM-DD");

      if (this.selected.length == 0 && this.selectedStatus.length == 0) {
        return this.transactionList;
      }

      if (this.selected.includes("DUETODAY")) {
        toReturnDue.push(
          this.transactionList.filter((item) => {
            return item.dueDate == dateToday && item.status != "Finished" ? item : "";
          })
        );
      }
      if (this.selected.includes("OVERDUE")) {
        toReturnDue.push(
          this.transactionList.filter((item) => {
            return item.dueDate < dateToday && item.status != "Finished" ? item : "";
          })
        );
      }
      if (this.selected.includes("OVETOMORROW")) {
        toReturnDue.push(
          this.transactionList.filter((item) => {
            return item.dueDate == dateTome && item.status != "Finished" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("NOTSTARTED")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "Not Yet Started" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("ONGOING")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "On Going" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("PENDING")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "Pending" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("USERAPPROVAL")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "User's Confirmation" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("BACKJOB")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "Back Job" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("FINISHED")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "Finished" ? item : "";
          })
        );
      }

      if (this.selectedStatus.includes("CANCELLED")) {
        toReturnStatus.push(
          this.transactionList.filter((item) => {
            return item.status == "Cancelled" ? item : "";
          })
        );
      }
      if (toReturnDue.length > 0 && toReturnStatus.length > 0) {
        // console.log(toReturnDue);
        // console.log(toReturnStatus);

        //MULTIPLE CHECKBOX
        toReturnAll.push(toReturnDue.flat(1));
        toReturnAll.push(toReturnStatus.flat(1));
        return [...new Set(toReturnAll.flat(1))];

        //SINGLE CHECKBOX
        // return toReturnStatus
        //   .filter((obj1) =>
        //     toReturnDue.some((obj2) => {
        //       return obj1.code === obj2.code ? obj2 : "";
        //     })
        //   )
        //   .flat(1);
      } else if (toReturnDue.length == 0 && toReturnStatus.length > 0) {
        return toReturnStatus.flat(1);
      } else if (toReturnDue.length > 0 && toReturnStatus.length == 0) {
        return toReturnDue.flat(1);
      }
    },
  }, // NOTE- END WATCH
};
</script>
