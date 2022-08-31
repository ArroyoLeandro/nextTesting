"use strict";
(() => {
var exports = {};
exports.id = 185;
exports.ids = [185,248];
exports.modules = {

/***/ 5226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);





function FacturacionData({ formData , setFormData , config , errors , setErrors , position , setPosition , initPersona , errors2 , firstChange , setFirstChange  }) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("global");
    const { 0: personasState , 1: setPersonasState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: datoPersona , 1: setDatoPersona  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initPersona);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPosition(0);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let persona = formData.datosPersonales[position];
        let pers = initPersona;
        let keys = Object.keys(initPersona);
        keys.map((item)=>{
            if (persona[item]) pers[item] = persona[item];
        });
        setDatoPersona(pers);
    }, [
        position
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        planes();
    });
    const planes = ()=>{
        if (localStorage.getItem("planContratar") != null) {
            let personas = JSON.parse(localStorage.getItem("planContratar")).personas;
            if (personasState == null || personas.length != personasState.length) {
                setPersonasState(personas);
            }
        }
    };
    const setDato = (name, value)=>{
        setDatoPersona({
            ...datoPersona,
            [name]: value
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let info = formData.datosPersonales;
        info[position].id = position;
        if (firstChange) {
            info.map((item, idx)=>{
                let { domicilioCalle , domicilioCodigoPostal , domicilioDpto , domicilioNumero , domicilioPiso , localidad , provincia  } = datoPersona;
                info[idx].id = idx;
                info[idx].domicilioCalle = domicilioCalle;
                info[idx].domicilioCodigoPostal = domicilioCodigoPostal;
                info[idx].domicilioDpto = domicilioDpto;
                info[idx].domicilioNumero = domicilioNumero;
                info[idx].domicilioPiso = domicilioPiso;
                info[idx].localidad = localidad;
                info[idx].provincia = provincia;
            });
        } else {
            info[position] = datoPersona;
            info[position].id = position;
        }
        setFormData({
            ...formData,
            datosPersonales: info
        });
    }, [
        datoPersona
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "flex gap-4 py-6 px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-xl",
                            children: t("formContratar.datosFacturacion")
                        }),
                        personasState?.map((item, idx)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>{
                                    setFirstChange(false);
                                    setPosition(idx);
                                },
                                className: `${idx === position ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`,
                                children: [
                                    "Pasajero ",
                                    idx + 1
                                ]
                            }, idx);
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "calle",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_EjemploCalle,
                                    value: datoPersona?.domicilioCalle,
                                    onChange: (e)=>{
                                        setDato("domicilioCalle", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.domicilioCalle == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.domicilioCalle
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "nro",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    placeholder: config?.etiquetas.Label_NroDomicilio,
                                    value: datoPersona?.domicilioNumero,
                                    onChange: (e)=>{
                                        setDato("domicilioNumero", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.domicilioNumero == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.domicilioNumero
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "piso",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    placeholder: config?.etiquetas.Label_Piso,
                                    value: datoPersona?.domicilioPiso,
                                    onChange: (e)=>{
                                        setDato("domicilioPiso", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.domicilioPiso == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.domicilioPiso
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "depto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_Departamento,
                                    value: datoPersona?.domicilioDpto,
                                    onChange: (e)=>{
                                        setDato("domicilioDpto", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.domicilioDpto == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.domicilioDpto
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "localidad",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_Localidad,
                                    value: datoPersona?.localidad,
                                    onChange: (e)=>{
                                        setDato("localidad", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.localidad == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.localidad
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "cp",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    placeholder: config?.etiquetas.Label_CodigoPostal,
                                    value: datoPersona?.domicilioCodigoPostal,
                                    onChange: (e)=>{
                                        setDato("domicilioCodigoPostal", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.domicilioCodigoPostal == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.domicilioCodigoPostal
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "provincia",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_Provincia,
                                    value: datoPersona?.provincia,
                                    onChange: (e)=>{
                                        setDato("provincia", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.provincia == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.provincia
                                })
                            ]
                        }),
                        position == 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-none col-span-full mt-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "",
                                            children: config?.etiquetas.Title_ContactoEmergencia
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-gris-medio",
                                            children: config?.etiquetas.Label_SolicitudDatosEmergencia
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "flex-1",
                                    htmlFor: "nameContacto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: config?.etiquetas.Label_Nombres,
                                            value: formData?.nameContacto,
                                            onChange: (e)=>{
                                                setFormData({
                                                    ...formData,
                                                    nameContacto: e.target.value
                                                });
                                            },
                                            className: "w-full py-3 px-4 border border-principal rounded"
                                        }),
                                        formData?.nameContacto == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-600",
                                            children: errors2?.nameContacto
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "flex-1",
                                    htmlFor: "apellidoContacto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: config?.etiquetas.Label_Apellidos,
                                            value: formData?.apellidoContacto,
                                            onChange: (e)=>{
                                                setFormData({
                                                    ...formData,
                                                    apellidoContacto: e.target.value
                                                });
                                            },
                                            className: "w-full py-3 px-4 border border-principal rounded"
                                        }),
                                        formData?.apellidoContacto == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-600",
                                            children: errors2?.apellidoContacto
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                    className: "flex-1",
                                    htmlFor: "telContacto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "number",
                                            placeholder: config?.etiquetas.Label_TelefonoPersona,
                                            value: formData?.telContacto,
                                            onChange: (e)=>{
                                                setFormData({
                                                    ...formData,
                                                    telContacto: e.target.value
                                                });
                                            },
                                            className: "w-full py-3 px-4 border border-principal rounded"
                                        }),
                                        formData?.telContacto == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-red-600",
                                            children: errors2?.telContacto
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacturacionData);


/***/ }),

/***/ 762:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3735);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_apiFunctions_index__WEBPACK_IMPORTED_MODULE_3__]);
_apiFunctions_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function PaymentData({ formData , setFormData , initForm , position  }) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("global");
    const yearActual = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(), "yyyy");
    const { 0: aniosTarjeta , 1: setAniosTarjeta  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: datoPersona , 1: setDatoPersona  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initForm);
    const { 0: validCard , 1: setValidCard  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const paso = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let anios = [];
        if (paso.current == false) {
            for(let index = 0; index < 10; index++){
                if (parseInt(yearActual) < yearActual + 10) {
                    anios.push(parseInt(yearActual) + index);
                }
            }
            paso.current = true;
            setAniosTarjeta(anios);
        }
        setDatoPersona(formData);
    // if(formData.numeroTarjeta != '') setValidCard(true)
    }, []);
    const setDato = (name, value)=>{
        setDatoPersona({
            ...datoPersona,
            [name]: value
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setFormData(datoPersona);
    }, [
        datoPersona
    ]);
    const validTarjeta = (numb)=>{
        if (valid_credit_card(numb)) {
            let cardType = detectCardType(numb);
            switch(cardType){
                case "visa":
                    datoPersona.tipoTarjeta = "1";
                    break;
                case "master":
                    datoPersona.tipoTarjeta = "15";
                    break;
                case "american":
                    datoPersona.tipoTarjeta = "65";
                    break;
            }
            if (datoPersona.tipoTarjeta == "") {
                setValidCard(false);
                return;
            }
            setValidCard(true);
            datoPersona.numeroTarjeta = numb;
            console.log(datoPersona);
            // setFormData(datoPersona)
            setDatoPersona(datoPersona);
        } else {
            return;
        }
    };
    function detectCardType(number) {
        var re = {
            visa: /^4[0-9]{12}(?:[0-9]{3})/,
            master: /^5[1-5][0-9]{14}/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
            american: /^3[47][0-9]{13}/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
            hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
            elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}/
        };
        for(var key in re){
            if (re[key].test(number)) {
                return key;
            }
        }
    }
    const valid_credit_card = (value)=>{
        if (value.length < 14 || value.length > 16) return false;
        // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value)) return false;
        // The Luhn Algorithm
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");
        for(var n = value.length - 1; n >= 0; n--){
            var cDigit = value.charAt(n), nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return nCheck % 10 == 0;
    };
    const getAnios = ()=>{
        return aniosTarjeta?.map((item, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: item.toString().slice(-2),
                children: item.toString()
            }, idx)
        );
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: "flex gap-4 py-6 px-6",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl",
                        children: t("formContratar.formaPago")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "flex-none col-span-full",
                            children: t("formContratar.formaPagoSubtitulo")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "tarjeta",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                placeholder: "Nro de Tarjeta",
                                value: formData?.numeroTarjeta,
                                onChange: (e)=>{
                                    setDato("numeroTarjeta", e.target.value);
                                    validTarjeta(e.target.value);
                                },
                                className: "w-full py-3 px-4 border border-principal rounded"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "cuotas",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "cuotas",
                                className: "w-full py-3 px-4 border border-principal rounded",
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        cuotas: e.target.value
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "value1",
                                        children: t("formContratar.cuotas")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "1",
                                        children: "1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "2",
                                        children: "2"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "3",
                                        children: "3"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "mesVencimiento",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "mesVencimiento",
                                className: "w-full py-3 px-4 border border-principal rounded",
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        mesVencimiento: e.target.value
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "value1",
                                        children: t("formContratar.vtoMes")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "01",
                                        children: "01"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "02",
                                        children: "02"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "03",
                                        children: "03"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "04",
                                        children: "04"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "05",
                                        children: "05"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "06",
                                        children: "06"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "07",
                                        children: "07"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "08",
                                        children: "08"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "09",
                                        children: "09"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "10",
                                        children: "10"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "11",
                                        children: "11"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "12",
                                        children: "12"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "anioVencimiento",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                name: "anioVencimiento",
                                className: "w-full py-3 px-4 border border-principal rounded",
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        anioVencimiento: e.target.value
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                        value: "value1",
                                        children: t("formContratar.vtoAnio")
                                    }),
                                    getAnios()
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "codigo",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "C\xf3d. seg.",
                                value: formData?.codigoSeguridad,
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        codigoSeguridad: e.target.value
                                    });
                                },
                                className: "w-full py-3 px-4 border border-principal rounded"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "flex-none col-span-full mt-4",
                            children: t("formContratar.titularTarjeta")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "titular",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "Nombre y Apellido",
                                value: formData?.titular,
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        titular: e.target.value
                                    });
                                },
                                className: "w-full py-3 px-4 border border-principal rounded"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            className: "flex-1",
                            htmlFor: "dniTitular",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "number",
                                placeholder: "Documento Nro.",
                                value: formData?.dniTitular,
                                onChange: (e)=>{
                                    setFormData({
                                        ...formData,
                                        dniTitular: e.target.value
                                    });
                                },
                                className: "w-full py-3 px-4 border border-principal rounded"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentData);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_4__);





function PersonalData({ formData , setFormData , config , errors , setErrors , position , setPosition , initPersona  }) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)("global");
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(), "yyyy-MM-dd");
    const { 0: paises , 1: setPaises  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: personasState , 1: setPersonasState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: datoPersona , 1: setDatoPersona  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initPersona);
    const getPaises = async ()=>{
        try {
            let datos = await axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/paises");
            const data = datos.data[0];
            setPaises(data);
        } catch (e) {
            console.log(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getPaises();
        setDatoPersona(formData.datosPersonales);
        setPosition(0);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        planes();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let persona = formData.datosPersonales[position];
        let pers = initPersona;
        let keys = Object.keys(initPersona);
        keys.map((item)=>{
            if (persona[item]) pers[item] = persona[item];
        });
        setDatoPersona(pers);
    }, [
        position
    ]);
    const planes = ()=>{
        if (localStorage.getItem("planContratar") != null) {
            let personas = JSON.parse(localStorage.getItem("planContratar")).personas;
            if (personasState == null || personas.length != personasState.length) {
                setPersonasState(personas);
                if (position == 0) {
                    let existe = true;
                    let datos = formData.datosPersonales.map((item, index)=>{
                        if (Object.values(item).length == 16) {
                            existe = false;
                        }
                        item.id = index;
                        return item;
                    });
                    formData.datosPersonales = datos;
                    if (existe) {
                        let info = formData;
                        personas = personas.map((item)=>{
                            item.fechaNacimiento = today;
                            item.id = position;
                            return item;
                        });
                        info.datosPersonales = personas;
                        setFormData(info);
                    }
                }
            }
        }
    };
    const emailValid = (value)=>{
        let valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        return valid;
    };
    const setDato = (name, value)=>{
        setDatoPersona({
            ...datoPersona,
            [name]: value
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let info = formData.datosPersonales;
        info[position].id = position;
        info[position] = datoPersona;
        setFormData({
            ...formData,
            datosPersonales: info
        });
    }, [
        datoPersona
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                    className: "flex flex-wrap gap-x-4 gap-y-1 pt-8 pb-2 lg:py-6 lg:px-6",
                    children: personasState?.map((item, idx)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>{
                                setPosition(idx);
                            },
                            className: `px-2 lg:px-0 rounded ${idx === position ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`,
                            children: [
                                t("formContratar.pasajero"),
                                " ",
                                idx + 1
                            ]
                        }, idx);
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col lg:grid lg:grid-cols-3 gap-4 py-6 px-6 rounded-lg shadow-3xl overflow-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "flex-none col-span-full",
                            children: config?.etiquetas.Step3_DatosPasajeros
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "name",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "name",
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_Nombres,
                                    value: datoPersona?.nombre,
                                    onChange: (e)=>{
                                        setDato("nombre", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.nombre == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.nombre
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "apellido",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    name: "lastname",
                                    type: "text",
                                    placeholder: config?.etiquetas.Label_Apellidos,
                                    value: datoPersona?.apellido,
                                    onChange: (e)=>{
                                        setDato("apellido", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.apellido == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.apellido
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "sexo",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    value: datoPersona.sexo,
                                    onChange: (e)=>{
                                        setDato("sexo", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded",
                                    name: "genre",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "",
                                            children: "Sexo"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "femenino",
                                            children: "Femenino"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "masculino",
                                            children: "Masculino"
                                        })
                                    ]
                                }),
                                datoPersona?.sexo == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.sexo
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "nacionalidad",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    value: datoPersona?.nacionalidad,
                                    onChange: (e)=>{
                                        setDato("nacionalidad", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded",
                                    name: "nacionalidad",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "value1",
                                            children: config?.etiquetas.Label_Nacionalidad
                                        }),
                                        paises?.map((val)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: val.nombre,
                                                children: val.nombre
                                            }, val.id);
                                        })
                                    ]
                                }),
                                datoPersona?.nacionalidad == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.nacionalidad
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "dni",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    name: "dni",
                                    placeholder: "DNI/C\xe9dula",
                                    value: datoPersona?.documento,
                                    onChange: (e)=>{
                                        setDato("documento", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.documento == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.documento
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "fecha",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "date",
                                    name: "date",
                                    placeholder: config?.etiquetas.Label_FechaNacimientoVoucher,
                                    value: datoPersona?.fechaNacimiento,
                                    onChange: (e)=>{
                                        setDato("fechaNacimiento", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.fechaNacimiento == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.fechaNacimiento
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "email",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: config?.etiquetas.Label_Email,
                                    value: datoPersona?.email,
                                    onChange: (e)=>{
                                        setDato("email", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                (datoPersona?.email == "" || !emailValid(datoPersona?.email)) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.email
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "flex-1",
                            htmlFor: "tel",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "number",
                                    name: "telefono",
                                    placeholder: config?.etiquetas.Label_TelefonoPersona,
                                    value: datoPersona?.telefono,
                                    onChange: (e)=>{
                                        setDato("telefono", e.target.value);
                                    },
                                    className: "w-full py-3 px-4 border border-principal rounded"
                                }),
                                datoPersona?.telefono == "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-600",
                                    children: errors[position]?.telefono
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersonalData);


/***/ }),

/***/ 6450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PersonalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7103);
/* harmony import */ var _FacturacionData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5226);
/* harmony import */ var _PaymentData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(762);
/* harmony import */ var _pages_gracias__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1778);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2388);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8021);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3735);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PaymentData__WEBPACK_IMPORTED_MODULE_4__, _pages_gracias__WEBPACK_IMPORTED_MODULE_5__, _context_configContext__WEBPACK_IMPORTED_MODULE_8__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__]);
([_PaymentData__WEBPACK_IMPORTED_MODULE_4__, _pages_gracias__WEBPACK_IMPORTED_MODULE_5__, _context_configContext__WEBPACK_IMPORTED_MODULE_8__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function FormContratar(props) {
    const [t, i18n] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)("global");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(new Date(), "yyyy-MM-dd");
    const initPersona = {
        id: 0,
        nombre: "",
        apellido: "",
        sexo: "",
        nacionalidad: "",
        documento: "",
        fechaNacimiento: today,
        email: "",
        telefono: "",
        domicilioCalle: "",
        domicilioNumero: "",
        domicilioPiso: "",
        domicilioDpto: "",
        domicilioCodigoPostal: "",
        localidad: "",
        provincia: ""
    };
    const initForm = {
        datosPersonales: [],
        titular: "",
        dniTitular: "",
        numeroTarjeta: "",
        mesVencimiento: "",
        anioVencimiento: "",
        codigoSeguridad: "",
        cuotas: "",
        tipoTarjeta: "",
        nameContacto: "",
        apellidoContacto: "",
        telContacto: ""
    };
    const { 0: paso , 1: setPaso  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initForm);
    const { 0: datoPersonal , 1: setDatoPersonal  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initForm);
    const { 0: cotizar1 , 1: setCotizar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: formErrors , 1: setFormErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initForm);
    const PasosLista = [
        "Paso 1",
        "Paso 2",
        "Paso 3"
    ];
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_8__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__/* .useLocalStorage */ ._)("etiquetas", "");
    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: position , 1: setPosition  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: validNext , 1: setValidNext  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: person , 1: setPerson  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: firstChange , 1: setFirstChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: sending , 1: setSending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
    }, []);
    const getConfig = async ()=>{
        try {
            let COD = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("location");
            let logData = await axios__WEBPACK_IMPORTED_MODULE_9___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
        } catch (e) {
            console.log(e);
        }
    };
    const PasoDisplay = ()=>{
        switch(paso){
            case 0:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PersonalData__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    initPersona: initPersona,
                    position: position,
                    setPosition: setPosition,
                    formData: formData,
                    setFormData: setFormData,
                    config: config,
                    errors: formErrors.datosPersonales,
                    setErrors: setFormErrors
                });
            case 1:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FacturacionData__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    firstChange: firstChange,
                    setFirstChange: setFirstChange,
                    initPersona: initPersona,
                    position: position,
                    setPosition: setPosition,
                    formData: formData,
                    setFormData: setFormData,
                    config: config,
                    errors2: formErrors,
                    errors: formErrors.datosPersonales,
                    setErrors: setFormErrors
                });
            case 2:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentData__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    initForm: initForm,
                    formData: formData,
                    position: position,
                    setFormData: setFormData,
                    config: config,
                    errors: formErrors,
                    setErrors: setFormErrors
                });
            default:
                return null;
        }
    };
    const validarFormu = (step)=>{
        let next = false;
        switch(step){
            case 0:
                let dataPers = validarDatosPersonales();
                let infoPers = formErrors;
                infoPers.datosPersonales = dataPers;
                setFormErrors(infoPers);
                let valiPers = true;
                dataPers.map((item)=>{
                    if (!item.valid) {
                        valiPers = false;
                    }
                });
                next = valiPers;
                setValidNext(valiPers);
                next ? setPaso((currPaso)=>currPaso + 1
                ) : null;
                break;
            case 1:
                let dataFact = validarDatosFacturacion();
                let infoFact = formErrors;
                infoFact.datosPersonales = dataFact;
                setFormErrors(infoFact);
                let valiFact = true;
                dataFact.map((item)=>{
                    if (!item.valid) {
                        valiFact = false;
                    }
                });
                if (valiFact) {
                    infoFact.valid = true;
                    Object.keys(formData).map((item, index)=>{
                        switch(item){
                            case "nameContacto":
                                if (Object.values(formData)[index] == "") {
                                    infoFact.nameContacto = "Campo requerido";
                                    infoFact.valid = false;
                                }
                                break;
                            case "apellidoContacto":
                                if (Object.values(formData)[index] == "") {
                                    infoFact.apellidoContacto = "Campo requerido";
                                    infoFact.valid = false;
                                }
                                break;
                            case "telContacto":
                                if (Object.values(formData)[index] == "") {
                                    infoFact.telContacto = "Campo requerido";
                                    infoFact.valid = false;
                                }
                                break;
                        }
                    });
                }
                next = valiFact && infoFact.valid;
                setValidNext(valiFact && infoFact.valid);
                next ? setPaso((currPaso)=>currPaso + 1
                ) : null;
                break;
            case 2:
                next = validarDatosPago();
                if (next) {
                    emitirVoucher();
                }
                break;
        }
        if (next && step == 1) {
            datosPersonales1();
        }
    };
    const datosPersonales1 = async ()=>{
        try {
            let COD = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("cotizacionID");
            let datos = await axios__WEBPACK_IMPORTED_MODULE_9___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion" + "?cotizacionId=" + COD);
            const data = datos.data[0];
            let cotizar = data;
            const entries = Object.entries(formData.datosPersonales);
            let items = entries.filter((val, idx)=>idx < 18
            );
            const output = Object.fromEntries(items);
            let edades = [];
            cotizar.personas = cotizar.personas.map((item, idx)=>{
                let fecha = output[idx].fechaNacimiento.split("-");
                // item.id = output[idx].id
                item.id = 0;
                item.nombre = output[idx].nombre;
                item.apellido = output[idx].apellido;
                item.documento = output[idx].documento;
                item.sexo = output[idx].sexo.toLowerCase() == "masculino" ? "H" : "F";
                item.email = output[idx].email;
                item.telefono = output[idx].telefono;
                item.edad = getEdad(output[idx].fechaNacimiento);
                edades.push(item.edad);
                item.contactoEmergencia = output[idx].contactoEmergencia;
                item.fechaNacimiento = output[idx].fechaNacimiento;
                item.domicilioCalle = output[idx].domicilioCalle;
                item.domicilioNumero = output[idx].domicilioNumero;
                item.domicilioPiso = output[idx].domicilioPiso;
                item.domicilioDpto = output[idx].domicilioDpto;
                item.domicilioCodigoPostal = output[idx].domicilioCodigoPostal;
                item.localidad = output[idx].localidad;
                item.provincia = output[idx].provincia;
                item.nacionalidad = output[idx].nacionalidad;
                item.anio = parseInt(fecha[0]);
                item.mes = parseInt(fecha[1]);
                item.dia = parseInt(fecha[2]);
                return item;
            });
            cotizar.productos = [
                props.producto
            ];
            cotizar.productos[0].personas = cotizar.personas;
            cotizar.productos[0].edades = edades;
            cotizar.edades = edades;
            cotizar.nombreEmergencia = formData.apellidoContacto;
            cotizar.apellidoEmergencia = formData.nameContacto;
            cotizar.telefonoEmergencia = formData.telContacto;
            cotizar.terminosCondicionesAceptados = true;
            setCotizar(cotizar);
            sendDatosPersonales(cotizar);
        } catch (e) {
            console.log(e);
        }
    };
    const sendDatosPersonales = async (datosPersonales)=>{
        try {
            setPerson(datosPersonales.personas);
            let datos = await axios__WEBPACK_IMPORTED_MODULE_9___default().post("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion/datospersonales", datosPersonales);
            const data = await datos.data[0];
            setValidNext(false);
        } catch (e) {
            console.log(e);
        }
    };
    function getEdad(dateString) {
        let hoy = new Date();
        let fechaNacimiento = new Date(dateString);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate()) {
            edad--;
        }
        return edad;
    }
    const emailValid = (value)=>{
        let valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
        return valid;
    };
    const validarDatosPersonales = ()=>{
        let datosP = [];
        for(let index1 = 0; index1 < formData.datosPersonales.length; index1++){
            datosP.push({
                ...formData.datosPersonales[index1],
                nombre: "",
                apellido: "",
                sexo: "",
                nacionalidad: "",
                documento: "",
                fechaNacimiento: "",
                email: "",
                telefono: ""
            });
        }
        formData.datosPersonales.map((item, index)=>{
            datosP[index].valid = true;
            Object.keys(item).map((val, idx)=>{
                switch(val){
                    case "nombre":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].nombre = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "apellido":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].apellido = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "sexo":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].sexo = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "nacionalidad":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].nacionalidad = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "documento":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].documento = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "email":
                        if (Object.values(item)[idx] == "" || !emailValid(Object.values(item)[idx])) {
                            datosP[index].email = "Email invalido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "telefono":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].telefono = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                }
            });
        });
        return datosP;
    };
    const showErrorValid = ()=>{
        let invalid = null;
        let data = [];
        if (paso == 0) {
            data = validarDatosPersonales();
            data.map((item, idx)=>{
                if (!item.valid) {
                    if (invalid != null) {
                        invalid += `  |  ${t("formContratar.pasajero")} ${idx + 1}`;
                    } else {
                        invalid = ` ${t("formContratar.pasajero")} ` + (idx + 1);
                    }
                }
            });
        }
        if (paso == 1) {
            data = validarDatosFacturacion();
            data.map((item, idx)=>{
                if (!item.valid) {
                    invalid = ` Datos de facturacion `;
                }
            });
        }
        if (invalid != null) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center gap-2",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    t("formContratar.completarPasajero"),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: invalid
                    })
                ]
            })
        });
        return null;
    };
    const validarDatosFacturacion = ()=>{
        let datosP = [];
        for(let index2 = 0; index2 < formData.datosPersonales.length; index2++){
            datosP.push({
                ...formData.datosPersonales[index2],
                domicilioCalle: "",
                domicilioNumero: "",
                domicilioPiso: "",
                domicilioDpto: "",
                domicilioCodigoPostal: "",
                localidad: "",
                provincia: ""
            });
        }
        formData.datosPersonales.map((item, index)=>{
            datosP[index].valid = true;
            Object.keys(item).map((val, idx)=>{
                switch(val){
                    case "domicilioCalle":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].domicilioCalle = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "domicilioNumero":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].domicilioNumero = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "domicilioCodigoPostal":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].domicilioCodigoPostal = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "localidad":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].localidad = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                    case "provincia":
                        if (Object.values(item)[idx] == "") {
                            datosP[index].provincia = "Campo requerido";
                            datosP[index].valid = false;
                        }
                        break;
                }
            });
        });
        return datosP;
    };
    const emitirVoucher = async (cotizacion)=>{
        setSending(true);
        console.log("cotizacion", cotizacion);
        try {
            await axios__WEBPACK_IMPORTED_MODULE_9___default().post("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion/emitir", cotizacion);
            // Cookie.set('cotizacionID',datos.data[0].cotizacionId)
            // setSending(false)
            router.push("/gracias");
        } catch (e) {
            console.log("err =>", e.response.data);
        // alert(e.response.data)
        // Cookie.set('emisionId',datos.data[0].emisionId)
        }
    };
    const validarDatosPago = ()=>{
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__/* .getCotizacion */ .eB)().then((res)=>{
            let tarjeta = [
                {
                    titular: formData.titular,
                    dniTitular: formData.dniTitular,
                    tipoTarjeta: formData.tipoTarjeta,
                    numeroTarjeta: formData.numeroTarjeta,
                    mesVencimiento: formData.mesVencimiento,
                    anioVencimiento: formData.anioVencimiento,
                    codigoSeguridad: formData.codigoSeguridad,
                    cuotas: formData.cuotas
                }
            ];
            res.tarjetas = tarjeta;
            let productos = JSON.parse(localStorage.getItem("planContratar"));
            productos = productos.producto;
            res.personas = person;
            res.productos.push(productos);
            res.medioDePago = js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("location").toLowerCase() == "argentina" ? "Decidir" : "D-local";
            // console.log('JSON',res)
            emitirVoucher(res);
        });
    };
    const showSpinner = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center w-20 h-10 mt-5 bg-white bg-opacity-20",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: "assets/images/BUSCANDO.gif",
                className: "flex mx-auto"
            })
        });
    };
    const showSpin = ()=>{
        setTimeout(()=>{
            setShow(false);
        }, 500);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "lg:text-xl mb-2",
                children: t("formContratar.subtitulo")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-4 justify-around lg:rounded-lg bg-transparent lg:bg-gris-claro",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: `flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 0 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base",
                                    children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden lg:inline",
                                    children: config?.etiquetas.Step2_DatosPasajeros
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: `flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 1 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base",
                                    children: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden lg:inline w-max",
                                    children: "Estas muy cerca de tu viaje"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: `flex-1 flex gap-3 items-center btn py-3 lg:py-6 px-8 ${paso === 2 ? "text-white lg:text-principal bg-principal lg:bg-transparent" : "text-gris-medio bg-gris-claro lg:bg-transparent"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-full lg:w-6 lg:h-6 lg:rounded-full lg:border border-current flex items-center justify-center text-2xl lg:text-base",
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hidden lg:inline",
                                    children: config?.etiquetas.Step5_DatosPasajeros
                                })
                            ]
                        })
                    ]
                })
            }),
            PasoDisplay(),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                className: "flex flex-col md:flex-row flex-wrap gap-4 py-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: `py-5 px-6 btn focus:text-principal hover:text-principal btn-gris w-full lg:w-56 text-xl font-bold lg:font-normal disabled:hidden ${paso == 0 ? "lg:disabled:hidden" : "lg:disabled:block"}`,
                        disabled: paso == 0,
                        onClick: ()=>{
                            setPaso((currPaso)=>currPaso - 1
                            );
                        },
                        children: t("buttons.anterior")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "py-5 px-6 btn btn-amarillo w-full lg:w-56 text-xl font-bold lg:font-normal",
                        onClick: ()=>{
                            validarFormu(paso);
                            setShow(true);
                            showSpin();
                        },
                        children: paso === PasosLista.length - 1 ? `${t("buttons.pagar")}` : config?.etiquetas.Button_Continuar
                    }),
                    show && !validNext && showSpinner(),
                    !show && !validNext && showErrorValid(),
                    sending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed z-50 inset-0 w-full h-full flex items-center justify-center bg-white bg-opacity-60",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "assets/images/BUSCANDO.gif",
                            className: "flex mx-auto"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContratar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contratar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6967);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(514);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FormContratar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6450);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(928);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5004);
/* harmony import */ var date_fns_locale_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9915);
/* harmony import */ var _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3735);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8464);
/* harmony import */ var _context_locationContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7872);
/* harmony import */ var _context_configContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__, _components_FormContratar__WEBPACK_IMPORTED_MODULE_3__, _helpers_index__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_10__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__, _context_configContext__WEBPACK_IMPORTED_MODULE_14__]);
([_components_AppLayout__WEBPACK_IMPORTED_MODULE_1__, _components_FormContratar__WEBPACK_IMPORTED_MODULE_3__, _helpers_index__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_10__, _apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__, _context_configContext__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function Contratar({ initialLocation , cotizacion: cotizacion1 , id_contratar  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const idContratar = id_contratar ? id_contratar : undefined;
    const { 0: producto1 , 1: setProducto  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: region1 , 1: setRegion  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: cotizacionProducto , 1: setCotizacionProducto  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { location , setLocation  } = (0,_context_locationContext__WEBPACK_IMPORTED_MODULE_13__/* .useLocation */ .TH)();
    const { 0: diferenciaDias , 1: setDiferenciaDias  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { config , setConfig  } = (0,_context_configContext__WEBPACK_IMPORTED_MODULE_14__/* .useConfig */ .ZR)();
    const [etiquetas, setEtiquetas] = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .useLocalStorage */ ._)("etiquetas", "");
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        // console.log('idContratar: ',idContratar);
        // router.query.idContratar
        idContratar != undefined ? obtenerData() : getPlanes(cotizacion1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const obtenerData = async ()=>{
        var data = "";
        try {
            let datos = await axios__WEBPACK_IMPORTED_MODULE_9___default().get("https://apieurop-assistance.byflexy.com/api/v2/shares/" + idContratar + "/detail");
            if (datos.data.response == null) router.push("/home");
            data = JSON.parse(datos.data.response.json);
            data = JSON.parse(data).data;
            localStorage.setItem("planContratar", JSON.stringify(data.producto));
            setProducto(data.producto);
            buscarRegion(data.producto.regionId);
        } catch (e) {
            console.log("error 1:", e);
        }
        navigator.geolocation.getCurrentPosition(({ coords  })=>{
            const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.latitude}&lon=${coords.longitude}`;
            fetch(url).then((response)=>response.json()
            ).then((json)=>{
                let country = json.address.country.toLowerCase();
                js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("location", country);
                setLocation(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("location"));
                buscarPromo(data);
            });
        }, (err)=>{
            console.log("no se pudo acceder a la geolocalizacion");
            let country = "ARGENTINA";
            setLocation(country);
            js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("location", country);
        });
    };
    const buscarRegion = (idRegion)=>{
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__/* .getRegion */ .ur)(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("location")).then((res)=>{
            let region = res.filter((item)=>item.id == idRegion
            );
            setRegion(region[0].nombreB2C);
        });
    };
    const buscarPromo = (data)=>{
        // console.log('data,',data);
        (0,_apiFunctions_index__WEBPACK_IMPORTED_MODULE_11__/* .getPromoActual */ .FS)(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("location")).then((res)=>{
            js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("promoActual", JSON.stringify(res));
            data.producto.promocion = res;
            Recotizar(data);
        });
    };
    const getDateDiff = (time1, time2)=>{
        let date1 = new Date(time1[0], time1[1] - 1, time1[2]);
        let date2 = new Date(time2[0], time2[1] - 1, time2[2]);
        let difference = date2 > date1 ? date2 - date1 : date1 - date2;
        let diff_days = Math.floor(difference / (1000 * 3600 * 24));
        setDiferenciaDias(diff_days);
    };
    // function getMonthDifference(startDate, endDate) {
    //     return (
    //       endDate.getMonth() -
    //       startDate.getMonth() +
    //       12 * (endDate.getFullYear() - startDate.getFullYear())
    //     );
    //   }
    const getPlanes = async ()=>{
        try {
            const cotizacionID = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("cotizacionID");
            let prod = JSON.parse(localStorage.getItem("planContratar"));
            setProducto(prod);
            getDateDiff(prod.fechaDesde.split(" ")[0].split("/").reverse(), prod.fechaHasta.split(" ")[0].split("/").reverse());
            let datos = await axios__WEBPACK_IMPORTED_MODULE_9___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/search" + "?cotizacionId=" + cotizacionID);
            const cotizacion = datos.data[0];
            let product = null;
            cotizacion.productos.map((item, idx)=>{
                if (item.producto.id == prod.producto.id) {
                    product = item;
                }
            });
            let recotizar = {};
            recotizar["cotizacionId"] = cotizacionID;
            let promo = JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("promoActual"));
            recotizar["producto"] = {
                ...product,
                id: prod.id,
                producto: product.producto,
                promocion: promo
            };
            recotizar["personas"] = recotizar["producto"].personas;
            setCotizacionProducto(recotizar.producto);
            setRegion(cotizacion.region);
            Recotizar(recotizar);
        } catch (e) {
            console.log(e);
        }
    };
    const Recotizar = async (producto)=>{
        try {
            let datos = await axios__WEBPACK_IMPORTED_MODULE_9___default().post("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/cotizacion/producto", producto);
            const res = datos.data[0];
            // setRecotizacion(datos.data.response.data)
            js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].set("cotizacionID", res.cotizacionId);
        } catch (e) {
            console.log(e);
        }
    };
    const getConfig = async ()=>{
        try {
            let COD = "LAT";
            js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("location") != undefined ? COD = js_cookie__WEBPACK_IMPORTED_MODULE_10__["default"].get("location") : null;
            let logData = await axios__WEBPACK_IMPORTED_MODULE_9___default().get("https://apieurop-assistance.byflexy.com/api/v2/travel/b2c/config" + "?codigo=" + COD);
            const data = logData.data[0];
            setConfig(data);
            setEtiquetas(data);
        } catch (e) {
            console.log(e);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!localStorage.getItem("etiquetas")) {
            getConfig();
        } else {
            setConfig(etiquetas);
        }
    }, []);
    return(// <AppLayout>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "w-full text-principal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "max-w-screen-xl mx-auto text-4xl font-extrabold pt-8 lg:pt-14 pb-2 px-6 2xl:px-0",
                    children: config?.etiquetas.Title_Contratacion
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 px-6 2xl:px-0 pb-14",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 flex flex-col",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormContratar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                producto: cotizacionProducto
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lg:w-1/4 hidden lg:flex flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "lg:text-xl mb-2",
                                    children: "Detalle de tu compra"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                                    className: "flex flex-col rounded-lg shadow-3xl overflow-hidden",
                                    children: producto1 != null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                                className: "w-full py-6 px-8 bg-turquesa",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-2xl font-bold",
                                                        children: producto1.producto.nombreB2C
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-light",
                                                        children: producto1.producto.descripcion
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full py-6 px-8 flex flex-col gap-1",
                                                children: [
                                                    diferenciaDias ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                        className: "font-bold",
                                                        children: [
                                                            "Estad\xeda de ",
                                                            diferenciaDias,
                                                            " d\xedas  "
                                                        ]
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "flex gap-3 items-center text-sm font-light",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "icon-calendario text-lg text-gris-medio"
                                                            }),
                                                            "Del ",
                                                            producto1.fechaDesde,
                                                            " al ",
                                                            producto1.fechaHasta
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "flex gap-3 items-center text-sm font-light",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "icon-pasajeros text-lg text-gris-medio"
                                                            }),
                                                            producto1.personas.length,
                                                            " pas."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "flex gap-3 items-center text-sm font-light",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "icon-marker text-lg text-gris-medio"
                                                            }),
                                                            region1
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex gap-3 items-center justify-between border-t-2 border-gris-claro pt-5 mt-5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "font-extrabold text-lg",
                                                                children: "TOTAL"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                className: "flex-1 flex flex-col items-end",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-gris-medio line-through font-light text-sm leading-none",
                                                                        children: [
                                                                            producto1.monedaLocalSimbolo,
                                                                            " ",
                                                                            (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)(producto1.precioSinPromocion * parseFloat(producto1.tipoDeCambioMonto))
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-lg font-extrabold",
                                                                        children: [
                                                                            producto1.monedaLocalSimbolo,
                                                                            " ",
                                                                            (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)(producto1.precioEnPesos)
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                        className: "text-lg leading-none",
                                                                        children: [
                                                                            producto1.monedaSimbolo,
                                                                            " ",
                                                                            (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .formatNum */ .ao)(producto1.precio)
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }) : null
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
Contratar.getInitialProps = (context)=>{
    console.log("=======================================");
    console.log("parametros :", context.query);
    console.log("=======================================");
    const cookies = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_6__/* .parseCookies */ .jl)(context.req);
    return {
        initialLocation: cookies.location,
        cotizacion: cookies.cotizacionID,
        id_contratar: context.query.idContratar
    };
} //   export async function getServerSideProps(context) {
 //     const id = context.query.idContratar
 //     console.log('=======================================')
 //     console.log('parametros :',context.query )
 //     console.log('=======================================')
 //   }
;

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

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

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
var __webpack_exports__ = __webpack_require__.X(0, [464,575,50,967,778], () => (__webpack_exec__(7621)));
module.exports = __webpack_exports__;

})();