import React, { useEffect } from "react";
import styles from "./App.module.css";
import Header from "../Ui/Header/Header";
import Footer from "../Ui/Footer/Footer";
import Layout from "../Ui/Layout/Layout";
import Sidebar from "../Ui/Sidebar/Sidebar";
import AppRouter from "../AppRouter";
import Item from "../Item/Item";
import { observer } from "mobx-react";
import { apiStoreCategories, apiStoreDocuments } from "../../store";
import ItemFull from "../pages/ItemFull/ItemFull";
import Component404 from "../pages/Component404/Component404";
import ItemsList from "../pages/ItemsList/ItemsList";
import { toJS } from "mobx";

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
      ItemFull={<ItemFull />}
    />
  );
}

export default observer(App);
