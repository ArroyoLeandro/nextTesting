"use strict";
(() => {
var exports = {};
exports.id = 724;
exports.ids = [724,248];
exports.modules = {

/***/ 5540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Modal)
});

// UNUSED EXPORTS: Modal

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Modal/index.js



function Modal({ children , initialValue =false  }, ref) {
    const { 0: isOpenModal , 1: setIsOpenModal  } = (0,external_react_.useState)(initialValue);
    const closeModal = (0,external_react_.useCallback)(()=>setIsOpenModal(false)
    , []);
    const handleModalContainerClick = (e)=>e.stopPropagation() //para que el click en la ventana no cierre el modal
    ;
    //console.log('ref2'+openButtonRef)
    (0,external_react_.useImperativeHandle)(ref, ()=>({
            openModal: ()=>setIsOpenModal(true)
            ,
            closeModal
        })
    , [
        closeModal
    ]);
    ///agrego el esc para cerrar el modal
    const handleEscape = (0,external_react_.useCallback)((event)=>{
        if (event.keyCode === 27) closeModal();
    }, [
        closeModal
    ]);
    (0,external_react_.useEffect)(()=>{
        if (isOpenModal) {
            document.addEventListener("keydown", handleEscape, false);
            document.body.classList.add("overflow-hidden", "pr-4"); //saco el scroll del body
        }
        return ()=>{
            document.removeEventListener("keydown", handleEscape, false);
            document.body.classList.remove("overflow-hidden", "pr-4"); //vuelvo el scroll del body
        };
    }, [
        handleEscape,
        isOpenModal
    ]);
    ///trampa para capturar el foco en el modal
    const inputRef = (0,external_react_.useRef)();
    const inputRef2 = (0,external_react_.useRef)();
    const handleTab = (0,external_react_.useCallback)((event)=>{
        if (event.keyCode === 9 && event.target === inputRef.current) {
            inputRef2.current.focus();
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (isOpenModal) {
            document.addEventListener("keyup", handleTab, false);
        }
        return ()=>{
            document.removeEventListener("keyup", handleTab, false);
        };
    }, [
        handleTab,
        isOpenModal
    ]);
    return isOpenModal ? /*#__PURE__*/ external_react_dom_default().createPortal(/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            role: "dialog",
            "aria-modal": "true",
            className: "fixed flex items-center justify-center w-full h-full p-6 bg-black top-0 left-0 bg-opacity-20 z-50",
            onClick: closeModal,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                "aria-label": "Ventana Modal",
                className: "relative flex max-h-full",
                onClick: handleModalContainerClick,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ref: inputRef,
                        autoFocus: true,
                        readOnly: true,
                        "aria-label": "Ventana modal - use Escape para salir",
                        className: "bg-transparent absolute w-1 h-1 transparent border-none outline-none focus:outline-none"
                    }),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        ref: inputRef2,
                        "aria-label": "Cerrar ventana",
                        onClick: closeModal,
                        className: "absolute top-0 right-0 m-2 z-20 flex items-center justify-center w-7 h-7 bg-white rounded-full ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "icon-mas text-2xl text-turquesa rotate-45 leading-3"
                        })
                    })
                ]
            })
        })
    }), document.body) : null;
}
/* harmony default export */ const components_Modal = (/*#__PURE__*/(0,external_react_.forwardRef)(Modal));


/***/ }),

/***/ 6370:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PlanCardDetail)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_index__WEBPACK_IMPORTED_MODULE_1__]);
_helpers_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function PlanCardDetail(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: "w-full max-w-screen-md max-h-full flex flex-col text-principal bg-white rounded-lg shadow-xl overflow-hidden",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "relative w-full flex gap-8 md:gap-12 p-6 md:p-10 bg-turquesa ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden md:block",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/assets/images/ea.png",
                                alt: "Europ Asistance",
                                className: "w-28"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-2 md:gap-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-3xl md:text-5xl font-bold leading-7 md:leading-10",
                                    children: props.producto?.producto.nombreB2C
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "md:text-xl",
                                    children: [
                                        "Cobertura m\xe9dica: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "whitespace-wrap",
                                            children: props.producto?.producto.descripcion
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1 bg-white p-6 md:p-10 flex flex-col md:flex-row gap-6 max-h-full overflow-auto",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "font-bold pb-2 mb-4 border-b border-gris-medio",
                                children: "Prestaciones"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "text-sm mt-2 pb-6 leading-4",
                                children: props.producto?.producto.prestaciones.map((val, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "flex gap-2 pb-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "flex-none icon-done text-[8px] w-5 h-5 -mt-1 flex justify-center items-center rounded-full bg-whatsapp text-white",
                                                "aria-hidden": "true"
                                            }),
                                            val.labelNombre,
                                            " ",
                                            val.tipo.toLowerCase() == "por monto" ? "($" + (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__/* .formatNum */ .ao)(val.montoMenores) + ")" : ""
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3700:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Planes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6967);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9050);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(928);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5540);
/* harmony import */ var _components_PlanCardDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6370);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8021);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__, _components_Banner__WEBPACK_IMPORTED_MODULE_2__, _helpers_index__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__, _components_PlanCardDetail__WEBPACK_IMPORTED_MODULE_9__, _context_configContext__WEBPACK_IMPORTED_MODULE_11__]);
([_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__, _components_Banner__WEBPACK_IMPORTED_MODULE_2__, _helpers_index__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__, _components_PlanCardDetail__WEBPACK_IMPORTED_MODULE_9__, _context_configContext__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Planes({ initialLocation , cotizacion  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const { 0: planes , 1: setPlanes  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: prod , 1: setProd  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_11__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorage */ ._)("etiquetas", "");
    const { 0: currenCountry , 1: setCurrenCountry  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("LAT");
    const recommended = 14 //titanium id
    ;
    const bestSeller = 15 //gold id
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
        setCurrenCountry(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location"));
        getPlanes(cotizacion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const modal = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const openButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    // console.log('ref'+openButtonRef.current)
    //details element open close segun tamaño de pantalla
    const isMobile = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)("(max-width: 640px)");
    const getConfig = async ()=>{
        try {
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_10___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
            setEtiquetas(data);
        } catch (e) {
            console.log(e);
        }
    };
    const getPlanes = async (cotizacionID)=>{
        try {
            setLoading(true);
            let logData = await axios__WEBPACK_IMPORTED_MODULE_10___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/search" + "?cotizacionId=" + cotizacionID);
            const data = logData.data[0];
            setPlanes(data.productos);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };
    const getPrestaciones = (prestaciones)=>{
        return prestaciones.map((val, idx)=>idx < 5 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "flex gap-1 pb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex-none icon-done text-[8px] w-5 h-5 -mt-1 flex justify-center items-center rounded-full bg-whatsapp text-white",
                        "aria-hidden": "true"
                    }),
                    val.labelNombre,
                    " ",
                    val.tipo.toLowerCase() == "por monto" ? "($" + (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)(val.montoMenores) + ")" : ""
                ]
            }, idx) : null
        );
    };
    const buscandoPlanes = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            className: "max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "assets/images/BUSCANDO.gif",
                    className: "flex mx-auto"
                }),
                "Buscando la mejor asistencia para tu viaje"
            ]
        });
    };
    const cargarProducto = (item)=>{
        localStorage.setItem("planContratar", JSON.stringify(item));
        router.push({
            pathname: "/contratar"
        });
    };
    const listPlanes = ()=>{
        if (planes.length > 0) {
            planes.sort(function(a, b) {
                return b.precio - a.precio;
            });
            return planes.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                    className: `sm:min-w-[250px] sm:max-w-[300px] flex-1 flex flex-col items-center rounded-lg bg-white text-principal shadow-3xl overflow-hidden ${item.producto.id != recommended && item.producto.id != bestSeller ? "sm:mt-14" : ""} `,
                    children: [
                        item.producto.id == bestSeller ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "w-full py-4 px-2 text-white font-bold text-center bg-fucsia",
                            children: "PLAN M\xc1S VENDIDO"
                        }) : null,
                        item.producto.id == recommended ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "w-full py-4 px-2 text-white font-bold text-center bg-turquesa",
                            children: "PLAN RECOMENDADO"
                        }) : null,
                        item.precioSinPromocion == item.precio ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "w-full py-1 px-2 text-white font-bold text-center bg-amarillo",
                            children: "OFERTA"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden sm:block h-8"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "px-2 pt-6 text-2xl font-bold text-center",
                            children: item.producto.nombreB2C
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "px-2 text-sm font-light text-center truncate max-w-full",
                            children: item.producto.descripcion
                        }),
                        item.precioSinPromocion == item.precio ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "px-2 pt-6 text-gris-medio line-through",
                            children: [
                                item.monedaLocalSimbolo,
                                " ",
                                (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)((Number(item.tipoDeCambioMonto.replace(",", ".")) * item.precioSinPromocion).toFixed(2)),
                                " "
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden sm:block pt-6 h-6"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            className: "px-2 flex gap-1 items-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-md",
                                    children: item.monedaLocalSimbolo
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-5xl font-extrabold ",
                                    children: (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)(item.precioEnPesos)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sm font-bold self-center pb-2",
                                    children: "*"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "px-2 text-2xl pt-1",
                            children: [
                                item.monedaSimbolo,
                                " ",
                                item.precioSinPromocion
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "my-5 p-3 w-44 rounded-lg text-white bg-principal shadow-sm",
                            onClick: ()=>{
                                cargarProducto(item);
                            },
                            children: "Contratar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                            className: "w-full group flex-1",
                            open: !isMobile,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("summary", {
                                    className: "group flex flex-col items-center sm:items-start px-4 py-2 text-sm cursor-pointer sm:cursor-text sm:pointer-events-none focus:outline-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "border-b-2 border-transparent group-focus:border-principal",
                                            children: "Beneficios por persona"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "icon-chevron text-sm sm:hidden transition-all ease-linear rotate-180 group-open:rotate-0"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: "px-4 text-sm mb-6 leading-4 transition-opacity duration-200 opacity-0 group-open:opacity-100",
                                    children: getPrestaciones(item.producto.prestaciones)
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            ref: openButtonRef,
                            onClick: ()=>{
                                modal.current.openModal();
                                setProd(item);
                            },
                            className: "text-sm text-principal hover:text-secundario focus:text-secundario focus:outline-none border-b-2 border-principal",
                            children: "Ver detalle de cobertura"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: config?.etiquetas.Url_CondicionesGenerales,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "py-4 text-sm text-principal hover:text-secundario focus:text-secundario focus:outline-none flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-mas text-lg"
                                }),
                                " Ver condiciones generales"
                            ]
                        }),
                        currenCountry?.toLowerCase() === "argentina" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "px-10 text-center text-[11px] text-gris-medio mb-8",
                            children: "Contratos de  Adhesi\xf3n. Ley N* 24.240 de Defensa del Consumidor."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            ref: modal,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PlanCardDetail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                producto: prod
                            })
                        })
                    ]
                }, index)
            );
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0",
                children: config?.etiquetas.Title_NoHayProductos
            });
        }
    };
    return(// <AppLayout>
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                banner: "planes-seleccionados",
                showCotizar: isMobile
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "w-full bg-gris-claro",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "max-w-screen-xl mx-auto text-2xl font-extrabold text-gris-oscuro pt-8 lg:pt-14 pb-6 px-6 2xl:px-0",
                        children: "PLANES PARA VOS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-w-screen-xl mx-auto flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6 lg:gap-8 px-6 2xl:px-0 pb-14",
                        children: planes != null ? listPlanes() : buscandoPlanes()
                    })
                ]
            })
        ]
    }));
};
Planes.getInitialProps = async ({ req  })=>{
    const cookies = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .parseCookies */ .jl)(req);
    return {
        initialLocation: cookies.location,
        cotizacion: cookies.cotizacionID
    };
};

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

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 5004:
/***/ ((module) => {

module.exports = require("date-fns/locale/es");

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

/***/ 4304:
/***/ ((module) => {

module.exports = require("react-date-range");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [575,50,967], () => (__webpack_exec__(3700)));
module.exports = __webpack_exports__;

})();