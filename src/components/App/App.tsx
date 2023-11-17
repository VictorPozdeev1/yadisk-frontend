import React, { useEffect } from "react";
import styles from "./App.module.css";
import Header from "../Ui/Header/Header";
import Footer from "../Ui/Footer/Footer";
import Layout from "../Ui/Layout/Layout";
import Sidebar from "../Ui/Sidebar/Sidebar";
import AppRouter from "../AppRouter";
//import YaService from "../../data/api/YaService";
import Item from "../Item/Item";
import { observer } from "mobx-react";
import { apiStoreCategories, apiStoreDocuments } from "../../store";
import ItemFull from "../pages/ItemFull/ItemFull";
import Component404 from "../pages/Component404/Component404";
import ItemsList from "../pages/ItemsList/ItemsList";
import Category from "../pages/Category/Category";
import { toJS } from "mobx";

import {
  getCategories,
  getDocumentsByCategory,
  getDocuments,
} from "../../data/api/request";
import { Outlet } from "react-router";
import { Main } from "../Ui/Main/Main";
import { appTheme } from "../theme/theme";

import { deleteDocument, switchCategory} from "../../data/api/request";


function App() {
  // Получение категорий
  useEffect(() => {
    apiStoreCategories.loadCategories().then(() => {
      apiStoreDocuments.loadDocuments();
    });
  }, []);

  // useless
  // const onSwitchFullItem = (url: string, name: string) => {
  //   return <Item url={url} name={name} />;
  // };

  // useless
  // const onGetFullImg = (id: string) => {
  //   console.log(id);
  //   console.log(toJS(apiStoreDocuments.documents));
  //   return toJS(apiStoreDocuments.documents).filter(
  //     (el) => el.resource_id === id
  //   )[0].sizes[0].url;
  // };

  
  const documents = toJS(apiStoreDocuments.documents);
  const ItemsListContent = !documents ? (
    <div>Nothing</div>
  ) : (
    documents.map((el) => {
      console.log(el);
      return (
        <Item
          src={el.preview}
          name={el.name}
          key={el.resource_id}
          id={el.resource_id}
          url={el.file}
          category={el.category}

          // onClick={onSwitchFullItem}

        />
      );
    })
  );

  //switchCategory('CaseLabDocuments/Бухгалтерия/Зима.jpg', `Университет`,'Зима.jpg'); - пример перемещения
  //addDocument('CaseLabDocuments/Бухгалтерия/названиеКартинки1',"https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais"); - пока не работает
  //deleteDocument("CaseLabDocuments/Бухгалтерия/НазваниеКаринки") - пример удаления
  return (
    <AppRouter
      Layout={
        <Layout
          header={<Header />}
          main={<Main />}
          theme={appTheme}
          footer={<Footer />}
          sidebar={<Sidebar categories={toJS(apiStoreCategories.categories)} />}
        />
      }
      ItemsList={<ItemsList items={ItemsListContent} />}
      Category={<Category items={ItemsListContent} />}
      Component404={<Component404 />}
      ItemFull={<ItemFull />}
    />
  );
}

export default observer(App);
