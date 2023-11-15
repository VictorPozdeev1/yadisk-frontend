import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "../Ui/Header/Header";
import Footer from "../Ui/Footer/Footer";
import Layout from "../Ui/Layout/Layout";
import Sidebar from "../Ui/Sidebar/Sidebar";
import AppRouter from "../AppRouter";
import YaService from "../../data/api/YaService";
import Item from "../Item/Item";
import { observer } from "mobx-react";
import { apiStoreCategories, apiStoreDocuments } from "../../store";
import ItemFull from "../pages/ItemFull/ItemFull";
import Component404 from "../pages/Component404/Component404";
import ItemsList from "../pages/ItemsList/ItemsList";
import { toJS } from "mobx";

import {
  getCategories,
  getDocumentsByCategory,
  getDocuments,
} from "../../data/api/request";

function App() {
  // Получение категорий
  useEffect(() => {
    apiStoreCategories.loadCategories().then(() => {
      apiStoreDocuments.loadDocuments();
    });
  }, []);

  const onSwitchFullItem = (url: string, name: string) => {
    return <Item url={url} name={name} />;
  };

  const onGetFullImg = (id: string) => {
    console.log(id);
    console.log(toJS(apiStoreDocuments.documents));
    return toJS(apiStoreDocuments.documents).filter(
      (el) => el.resource_id === id
    )[0].sizes[0].url;
  };

  const documents = toJS(apiStoreDocuments.documents);
  const ItemsListContent = !documents ? (
    <div>Nothing</div>
  ) : (
    documents.map((el) => {
      return (
        <Item
          src={el.preview}
          name={el.name}
          key={el.resource_id}
          id={el.resource_id}
          url={el.file}
          onClick={onSwitchFullItem}
        />
      );
    })
  );

  return (
    <AppRouter
      Layout={
        <Layout
          header={<Header />}
          footer={<Footer />}
          sidebar={<Sidebar categories={toJS(apiStoreCategories.categories)} />}
        />
      }
      ItemsList={<ItemsList items={ItemsListContent} />}
      Component404={<Component404 />}
      ItemFull={<ItemFull onGetFullImg={onGetFullImg} />}
    />
  );
}

export default observer(App);
// export default App;