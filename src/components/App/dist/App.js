"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../Ui/Header/Header");
var Footer_1 = require("../Ui/Footer/Footer");
var Layout_1 = require("../Ui/Layout/Layout");
var Sidebar_1 = require("../Ui/Sidebar/Sidebar");
var AppRouter_1 = require("../AppRouter");
var YaService_1 = require("../../data/api/YaService");
var Item_1 = require("../Item/Item");
var store_1 = require("../../store");
var ItemFull_1 = require("../pages/ItemFull/ItemFull");
var Component404_1 = require("../pages/Component404/Component404");
var ItemsList_1 = require("../pages/ItemsList/ItemsList");
// getCategories().then((data) => console.log(data));
function App() {
    //Получение категорий
    react_1.useEffect(function () {
        store_1.apiStoreCategories.loadCategories();
    }, []);
    //Получение документов
    react_1.useEffect(function () {
        store_1.apiStoreDocuments.loadDocuments(store_1.apiStoreCategories.categories);
    }, store_1.apiStoreCategories.categories);
    var _a = YaService_1["default"](), getAllCategoriesName = _a.getAllCategoriesName, getAllItems = _a.getAllItems;
    var _b = react_1.useState([]), images = _b[0], setImage = _b[1];
    var onSwitchFullItem = function (url, name, category) {
        return react_1["default"].createElement(Item_1["default"], { url: url, name: name, category: category });
    };
    //переработал фунцию (донастройка роутинга)
    var getAllImg = function () {
        getAllCategoriesName().then(function (categories) {
            categories.forEach(function (category) {
                getAllItems(category).then(function (items) {
                    items.forEach(function (item) {
                        setImage(function (images) { return __spreadArrays(images, [
                            {
                                src: item.preview,
                                pathForDownload: item.file,
                                name: item.name,
                                id: item.resource_id,
                                url: item.sizes[0].url,
                                category: category
                            },
                        ]); });
                    });
                });
            });
        });
    };
    var onGetFullImg = function (id) {
        return images.filter(function (el) { return el.id === id; })[0].url;
    };
    react_1.useEffect(function () {
        getAllImg();
    }, []);
    var ItemsListContent = !images.length ? (react_1["default"].createElement("div", null, "Nothing")) : (images.map(function (el) {
        console.log(el);
        return (react_1["default"].createElement(Item_1["default"], { src: el.src, name: el.name, key: el.id, id: el.id, url: el.url, category: el.category, onClick: onSwitchFullItem }));
    }));
    return (react_1["default"].createElement(AppRouter_1["default"], { Layout: react_1["default"].createElement(Layout_1["default"], { header: react_1["default"].createElement(Header_1["default"], null), footer: react_1["default"].createElement(Footer_1["default"], null), sidebar: react_1["default"].createElement(Sidebar_1["default"], null) }), ItemsList: react_1["default"].createElement(ItemsList_1["default"], { items: ItemsListContent }), Component404: react_1["default"].createElement(Component404_1["default"], null), ItemFull: react_1["default"].createElement(ItemFull_1["default"], { onGetFullImg: onGetFullImg }) }));
}
//export default observer(App);
exports["default"] = App;
