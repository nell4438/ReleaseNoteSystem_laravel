"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Requestor"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      addDialog: false,
      editDialog: false,
      requestorList: [],
      reqObj: {
        RequestorName: null
      },
      editObj: {
        RequestorName: null,
        PreRequestorName: null
      }
    };
  },
  // NOTE - END DATA
  methods: {
    insert: function insert() {
      var _this = this;
      axios.post("api/requestor", this.reqObj).then(function (res) {
        if (res.data instanceof Array) {
          _this.requestorList = res.data;
          alert("Insert Successful!");
          _this.cancel();
        } else {
          console.log(res.data);
          alert(res.data);
        }
      })["catch"](function (_ref) {
        var response = _ref.response;
        _this.$router.push("/error/" + response.status);
      });
    },
    //STUB - END INSERT
    save: function save() {
      var _this2 = this;
      axios.put("api/requestor/update", this.editObj).then(function (res) {
        // console.log(res.data)
        if (res.data instanceof Array) {
          // console.log(res.data);
          _this2.requestorList = res.data;
          alert("Update Successful!");
          _this2.cancel();
        } else {
          alert(res.data);
        }
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this2.$router.push("/error/" + response.status);
      });
    },
    // STUB - END SAVE => UPDATE
    edit: function edit(item) {
      this.editObj.RequestorName = item.RequestorName;
      this.editObj.PreRequestorName = item.RequestorName;
      this.editObj.requestorID = item.requestorID;
      this.editDialog = true;
    },
    //STUB - END EDIT
    deleteRestore: function deleteRestore(item) {
      var _this3 = this;
      axios.put("api/requestor/deleterestore", item).then(function (res) {
        _this3.requestorList = res.data;
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        _this3.$router.push("/error/" + response.status);
      });
    },
    // STUB - END deleteRestore
    cancel: function cancel() {
      this.reqObj = {
        RequestorName: null
      };
      this.editObj = {
        RequestorName: null,
        PreRequestorName: null
      };
      this.editDialog = false;
      this.addDialog = false;
    } // STUB - END CANCEL
  },
  // NOTE - END METHODS
  created: function created() {
    var _this4 = this;
    axios.get("api/requestor").then(function (res) {
      _this4.requestorList = res.data;
      // console.log(res.data);
    })["catch"](function (_ref4) {
      var response = _ref4.response;
      _this4.$router.push("/error/" + response.status);
    });
  } // NOTE - EDN CREATED
});

/***/ }),

/***/ "./resources/js/components/Requestor.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Requestor.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Requestor.vue?vue&type=template&id=9e00cc52& */ "./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52&");
/* harmony import */ var _Requestor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Requestor.vue?vue&type=script&lang=js& */ "./resources/js/components/Requestor.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Requestor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__.render,
  _Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Requestor.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Requestor.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Requestor.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requestor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requestor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Requestor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Requestor_vue_vue_type_template_id_9e00cc52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Requestor.vue?vue&type=template&id=9e00cc52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Requestor.vue?vue&type=template&id=9e00cc52& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-card",
        {
          staticStyle: { "max-height": "100%", "background-color": "#38a3a5" },
        },
        [
          _c(
            "v-card-title",
            { staticStyle: { "background-color": "#223040", color: "white" } },
            [
              _c("h3", [_vm._v("Master Maintenance (REQUESTOR)")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "button",
                  on: {
                    click: function ($event) {
                      _vm.addDialog = true
                    },
                  },
                },
                [
                  _vm._v("ADD REQUESTOR "),
                  _c("v-icon", { attrs: { right: "" } }, [_vm._v("mdi-plus")]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-simple-table",
                {
                  staticClass: "mt-6 table",
                  attrs: { "fixed-header": "", height: "580px" },
                },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("REQUESTOR NAME")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ACTIONS")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.requestorList, function (item, i) {
                      return _c("tr", { key: i }, [
                        _c("td", [_vm._v(_vm._s(item.RequestorName))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            !item.deleted_at
                              ? _c(
                                  "v-icon",
                                  {
                                    attrs: { color: "blue" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.edit(item)
                                      },
                                    },
                                  },
                                  [_vm._v("mdi-content-save")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                attrs: {
                                  color: item.deleted_at
                                    ? "#FF9800"
                                    : "#F44336",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.deleteRestore(item)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      item.deleted_at
                                        ? "mdi-delete-restore"
                                        : "mdi-delete"
                                    ) +
                                    "\n              "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ])
                    }),
                    0
                  ),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.addDialog,
            callback: function ($$v) {
              _vm.addDialog = $$v
            },
            expression: "addDialog",
          },
        },
        [
          _c(
            "v-card",
            { staticStyle: { "background-color": "#1498a3" } },
            [
              _c(
                "v-card-title",
                {
                  staticStyle: {
                    "background-color": "#223040",
                    color: "white",
                  },
                },
                [_vm._v("\n        ADD REQUESTOR\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    staticClass: "mt-8",
                    attrs: { label: "REQUESTOR NAME", solo: "" },
                    model: {
                      value: _vm.reqObj.RequestorName,
                      callback: function ($$v) {
                        _vm.$set(_vm.reqObj, "RequestorName", $$v)
                      },
                      expression: "reqObj.RequestorName",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "button",
                      staticStyle: { color: "white" },
                      attrs: { color: "red" },
                      on: {
                        click: function ($event) {
                          return _vm.cancel()
                        },
                      },
                    },
                    [
                      _vm._v("Close "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-cancel"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "button",
                      staticStyle: { color: "white" },
                      attrs: { color: "#38A3A5" },
                      on: {
                        click: function ($event) {
                          return _vm.insert()
                        },
                      },
                    },
                    [
                      _vm._v("Save "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-content-save"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px" },
          model: {
            value: _vm.editDialog,
            callback: function ($$v) {
              _vm.editDialog = $$v
            },
            expression: "editDialog",
          },
        },
        [
          _c(
            "v-card",
            { staticStyle: { "background-color": "#1498a3" } },
            [
              _c(
                "v-card-title",
                {
                  staticStyle: {
                    "background-color": "#223040",
                    color: "white",
                  },
                },
                [_vm._v(" EDIT REQUESTOR ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    staticClass: "mt-8",
                    attrs: { label: "REQUESTOR NAME", solo: "" },
                    model: {
                      value: _vm.editObj.RequestorName,
                      callback: function ($$v) {
                        _vm.$set(_vm.editObj, "RequestorName", $$v)
                      },
                      expression: "editObj.RequestorName",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "button",
                      staticStyle: { color: "white" },
                      attrs: { color: "red" },
                      on: {
                        click: function ($event) {
                          return _vm.cancel()
                        },
                      },
                    },
                    [
                      _vm._v("Close "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-cancel"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "button",
                      staticStyle: { color: "white" },
                      attrs: { color: "#38A3A5" },
                      on: {
                        click: function ($event) {
                          return _vm.save()
                        },
                      },
                    },
                    [
                      _vm._v("Save "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("mdi-content-save"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);