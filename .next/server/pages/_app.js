"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8021);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6967);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2021);
/* harmony import */ var _translations_es_global_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(361);
/* harmony import */ var _translations_en_global_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_configContext__WEBPACK_IMPORTED_MODULE_1__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_4__]);
([_context_configContext__WEBPACK_IMPORTED_MODULE_1__, _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__, i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








i18next__WEBPACK_IMPORTED_MODULE_4__["default"].init({
    interpolation: {
        escapeValue: false
    },
    lng: "es",
    resources: {
        es: {
            global: _translations_es_global_json__WEBPACK_IMPORTED_MODULE_5__
        },
        en: {
            global: _translations_en_global_json__WEBPACK_IMPORTED_MODULE_6__
        }
    }
});
function App({ Component , pageProps  }) {
    // return <Component {...pageProps} /> //original
    //modo mantenimiento
    // if (process.env.MAINTENANCE) {
    //   return <Maintenance />;
    // }
    // return <Component {...pageProps} />;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_configContext__WEBPACK_IMPORTED_MODULE_1__/* .ConfigProvider */ .iV, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_i18next__WEBPACK_IMPORTED_MODULE_3__.I18nextProvider, {
            i18n: i18next__WEBPACK_IMPORTED_MODULE_4__["default"],
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 514:
/***/ ((module) => {

module.exports = require("next/Link");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 9690:
/***/ ((module) => {

module.exports = JSON.parse('{"preHome":{"hola":"Hello!","selecciona":"Select your country"},"menu":{"titulo":"MENU","quienesSomos":"About As","coberturas":"Our coverage","faq":"FAQs","baja":"Regret button","contacto":"Contact","marca":"Europ Asistance"},"redes":{"seguinos":"FOLLOW IN"},"buttons":{"anterior":"Anterior","pagar":"Pagar"},"formContratar":{"subtitulo":"Completá tus datos y finalizá tu compra.","datosFacturacion":"Datos de facturación","datosSubtitulo":"Datos de facturación","formaPago":"Forma de pago","formaPagoSubtitulo":"Estás a un paso de contratar tu asistencia. Tené a disposición la tarjeta con que se efecturá el pago.","cuotas":"Cuotas","vtoMes":"Mes de Vencimiento","vtoAnio":"Año de Vencimiento","titularTarjeta":"Datos del titular","pasajero":"Pasajero","completarPasajero":"Debe completar todos los campos de"}}');

/***/ }),

/***/ 361:
/***/ ((module) => {

module.exports = JSON.parse('{"preHome":{"hola":"¡Hola!","selecciona":"Seleccioná tu país"},"menu":{"titulo":"MENU","quienesSomos":"Quienes Somos","coberturas":"Nuestras Coberturas","faq":"Preguntas Frecuentes","baja":"Botón de Arrepentimiento","contacto":"Contacto","marca":"Europ Asistance"},"redes":{"seguinos":"SEGUINOS EN"},"buttons":{"anterior":"Anterior","pagar":"Pagar"},"formContratar":{"subtitulo":"Completá tus datos y finalizá tu compra.","datosFacturacion":"Datos de facturación","datosSubtitulo":"Datos de facturación","formaPago":"Forma de pago","formaPagoSubtitulo":"Estás a un paso de contratar tu asistencia. Tené a disposición la tarjeta con que se efecturá el pago.","cuotas":"Cuotas","vtoMes":"Mes de Vencimiento","vtoAnio":"Año de Vencimiento","titularTarjeta":"Datos del titular","pasajero":"Pasajero","completarPasajero":"Debe completar todos los campos de"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [575,967], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();