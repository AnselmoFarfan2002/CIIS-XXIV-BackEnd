exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4960);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3292);
/* harmony import */ var _styles_typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6143);






const darkTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)({
    palette: {
        ..._styles_colors__WEBPACK_IMPORTED_MODULE_4__["default"],
        mode: "dark"
    },
    typography: {
        ..._styles_typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    }
});
function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            theme: darkTheme,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                }))
            ]
        })
    });
}


/***/ }),

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

let colors = {
    bg: {
        main: "rgb(16, 20, 24)",
        secondary: "rgb(20, 50, 60)",
        light: "#515764"
    },
    primary: {
        main: "rgb(0, 58, 117)",
        light: "#00508B",
        dark: "#3399FF"
    },
    secondary: {
        main: "#008C9D",
        light: "#2B777C",
        dark: "#2B777C"
    },
    fonts: {
        main: "#fff"
    },
    dark: {
        main: "#fff",
        focus: "#2c3c58"
    },
    gradients: {
        primary: {
            main: "#EC407A",
            state: "#D81B60"
        },
        secondary: {
            main: "#747b8a",
            state: "#495361"
        },
        info: {
            main: "#49a3f1",
            state: "#1A73E8"
        },
        success: {
            main: "#66BB6A",
            state: "#43A047"
        },
        warning: {
            main: "#FFA726",
            state: "#FB8C00"
        },
        error: {
            main: "#EF5350",
            state: "#E53935"
        },
        light: {
            main: "#EBEFF4",
            state: "#CED4DA"
        },
        dark: {
            main: "#42424a",
            state: "#191919"
        }
    },
    socialMediaColors: {
        facebook: {
            main: "#3b5998",
            dark: "#344e86"
        },
        twitter: {
            main: "#55acee",
            dark: "#3ea1ec"
        },
        instagram: {
            main: "#125688",
            dark: "#0e456d"
        },
        linkedin: {
            main: "#0077b5",
            dark: "#00669c"
        },
        pinterest: {
            main: "#cc2127",
            dark: "#b21d22"
        },
        youtube: {
            main: "#e52d27",
            dark: "#d41f1a"
        },
        vimeo: {
            main: "#1ab7ea",
            dark: "#13a3d2"
        },
        slack: {
            main: "#3aaf85",
            dark: "#329874"
        },
        dribbble: {
            main: "#ea4c89",
            dark: "#e73177"
        },
        github: {
            main: "#24292e",
            dark: "#171a1d"
        },
        reddit: {
            main: "#ff4500",
            dark: "#e03d00"
        },
        tumblr: {
            main: "#35465c",
            dark: "#2a3749"
        }
    }
};
colors.bg.gradient = (angle)=>`linear-gradient(${angle}deg, ${colors.bg.main} 0%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(colors.primary.main, 0.2)} 100%)`;
colors.bg.gradientSolid = (angle)=>`linear-gradient(${angle}deg, ${colors.bg.main} 0%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(colors.primary.main, 0.2)} 100%), ${colors.bg.main}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);


/***/ }),

/***/ 6143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ styles_typography)
});

// EXTERNAL MODULE: ./src/styles/colors.js
var colors = __webpack_require__(3292);
;// CONCATENATED MODULE: ./src/styles/pxToRem.js
function pxToRem(number, baseNumber = 16) {
    return `${number / baseNumber}rem`;
}
/* harmony default export */ const styles_pxToRem = (pxToRem);

;// CONCATENATED MODULE: ./src/styles/typography.js


const { dark } = colors["default"];
const baseProperties = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontFamily2: '"Roboto Slab", sans-serif',
    fontWeightLighter: 100,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSizeXXS: styles_pxToRem(10.4),
    fontSizeXS: styles_pxToRem(12),
    fontSizeSM: styles_pxToRem(14),
    fontSizeMD: styles_pxToRem(16),
    fontSizeLG: styles_pxToRem(18),
    fontSizeXL: styles_pxToRem(20),
    fontSize2XL: styles_pxToRem(24),
    fontSize3XL: styles_pxToRem(30)
};
const baseHeadingProperties = {
    color: dark.main,
    fontWeight: baseProperties.fontWeightBold
};
const baseDisplayProperties = {
    fontFamily: baseProperties.fontFamily,
    color: dark.main,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.2
};
const typography = {
    fontFamily: baseProperties.fontFamily,
    fontWeightLighter: baseProperties.fontWeightLighter,
    fontWeightLight: baseProperties.fontWeightLight,
    fontWeightRegular: baseProperties.fontWeightRegular,
    fontWeightMedium: baseProperties.fontWeightMedium,
    fontWeightBold: baseProperties.fontWeightBold,
    h1: {
        fontFamily: baseProperties.fontFamily2,
        fontSize: styles_pxToRem(48),
        lineHeight: 1.25,
        ...baseHeadingProperties
    },
    h2: {
        fontFamily: baseProperties.fontFamily2,
        fontSize: styles_pxToRem(36),
        lineHeight: 1.3,
        ...baseHeadingProperties
    },
    h3: {
        fontFamily: baseProperties.fontFamily2,
        fontSize: styles_pxToRem(30),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },
    h4: {
        fontFamily: baseProperties.fontFamily,
        fontSize: styles_pxToRem(24),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },
    h5: {
        fontFamily: baseProperties.fontFamily,
        fontSize: styles_pxToRem(20),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },
    h6: {
        fontFamily: baseProperties.fontFamily,
        fontSize: styles_pxToRem(16),
        lineHeight: 1.625,
        ...baseHeadingProperties
    },
    subtitle1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXL,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.625
    },
    subtitle2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeMD,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.6
    },
    body1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXL,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.625
    },
    body2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeMD,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.6
    },
    button: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeSM,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.5,
        textTransform: "uppercase"
    },
    caption: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXS,
        fontWeight: baseProperties.fontWeightLight,
        lineHeight: 1.25
    },
    overline: {
        fontFamily: baseProperties.fontFamily
    },
    d1: {
        fontSize: styles_pxToRem(80),
        ...baseDisplayProperties
    },
    d2: {
        fontSize: styles_pxToRem(72),
        ...baseDisplayProperties
    },
    d3: {
        fontSize: styles_pxToRem(64),
        ...baseDisplayProperties
    },
    d4: {
        fontSize: styles_pxToRem(56),
        ...baseDisplayProperties
    },
    d5: {
        fontSize: styles_pxToRem(48),
        ...baseDisplayProperties
    },
    d6: {
        fontSize: styles_pxToRem(40),
        ...baseDisplayProperties
    },
    size: {
        xxs: baseProperties.fontSizeXXS,
        xs: baseProperties.fontSizeXS,
        sm: baseProperties.fontSizeSM,
        md: baseProperties.fontSizeMD,
        lg: baseProperties.fontSizeLG,
        xl: baseProperties.fontSizeXL,
        "2xl": baseProperties.fontSize2XL,
        "3xl": baseProperties.fontSize3XL
    },
    lineHeight: {
        sm: 1.25,
        md: 1.5,
        lg: 2
    }
};
/* harmony default export */ const styles_typography = (typography);


/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;