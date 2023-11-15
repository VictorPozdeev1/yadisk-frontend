"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Item_module_css_1 = require("./Item.module.css");
var react_router_dom_1 = require("react-router-dom");
var Item = function (_a) {
    var src = _a.src, name = _a.name, url = _a.url, id = _a.id, category = _a.category;
    console.log(url);
    return (react_1["default"].createElement("div", { className: Item_module_css_1["default"]["item-wrapper"], id: id },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/" + category + "/" + id },
            react_1["default"].createElement("img", { src: src, alt: "name" })),
        name));
};
exports["default"] = Item;
