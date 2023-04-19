exports.id = 468;
exports.ids = [468];
exports.modules = {

/***/ 3579:
/***/ ((module) => {

// Exports
module.exports = {
	"pageContainer": "Home_pageContainer__wDxoE",
	"image": "Home_image__yn5pu"
};


/***/ }),

/***/ 468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewsArticleGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./assets/images/newsImage.jpg
/* harmony default export */ const newsImage = ({"src":"/_next/static/media/newsImage.2da72f3b.jpg","height":5184,"width":3456,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApgP/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDBBIi/9oACAEBAAE/AKT601WHtwDRkYJX/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=","blurWidth":5,"blurHeight":8});
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(3579);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/NewsArticleEntry.tsx





function NewsArticleEntry({ article: { title , description , url , urlToImage  }  }) {
    const validImageUrl = urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://") ? urlToImage : undefined;
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: url,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
            className: "h-100",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: validImageUrl || newsImage,
                    width: 500,
                    height: 200,
                    alt: "News article image",
                    className: `card-img-top ${(Home_module_default()).image}`
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card.Body, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Title, {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Card.Text, {
                            children: description
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/NewsArticleGrid.tsx



function NewsArticleGrid({ articles  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Row, {
        xs: 1,
        sm: 2,
        xl: 3,
        className: "g-4",
        children: articles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(NewsArticleEntry, {
                    article: article
                })
            }, article.url))
    });
}


/***/ })

};
;