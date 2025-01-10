"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Kind"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      typeLists: null,
      addDialog: false,
      editDialog: false,
      typeListValue: null,
      typeList: [],
      kindList: [],
      kindObj: {
        kindID: null,
        typeOfRequest: null,
        kindOfRequest: null
      },
      editObj: {
        kindID: null,
        typeID: null,
        typeOfRequest: null,
        kindOfRequest: null
      }
    };
  },
  // NOTE - END DATA
  methods: {
    insert: function insert() {
      var _this = this;
      axios.post("api/kind", this.kindObj).then(function (res) {
        if (res.data instanceof Array) {
          _this.kindList = res.data;
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
      axios.put("api/kind/update", this.editObj).then(function (res) {
        if (res.data instanceof Array) {
          console.log(res.data);
          _this2.kindList = res.data;
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
      // console.log(item);
      this.editObj.typeOfRequest = item.typeOfRequest;
      this.editObj.kindOfRequest = item.kindOfRequest;
      this.editObj.kindID = item.kindID;
      this.editObj.typeID = item.typeID;
      this.editDialog = true;
    },
    //STUB - END EDIT
    deleteRestore: function deleteRestore(item) {
      var _this3 = this;
      axios.put("api/kind/deleterestore", item).then(function (res) {
        _this3.kindList = res.data;
      })["catch"](function (_ref3) {
        var response = _ref3.response;
        _this3.$router.push("/error/" + response.status);
      });
    },
    // STUB - END deleteRestore
    cancel: function cancel() {
      this.kindObj = {
        typeOfRequest: null
      };
      this.editObj = {
        typeOfRequest: null,
        PretypeOfRequest: null
      };
      this.typeListValue = null;
      this.editDialog = false;
      this.addDialog = false;
    } // STUB - END CANCEL
  },
  // NOTE - END METHODS
  created: function created() {
    var _this4 = this;
    axios.get("api/type").then(function (res) {
      _this4.typeList = res.data;
      axios.get("api/kind").then(function (res) {
        _this4.kindList = res.data;
      })["catch"](function (_ref4) {
        var response = _ref4.response;
        _this4.$router.push("/error/" + response.status);
      });
    })["catch"](function (_ref5) {
      var response = _ref5.response;
      _this4.$router.push("/error/" + response.status);
    });
  } // NOTE - EDN CREATED
});

/***/ }),

/***/ "./resources/js/components/Kind.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Kind.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kind.vue?vue&type=template&id=faec6f02& */ "./resources/js/components/Kind.vue?vue&type=template&id=faec6f02&");
/* harmony import */ var _Kind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kind.vue?vue&type=script&lang=js& */ "./resources/js/components/Kind.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Kind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__.render,
  _Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Kind.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Kind.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Kind.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Kind.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Kind_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Kind.vue?vue&type=template&id=faec6f02&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Kind.vue?vue&type=template&id=faec6f02& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Kind_vue_vue_type_template_id_faec6f02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Kind.vue?vue&type=template&id=faec6f02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=template&id=faec6f02&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=template&id=faec6f02&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Kind.vue?vue&type=template&id=faec6f02& ***!
  \****************************************************************************************************************************************************************************************************************/
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
              _c("h3", [_vm._v("Master Maintenance (KIND)")]),
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
                  _vm._v("ADD KIND "),
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
                      _c("th", [_vm._v("TYPE")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("KIND")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ACTIONS")]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.kindList, function (item, i) {
                      return _c("tr", { key: i }, [
                        _c("td", [_vm._v(_vm._s(item.typeOfRequest))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.kindOfRequest))]),
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
                [_vm._v("\n        ADD KIND\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-select", {
                    staticClass: "mt-8",
                    attrs: {
                      items: _vm.typeList,
                      "item-value": "typeID",
                      "item-text": "typeOfRequest",
                      clearable: "",
                      outlined: "",
                      label: "TYPE",
                      solo: "",
                      "prepend-inner-icon": "mdi-ticket-account",
                    },
                    model: {
                      value: _vm.kindObj.typeOfRequest,
                      callback: function ($$v) {
                        _vm.$set(_vm.kindObj, "typeOfRequest", $$v)
                      },
                      expression: "kindObj.typeOfRequest",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    staticClass: "mt-4",
                    attrs: { label: "KIND", solo: "" },
                    model: {
                      value: _vm.kindObj.kindOfRequest,
                      callback: function ($$v) {
                        _vm.$set(_vm.kindObj, "kindOfRequest", $$v)
                      },
                      expression: "kindObj.kindOfRequest",
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
                [_vm._v("\n        EDIT KIND\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-select", {
                    staticClass: "mt-8",
                    attrs: {
                      items: _vm.typeList,
                      "item-value": "typeID",
                      "item-text": "typeOfRequest",
                      clearable: "",
                      outlined: "",
                      label: "TYPE",
                      solo: "",
                      "prepend-inner-icon": "mdi-ticket-account",
                    },
                    model: {
                      value: _vm.editObj.typeID,
                      callback: function ($$v) {
                        _vm.$set(_vm.editObj, "typeID", $$v)
                      },
                      expression: "editObj.typeID",
                    },
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    staticClass: "mt-4",
                    attrs: { label: "KIND", solo: "" },
                    model: {
                      value: _vm.editObj.kindOfRequest,
                      callback: function ($$v) {
                        _vm.$set(_vm.editObj, "kindOfRequest", $$v)
                      },
                      expression: "editObj.kindOfRequest",
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