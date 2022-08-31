"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 5664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getCotizacion)
/* harmony export */ });
/* harmony import */ var _helpers_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function getCotizacion() {
    let cotizacion = null;
    try {
        let COD = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("cotizacionID");
        let datos = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion" + "?cotizacionId=" + COD);
        cotizacion = datos.data[0];
    } catch (e) {
        console.log(e);
    }
    return cotizacion;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FS": () => (/* reexport safe */ _promoActual__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "eB": () => (/* reexport safe */ _cotizacion__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   "pQ": () => (/* reexport safe */ _modalidades__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "ur": () => (/* reexport safe */ _regiones__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _regiones__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3462);
/* harmony import */ var _modalidades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7175);
/* harmony import */ var _promoActual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _cotizacion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5664);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cotizacion__WEBPACK_IMPORTED_MODULE_3__]);
_cotizacion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getModalidades)
/* harmony export */ });
/* harmony import */ var _helpers_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


async function getModalidades(user) {
    let multiples = undefined;
    try {
        let logData = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/multiples" + "?codigoUsuario=" + user);
        const data = logData.data[0];
        multiples = data;
    } catch (e) {
        console.log(e);
    }
    return multiples;
}


/***/ }),

/***/ 22:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getPromoActual)
/* harmony export */ });
/* harmony import */ var _helpers_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


async function getPromoActual(user) {
    let promo = undefined;
    try {
        // const response = await fetch(process.env.NEXT_PUBLIC_URL_PROMOACTUAL+'?codigoUsuario='+user,headerGet);
        // let datos= await response.json();
        //   const data = datos
        let logData = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/promocion/actual" + "?codigoUsuario=" + user);
        const data = logData.data[0];
        promo = data;
    } catch (e) {
        console.log(e);
    }
    return promo;
}


/***/ }),

/***/ 3462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getRegion)
/* harmony export */ });
/* harmony import */ var _helpers_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


async function getRegion(user) {
    let regiones = undefined;
    try {
        let logData = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/regiones" + "?codigoUsuario=" + user);
        const data = logData.data[0];
        regiones = data;
    } catch (e) {
        console.log(e);
    }
    return regiones;
}


/***/ }),

/***/ 8021:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZR": () => (/* binding */ useConfig),
/* harmony export */   "iV": () => (/* binding */ ConfigProvider)
/* harmony export */ });
/* unused harmony export ConfigContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ConfigContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useConfig = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContext)
;
const ConfigProvider = ({ children  })=>{
    const { 0: config , 1: setConfig  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfigContext.Provider, {
        value: {
            config,
            setConfig
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TH": () => (/* binding */ useLocation),
/* harmony export */   "vR": () => (/* binding */ LocationProvider)
/* harmony export */ });
/* unused harmony export LocationContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LocationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const useLocation = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocationContext)
;
const LocationProvider = ({ children  })=>{
    const { 0: location , 1: setLocation  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LocationContext.Provider, {
        value: {
            location,
            setLocation
        },
        children: children
    });
};


/***/ }),

/***/ 9611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ parseCookies)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function parseCookies(req) {
    return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req ? req.headers.cookie || "" : document.cookie);
}


/***/ }),

/***/ 3774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ formatNum)
/* harmony export */ });
const formatNum = (num)=>{
    const locale = "es-ar";
    const options = {
        maximumFractionDigits: 2
    };
    return Intl.NumberFormat(locale, options).format(num);
};


/***/ }),

/***/ 7355:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getUserLocation)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getUserLocation = async ()=>{
    var data = {};
    navigator.geolocation.getCurrentPosition(({ coords  })=>{
        // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=8.9936&lon=-79.51973`//panama
        // const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=11.74014&lon=76.07369`//india
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`;
        fetch(url).then((response)=>response.json()
        ).then((json)=>{
            let country = json.address.country.toLowerCase();
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("location", country);
            return country;
        });
    }, (err)=>{
        console.log("no se pudo acceder a la geolocalizacion");
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports headerGet, headerPost */
const headerGet = {
    mode: "cors",
    method: "GET",
    headers: {
        "X-Request-Token": "292d486e-6194-40aa-8ddf-30e0821f0aed"
    }
};
const headerPost = {
    mode: "cors",
    method: "POST",
    headers: {
        "X-Request-Token": "292d486e-6194-40aa-8ddf-30e0821f0aed"
    }
};


/***/ }),

/***/ 928:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useLocalStorage__WEBPACK_IMPORTED_MODULE_3__._),
/* harmony export */   "ao": () => (/* reexport safe */ _formatNum__WEBPACK_IMPORTED_MODULE_4__.a),
/* harmony export */   "jl": () => (/* reexport safe */ _cookies__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "wV": () => (/* reexport safe */ _getUserLocation__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _getUserLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7355);
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9611);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(563);
/* harmony import */ var _useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2388);
/* harmony import */ var _formatNum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3774);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getUserLocation__WEBPACK_IMPORTED_MODULE_0__]);
_getUserLocation__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key, initialValue) {
    const { 0: valueStored , 1: setValueStored  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (er) {
            return initialValue;
        }
    });
    const setValue = (value)=>{
        try {
            setValueStored(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (er) {
            console.error(er);
        }
    };
    return [
        valueStored,
        setValue
    ];
}


/***/ })

};
;