"use strict";
exports.id = 796;
exports.ids = [796];
exports.modules = {

/***/ 6321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3292);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1902);
/* harmony import */ var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9349);
/* harmony import */ var _mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7666);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5567);
/* harmony import */ var _mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5939);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(375);
/* harmony import */ var _mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_9__);










const Header = (props)=>{
    const { onLogin = ()=>{} } = props;
    const [isAtTop, setIsAtTop] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
    const handleScroll = ()=>{
        setIsAtTop(window.scrollY === 0);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.AppBar, {
        component: "header",
        p: 2,
        width: "100vw",
        sx: {
            bgcolor: isAtTop ? "transparent" : "#101418",
            backgroundImage: "none",
            position: "fixed",
            py: 1,
            transition: ".5s",
            ...isAtTop ? {
                boxShadow: "none"
            } : {}
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Hidden, {
            smDown: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                container: true,
                justifyContent: "center",
                sx: {
                    position: "relative"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    lg: 8,
                    md: 10,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                        container: true,
                        justifyContent: "space-between",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    sx: {
                                        px: 5,
                                        py: 1,
                                        color: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].fonts.main
                                    },
                                    href: "/",
                                    children: "CIIS ft. ESIS"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                                item: true,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        sx: {
                                            px: 2,
                                            py: 1,
                                            color: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].fonts.main,
                                            bgcolor: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].primary.light
                                        },
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_GroupAdd__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                        variant: "contained",
                                        color: "info",
                                        disabled: true,
                                        onClick: onLogin,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontSize: 12,
                                            fontWeight: "bold",
                                            children: "Inscribirse"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        sx: {
                                            px: 2,
                                            py: 2,
                                            color: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].fonts.main
                                        },
                                        href: "/postmaster",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontSize: 12,
                                            children: "Postmaster"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                        sx: {
                                            px: 2,
                                            py: 2,
                                            color: _styles_colors__WEBPACK_IMPORTED_MODULE_1__["default"].fonts.main
                                        },
                                        href: "/historia",
                                        startIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_HistoryEdu__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            fontSize: 12,
                                            children: "Ediciones anteriores"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                        "aria-label": "facebook",
                                        href: "https://www.facebook.com/ciistacna",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_5___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                        "aria-label": "youtube",
                                        href: "https://www.youtube.com/@ciistacna",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_YouTube__WEBPACK_IMPORTED_MODULE_9___default()), {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                                        "aria-label": "linkedin",
                                        href: "https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/?originalSubdomain=pe",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_8___default()), {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 4796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CIIS_CIISLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/Footer/ToVisit.js
const ToVisit = [
    {
        name: "ESIS",
        href: "http://esis.unjbg.edu.pe/"
    },
    {
        name: "CIIS",
        href: "/"
    },
    {
        name: "UNJBG",
        href: "http://www.unjbg.edu.pe/portal/"
    },
    {
        name: "POSTMASTER",
        href: "/postmaster"
    }
];
/* harmony default export */ const Footer_ToVisit = (ToVisit);

// EXTERNAL MODULE: ./src/styles/colors.js
var colors = __webpack_require__(3292);
// EXTERNAL MODULE: external "@mui/icons-material/Facebook"
var Facebook_ = __webpack_require__(7666);
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_);
// EXTERNAL MODULE: external "@mui/icons-material/LinkedIn"
var LinkedIn_ = __webpack_require__(5939);
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn_);
// EXTERNAL MODULE: external "@mui/icons-material/YouTube"
var YouTube_ = __webpack_require__(375);
var YouTube_default = /*#__PURE__*/__webpack_require__.n(YouTube_);
;// CONCATENATED MODULE: ./src/components/Footer/SocialNetworks.js




const SocialNetworks = [
    {
        icon: /*#__PURE__*/ jsx_runtime.jsx((Facebook_default()), {}),
        name: "Facebook",
        href: "https://www.facebook.com/ciistacna"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime.jsx((YouTube_default()), {}),
        name: "Youtube",
        href: "https://www.youtube.com/@ciistacna"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime.jsx((LinkedIn_default()), {}),
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/?originalSubdomain=pe"
    }
];
/* harmony default export */ const Footer_SocialNetworks = (SocialNetworks);

;// CONCATENATED MODULE: ./src/components/Footer/Footer.js





const Footer = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx(material_.Box, {
        component: "footer",
        sx: {
            background: colors["default"].bg.main,
            zIndex: 1,
            position: "relative",
            paddingBottom: 8
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
            container: true,
            justifyContent: "center",
            spacing: 3,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        container: true,
                        spacing: 5,
                        justifyContent: "center",
                        children: Footer_ToVisit.map((url, idx)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                item: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                    variant: "body2",
                                    component: "a",
                                    href: url.href,
                                    children: url.name
                                })
                            }, `footer-tv-${idx}`);
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                        container: true,
                        spacing: 5,
                        justifyContent: "center",
                        children: Footer_SocialNetworks.map((sn, idx)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                item: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx(material_.IconButton, {
                                    href: sn.href,
                                    title: sn.name,
                                    children: sn.icon
                                })
                            }, `footer-sn-${idx}`);
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Typography, {
                        variant: "body2",
                        textAlign: "center",
                        children: [
                            "Copyright \xa9 ",
                            new Date().getFullYear(),
                            " CIIS por C\xedrculo de estudios de la ESIS."
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./src/components/Header/index.js
var Header = __webpack_require__(6321);
// EXTERNAL MODULE: ./src/styles/typography.js + 1 modules
var typography = __webpack_require__(6143);
// EXTERNAL MODULE: external "@mui/icons-material/Login"
var Login_ = __webpack_require__(7752);
var Login_default = /*#__PURE__*/__webpack_require__.n(Login_);
;// CONCATENATED MODULE: ./src/components/Login/index.js





const Login = (props)=>{
    const { open = false, onClose = ()=>{} } = props;
    const theme = (0,material_.createTheme)({
        palette: {
            mode: "dark"
        },
        typography: typography/* default */.Z
    });
    const movil = (0,material_.useMediaQuery)(theme.breakpoints.between("xs", "md"));
    return /*#__PURE__*/ jsx_runtime.jsx(material_.ThemeProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Dialog, {
            open: open,
            onClose: onClose,
            children: /*#__PURE__*/ jsx_runtime.jsx(material_.DialogContent, {
                sx: {
                    padding: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
                    container: true,
                    spacing: 3,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.Grid, {
                                container: true,
                                spacing: 3,
                                sx: {
                                    padding: 7
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Typography, {
                                            variant: "h4",
                                            children: "Iniciar sesi\xf3n"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            pt: "12px !important"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                                            type: "text",
                                            name: "email",
                                            label: "Correo",
                                            variant: "standard",
                                            inputProps: {
                                                style: {
                                                    fontSize: 17
                                                }
                                            },
                                            fullWidth: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.TextField, {
                                            label: "Contrase\xf1a",
                                            variant: "standard",
                                            inputProps: {
                                                style: {
                                                    fontSize: 17
                                                }
                                            },
                                            fullWidth: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        sx: {
                                            pt: "35px !important"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime.jsx(material_.Button, {
                                            sx: {
                                                px: 5,
                                                py: 1.5,
                                                fontWeight: "bold",
                                                bgcolor: colors["default"].bg.main,
                                                color: "white",
                                                "&:hover": {
                                                    bgcolor: colors["default"].bg.secondary
                                                }
                                            },
                                            variant: "contained",
                                            endIcon: /*#__PURE__*/ jsx_runtime.jsx((Login_default()), {}),
                                            fullWidth: true,
                                            children: "Continuar"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(material_.FormHelperText, {
                                            children: [
                                                "\xbfNo registrado a\xfan?",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx(material_.Link, {
                                                    sx: {
                                                        cursor: "pointer"
                                                    },
                                                    children: "Registrate"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(material_.Grid, {
                            item: true,
                            xs: 12,
                            md: 6,
                            sx: {
                                bgcolor: colors["default"].bg.main,
                                display: "grid",
                                alignContent: "center",
                                justifyContent: "center",
                                px: "0 !important",
                                py: "24px"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "/img/CIIS/XXIV/logo.png",
                                width: movil ? 100 : 200
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Login = (Login);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/CIIS/CIISLayout.js





const CIISLayout = (props)=>{
    const [login, setLogin] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {
                onLogin: ()=>setLogin(true)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Login, {
                open: login,
                onClose: ()=>setLogin(false)
            })
        ]
    });
};
/* harmony default export */ const CIIS_CIISLayout = (CIISLayout);


/***/ })

};
;