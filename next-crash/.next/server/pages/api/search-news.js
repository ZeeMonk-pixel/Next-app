"use strict";
(() => {
var exports = {};
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const searchQuery = req.query.q?.toString();
    if (!searchQuery) {
        return res.status(400).json({
            error: "Please provide a search query"
        });
    }
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=92ad7c6c57b94edfbe768d01c6d5c8ae`);
    const newsResponse = await response.json();
    res.status(200).json(newsResponse.articles);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9653));
module.exports = __webpack_exports__;

})();