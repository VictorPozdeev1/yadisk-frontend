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

import { getCategories, getDocuments } from "../../data/api/request";

// getCategories().then((data) => console.log(data));

function App() {
  //Получение категорий
  useEffect(() => {
    apiStoreCategories.loadCategories();
  }, []);
  //Получение документов
  useEffect(() => {
    apiStoreDocuments.loadDocuments(apiStoreCategories.categories);
  }, apiStoreCategories.categories);

  const { getAllCategoriesName, getAllItems } = YaService();
  const [images, setImage] = useState<any[]>([]);

  const onSwitchFullItem = (url: string, name: string, category: string) => {
    return <Item url={url} name={name} category={category} />;  
  };

  //переработал фунцию (донастройка роутинга)
  const getAllImg = () => {
    getAllCategoriesName().then((categories) => {
        categories.forEach((category: any) => {
            getAllItems(category).then((items) => {
                items.forEach((item: any) => {
                    setImage((images) => [
                        ...images,
                        {
                            src: item.preview,
                            pathForDownload: item.file,
                            name: item.name,
                            id: item.resource_id,
                            url: item.sizes[0].url,
                            category: category
                        },
                    ]);
                });
            });
        });
    });
  };

  const onGetFullImg = (id: string) => {
    return images.filter((el: { id: string }) => el.id === id)[0].url;
  };

  useEffect(() => {
    getAllImg();
  }, []);

  const ItemsListContent = !images.length ? (
    <div>Nothing</div>
  ) : (
    images.map((el) => {
      console.log(el);
      return (
        <Item
          src={el.src}
          name={el.name}
          key={el.id}
          id={el.id}
          url={el.url}
          category={el.category}
          onClick={onSwitchFullItem}
        />
      );
    })
  );

  return (
    <AppRouter
      Layout={
        <Layout header={<Header />} footer={<Footer />} sidebar={<Sidebar />} />
      }
      ItemsList={<ItemsList items={ItemsListContent} />}
      Component404={<Component404 />}
      ItemFull={<ItemFull onGetFullImg={onGetFullImg} />}
    />
  );
}

//export default observer(App);
export default App;
