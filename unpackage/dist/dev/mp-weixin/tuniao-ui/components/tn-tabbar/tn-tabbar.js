(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["tuniao-ui/components/tn-tabbar/tn-tabbar"],{

/***/ 183:
/*!*************************************************************************************!*\
  !*** D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tn-tabbar.vue?vue&type=template&id=3972e4a0&scoped=true& */ 184);
/* harmony import */ var _tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tn-tabbar.vue?vue&type=script&lang=js& */ 186);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tn-tabbar.vue?vue&type=style&index=0&id=3972e4a0&lang=scss&scoped=true& */ 188);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3972e4a0",
  null,
  false,
  _tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "tuniao-ui/components/tn-tabbar/tn-tabbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 184:
/*!********************************************************************************************************************************!*\
  !*** D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=template&id=3972e4a0&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-tabbar.vue?vue&type=template&id=3972e4a0&scoped=true& */ 185);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_template_id_3972e4a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 185:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=template&id=3972e4a0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    tnBadge: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-badge/tn-badge */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-badge/tn-badge")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-badge/tn-badge.vue */ 218))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.show
    ? _vm.__map(_vm.list, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var s0 = _vm.__get_style([_vm.itemButtonStyle(index)])
        var m0 = _vm.itemButtonClass(index)
        var m1 = _vm.isImage(index)
        var m2 = m1 ? _vm.elIcon(index) : null
        var m3 = !m1 ? _vm.elIcon(index) : null
        var m4 = !m1 ? _vm.elIconColor(index, false) : null
        var m5 = !m1 ? _vm.elIconColor(index) : null
        var g0 =
          !item.out && (item.count || item.dot)
            ? _vm.$tn.number.formatNumberString(item.count)
            : null
        var m6 = _vm.elColor(index, false)
        var m7 = _vm.elColor(index)
        return {
          $orig: $orig,
          s0: s0,
          m0: m0,
          m1: m1,
          m2: m2,
          m3: m3,
          m4: m4,
          m5: m5,
          g0: g0,
          m6: m6,
          m7: m7,
        }
      })
    : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      $event.stopPropagation()
      $event.preventDefault()
      return (function () {})($event)
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 186:
/*!**************************************************************************************************************!*\
  !*** D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-tabbar.vue?vue&type=script&lang=js& */ 187);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 187:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 58));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 60));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = {
  name: 'tn-tabbar',
  props: {
    // ????????????????????????current???
    value: {
      type: [String, Number],
      default: 0
    },
    // ????????????
    show: {
      type: Boolean,
      default: true
    },
    // ????????????
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // ???????????????rpx
    height: {
      type: Number,
      default: 100
    },
    // ???????????????
    outHeight: {
      type: Number,
      default: 100
    },
    // ????????????
    bgColor: {
      type: String,
      default: '#FFFFFF'
    },
    // ????????????
    iconSize: {
      type: Number,
      default: 40
    },
    // ????????????
    fontSize: {
      type: Number,
      default: 24
    },
    // ??????????????????
    activeColor: {
      type: String,
      default: '#01BEFF'
    },
    // ?????????????????????
    inactiveColor: {
      type: String,
      default: '#AAAAAA'
    },
    // ????????????????????????
    activeIconColor: {
      type: String,
      default: '#01BEFF'
    },
    // ???????????????????????????
    inactiveIconColor: {
      type: String,
      default: '#AAAAAA'
    },
    // ???????????????????????????
    activeStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // ??????????????????
    shadow: {
      type: Boolean,
      default: true
    },
    // ????????????????????????
    animation: {
      type: Boolean,
      default: false
    },
    // ????????????????????????
    animationMode: {
      type: String,
      default: 'scale'
    },
    // ?????????????????????
    fixed: {
      type: Boolean,
      default: true
    },
    // ?????????????????????????????????????????????????????????iPhoneX????????????????????????????????????
    safeAreaInsetBottom: {
      type: Boolean,
      default: false
    },
    // ???????????????
    beforeSwitch: {
      type: Function,
      default: null
    }
  },
  computed: {
    // ?????????????????????
    elColor: function elColor() {
      var _this = this;
      return function (index) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var currentItem = _this.list[index];
        var color = '';
        if (index === _this.value) {
          color = currentItem['activeColor'] || _this.activeColor;
        } else {
          color = currentItem['inactiveColor'] || _this.inactiveColor;
        }
        // ??????????????????????????????
        if (style) {
          if (_this.$tn.color.getFontColorStyle(color) !== '') {
            return color;
          } else {
            return '';
          }
        } else {
          if (_this.$tn.color.getFontColorStyle(color) === '') {
            return color;
          } else {
            return '';
          }
        }
      };
    },
    // ?????????????????????
    elIconColor: function elIconColor() {
      var _this2 = this;
      return function (index) {
        var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var currentItem = _this2.list[index];
        var color = '';
        if (index === _this2.value) {
          color = currentItem['activeIconColor'] || _this2.activeIconColor;
        } else {
          color = currentItem['inactiveIconColor'] || _this2.inactiveIconColor;
        }
        // ??????????????????????????????
        if (style) {
          if (_this2.$tn.color.getFontColorStyle(color) !== '') {
            return color;
          } else {
            return '';
          }
        } else {
          if (_this2.$tn.color.getFontColorStyle(color) === '') {
            return color + ' tn-tabbar__content__item__icon--clip';
          } else {
            return '';
          }
        }
      };
    },
    // ???????????????
    elIcon: function elIcon() {
      var _this3 = this;
      return function (index) {
        var currentItem = _this3.list[index];
        if (index === _this3.value) {
          return currentItem['activeIcon'];
        } else {
          return currentItem['inactiveIcon'];
        }
      };
    },
    // ????????????item button????????????
    itemButtonClass: function itemButtonClass() {
      var _this4 = this;
      return function (index) {
        var clazz = '';
        if (_this4.list[index]['out']) {
          clazz += 'tn-tabbar__content__item__button--out';
          if (_this4.$tn.color.getFontColorStyle(_this4.activeIconColor) === '') {
            clazz += " ".concat(_this4.activeIconColor);
          }
          if (_this4.value === index) {
            clazz += " tn-tabbar__content__item__button--out--animation--".concat(_this4.animationMode);
          }
        } else {
          clazz += 'tn-tabbar__content__item__button';
          if (_this4.value === index) {
            clazz += " tn-tabbar__content__item__button--animation--".concat(_this4.animationMode);
          }
        }
        return clazz;
      };
    },
    // ????????????item button??????
    itemButtonStyle: function itemButtonStyle() {
      var _this5 = this;
      return function (index) {
        var style = {};
        if (_this5.list[index]['out']) {
          if (_this5.$tn.color.getFontColorStyle(_this5.activeIconColor) !== '') {
            style.backgroundColor = _this5.activeIconColor;
          }
          style.width = "".concat(_this5.outHeight - 35, "rpx");
          style.height = "".concat(_this5.outHeight - 35, "rpx");
          style.top = "-".concat(_this5.outHeight * 0.15, "rpx");
          return style;
        }
        return style;
      };
    },
    // ???????????????????????????
    isImage: function isImage() {
      var _this6 = this;
      return function (index) {
        var icon = _this6.list[index]['activeIcon'];
        // ???????????????'/'??????????????????
        return icon.indexOf('/') !== -1;
      };
    }
  },
  data: function data() {
    return {
      // ?????????????????????
      outItemLeft: '50%',
      // ??????????????????????????????index
      outItemIndex: -1,
      // ?????????item?????????
      tabbatItemInfo: []
    };
  },
  watch: {},
  created: function created() {
    this.getOutItemIndex();
  },
  mounted: function mounted() {
    var _this7 = this;
    this.$nextTick(function () {
      _this7.getTabbarItem();
    });
  },
  methods: {
    // ???????????????item?????????
    getTabbarItem: function getTabbarItem() {
      var _this8 = this;
      var query = uni.createSelectorQuery().in(this);
      // ??????????????????
      for (var i = 0; i < this.list.length; i++) {
        query.select("#tabbar_item_".concat(i)).fields({
          size: true,
          rect: true
        });
      }
      query.exec(function (res) {
        if (!res) {
          setTimeout(function () {
            _this8.getTabbarItem();
          }, 10);
          return;
        }
        _this8.tabbatItemInfo = res.map(function (item) {
          return {
            left: item.left,
            width: item.width
          };
        });
        _this8.updateOutItemLeft();
      });
    },
    // ????????????Item?????????index(????????????)
    getOutItemIndex: function getOutItemIndex() {
      this.outItemIndex = this.list.findIndex(function (item) {
        return item.hasOwnProperty('out') && item.out;
      });
    },
    // ???????????????????????????
    clickItemHandler: function clickItemHandler(index) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var beforeSwitch;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(_this9.beforeSwitch && typeof _this9.beforeSwitch === 'function')) {
                  _context.next = 10;
                  break;
                }
                // ?????????????????????????????????????????????
                // ??????????????????????????????(H5??????)?????????????????????????????????????????????this??????????????????this
                // ??????bind()???????????????????????????this??????this???this????????????????????????
                beforeSwitch = _this9.beforeSwitch.bind(_this9.$tn.$parent.call(_this9))(index); // ?????????????????????Promise
                if (!(!!beforeSwitch && typeof beforeSwitch.then === 'function')) {
                  _context.next = 7;
                  break;
                }
                _context.next = 5;
                return beforeSwitch.then(function (res) {
                  // Promise????????????
                  _this9.switchTab(index);
                }).catch(function (err) {});
              case 5:
                _context.next = 8;
                break;
              case 7:
                if (beforeSwitch === true) {
                  _this9.switchTab(index);
                }
              case 8:
                _context.next = 11;
                break;
              case 10:
                _this9.switchTab(index);
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // ??????tab
    switchTab: function switchTab(index) {
      // ?????????????????????v-model????????????
      this.$emit('change', index);
      this.$emit('input', index);
    },
    // ?????????????????????
    updateOutItemLeft: function updateOutItemLeft() {
      // ??????????????????????????????
      var index = this.list.findIndex(function (item) {
        return item.out;
      });
      if (index !== -1) {
        this.outItemLeft = this.tabbatItemInfo[index].left + this.tabbatItemInfo[index].width / 2 + 'px';
      }
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 188:
/*!***********************************************************************************************************************************************!*\
  !*** D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=style&index=0&id=3972e4a0&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../programFiles/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-tabbar.vue?vue&type=style&index=0&id=3972e4a0&lang=scss&scoped=true& */ 189);
/* harmony import */ var _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_programFiles_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_tabbar_vue_vue_type_style_index_0_id_3972e4a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/HBuilderProjects/lidianchi_ui/tuniao-ui/components/tn-tabbar/tn-tabbar.vue?vue&type=style&index=0&id=3972e4a0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-tabbar/tn-tabbar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-tabbar/tn-tabbar-create-component',
    {
        'tuniao-ui/components/tn-tabbar/tn-tabbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(183))
        })
    },
    [['tuniao-ui/components/tn-tabbar/tn-tabbar-create-component']]
]);
