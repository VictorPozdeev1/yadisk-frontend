import React, {useEffect} from "react";
import "./App.css";
import { apiStoreCategories } from "./store";
import { apiStoreDocuments } from "./store";
import {observer} from 'mobx-react'
function App() {
  //Получение категорий
  useEffect(()=>{
    apiStoreCategories.loadCategories();
  },[]);
  //Получение документов
  useEffect(()=>{
    apiStoreDocuments.loadDocuments(apiStoreCategories.categories)
  }, apiStoreDocuments.categories)

  return (
    <div className="App">
      <h1>Hello Team3!</h1>
    </div>
  );
}

export default observer(App);
