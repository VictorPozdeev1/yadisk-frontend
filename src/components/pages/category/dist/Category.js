"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Item_1 = require("../../Item/Item");
var YaService_1 = require("../../../data/api/YaService");
require("./Category.module.css");
var Category = function () {
    var category = react_router_dom_1.useParams().category;
    var getAllItems = YaService_1["default"]().getAllItems;
    var _a = react_1.useState([]), items = _a[0], setItems = _a[1];
    react_1.useEffect(function () {
        getAllItems(category).then(function (items) {
            var item_url = []; //url item - массив собранных объектов каждой картинки
            items.forEach(function (item) {
                var item_object = {
                    id: item["resource_id"],
                    name: item["name"],
                    category: item["category"]
                };
                item_url = __spreadArrays(item_url, [item_object]);
            });
            setItems(item_url);
        });
    }, [category]);
    return (react_1["default"].createElement("div", null, items.map(function (item) { return (react_1["default"].createElement(Item_1["default"], __assign({ key: item.id }, item))); })));
};
exports["default"] = Category;
