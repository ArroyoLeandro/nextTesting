"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 1778:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9050);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3735);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Banner__WEBPACK_IMPORTED_MODULE_1__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Banner__WEBPACK_IMPORTED_MODULE_1__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_4__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

// import AppLayout from '../../components/AppLayout';



// import {parseCookies} from '../../helpers/index'




function Gracias() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: dateDiff , 1: setDateDiff  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: emisionId , 1: setEmisionId  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // if(Cookie.get('cotizacionID')){
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_4__/* .getCotizacion */ .eB)().then((res)=>{
            //set emisionId
            setEmisionId(res.emisionId);
            //calc diff date
            const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(), "yyyy-MM-dd");
            const fechaInicio = new Date(res.desde).toISOString().slice(0, 10);
            let diffDays = getDateDiff(today.split(" ")[0].split("-"), fechaInicio.split(" ")[0].split("-"));
            setDateDiff(diffDays);
            sendVoucher(res.emisionId);
        });
    // }
    }, []);
    const sendVoucher = async (id)=>{
        try {
            let user = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location").toUpperCase();
            let logData = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/voucher/enviar" + "?emisionId=" + id + "&codigoUsuario=" + user);
            const data = logData.data[0];
            console.log("res enviar: ", data);
        } catch (e) {
            console.log(e);
        }
    };
    const getDateDiff = (time1, time2)=>{
        let date1 = new Date(time1[0], time1[1] - 1, time1[2]);
        let date2 = new Date(time2[0], time2[1] - 1, time2[2]);
        let difference = date2 > date1 ? date2 - date1 : date1 - date2;
        let diff_days = Math.floor(difference / (1000 * 3600 * 24));
        return diff_days;
    };
    const downloadVoucher = async ()=>{
        try {
            let logData = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/voucher/download" + "?emisionId=" + emisionId);
            const data = logData.data[0];
            console.log("res enviar: ", data);
        } catch (e) {
            console.log(e);
        }
    };
    return(// <AppLayout>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                banner: "gracias"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "w-full bg-gris-claro text-principal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-screen-md mx-auto flex flex-col gap-6 lg:gap-8 items-center text-center px-6 2xl:px-0 py-14",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-3xl sm:text-4xl font-extrabold",
                                    children: [
                                        "Estas a ",
                                        dateDiff && dateDiff,
                                        " d\xedas ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "whitespace-nowrap",
                                            children: "de tu viaje!"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    className: "text-3xl sm:text-4xl font-extrabold",
                                    children: [
                                        "Con ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "whitespace-nowrap",
                                            children: "Europ Assistance"
                                        }),
                                        " viaj\xe1s tranquilo."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-xl",
                            children: [
                                "Record\xe1 llevar con vos el voucher de tu viaje, que seguramente lo ten\xe9s en tu casilla de e-mail. Sino en todo caso pod\xe9s",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        downloadVoucher();
                                    },
                                    className: "pl-2 whitespace-nowrap font-extrabold",
                                    children: " descargar el voucher ac\xe1"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-xl",
                            children: "Por cualquier duda o consulta escribinos por mail o hablamos por Whatsapp."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                            className: "flex gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "py-5 px-6 btn btn-celeste lg:w-56",
                                    children: "Escribir mail"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "py-5 px-6 btn btn-amarillo lg:w-56",
                                    children: "Chat por Whatsapp"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gracias); // Gracias.getInitialProps = ({req}) => {
 //     const cookies = parseCookies(req);
 //     return {
 //       initialLocation:  cookies.location
 //     }
 //   }

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;