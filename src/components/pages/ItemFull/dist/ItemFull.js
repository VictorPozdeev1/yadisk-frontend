"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./ItemFull.module.css");
var ItemFull = function (_a) {
    var onGetFullImg = _a.onGetFullImg;
    var _b = react_router_dom_1.useParams(), id = _b.id, category = _b.category;
    var url = onGetFullImg(id);
    return react_1["default"].createElement("div", null, react_1["default"].createElement("img", { src: url, alt: "image" }));
};
exports["default"] = ItemFull;
