import { useEffect } from "react";
import Header from "../Ui/Header/Header";
import Footer from "../Ui/Footer/Footer";
import Layout from "../Ui/Layout/Layout";
import Sidebar from "../Ui/Sidebar/Sidebar";
import AppRouter from "../AppRouter";
import { observer } from "mobx-react";
import { apiStoreCategories, apiStoreDocuments } from "../../store";
import ItemFull from "../pages/ItemFull/ItemFull";
import Component404 from "../pages/Component404/Component404";
import Category from "../pages/Category/Category";
import { toJS } from "mobx";

import { Main } from "../Ui/Main/Main";
import { appTheme } from "../theme/theme";

function App() {
  // Получение категорий
  useEffect(() => {
    apiStoreCategories.loadCategories().then(() => {
      apiStoreDocuments.loadDocuments();
    });
  }, []);

  const documents = toJS(apiStoreDocuments.documents);

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
      Category={<Category items={documents} />}
      Component404={<Component404 />}
      ItemFull={<ItemFull />}
    />
  );
}

export default observer(App);
