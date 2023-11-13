import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "../Ui/Header/Header";
import Footer from "../Ui/Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import Layout from "../Ui/Layout/Layout";
import AppRouter from "../AppRouter";
import ItemsList from "../ItemsList/ItemsList";
import Component404 from "../Component404/Component404";
import YaService from "../services/YaService";
import Item from "../Item/Item";
import ItemFull from "../ItemFull/ItemFull";

function App() {
  const { getAllCategoriesName, getAllItems } = YaService();
  const [images, setImage] = useState<any[]>([]);

  const onSwitchFullItem = (url: string, name: string) => {
    return <Item url={url} name={name} />;
  };

  const getAllImg = () => {
    getAllItems().then((data) => {
      data.items.forEach((item: any) => {
        console.log(item);
        setImage((images) => [
          ...images,
          {
            src: item.preview,
            pathForDownload: item.file,
            name: item.name,
            id: item.resource_id,
            url: item.sizes[0].url,
          },
        ]);
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

export default App;
