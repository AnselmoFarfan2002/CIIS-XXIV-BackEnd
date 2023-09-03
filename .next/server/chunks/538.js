"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 9054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);




function FilledInfoCard({ variant = "contained", bgColor = "info", icon, title, description, action = false, moreSX }) {
    const buttonStyles = {
        width: "max-content",
        display: "flex",
        alignItems: "center",
        "& .material-icons-round": {
            fontSize: "1.125rem",
            transform: `translateX(3px)`,
            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
        },
        "&:hover .material-icons-round, &:focus .material-icons-round": {
            transform: `translateX(6px)`
        }
    };
    let iconColor = bgColor;
    if (variant === "gradient" && bgColor !== "light") {
        iconColor = "white";
    } else if (variant === "gradient" && bgColor === "light") {
        iconColor = "dark";
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        display: {
            xs: "block",
            md: "flex"
        },
        variant: variant,
        sx: {
            background: bgColor,
            ...moreSX
        },
        borderRadius: 3,
        pt: 3.5,
        pb: 3,
        px: 3,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            pl: {
                xs: 0,
                md: 2
            },
            lineHeight: 1,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            display: "block",
                            variant: "h3",
                            color: iconColor,
                            mt: -1,
                            children: icon
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            display: "block",
                            variant: "h6",
                            color: variant === "contained" || bgColor === "light" ? "dark" : "white",
                            fontWeight: "bold",
                            mb: 1,
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    display: "block",
                    variant: "body2",
                    color: variant === "contained" || bgColor === "light" ? "text" : "white",
                    mb: 2,
                    children: description
                }),
                action && action.type === "external" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        gap: 0.5,
                        transition: ".1s",
                        "&:hover": {
                            gap: 1
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            component: "a",
                            href: action.route,
                            target: "_blank",
                            rel: "noreferrer",
                            variant: "body2",
                            fontWeight: "regular",
                            color: variant === "contained" ? bgColor : "white",
                            sx: buttonStyles,
                            children: action.label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fontWeight: "bold"
                        })
                    ]
                }) : null,
                action && action.type === "internal" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    to: action.route,
                    variant: "body2",
                    fontWeight: "regular",
                    color: variant === "contained" ? bgColor : "white",
                    sx: buttonStyles,
                    children: [
                        action.label,
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_1___default()), {
                            fontWeight: "bold"
                        })
                    ]
                }) : null
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilledInfoCard);


/***/ }),

/***/ 2101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3979);
/* harmony import */ var react_particles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7998);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3292);



//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.


const Particles = ({ style })=>{
    const particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (engine)=>{
        // console.log(engine);
        await (0,tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__.loadSlim)(engine);
    }, []);
    const particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (container)=>{
    // await console.log(container);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_particles__WEBPACK_IMPORTED_MODULE_2__.Particles, {
        id: "tsparticles",
        init: particlesInit,
        loaded: particlesLoaded,
        options: {
            background: {
                color: {
                    value: "transparent"
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "grab"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 1
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].primary.dark,
                    distance: 300,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 0.4,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particles);


/***/ }),

/***/ 7517:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Card_FilledInfoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9054);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3292);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1883);
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7666);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5939);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(375);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4009);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_8__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_8__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PostmasterCard = (props)=>{
    const [ref1, inView1] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)({
        triggerOnce: false
    });
    const [ref2, inView2] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_9__.useInView)({
        triggerOnce: false
    });
    const FilledInfoCards = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        container: true,
        spacing: 2,
        justifyContent: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                item: true,
                xs: 12,
                sm: 10,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_FilledInfoCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    variant: "gradient",
                    bgColor: "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                    title: "Estamos en facebook",
                    description: "Facebook oficial del CIIS donde podr\xe1s estar al d\xeda con las \xfaltimas actualizaciones de las actividades para el evento.",
                    action: {
                        type: "external",
                        route: "https://www.facebook.com/ciistacna",
                        label: "\xa1Vamos a ver!"
                    },
                    moreSX: {
                        height: "100%"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                item: true,
                xs: 12,
                sm: 10,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_FilledInfoCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    variant: "gradient",
                    bgColor: "linear-gradient(195deg, rgb(116, 123, 138), rgb(73, 83, 97))",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    title: "Estamos en youtube",
                    description: "Canal oficial de CIIS donde podr\xe1s encontrar transmisiones pasadas del evento y sus relacionados.",
                    action: {
                        type: "external",
                        route: "https://www.youtube.com/@ciistacna",
                        label: "Revisar canal"
                    },
                    moreSX: {
                        height: "100%"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                item: true,
                xs: 12,
                sm: 10,
                md: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_FilledInfoCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    variant: "gradient",
                    bgColor: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    title: "Estamos en LinkedIn",
                    description: "Contamos con un perfil en LinkedIn para mantener comunicaci\xf3n con anteriores, futuros y posibles ponentes.",
                    action: {
                        type: "external",
                        route: "https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/",
                        label: "Dar un vistazo"
                    },
                    moreSX: {
                        height: "100%"
                    }
                })
            })
        ]
    });
    const PostmasterCard = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
        container: true,
        justifyContent: "center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
            item: true,
            xs: 12,
            sm: 10,
            md: 12,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                display: "flex",
                alignItems: "center",
                my: 2,
                py: 6,
                px: 3,
                sx: {
                    backgroundImage: `linear-gradient(0deg, ${(0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.alpha)(_styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].gradients.dark.state, 0.8)}, ${(0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.alpha)(_styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].gradients.dark.state, 0.8)}), url(/img/bg/pm-card-bg.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 3,
                    maxWidth: "1800px"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {
                    container: true,
                    item: true,
                    xs: 12,
                    md: 6,
                    sx: {
                        ml: {
                            xs: 0,
                            md: 6
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            style: {
                                width: "100%"
                            },
                            variant: "h4",
                            color: "white",
                            fontWeight: "bold",
                            children: "Eventos relacionados"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            variant: "h3",
                            color: "white",
                            mb: 1,
                            children: "POSTMASTER XX"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                            variant: "body2",
                            color: "white",
                            opacity: 0.8,
                            mb: 2,
                            children: "\xdanete a nuestro evento de reencuentro de egresados, donde podr\xe1s conocer las inspiradoras historias de c\xf3mo nuestros graduados alcanzaron su actual puesto de trabajo, y las dificultades que superaron en el camino. \xa1No te lo pierdas!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                            sx: {
                                display: "flex",
                                gap: 0.5,
                                transition: ".1s",
                                "&:hover": {
                                    gap: 1
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {
                                    component: "a",
                                    href: "/postmaster",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    variant: "body2",
                                    color: "white",
                                    fontWeight: "regular",
                                    sx: {
                                        display: "flex",
                                        alignItems: "center",
                                        "& .material-icons-round": {
                                            fontSize: "1.125rem",
                                            transform: `translateX(3px)`,
                                            transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)"
                                        },
                                        "&:hover .material-icons-round, &:focus .material-icons-round": {
                                            transform: `translateX(6px)`
                                        }
                                    },
                                    children: "Ver m\xe1s del evento"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    fontWeight: "bold"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
        id: "about",
        component: "section",
        sx: {
            background: _styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].bg.gradientSolid(180),
            zIndex: 1,
            position: "relative",
            padding: {
                lg: 10,
                xs: 5
            },
            paddingTop: "0 !important",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                ref: ref1,
                children: inView1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 0,
                        x: -100
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        x: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: PostmasterCard
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    sx: {
                        opacity: 0
                    },
                    children: PostmasterCard
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                sx: {
                    maxWidth: "1800px"
                },
                ref: ref2,
                children: inView2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 0,
                        x: 100
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        x: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    children: FilledInfoCards
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {
                    sx: {
                        opacity: 0
                    },
                    children: FilledInfoCards
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostmasterCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3292);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7666);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5939);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5631);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4009);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_7__]);
([react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Share = ({ edicion })=>{
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__.useInView)({
        triggerOnce: false
    });
    const buttonStyle = {
        textTransform: "uppercase",
        paddingY: 1,
        paddingX: 3,
        color: "white",
        fontWeight: "bold",
        width: "150px"
    };
    const ShareGrid = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        justifyContent: "space-between",
        spacing: 3,
        maxWidth: "1800px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                lg: 5,
                sx: {
                    textAlign: {
                        xs: "center",
                        lg: "left"
                    }
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "h4",
                        fontWeight: "bold",
                        mb: 0.5,
                        children: "\xa1Gracias por tu apoyo!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        variant: "body1",
                        color: "text",
                        children: "Ayuda a difundir este evento con m\xe1s personas"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                item: true,
                xs: 12,
                lg: 5,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    container: true,
                    spacing: 1,
                    sx: {
                        justifyContent: {
                            xs: "center",
                            lg: "end"
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                href: `https://www.facebook.com/sharer/sharer.php?quote=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición!&u=https://www.ciistacna.com`,
                                sx: {
                                    ...buttonStyle,
                                    bgcolor: _styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].socialMediaColors.facebook.main
                                },
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                color: "info",
                                variant: "contained",
                                children: "comparte"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                href: `https://twitter.com/intent/tweet?text=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición! Descubre más del evento en: https://www.ciistacna.com`,
                                sx: {
                                    ...buttonStyle,
                                    bgcolor: _styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].socialMediaColors.twitter.main
                                },
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                                color: "info",
                                variant: "contained",
                                children: "tweetea"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            item: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                href: `https://www.linkedin.com/sharing/share-offsite/?summary=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición!&url=https://www.ciistacna.com`,
                                sx: {
                                    ...buttonStyle,
                                    bgcolor: _styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].socialMediaColors.linkedin.main
                                },
                                startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                color: "info",
                                variant: "contained",
                                children: "divulga"
                            })
                        })
                    ]
                })
            })
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        id: "share",
        component: "section",
        sx: {
            background: _styles_colors__WEBPACK_IMPORTED_MODULE_2__["default"].bg.gradientSolid(0),
            zIndex: 1,
            position: "relative",
            padding: {
                lg: 10,
                xs: 5
            },
            paddingTop: "0 !important",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        },
        ref: ref,
        children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {
            initial: {
                opacity: 0,
                y: 0,
                x: -100
            },
            animate: {
                opacity: 1,
                y: 0,
                x: 0
            },
            transition: {
                duration: 0.6
            },
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
            },
            children: ShareGrid
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                opacity: 0
            },
            children: ShareGrid
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3292);
/* harmony import */ var _mui_icons_material_ArrowLeftSharp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3053);
/* harmony import */ var _mui_icons_material_ArrowLeftSharp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowLeftSharp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_ArrowRightSharp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(141);
/* harmony import */ var _mui_icons_material_ArrowRightSharp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowRightSharp__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const UltimaEdicion = ({ action = true })=>{
    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        triggerOnce: false
    });
    const content = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
        container: true,
        justifyContent: "center",
        spacing: 3,
        maxWidth: "1800px",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            item: true,
            textAlign: "center",
            sm: 11,
            md: 7,
            lg: 6,
            xl: 4.5,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Chip, {
                    label: "NUESTRA HISTORIA",
                    color: "secondary"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "h1",
                    children: "Ediciones anteriores"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    variant: "body",
                    children: "Presentamos una recopilaci\xf3n de las ediciones anteriores del prestigioso Congreso Internacional de Inform\xe1tica y Sistemas"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                action && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    href: "/historia",
                    variant: "contained",
                    color: "secondary",
                    endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowLeftSharp__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                    startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowRightSharp__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                    sx: {
                        fontWeight: "bold",
                        my: 2
                    },
                    children: "VER HISTORIA"
                })
            ]
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        id: "share",
        component: "section",
        sx: {
            background: _styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"].bg.main,
            zIndex: 1,
            position: "relative",
            padding: {
                lg: 10,
                xs: 5
            },
            paddingTop: "0 !important",
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        },
        ref: ref,
        children: inView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
            initial: {
                opacity: 0,
                y: 0,
                x: 0
            },
            animate: {
                opacity: 1,
                y: 0,
                x: 0
            },
            transition: {
                duration: 0.6
            },
            style: {
                width: "100%",
                display: "flex",
                justifyContent: "center"
            },
            children: content
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                opacity: 0
            },
            children: content
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UltimaEdicion);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;