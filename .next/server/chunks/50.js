"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 9050:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FormPrincipal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6867);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(928);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FormPrincipal__WEBPACK_IMPORTED_MODULE_2__, _helpers_index__WEBPACK_IMPORTED_MODULE_3__]);
([_components_FormPrincipal__WEBPACK_IMPORTED_MODULE_2__, _helpers_index__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Banner(props) {
    //para que se oculte el form en planes si es mobile
    const { 0: isShowCotizar , 1: setIsShowCotizar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.showCotizar) {
            setIsShowCotizar(props.showCotizar);
        } else {
            setIsShowCotizar(false);
        }
    }, [
        props.showCotizar
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            props.banner == "home" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    "aria-label": "Cotizar asistencia",
                    className: "flex flex-col gap-6 py-6 sm:py-10 lg:py-16 px-6 justify-center relative bg-[#69543f]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full xl:w-auto max-w-screen-xl mx-auto text-white flex flex-col xl:flex-row justify-between sm:justify-center gap-x-6 z-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-apertura text-5xl md:text-8xl text-amarillo self-start -translate-x-3 -translate-y-3 sm:transform-none",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:py-10 xl:pt-20 grid md:grid-cols-2 mx-auto sm:w-auto items-center gap-x-6 my-0 lg:-my-10 xl:my-0 sm:text-justify",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "text-7xl md:text-8xl font-bold whitespace-nowrap lg:-mb-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-8xl md:text-[8rem] leading-4",
                                                    children: "60"
                                                }),
                                                "%off"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                            className: "text-3xl lg:text-4xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "block",
                                                    children: "en tu plan de"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-extrabold sm:tracking-wide",
                                                    children: "Asistencia al viajero"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-xl sm:text-2xl lg:text-3xl tracking-wide sm:tracking-normal border-t border-white md:border-none pt-2 md:pt-0 mt-2 md:mt-0",
                                            children: [
                                                "Adem\xe1s",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-4xl sm:text-6xl px-2 border-text font-bold",
                                                    children: "3"
                                                }),
                                                "cuotas sin inter\xe9s"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "px-2 sm:px-3 py-1 mt-3 rounded-lg sm:rounded-full bg-principal text-white flex items-center gap-1 lg:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "icon-ico-covid text-lg sm:text-xl",
                                                    "aria-hidden": "true",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "path1 text-secundario"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "path2 text-white"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "uppercase text-[10px] sm:text-xs tracking-tight",
                                                    children: "Todas nuestras coberturas incluyen cobertura COVID"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-cierre text-5xl md:text-8xl text-fucsia self-end transform translate-x-3 sm:transform-none",
                                    "aria-hidden": "true"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormPrincipal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full max-h-full sm:h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute block sm:hidden left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-[#69543f] via-transparent to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner1-home-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner1-home-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner1-home-640.jpg",
                                            alt: "",
                                            className: "w-full sm:h-full object-fill sm:object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "home-secundario" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: `relative flex min-h-[350px] bg-principal transition-all duration-150 ease-in-out translate-y-0 opacity-1`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-screen-md h-full m-auto flex flex-col items-center lg:justify-center gap-6 py-6 px-6 2xl:px-0 text-white lg:text-center z-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-3xl lg:text-4xl font-semibold uppercase",
                                    children: props.config?.etiquetas.Option_Elegirnos1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-light",
                                    children: props.config?.etiquetas.Description_Elegirnos1
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                backgroundImage: "url(../../assets/images/banner/banner2-home-1920.jpg)"
                            },
                            className: "absolute inset-0 lg:bg-cover bg-center bg-no-repeat z-0"
                        })
                    ]
                })
            }),
            props.banner == "planes-seleccionados" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col gap-6 py-10 lg:py-16 px-6 justify-center relative lg:min-h-[250px] bg-[#7c6a5c]",
                    children: [
                        !isShowCotizar ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormPrincipal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            planes: true
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                setIsShowCotizar(false);
                            },
                            className: "z-30 m-auto py-5 px-6 btn btn-amarillo",
                            children: "Volver a cotizar"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute inset-0 w-full h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute block sm:hidden left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-[#7c6a5c] via-transparent to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-planes-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-planes-640.jpg",
                                            alt: "",
                                            className: "w-full sm:h-full object-fill sm:object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "gracias" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col gap-6 py-10 lg:py-16 px-6 justify-center relative sm:min-h-[250px] bg-[#7c6a5c]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl font-extrabold text-white relative w-full max-w-screen-xl mx-auto text-center z-30",
                            children: "MUCHAS GRACIAS POR TU COMPRA"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute inset-0 w-full h-full z-0 overflow-hidden",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        media: "(min-width:1280px)",
                                        srcSet: "../../assets/images/banner/banner-planes-1920.jpg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "../../assets/images/banner/banner-planes-640.jpg",
                                        alt: "",
                                        className: "w-full h-full object-cover object-top -z-10"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            props.banner == "quienes-somos" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col pt-10 lg:pt-16 px-6 justify-center relative lg:min-h-[250px] bg-principal",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "uppercase text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white relative w-full max-w-screen-xl mx-auto text-center z-30",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: " Somos la empresa "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: " creadora del concepto "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: " de asistencia al viajero. "
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full max-w-screen-xl mx-auto text-white flex flex-col lg:flex-row justify-between z-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-apertura text-5xl lg:text-8xl text-amarillo self-start -ml-4 sm:ml-0",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "pt-10 mt-20 lg:mt-[26vh] flex flex-col mx-auto w-full max-w-screen-sm justify-between gap-6 text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm sm:text-base font-light drop-shadow-4xl ",
                                            children: "Nuestra compa\xf1\xeda fu\xe9 fundada en Francia en 1963 por Pierre Desnos. Por primera vez en el mundo comenzamos a ofrecer protecci\xf3n a las personas que viajaban al extranjero. Desde entonces, respaldamos a nuestros clientes en m\xe1s de 200 pa\xedses y territorios gracias a nuestra red de 750.000 proveedores y 39 centros de asistencia."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm sm:text-base font-light drop-shadow-4xl ",
                                            children: "Como compa\xf1\xeda tenemos el objetivo de cuidar a las personas, buscando siempre facilitar la vida a nuestros clientes ofreciendo calma antes situaciones estresantes o dif\xedciles, brindando un servicio altamente profesional.  "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-cierre text-5xl lg:text-8xl text-fucsia self-end -mr-4 sm:mr-0",
                                    "aria-hidden": "true"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full max-h-full sm:h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-principal via-transparent to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner-quienes-somos-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-quienes-somos-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-quienes-somos-640.jpg",
                                            alt: "",
                                            className: "w-full sm:h-full object-contain sm:object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "nuestras-coberturas" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col py-10 lg:py-16 px-6 justify-center relative lg:min-h-[250px] bg-celeste",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-4xl lg:text-6xl font-extrabold text-white relative w-full max-w-screen-xl mx-auto text-center z-30",
                            children: [
                                "NUESTROS",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: "PLANES"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full lg:w-auto max-w-screen-xl mx-auto text-white flex flex-col lg:flex-row justify-center lg:gap-6 z-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-apertura text-5xl lg:text-8xl text-amarillo self-start -translate-x-2 translate-y-3",
                                    "aria-hidden": "true"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:py-10 mt-8 sm:mt-[10vh] lg:mt-[20vh] flex flex-col md:flex-row mx-auto w-full text-center md:text-left md:justify-between gap-y-3 gap-x-6",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "flex-1 text-xl sm:text-3xl leading-tight",
                                            children: "Viaj\xe1 con la empresa creadora del concepto de asistencia al viajero. Conoc\xe9 nuestros planes: "
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "flex-1 text-sm sm:text-base font-light ",
                                            children: "Tus necesidades a la hora de realizar un viaje siempre son nuestra prioridad. Es por eso que contamos con todo tipo de asistencias al viajero adaptadas especialmente para vos y tu forma de viajar: lugares ex\xf3ticos o tradicionales, solo o acompa\xf1ado, con ni\xf1os o s\xf3lo adultos, por ocio, trabajo o estudios. Te cuidamos en cualquier parte del mundo las 24h. "
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "icon-cierre text-5xl lg:text-8xl text-fucsia self-end translate-x-2 -translate-y-3",
                                    "aria-hidden": "true"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full max-h-full sm:h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-celeste via-transparent to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner-nuestras-coberturas-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-nuestras-coberturas-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-nuestras-coberturas-640.jpg",
                                            alt: "",
                                            className: "w-full sm:h-full object-contain sm:object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "preguntas-frecuentes" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col py-10 lg:py-16 px-6 justify-center relative lg:min-h-[250px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-4xl lg:text-6xl font-extrabold text-white relative w-full max-w-screen-xl mx-auto text-center z-30",
                            children: [
                                "PREGUNTAS",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: "FRECUENTES"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full lg:w-auto max-w-screen-xl mx-auto text-white flex flex-col lg:flex-row justify-center lg:gap-6 z-20"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t via-transparent from-white to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    className: "flex-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner-preguntas-frecuentes-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-preguntas-frecuentes-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-preguntas-frecuentes-640.jpg",
                                            alt: "",
                                            className: "w-full h-full object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "arrepentimiento" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col pt-10 lg:pt-16 px-6 justify-center relative lg:min-h-[250px] bg-white",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-4xl lg:text-6xl font-extrabold text-white relative w-full max-w-screen-md mx-auto text-center z-30",
                            children: [
                                "\xbfQUER\xc9S REALIZAR",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "block",
                                    children: "UNA DEVOLUCI\xd3N?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-screen-xl mx-auto text-principal flex flex-col justify-center z-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-apertura text-5xl lg:text-8xl text-secundario self-start -translate-x-2 translate-y-3",
                                "aria-hidden": "true"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t via-transparent from-white to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    className: "flex-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner-arrepentimiento-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-arrepentimiento-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-arrepentimiento-640.jpg",
                                            alt: "",
                                            className: "w-full h-full object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            props.banner == "contacto" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col pt-10 lg:pt-16 px-6 justify-center relative lg:min-h-[250px] bg-white",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl lg:text-6xl font-extrabold text-white relative w-full max-w-screen-md mx-auto text-center z-30",
                            children: "CONTACTANOS"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full max-w-screen-xl mx-auto text-principal flex flex-col justify-center z-20 pt-8 lg:pt-14",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "icon-apertura text-5xl lg:text-8xl text-celeste self-start -translate-x-2 translate-y-3",
                                "aria-hidden": "true"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute top-0 inset-x-0 sm:bottom-0 w-full h-full z-0 overflow-hidden",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-0 bottom-0 w-full h-full z-10 bg-gradient-to-t via-transparent from-white to-transparent"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
                                    className: "flex-none",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:1280px)",
                                            srcSet: "../../assets/images/banner/banner-contacto-1920.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                            media: "(min-width:640px)",
                                            srcSet: "../../assets/images/banner/banner-contacto-1280.jpg"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "../../assets/images/banner/banner-contacto-640.jpg",
                                            alt: "",
                                            className: "w-full h-full object-cover object-top -z-10"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Contador)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);



function Contador(props) {
    // const [count, setCount] = useState(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-2 justify-center mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Restar viajeros",
                disabled: props.handleCounter.counter == 0,
                onClick: ()=>{
                    if (props.handleCounter.counter > 0) {
                        props.handleCounter.decrementar();
                    }
                },
                className: "w-8 h-8 text-2xl pt-1 leading-none bg-principal-claro text-white rounded-full hover:bg-principal focus:bg-principal focus:outline-none",
                children: "-"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-live": "polite",
                className: "w-20 h-8 text-2xl bg-gris-claro text-principal rounded-full text-center",
                children: props.handleCounter.counter
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Agregar viajeros",
                onClick: ()=>{
                    props.handleCounter.incrementar();
                },
                className: "w-8 h-8 text-2xl pt-1 leading-none bg-principal-claro text-white rounded-full hover:bg-principal focus:bg-principal focus:outline-none",
                children: "+"
            })
        ]
    });
};


/***/ }),

/***/ 6867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FormPrincipal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Contador__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2706);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4304);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5004);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
/* harmony import */ var _context_locationContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7872);
/* harmony import */ var _hooks_Counter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2093);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3735);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(928);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8021);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_7__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__, _helpers_index__WEBPACK_IMPORTED_MODULE_11__, _context_configContext__WEBPACK_IMPORTED_MODULE_12__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_7__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__, _helpers_index__WEBPACK_IMPORTED_MODULE_11__, _context_configContext__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//fechas



 // main css file
 // theme css file
//import * as locales from 'react-date-range/dist/locale';








function FormPrincipal(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const initialCotizacion = {
        Regiones: "\xbfA d\xf3nde viajas?",
        Date: {
            from: "Desde",
            to: "Hasta"
        },
        Menores: 0,
        Mayores: 0,
        Viajeros: 0,
        Modalidad: "Modalidad",
        Email: "Email"
    };
    const { 0: openInfo , 1: setOpenInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { location , setLocation  } = (0,_context_locationContext__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)();
    const { 0: date , 1: setDate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([
        {
            startDate: new Date(),
            endDate: new Date(),
            color: "#00239c",
            //rangeColors:['#00239c', '#2FC7DF', '#00239c'],
            key: "selection"
        }
    ]);
    const { 0: cotizacion , 1: setCotizacion  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialCotizacion);
    const counterMenores = (0,_hooks_Counter__WEBPACK_IMPORTED_MODULE_9__/* .useCounter */ .C)();
    const counterMayores = (0,_hooks_Counter__WEBPACK_IMPORTED_MODULE_9__/* .useCounter */ .C)();
    const { 0: modalidad , 1: setModalidad  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: regiones , 1: setRegiones  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: promoActual , 1: setPromoActual  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_12__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_11__/* .useLocalStorage */ ._)("etiquetas", "");
    const { 0: camposVacios , 1: setCamposVacios  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
        Regiones: true,
        Modalidad: true,
        Date: true,
        Email: {
            vacio: true,
            valido: false
        },
        Viajeros: true
    });
    const { 0: validate1 , 1: setValidate  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const getConfig = async ()=>{
        try {
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_13___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
            setEtiquetas(data);
            console.log("fetch formPrincipal");
        } catch (e) {
            console.log(e);
        }
    };
    const setRegMod = ()=>{
        // 
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__/* .getRegion */ .ur)(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location")).then((res)=>{
            setRegiones(res);
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("regiones", JSON.stringify(res));
        });
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__/* .getModalidades */ .pQ)(js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location")).then((res)=>{
            setModalidad(res);
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("modalidad", JSON.stringify(res));
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        //si no existen etiquetas en localStorage las pido
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
        //set location
        let pais = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("location").toUpperCase();
        setLocation(pais);
        if (pais == "LAT") {
        //router.push('/')
        }
        setRegMod();
        //obtengo la promo actual
        let promo = (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_10__/* .getPromoActual */ .FS)(pais.toUpperCase());
        promo.then((res)=>{
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("promoActual", JSON.stringify(res));
            setPromoActual(res);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setCotizacion(initialCotizacion);
    }, [
        location
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (JSON.stringify(date[0].startDate) != JSON.stringify(date[0].endDate)) {
            handleChange("Date", date[0]);
        }
    }, [
        date
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let cot = cotizacion;
        cot.Menores = counterMenores.counter;
        cot.Mayores = counterMayores.counter;
        cotizacion.Viajeros = counterMenores.counter + counterMayores.counter;
        setCotizacion(cot);
        if (cotizacion.Viajeros > 0) {
            setCamposVacios({
                ...camposVacios,
                Viajeros: false
            });
        } else {
            setCamposVacios({
                ...camposVacios,
                Viajeros: true
            });
        }
    // console.log(cotizacion);
    }, [
        counterMenores.counter,
        counterMayores.counter
    ]);
    const handleClickOpenInfo = (cual)=>{
        if (openInfo != cual) {
            setOpenInfo(cual);
        } else {
            setOpenInfo(null);
        }
    };
    //useKeypress('Escape', () => {setOpenInfo(null)}); este escucha cualquier tecla y pasa funcion
    ///agrego el esc para cerrar el form
    const handleEscape = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((event)=>{
        if (event.keyCode === 27) setOpenInfo(null);
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (openInfo) document.addEventListener("keydown", handleEscape, false);
        return ()=>{
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [
        handleEscape,
        openInfo
    ]);
    //paso una variable para cambiar la cantidad de meses que muestra pc/mobile
    const isMobile = (0,_hooks_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)("(max-width: 640px)") ? 1 : 2;
    const submit = ()=>{
        let vacio = validateForm();
        if (!vacio) {
            cotizacion["Date"].from = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date[0].startDate, "yyyy-MM-dd");
            cotizacion["Date"].to = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(date[0].endDate, "yyyy-MM-dd");
            setCotizacion(cotizacion);
            let edades = [];
            for(let index = 0; index < cotizacion.Menores; index++){
                edades.push(0);
            }
            for(let index1 = 0; index1 < cotizacion.Mayores; index1++){
                edades.push(76);
            }
            const promoID = promoActual.id;
            let cotizar = {
                regionId: regiones.filter((item)=>item.nombreB2C == cotizacion.Regiones
                )[0].id,
                tipoDeViajeId: modalidad.filter((item)=>item.nombreB2C == cotizacion.Modalidad
                )[0].id,
                "desde": cotizacion["Date"].from,
                "hasta": cotizacion["Date"].to,
                "edades": edades,
                "correo": cotizacion.Email,
                "codigoUsuario": location.toUpperCase(),
                "promocionId": promoID,
                "pieLegal": promoActual.pieLegalB2C
            };
            postCotizar(cotizar);
        }
    };
    const validateForm = ()=>{
        setValidate(true);
        let vacio = true;
        if (!camposVacios.Regiones && !camposVacios.Viajeros && !camposVacios.Modalidad && !camposVacios.Date && !camposVacios.Email.vacio && camposVacios.Email.valido) {
            vacio = false;
            setValidate(false);
        }
        return vacio;
    };
    const postCotizar = async (data)=>{
        try {
            let datos = await axios__WEBPACK_IMPORTED_MODULE_13___default().post("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion", data);
            const res = datos.data[0];
            js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].set("cotizacionID", res.cotizacionId);
            if (router.asPath == "/planes") {
                router.reload();
            } else {
                router.push(`/planes`);
            }
        //ENVIAR res.cotizacionId => 27491 
        //para que me muestrelos productos
        } catch (e) {
            console.log(e);
        }
    };
    const handleChange = (campo, valor)=>{
        let producto = cotizacion;
        switch(campo){
            case "Modalidad":
                let mod = modalidad.find((item)=>item.id == valor
                );
                producto[campo] = mod.nombreB2C;
                setCamposVacios({
                    ...camposVacios,
                    "Modalidad": false
                });
                break;
            case "Regiones":
                let reg = regiones.find((item)=>item.id == valor
                );
                producto[campo] = reg.nombreB2C;
                setCamposVacios({
                    ...camposVacios,
                    "Regiones": false
                });
                break;
            case "Email":
                let validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valor);
                producto[campo] = valor;
                setCamposVacios({
                    ...camposVacios,
                    "Email": {
                        vacio: false,
                        valido: validate
                    }
                });
                break;
            case "Date":
                producto[campo].from = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(valor.startDate, "dd-MMM-yy", {
                    locale: (date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6___default())
                });
                producto[campo].to = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(valor.endDate, "dd-MMM-yy", {
                    locale: (date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6___default())
                });
                setCamposVacios({
                    ...camposVacios,
                    "Date": false
                });
                break;
        }
        setCotizacion(producto);
        // console.warn(cotizacion,date)
        setOpenInfo(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                role: "form",
                "aria-label": config?.etiquetas.Title_Cotizador,
                className: "relative w-full 2xl:max-w-screen-xl mx-auto self-end justify-self-end z-40 pointer-events-none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl sm:text-2xl font-bold text-white mb-4 pointer-events-auto inline-block",
                        children: config?.etiquetas.Title_Cotizador
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-wrap 2xl:flex-nowrap sm:flex-row gap-4 pointer-events-auto",
                        children: [
                            location.toLowerCase() == "argentina" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                    rol: "grupo",
                                    className: "flex-1 relative sm:static max-w-full min-w-[201px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            onClick: ()=>{
                                                handleClickOpenInfo("donde");
                                            },
                                            className: " flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "icon-corazon text-lg text-gris-medio",
                                                    "aria-hidden": "true"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    "aria-live": "polite",
                                                    className: "whitespace-nowrap",
                                                    children: cotizacion.Regiones
                                                })
                                            ]
                                        }),
                                        openInfo == "donde" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max sm:animate-topIn text-principal bg-white z-10",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                "aria-label": cotizacion.Regiones,
                                                className: "leading-none text-left",
                                                children: regiones.map((item)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>{
                                                                handleChange("Regiones", item.id);
                                                            },
                                                            className: "w-full py-2 first-of-type:pt-4 last-of-type:pb-3 px-6 text-left hover:bg-principal-claro focus:bg-principal-claro focus:outline-none",
                                                            children: item.nombreB2C
                                                        })
                                                    }, item.id);
                                                })
                                            })
                                        }),
                                        validate1 && camposVacios.Regiones && openInfo != "donde" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "leading-none text-left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-full py-5 px-4 text-center",
                                                    children: "Ingrese su destino"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                rol: "grupo",
                                className: `flex-1 relative sm:static max-w-full ${location.toLowerCase() == "argentina" ? "sm:min-w-[400px] 2xl:min-w-[355px]" : "sm:min-w-[355px]"}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        id: "cuandoviaja",
                                        onClick: ()=>{
                                            handleClickOpenInfo("fecha");
                                        },
                                        className: "grid sm:flex items-center justify-between gap-1 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex gap-3 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon-calendario text-lg text-gris-medio",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        "aria-live": "polite",
                                                        className: "whitespace-nowrap",
                                                        children: cotizacion.Date.from
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon-chevron text-sm self-center text-principal",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon-flecha-doble text-lg text-gris-medio col-start-2 row-start-1 row-end-2 rotate-90 sm:rotate-0 pl-8 sm:pl-0",
                                                "aria-label": "hasta"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex gap-3 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon-calendario text-lg text-gris-medio",
                                                        "aria-hidden": "true"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        "aria-live": "polite",
                                                        className: "whitespace-nowrap",
                                                        children: cotizacion.Date.to
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "icon-chevron text-sm self-center text-principal",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    openInfo == "fecha" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `sm:absolute ${location.toLowerCase() == "argentina" ? " right-0 lg:right-auto" : ""} sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max max-w-full sm:max-w-lg sm:animate-topIn text-principal bg-white z-10`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_4__.DateRange, {
                                            onChange: (item)=>{
                                                setDate([
                                                    item.selection
                                                ]);
                                            },
                                            moveRangeOnFirstSelection: false,
                                            ranges: date,
                                            months: isMobile,
                                            direction: "horizontal",
                                            displayMode: "dateRange",
                                            minDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addDays)(new Date(), 0),
                                            maxDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.addDays)(new Date(), 100),
                                            monthDisplayFormat: "MMMM yyyy",
                                            locale: (date_fns_locale_es__WEBPACK_IMPORTED_MODULE_6___default()),
                                            showMonthAndYearPickers: false,
                                            showDateDisplay: false,
                                            rangeColors: [
                                                "#3d91ff",
                                                "#3ecf8e",
                                                "#fed14c"
                                            ],
                                            ariaLabels: {
                                                dateInput: {
                                                    date: {
                                                        startDate: "start date input of selction 1",
                                                        endDate: "end date input of selction 1"
                                                    }
                                                },
                                                monthPicker: "Mes",
                                                yearPicker: "A\xf1o",
                                                prevButton: "Mes anterior",
                                                nextButton: "Mes siguiente"
                                            }
                                        })
                                    }),
                                    validate1 && camposVacios.Date && openInfo != "fecha" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "leading-none text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full py-5 px-4 text-center",
                                                children: "Ingrese una Fecha"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                rol: "grupo",
                                className: "flex-1 relative sm:static max-w-full min-w-[170px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>{
                                            handleClickOpenInfo("viajeros");
                                        },
                                        className: "relative flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon-pasajeros text-lg text-gris-medio",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "whitespace-nowrap",
                                                children: "Viajeros"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "aria-live": "polite",
                                                className: "flex-none w-7 h-7 bg-principal text-white rounded-full leading-none flex items-center justify-center",
                                                children: cotizacion?.Viajeros
                                            })
                                        ]
                                    }),
                                    openInfo == "viajeros" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg py-5 px-6 sm:w-max sm:animate-topIn text-principal bg-white z-10",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col items-center leading-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-bold",
                                                        children: "Hasta 75 a\xf1os"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md",
                                                        children: "De 0 a 75 a\xf1os"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Contador__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        handleCounter: counterMenores
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col items-center leading-none",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-bold",
                                                        children: "Desde 76 a\xf1os"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-md",
                                                        children: "De 76 a\xf1os en adelante"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Contador__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        handleCounter: counterMayores
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    validate1 && camposVacios.Viajeros && openInfo != "viajeros" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "leading-none text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full py-5 px-4 text-center text-wrap",
                                                children: "Ingrese la cantidad de viajeros"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                rol: "grupo",
                                className: "flex-1 relative sm:static max-w-full min-w-[183px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>{
                                            handleClickOpenInfo("modalidad");
                                        },
                                        className: "flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon-modalidad text-lg text-gris-medio",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "aria-live": "polite",
                                                className: "whitespace-nowrap",
                                                children: cotizacion.Modalidad
                                            })
                                        ]
                                    }),
                                    openInfo == "modalidad" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg overflow-hidden sm:w-max sm:animate-topIn text-principal bg-white z-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            "aria-label": cotizacion.Modalidad,
                                            className: "leading-none text-left",
                                            children: modalidad.map((moda)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            handleChange("Modalidad", moda.id);
                                                        },
                                                        className: "w-full py-2 first-of-type:pt-4 last-of-type:pb-3 px-6 text-left hover:bg-principal-claro focus:bg-principal-claro focus:outline-none",
                                                        children: moda.nombreB2C
                                                    })
                                                }, moda.id);
                                            })
                                        })
                                    }),
                                    validate1 && camposVacios.Modalidad && openInfo != "modalidad" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "leading-none text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full py-5 px-4 text-center",
                                                children: "Ingrese tipo de viaje"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                rol: "grupo",
                                className: `flex-1 relative sm:static max-w-full ${location.toLowerCase() == "argentina" ? "sm:w-[250px] sm:min-w-[250px] 2xl:w-44 2xl:min-w-[11rem]" : "sm:w-[15rem] sm:min-w-[15rem]"}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        id: "elmail",
                                        onClick: ()=>{
                                            handleClickOpenInfo("mail");
                                        },
                                        className: "flex items-center gap-3 rounded-lg py-5 px-6 w-full text-principal bg-white focus-within:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "icon-mail text-lg text-gris-medio",
                                                "aria-hidden": "true"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                "aria-live": "polite",
                                                className: "text-ellipsis overflow-hidden max-w-full",
                                                children: cotizacion.Email == "" ? "Email" : cotizacion.Email
                                            })
                                        ]
                                    }),
                                    openInfo == "mail" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute sm:-translate-y-full sm:-mt-20 flex flex-col gap-5 rounded-lg py-5 px-6 sm:w-max sm:animate-topIn text-principal bg-white z-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-col items-center leading-none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "w-full ",
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                onBlur: ()=>handleChange("Email", event.target.value)
                                                ,
                                                defaultValue: cotizacion.Email != "Email" ? cotizacion.Email : ""
                                            })
                                        })
                                    }),
                                    validate1 && camposVacios.Email.valido == false && openInfo != "mail" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sm:absolute -translate-y-full sm:-mt-20 flex flex-col rounded-lg overflow-hidden text-danger bg-white z-10 py-2 px-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "leading-none text-left",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-full py-5 px-4 text-center",
                                                children: "Ingrese un email Valido"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                onClick: ()=>{
                                    submit();
                                },
                                className: "flex-1 py-5 px-6 rounded bg-terciario btn btn-amarillo lg:w-56",
                                children: config?.etiquetas.Button_Cotizar
                            })
                        ]
                    })
                ]
            }),
            openInfo != null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute w-full h-full bg-black top-0 left-0 bg-opacity-20 z-30",
                    onClick: ()=>{
                        setOpenInfo(null);
                    }
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCounter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useCounter = ()=>{
    const { 0: counter , 1: setCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const incrementar = ()=>setCounter(counter + 1)
    ;
    const decrementar = ()=>counter > 0 ? setCounter(counter - 1) : setCounter(0)
    ;
    return {
        counter,
        incrementar,
        decrementar
    };
};


/***/ }),

/***/ 7702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMediaQuery = (query)=>{
    const { 0: matches , 1: setMatches  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = ()=>setMatches(media.matches)
        ;
        window.addEventListener("resize", listener);
        return ()=>window.removeEventListener("resize", listener)
        ;
    }, [
        matches,
        query
    ]);
    return matches;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMediaQuery);


/***/ })

};
;