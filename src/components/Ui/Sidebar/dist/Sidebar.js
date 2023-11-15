"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var YaService_1 = require("../../../data/api/YaService");
require("./Sidebar.module.css");
var Sidebar = function () {
    var getAllCategoriesName = YaService_1["default"]().getAllCategoriesName;
    var _a = react_1.useState([]), categories = _a[0], setCategories = _a[1];
    react_1.useEffect(function () {
        getAllCategoriesName().then(function (categories) {
            setCategories(categories);
        });
    }, []);
    return (react_1["default"].createElement("div", null, categories.map(function (category) { return (react_1["default"].createElement(react_router_dom_1.Link, { key: category, to: "/" + category }, category)); })));
};
exports["default"] = Sidebar;
