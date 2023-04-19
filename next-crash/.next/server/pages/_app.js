(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavBar.tsx



function NavBar() {
    return /*#__PURE__*/ _jsx(Navbar, {
        bg: "dark",
        variant: "dark",
        sticky: "top",
        expand: "sm",
        collapseOnSelect: true,
        children: /*#__PURE__*/ _jsxs(Container, {
            children: [
                /*#__PURE__*/ _jsx(Navbar.Toggle, {
                    "aria-controls": "main-navbar"
                }),
                /*#__PURE__*/ _jsx(Navbar.Collapse, {
                    id: "main-navbar",
                    children: /*#__PURE__*/ _jsxs(Nav, {
                        children: [
                            /*#__PURE__*/ _jsx(Nav.Link, {
                                as: Link,
                                href: "/",
                                children: "Breaking News"
                            }),
                            /*#__PURE__*/ _jsx(Nav.Link, {
                                as: Link,
                                href: "/search",
                                children: "Search"
                            }),
                            /*#__PURE__*/ _jsxs(NavDropdown, {
                                title: "Categories",
                                id: "categories-dropdown",
                                children: [
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/business",
                                        children: "Business"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/entertainment",
                                        children: "Entertainment"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/general",
                                        children: "General"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/health",
                                        children: "Health"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/science",
                                        children: "Science"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/sports",
                                        children: "Sports"
                                    }),
                                    /*#__PURE__*/ _jsx(NavDropdown.Item, {
                                        as: Link,
                                        href: "/categories/technology",
                                        children: "Technology"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.tsx










function App({ Component , pageProps  }) {
    const [showChild, setShowChild] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setShowChild(true);
    }, []);
    if (!showChild) {
        return null;
    }
    if (true) {
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    } else {}
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [961], () => (__webpack_exec__(8111)));
module.exports = __webpack_exports__;

})();