"use strict";
exports.id = 967;
exports.ids = [967];
exports.modules = {

/***/ 9857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8021);
/* harmony import */ var _helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2388);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3735);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(928);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _context_configContext__WEBPACK_IMPORTED_MODULE_4__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_7__, _helpers_index__WEBPACK_IMPORTED_MODULE_8__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _context_configContext__WEBPACK_IMPORTED_MODULE_4__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_7__, _helpers_index__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Footer(props) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("global");
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_4__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__/* .useLocalStorage */ ._)("etiquetas", "");
    const { 0: promo1 , 1: setPromoActual  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const socialMedia = {
        facebook: "https://www.facebook.com/EuropAssistanceAR",
        instagram: "https://www.instagram.com/europassistance_argentina"
    };
    const getConfig = async ()=>{
        try {
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_6___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
            setEtiquetas(data);
        // console.log('fetch footer')
        } catch (e) {
            console.error(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        getPromo();
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
    }, []);
    const getPromo = ()=>{
        (0,_helpers_index__WEBPACK_IMPORTED_MODULE_8__/* .getUserLocation */ .wV)();
        let COD = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("location");
        if (COD) {
            let promo = (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_7__/* .getPromoActual */ .FS)(COD.toUpperCase());
            promo.then((res)=>{
                js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].set("promoActual", JSON.stringify(res));
                setPromoActual(res);
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        role: "contentinfo",
        className: "bg-principal text-white px-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-x-8 px-6 py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/images/ea-bco.png",
                            alt: t("menu.marca"),
                            className: "w-28"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:pl-10 lg:pt-6 pb-6 lg:pb-0 flex-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "lg:grid grid-flow-col grid-rows-3 auto-cols-max gap-x-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/quienes-somos",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none",
                                            children: t("menu.quienesSomos")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/nuestras-coberturas",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none",
                                            children: t("menu.coberturas")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/preguntas-frecuentes",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none",
                                            children: t("menu.faq")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/arrepentimiento",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none",
                                            children: t("menu.baja")
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contacto",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "block py-1 lg:py-0 hover:text-principal-claro focus:text-principal-claro focus:outline-none",
                                            children: t("menu.contacto")
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "justify-self-end flex items-center gap-4 py-4 border-t border-b lg:border-none border-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logo-ssl.png",
                                alt: "SSL",
                                className: "h-10 lg:h-12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logo-visa-bco.png",
                                alt: "Visa",
                                className: "h-10 lg:h-12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logo-master-bco.png",
                                alt: "Mastercard",
                                className: "h-10 lg:h-12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/logo-american-bco.png",
                                alt: "American Express",
                                className: "h-10 lg:h-12"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-screen-xl mx-auto flex items-center justify-center lg:justify-end gap-4 px-6 pb-5 border-b border-white",
                children: [
                    t("redes.seguinos"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "Facebook",
                        className: "w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: socialMedia.facebook,
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-facebook text-2xl",
                                "aria-hidden": "true"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "Instagram",
                        className: "w-9 h-9 flex items-center justify-center rounded-full bg-white text-principal ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            target: "_blank",
                            href: socialMedia.instagram,
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-instagram text-2xl",
                                "aria-hidden": "true"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>i18n.changeLanguage("es")
                        ,
                        children: "ES"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>i18n.changeLanguage("en")
                        ,
                        children: "EN"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "max-w-screen-xl mx-auto flex flex-col gap-4 px-6 py-8 text-xs font-light text-justify",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            config?.etiquetas.Label_Copyright,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            config?.etiquetas.Label_Footer
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: promo1?.pieLegalB2C
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        target: "_blank",
                        className: "focus:outline-none focus:underline",
                        children: "Direcci\xf3n General de defensa y protecci\xf3n del consumidor para consultas y/o denuncias ingrese aqu\xed"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8620:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PaisesItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4031);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8021);
/* harmony import */ var _helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2388);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(928);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PaisesItem__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _context_configContext__WEBPACK_IMPORTED_MODULE_5__, _helpers_index__WEBPACK_IMPORTED_MODULE_8__]);
([_PaisesItem__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_4__, _context_configContext__WEBPACK_IMPORTED_MODULE_5__, _helpers_index__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Header(props) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("global");
    const { 0: Country , 1: setCountry  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: openMenu , 1: setOpenMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_5__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorage */ ._)("etiquetas", "");
    const buttonOpenMenu = ()=>{
        setOpenMenu((current)=>!current
        );
    };
    const getConfig = async ()=>{
        try {
            (0,_helpers_index__WEBPACK_IMPORTED_MODULE_8__/* .getUserLocation */ .wV)();
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_7___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
            setEtiquetas(data);
        // console.log('fetch header');
        } catch (e) {
            console.error(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
        setCountry(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location"));
    }, []);
    //agrego el esc para cerrar el menu
    const handleEscape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (event.keyCode === 27) setOpenMenu(false);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (openMenu) document.addEventListener("keydown", handleEscape, false);
        return ()=>{
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [
        handleEscape,
        openMenu
    ]);
    //agrego el click outside al header para cerrar el menu si haces click fuera
    const outsideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (outsideRef.current && !outsideRef.current.contains(e.target)) {
            setOpenMenu(false);
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (openMenu) document.addEventListener("mousedown", handleClickOutside, false);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside, false);
        };
    }, [
        handleClickOutside,
        openMenu
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        ref: outsideRef,
        role: "banner",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full max-w-screen-xl flex items-center gap-4 lg:gap-6 py-6 px-6 2xl:px-0 m-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 min-w-max",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/home",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "inline-block p-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/assets/images/ea.png",
                                    alt: t("menu.marca"),
                                    className: "w-28"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden md:block w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col xl:flex-row items-center xl:items-stretch justify-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("address", {
                                    className: "border-t sm:border-t-0 border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm uppercase order-3 sm:order-1",
                                            children: config?.etiquetas.Label_Urgencias
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "lg:text-2xl font-extrabold order-2",
                                            children: config?.etiquetas.Label_DesdeElExteriorTelefono
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("address", {
                                    className: "border-t sm:border-t-0 xl:border-l border-principal bg-white sm:bg-transparent py-3 sm:py-0 px-6 not-italic text-principal flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-end sm:gap-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm uppercase order-3 sm:order-1",
                                            children: config?.etiquetas.Label_VentaTelefonica
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "lg:text-2xl font-extrabold order-2",
                                            children: config?.etiquetas.Label_Telefono
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm uppercase order-4",
                                            children: config?.etiquetas.Label_HorarioTelefono
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    props.page !== "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden lg:flex gap-4 items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: buttonOpenMenu,
                            className: "flex flex-col justify-between w-9 h-8 p-2 relative group focus:outline-none",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    className: `block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario" : "bg-principal"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    className: `block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario w-1/2" : "bg-principal"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    className: `block h-[2px] w-full group-hover:bg-secundario group-focus:bg-secundario transition-colors duration-300 ${openMenu ? "bg-secundario" : "bg-principal"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: t("menu.menu")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "flex-none block lg:hidden w-14 h-14 rounded-full shadow-sm overflow-hidden border",
                        "aria-label": "Ver tel\xe9fonos",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon-tel text-3xl"
                        })
                    }),
                    props.page !== "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-none relative w-14 h-14",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaisesItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            Country: Country
                        })
                    })
                ]
            }),
            openMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                role: "navigation",
                className: "hidden lg:block",
                "aria-label": "Navegaci\xf3n principal",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "nav nav-tabs w-full flex gap-6 items-center justify-center mb-4",
                    id: "navMenu",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/quienes-somos",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-principal hover:text-secundario focus:text-secundario focus:outline-none",
                                    children: t("menu.quienesSomos")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/nuestras-coberturas",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-principal hover:text-secundario focus:text-secundario focus:outline-none",
                                    children: t("menu.coberturas")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/preguntas-frecuentes",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-principal hover:text-secundario focus:text-secundario focus:outline-none",
                                    children: t("menu.faq")
                                })
                            })
                        }),
                        Country.toLowerCase() == "argentina" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/arrepentimiento",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-principal hover:text-secundario focus:text-secundario focus:outline-none",
                                    children: t("menu.baja")
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/contacto",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-principal hover:text-secundario focus:text-secundario focus:outline-none",
                                    children: t("menu.contacto")
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}; //export {Header}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6967:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AppLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9857);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8620);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context_locationContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7872);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8021);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__, _context_configContext__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__]);
([_Footer__WEBPACK_IMPORTED_MODULE_3__, _Header__WEBPACK_IMPORTED_MODULE_4__, _context_configContext__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function AppLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_locationContext__WEBPACK_IMPORTED_MODULE_7__/* .LocationProvider */ .vR, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Europ Assistance: Cotizador de Asistencia al Viajero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Europ Assistance: Cotizador de Asistencia al Viajero"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/assets/iconos/iconos.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_configContext__WEBPACK_IMPORTED_MODULE_8__/* .ConfigProvider */ .iV, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        page: router.asPath
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                        role: "main",
                        className: "w-full flex-1 flex flex-col",
                        children: children
                    }),
                    router.asPath !== "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4031:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PaisesItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9915);
/* harmony import */ var _context_locationContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7872);
/* harmony import */ var _helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2388);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_4__]);
js_cookie__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function PaisesItem(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { location , setLocation  } = (0,_context_locationContext__WEBPACK_IMPORTED_MODULE_5__/* .useLocation */ .TH)();
    const { 0: paises , 1: setPaises  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [etiquetas, setEtiquetas] = (0,_helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorage */ ._)("etiquetas", "");
    const getConfig = async ()=>{
        try {
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_7___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            let info = data["paises"].map((pais)=>{
                pais.flag = "/assets/images/ARGENTINA/132927077756435338-132875274988392861arg1.png";
                return pais;
            });
            setPaises(info);
        // console.log('paises item');
        } catch (e) {
            console.log(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLocation(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location"));
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            let info = etiquetas["paises"].map((pais)=>{
                pais.flag = "/assets/images/ARGENTINA/132927077756435338-132875274988392861arg1.png";
                return pais;
            });
            setPaises(info);
        }
    }, []);
    const handleClick = (item)=>{
        console.log("click");
        setLocation(item);
        js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].set("location", item);
        // getConfig()
        router.push("/home");
    };
    const handleChangePais = ()=>{
        const all = "LAT";
        setLocation(all);
    };
    ///agrego el esc para cerrar el menu
    const handleEscape = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        if (event.keyCode === 27) setLocation(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location"));
    }, [
        setLocation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (CountryList) document.addEventListener("keydown", handleEscape, "");
        return ()=>{
            document.removeEventListener("keydown", handleEscape, "");
        };
    }, [
        handleEscape
    ]);
    //agrego el click outside para cerrar el menu
    const outsideRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const handleClickOutside = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (outsideRef.current && !outsideRef.current.contains(e.target)) {
            setLocation(js_cookie__WEBPACK_IMPORTED_MODULE_4__["default"].get("location"));
        }
    }, [
        setLocation
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (CountryList) document.addEventListener("mousedown", handleClickOutside, false);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside, false);
        };
    }, [
        handleClickOutside
    ]);
    function CountryList() {
        return paises.map((pais)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: " ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    onClick: ()=>{
                        handleClick(pais.nombre);
                    },
                    className: `group w-full flex flex-row justify-between items-center text-principal focus:outline-none ${props.Country ? "gap-2 bg-white px-6 py-2 " : "sm:flex-col gap-1 "}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `order-3 rounded-full overflow-hidden block relative aspect-square outline outline-transparent group-hover:outline-2 group-hover:outline-current group-focus:outline-2 group-focus:outline-current transition-[outline] ${props.Country ? "w-10 h-10" : "sm:order-1 w-6 sm:w-20 h-6 sm:h-20 sm:mb-2 sm:mx-auto"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: pais.flag,
                                alt: "",
                                className: "w-full h-full object-cover"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "order-2",
                            children: pais.nombre
                        })
                    ]
                })
            }, pais.codigo)
        );
    }
    function CurrentCountry() {
        let elem = null;
        paises.map((pais)=>{
            location?.toLowerCase() == pais.nombre.toLowerCase() ? elem = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    "aria-label": pais.nombre,
                    onClick: ()=>handleChangePais()
                    ,
                    className: "group w-full flex flex-row sm:flex-col justify-between items-center gap-1 text-principal focus:outline-none",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `order-3 sm:order-1 rounded-full overflow-hidden block relative aspect-square outline outline-transparent group-hover:outline-2 group-hover:outline-current group-focus:outline-2 group-focus:outline-current transition-[outline] ${props.Country ? "w-14 h-14" : "w-6 sm:w-20 h-6 sm:h-20 sm:mb-2 sm:mx-auto"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: pais.flag,
                                alt: "",
                                className: "w-full h-full object-cover"
                            })
                        }),
                        router.asPath === "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "order-2",
                            children: pais.nombre
                        })
                    ]
                })
            }, pais.codigo) : null;
        });
        return elem;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            ref: outsideRef,
            "aria-label": "Pa\xeds seleccionado",
            className: `max-w-2xl flex flex-col justify-between ${props.Country ? "absolute right-0 -top-0 z-30" : "mt-8 sm:mb-14 min-h-[120px] xl:max-w-full sm:flex-row flex-wrap xl:flex-nowrap gap-2 sm:gap-10 xl:gap-8"}`,
            children: location != "LAT" ? CurrentCountry() : CountryList()
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;