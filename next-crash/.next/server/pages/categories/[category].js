"use strict";
(() => {
var exports = {};
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 2592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CategoryNewsPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/NewsArticleGrid.tsx + 2 modules
var NewsArticleGrid = __webpack_require__(468);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
;// CONCATENATED MODULE: ./pages/categories/[category].tsx





const getStaticPaths = async ()=>{
    const categorySlugs = [
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"
    ];
    const paths = categorySlugs.map((slug)=>({
            params: {
                category: slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const category = params?.category?.toString();
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=92ad7c6c57b94edfbe768d01c6d5c8ae`);
    const newsResponse = await response.json();
    return {
        props: {
            newsArticles: newsResponse?.articles || null
        },
        revalidate: 5 * 60
    };
// let error go to page 500
};
function CategoryNewsPage({ newsArticles  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const categoryName = router.query.category?.toString();
    const title = "Category: " + categoryName;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: `${title} - Nextjs News App`
                }, "title")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Alert, {
                        children: [
                            "This page uses ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "getStaticprops"
                            }),
                            " for very high page loading speed and ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "incremental static generation"
                            }),
                            " to show data not older than ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: "5 minutes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NewsArticleGrid/* default */.Z, {
                        articles: newsArticles
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,468], () => (__webpack_exec__(2592)));
module.exports = __webpack_exports__;

})();