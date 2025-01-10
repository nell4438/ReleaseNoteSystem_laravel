"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["Main"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      dateNow: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
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
      priorityList: [{
        priority: "Immediate"
      }, {
        priority: "Low"
      }, {
        priority: "Normal"
      }, {
        priority: "Urgent"
      }],
      statusList: [{
        status: "Back Job"
      }, {
        status: "Cancelled"
      }, {
        status: "Finished"
      }, {
        status: "Not Yet Started"
      }, {
        status: "On Going"
      }, {
        status: "Pending"
      }, {
        status: "PL Confirmation"
      }, {
        status: "User's Confirmation"
      }],
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
        finishedDate: null
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
        receivedDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        dueDate: null,
        startedDate: null,
        finishedDate: null
      }
    };
  },
  // NOTE - END DATA
  methods: {
    styleRow: function styleRow(item) {
      var dateToday = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      var dateTome = moment__WEBPACK_IMPORTED_MODULE_0___default()().clone().add(1, "days").format("YYYY-MM-DD");
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
    hideCalendar: function hideCalendar() {
      this.receivedMenu = false;
      this.editreceivedMenu = false;
      this.dueMenu = false;
      this.editdueMenu = false;
      this.startedMenu = false;
      this.editstartedMenu = false;
      this.finishedMenu = false;
      this.editfinishedMenu = false;
    },
    insert: function insert() {
      var _this = this;
      axios.post("api/transaction", this.mainObj).then(function (res) {
        if (res.data instanceof Array) {
          _this.transactionList = res.data;
          alert("Insert Successful!");
          console.log(res.data);
          _this.cancel();
        } else {
          // console.log(res.data);
          alert(res.data);
        }
      })["catch"](function (_ref) {
        var response = _ref.response;
        _this.$router.push("/error/" + response.status);
      });
    },
    //STUB - END INSERT
    kindFilter: function kindFilter(type) {
      var _this2 = this;
      // console.log(type);
      // return 0;
      axios.get("api/kind/".concat(type)).then(function (res) {
        // console.log(res.data);
        _this2.kindList = _this2.filterDropDownData(res.data);
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        _this2.$router.push("/error/" + response.status);
      });
    },
    cancel: function cancel() {
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
        receivedDate: moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD"),
        dueDate: null,
        startedDate: null,
        finishedDate: null
      };
    },
    // STUB - END CANCEL
    getType: function getType() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              axios.get("api/type").then(function (res) {
                _this3.typeList = _this3.filterDropDownData(res.data);
              })["catch"](function (_ref3) {
                var response = _ref3.response;
                _this3.$router.push("/error/" + response.status);
              });
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    //STUB - END GETTYPE
    getProgrammer: function getProgrammer() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios.get("api/programmer").then(function (res) {
                _this4.programmerList = _this4.filterDropDownData(res.data);
              })["catch"](function (_ref4) {
                var response = _ref4.response;
                _this4.$router.push("/error/" + response.status);
              });
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // STUB - END GETPROGRAMMER
    getSystemName: function getSystemName() {
      var _this5 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios.get("api/systemName").then(function (res) {
                _this5.systemNameList = _this5.filterDropDownData(res.data);
              })["catch"](function (_ref5) {
                var response = _ref5.response;
                _this5.$router.push("/error/" + response.status);
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    //STUB - END GETSYSTEMNAME
    getRequestor: function getRequestor() {
      var _this6 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios.get("api/requestor").then(function (res) {
                _this6.requestorList = _this6.filterDropDownData(res.data);
              })["catch"](function (_ref6) {
                var response = _ref6.response;
                _this6.$router.push("/error/" + response.status);
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }))();
    },
    //STUB - GETREQUESTOR
    getTransaction: function getTransaction() {
      var _this7 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios.get("api/transaction").then(function (res) {
                _this7.transactionList = res.data;
              })["catch"](function (_ref7) {
                var response = _ref7.response;
                _this7.$router.push("/error/" + response.status);
              });
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }))();
    },
    //STUB - GETTRANSUCTION
    filterDropDownData: function filterDropDownData(data) {
      return data.filter(function (r) {
        return r.deleted_at == null ? r : "";
      });
    },
    //STUB - filterDropDownData
    deleteRestore: function deleteRestore(item) {
      var _this8 = this;
      axios.put("api/transaction/deleterestore", item).then(function (res) {
        _this8.transactionList = res.data;
      })["catch"](function (_ref8) {
        var response = _ref8.response;
        _this8.$router.push("/error/" + response.status);
      });
    },
    // STUB - END deleteRestore
    edit: function edit(item) {
      var _this9 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return axios.get("api/kind/".concat(item.typeID)).then(function (res) {
                // console.log(res.data);
                _this9.kindList = _this9.filterDropDownData(res.data);
              })["catch"](function (_ref9) {
                var response = _ref9.response;
                _this9.$router.push("/error/" + response.status);
              });
            case 2:
              _this9.editObj = _objectSpread({}, item);
              _this9.editObj.startedDate = _this9.editObj.startedDate ? _this9.editObj.startedDate : null;
              _this9.editObj.finishedDate = _this9.editObj.finishedDate ? _this9.editObj.finishedDate : null;
              _this9.editDialog = true;
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }))();
    },
    // STUB - END edit
    save: function save() {
      var _this10 = this;
      axios.put("api/transaction/update", this.editObj).then(function (res) {
        if (res.data instanceof Array) {
          console.log(res.data);
          _this10.transactionList = res.data;
          alert("Update Successful!");
          _this10.cancel();
        } else {
          console.log(res.data);
        }
      })["catch"](function (_ref10) {
        var response = _ref10.response;
        _this10.$router.push("/error/" + response.status);
      });
    } // STUB - END save
  },
  // NOTE - END METHODS
  created: function created() {
    var _this11 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _this11.getType();
            _this11.getProgrammer();
            _this11.getSystemName();
            _this11.getRequestor();
            _this11.getTransaction();
          case 5:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }))();
  },
  // NOTE - EDN CREATED
  computed: {
    filteredtransactionList: function filteredtransactionList() {
      var toReturnDue = [];
      var toReturnStatus = [];
      var toReturnAll = [];
      var dateToday = moment__WEBPACK_IMPORTED_MODULE_0___default()().format("YYYY-MM-DD");
      var dateTome = moment__WEBPACK_IMPORTED_MODULE_0___default()().clone().add(1, "days").format("YYYY-MM-DD");
      if (this.selected.length == 0 && this.selectedStatus.length == 0) {
        return this.transactionList;
      }
      if (this.selected.includes("DUETODAY")) {
        toReturnDue.push(this.transactionList.filter(function (item) {
          return item.dueDate == dateToday && item.status != "Finished" ? item : "";
        }));
      }
      if (this.selected.includes("OVERDUE")) {
        toReturnDue.push(this.transactionList.filter(function (item) {
          return item.dueDate < dateToday && item.status != "Finished" ? item : "";
        }));
      }
      if (this.selected.includes("OVETOMORROW")) {
        toReturnDue.push(this.transactionList.filter(function (item) {
          return item.dueDate == dateTome && item.status != "Finished" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("NOTSTARTED")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "Not Yet Started" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("ONGOING")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "On Going" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("PENDING")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "Pending" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("USERAPPROVAL")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "User's Confirmation" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("BACKJOB")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "Back Job" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("FINISHED")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "Finished" ? item : "";
        }));
      }
      if (this.selectedStatus.includes("CANCELLED")) {
        toReturnStatus.push(this.transactionList.filter(function (item) {
          return item.status == "Cancelled" ? item : "";
        }));
      }
      if (toReturnDue.length > 0 && toReturnStatus.length > 0) {
        // console.log(toReturnDue);
        // console.log(toReturnStatus);

        //MULTIPLE CHECKBOX
        toReturnAll.push(toReturnDue.flat(1));
        toReturnAll.push(toReturnStatus.flat(1));
        return _toConsumableArray(new Set(toReturnAll.flat(1)));

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
    }
  } // NOTE- END WATCH
});

/***/ }),

/***/ "./resources/js/components/Main.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Main.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=b9c20fb8& */ "./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=b9c20fb8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8& ***!
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
          staticStyle: { "max-height": "100%", "background-color": "#223040" },
        },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                { staticClass: "mt-2", attrs: { fluid: "" } },
                [
                  _c(
                    "v-card",
                    {
                      staticStyle: { "background-color": "#38a3a5" },
                      attrs: { height: "100%", width: "100%" },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "pt-3 pl-3",
                          staticStyle: { display: "flex" },
                        },
                        [
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
                              _vm._v("ADD JOB "),
                              _c("v-icon", { attrs: { right: "" } }, [
                                _vm._v("mdi-plus"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#FF6961", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                attrs: { value: "OVERDUE", label: "OVER DUE" },
                                model: {
                                  value: _vm.selected,
                                  callback: function ($$v) {
                                    _vm.selected = $$v
                                  },
                                  expression: "selected",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#78A2CC", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  value: "DUETODAY",
                                  label: "DUE TODAY",
                                },
                                model: {
                                  value: _vm.selected,
                                  callback: function ($$v) {
                                    _vm.selected = $$v
                                  },
                                  expression: "selected",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#FDFD96", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  value: "OVETOMORROW",
                                  label: "DUE TOMORROW",
                                },
                                model: {
                                  value: _vm.selected,
                                  callback: function ($$v) {
                                    _vm.selected = $$v
                                  },
                                  expression: "selected",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "mt-n6 pl-3",
                          staticStyle: { display: "flex" },
                        },
                        [
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#f3f2ed", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  value: "NOTSTARTED",
                                  label: "NOT STARTED",
                                },
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#1498a3", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "ONGOING" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("ONGOING ")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#0a0a0a", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "PENDING" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("PENDING ")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#f56230", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "USERAPPROVAL" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("USER'S APPROVAL")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#ca340f", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "BACKJOB" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("BACK JOB ")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#398c34", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "FINISHED" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("FINISHED")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-chip",
                            {
                              staticClass: "ma-2",
                              attrs: { label: "", color: "#7f7f7f", small: "" },
                            },
                            [
                              _c("v-checkbox", {
                                staticStyle: { color: "white" },
                                attrs: { value: "CANCELLED" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "label",
                                    fn: function () {
                                      return [
                                        _c(
                                          "span",
                                          { staticClass: "checkBoxLabelWhite" },
                                          [_vm._v("CANCELLED")]
                                        ),
                                      ]
                                    },
                                    proxy: true,
                                  },
                                ]),
                                model: {
                                  value: _vm.selectedStatus,
                                  callback: function ($$v) {
                                    _vm.selectedStatus = $$v
                                  },
                                  expression: "selectedStatus",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-simple-table",
                {
                  staticClass: "mt-6 table--border",
                  attrs: { "fixed-header": "", dense: "", height: "430px" },
                },
                [
                  _c("thead", { staticClass: "table--border" }, [
                    _c("tr", [
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("CODE"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("SYSTEM NAME"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("REQUESTOR"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("DETAILS"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("INCHARGE"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("TYPE"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("KIND"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("RECEIVED STARTED"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("DUE FINISHED"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("PRIORITY"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("STATUS"),
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "table--border" }, [
                        _vm._v("ACTION"),
                      ]),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.filteredtransactionList, function (item, i) {
                      return _c("tr", { key: i, style: _vm.styleRow(item) }, [
                        _c(
                          "td",
                          {
                            staticClass: "table--border",
                            staticStyle: { "white-space": "nowrap" },
                          },
                          [_vm._v(_vm._s(item.code))]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.systemName)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.RequestorName)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.details)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.programmer)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.typeOfRequest)),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.kindOfRequest)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "table--border",
                            staticStyle: { "white-space": "nowrap" },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.receivedDate) +
                                " /"
                            ),
                            _c("br"),
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  item.startedDate ? item.startedDate : ""
                                ) +
                                "\n              "
                            ),
                            !item.startedDate
                              ? _c("v-icon", [_vm._v("mdi-calendar-remove")])
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "table--border",
                            staticStyle: { "white-space": "nowrap" },
                          },
                          [
                            _vm._v(
                              "\n              " + _vm._s(item.dueDate) + " /"
                            ),
                            _c("br"),
                            _vm._v(
                              _vm._s(
                                item.finishedDate ? item.finishedDate : ""
                              ) + "\n              "
                            ),
                            !item.finishedDate
                              ? _c("v-icon", [_vm._v("mdi-calendar-remove")])
                              : _vm._e(),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _vm._v(_vm._s(item.priority)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "table--border",
                            style:
                              item.status == "Finished"
                                ? "color:green; font-weight: bold;"
                                : "",
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(item.status) +
                                "\n            "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "table--border" }, [
                          _c(
                            "div",
                            { staticClass: "d-flex flex-row" },
                            [
                              !item.deleted_at && item.status != "Finished"
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        fab: "",
                                        small: "",
                                        elevation: "5",
                                      },
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "blue" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.edit(item)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                    mdi-content-save"
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" \n                "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { fab: "", small: "", elevation: "5" },
                                },
                                [
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
                                        "\n                    " +
                                          _vm._s(
                                            item.deleted_at
                                              ? "mdi-delete-restore"
                                              : "mdi-delete"
                                          ) +
                                          "\n                  "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
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
          attrs: { persistent: "", "max-width": "900px" },
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
            {
              staticStyle: { "background-color": "#38a3a5", color: "white" },
              attrs: { width: "900px" },
            },
            [
              _c(
                "v-card-title",
                { staticStyle: { "background-color": "#223040" } },
                [_vm._v(" ADD JOB ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { staticClass: "mt-8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("Developer:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.programmerList,
                              "item-value": "programmerID",
                              "item-text": "programmer",
                              clearable: "",
                              outlined: "",
                              label: "Developer",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.programmerID,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "programmerID", $$v)
                              },
                              expression: "mainObj.programmerID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("System Name:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.systemNameList,
                              "item-value": "SystemNameID",
                              "item-text": "SystemName",
                              clearable: "",
                              outlined: "",
                              label: "System Name",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.SystemNameID,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "SystemNameID", $$v)
                              },
                              expression: "mainObj.SystemNameID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("TYPE:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.typeList,
                              "item-value": "typeID",
                              "item-text": "typeOfRequest",
                              clearable: "",
                              outlined: "",
                              label: "TYPE",
                              solo: "",
                              dense: "",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.kindFilter(_vm.mainObj.typeID)
                              },
                            },
                            model: {
                              value: _vm.mainObj.typeID,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "typeID", $$v)
                              },
                              expression: "mainObj.typeID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("KIND:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.kindList,
                              "item-value": "kindID",
                              "item-text": "kindOfRequest",
                              clearable: "",
                              outlined: "",
                              label: "KIND",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.kindID,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "kindID", $$v)
                              },
                              expression: "mainObj.kindID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("PRIORITY:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.priorityList,
                              "item-value": "priority",
                              "item-text": "priority",
                              clearable: "",
                              outlined: "",
                              label: "PRIORITY",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.priority,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "priority", $$v)
                              },
                              expression: "mainObj.priority",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("REQUESTOR:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.requestorList,
                              "item-value": "requestorID",
                              "item-text": "RequestorName",
                              clearable: "",
                              outlined: "",
                              label: "REQUESTOR",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.requestorID,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "requestorID", $$v)
                              },
                              expression: "mainObj.requestorID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("STATUS:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.statusList,
                              "item-value": "status",
                              "item-text": "status",
                              clearable: "",
                              outlined: "",
                              label: "STATUS",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.mainObj.status,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "status", $$v)
                              },
                              expression: "mainObj.status",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("DETAILS:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              clearable: "",
                              solo: "",
                              "no-resize": "",
                              rows: "3",
                              "clear-icon": "mdi-close-circle",
                              label: "DETAILS",
                            },
                            model: {
                              value: _vm.mainObj.details,
                              callback: function ($$v) {
                                _vm.$set(_vm.mainObj, "details", $$v)
                              },
                              expression: "mainObj.details",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("RECEIVED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                disabled: "",
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "RECEIVED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                              },
                                              model: {
                                                value: _vm.mainObj.receivedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.mainObj,
                                                    "receivedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "mainObj.receivedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.receivedMenu,
                                callback: function ($$v) {
                                  _vm.receivedMenu = $$v
                                },
                                expression: "receivedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.mainObj.receivedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.mainObj, "receivedDate", $$v)
                                  },
                                  expression: "mainObj.receivedDate",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("STARTED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "STARTED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.mainObj.startedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.mainObj,
                                                    "startedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "mainObj.startedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.startedMenu,
                                callback: function ($$v) {
                                  _vm.startedMenu = $$v
                                },
                                expression: "startedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.mainObj.startedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.mainObj, "startedDate", $$v)
                                  },
                                  expression: "mainObj.startedDate",
                                },
                              }),
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
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("DUE:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "DUE",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.mainObj.dueDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.mainObj,
                                                    "dueDate",
                                                    $$v
                                                  )
                                                },
                                                expression: "mainObj.dueDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.dueMenu,
                                callback: function ($$v) {
                                  _vm.dueMenu = $$v
                                },
                                expression: "dueMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.mainObj.dueDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.mainObj, "dueDate", $$v)
                                  },
                                  expression: "mainObj.dueDate",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("FINISHED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "FINISHED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.mainObj.finishedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.mainObj,
                                                    "finishedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "mainObj.finishedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.finishedMenu,
                                callback: function ($$v) {
                                  _vm.finishedMenu = $$v
                                },
                                expression: "finishedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.mainObj.finishedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.mainObj, "finishedDate", $$v)
                                  },
                                  expression: "mainObj.finishedDate",
                                },
                              }),
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
          attrs: { persistent: "", "max-width": "900px" },
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
            {
              staticStyle: { "background-color": "#38a3a5", color: "white" },
              attrs: { width: "900px" },
            },
            [
              _c(
                "v-card-title",
                { staticStyle: { "background-color": "#223040" } },
                [_vm._v(" EDIT JOB ")]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    { staticClass: "mt-8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("Developer:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.programmerList,
                              "item-value": "programmerID",
                              "item-text": "programmer",
                              clearable: "",
                              outlined: "",
                              label: "Developer",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.programmerID,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "programmerID", $$v)
                              },
                              expression: "editObj.programmerID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("System Name:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.systemNameList) +
                              "\n            "
                          ),
                          _c("v-select", {
                            attrs: {
                              items: _vm.systemNameList,
                              "item-value": "SystemNameID",
                              "item-text": "SystemName",
                              clearable: "",
                              outlined: "",
                              label: "System Name",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.SystemNameID,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "SystemNameID", $$v)
                              },
                              expression: "editObj.SystemNameID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("TYPE:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.typeList,
                              "item-value": "typeID",
                              "item-text": "typeOfRequest",
                              clearable: "",
                              outlined: "",
                              label: "TYPE",
                              solo: "",
                              dense: "",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.kindFilter(_vm.editObj.typeID)
                              },
                            },
                            model: {
                              value: _vm.editObj.typeID,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "typeID", $$v)
                              },
                              expression: "editObj.typeID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("KIND:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.kindList,
                              "item-value": "kindID",
                              "item-text": "kindOfRequest",
                              clearable: "",
                              outlined: "",
                              label: "KIND",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.kindID,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "kindID", $$v)
                              },
                              expression: "editObj.kindID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("PRIORITY:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.priorityList,
                              "item-value": "priority",
                              "item-text": "priority",
                              clearable: "",
                              outlined: "",
                              label: "PRIORITY",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.priority,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "priority", $$v)
                              },
                              expression: "editObj.priority",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("REQUESTOR:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.requestorList,
                              "item-value": "requestorID",
                              "item-text": "RequestorName",
                              clearable: "",
                              outlined: "",
                              label: "REQUESTOR",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.requestorID,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "requestorID", $$v)
                              },
                              expression: "editObj.requestorID",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("STATUS:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.statusList,
                              "item-value": "status",
                              "item-text": "status",
                              clearable: "",
                              outlined: "",
                              label: "STATUS",
                              solo: "",
                              dense: "",
                            },
                            model: {
                              value: _vm.editObj.status,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "status", $$v)
                              },
                              expression: "editObj.status",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "3" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("DETAILS:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "9" } },
                        [
                          _c("v-textarea", {
                            attrs: {
                              clearable: "",
                              solo: "",
                              "no-resize": "",
                              rows: "3",
                              "clear-icon": "mdi-close-circle",
                              label: "DETAILS",
                            },
                            model: {
                              value: _vm.editObj.details,
                              callback: function ($$v) {
                                _vm.$set(_vm.editObj, "details", $$v)
                              },
                              expression: "editObj.details",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("RECEIVED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "RECEIVED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                disabled: "",
                                              },
                                              model: {
                                                value: _vm.editObj.receivedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editObj,
                                                    "receivedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editObj.receivedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.editreceivedMenu,
                                callback: function ($$v) {
                                  _vm.editreceivedMenu = $$v
                                },
                                expression: "editreceivedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.editObj.receivedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.editObj, "receivedDate", $$v)
                                  },
                                  expression: "editObj.receivedDate",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("STARTED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "STARTED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.editObj.startedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editObj,
                                                    "startedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editObj.startedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.editstartedMenu,
                                callback: function ($$v) {
                                  _vm.editstartedMenu = $$v
                                },
                                expression: "editstartedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.editObj.startedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.editObj, "startedDate", $$v)
                                  },
                                  expression: "editObj.startedDate",
                                },
                              }),
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
                    "v-row",
                    { staticClass: "mt-n8" },
                    [
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("DUE:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "DUE",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.editObj.dueDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editObj,
                                                    "dueDate",
                                                    $$v
                                                  )
                                                },
                                                expression: "editObj.dueDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.editdueMenu,
                                callback: function ($$v) {
                                  _vm.editdueMenu = $$v
                                },
                                expression: "editdueMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.editObj.dueDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.editObj, "dueDate", $$v)
                                  },
                                  expression: "editObj.dueDate",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-col", { attrs: { cols: "2" } }, [
                        _c("span", { staticClass: "white--text" }, [
                          _vm._v("FINISHED:"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c(
                            "v-menu",
                            {
                              attrs: {
                                "close-on-content-click": false,
                                "nudge-right": 40,
                                transition: "scale-transition",
                                "offset-y": "",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                label: "FINISHED",
                                                "prepend-inner-icon":
                                                  "mdi-calendar",
                                                readonly: "",
                                                outlined: "",
                                                dense: "",
                                                solo: "",
                                                clearable: "",
                                              },
                                              model: {
                                                value: _vm.editObj.finishedDate,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.editObj,
                                                    "finishedDate",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "editObj.finishedDate",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.editfinishedMenu,
                                callback: function ($$v) {
                                  _vm.editfinishedMenu = $$v
                                },
                                expression: "editfinishedMenu",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { min: _vm.dateNow },
                                on: {
                                  input: function ($event) {
                                    return _vm.hideCalendar()
                                  },
                                },
                                model: {
                                  value: _vm.editObj.finishedDate,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.editObj, "finishedDate", $$v)
                                  },
                                  expression: "editObj.finishedDate",
                                },
                              }),
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