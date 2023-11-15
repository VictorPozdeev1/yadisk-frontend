"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Spinner_1 = require("./Ui/Spinner/Spinner");
var Category_1 = require("./pages/category/Category");
var AppRouter = function (_a) {
    var Layout = _a.Layout, ItemsList = _a.ItemsList, Component404 = _a.Component404, ItemFull = _a.ItemFull;
    return (react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement(Spinner_1["default"], null) },
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: Layout },
                react_1["default"].createElement(react_router_dom_1.Route, { index: true, element: ItemsList }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/:category", element: react_1["default"].createElement(Category_1["default"], null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/:category/:id", element: ItemFull }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: Component404 })))));
};
exports["default"] = AppRouter;
