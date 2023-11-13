import React, {useEffect} from "react";
import "./App.css";
import { apiStoreCategories } from "./store";
import { apiStoreDocuments } from "./store";

function App() {

  useEffect(()=>{
    apiStoreCategories.loadCategories()
  },[]);
  
  useEffect(()=>{
    apiStoreDocuments.loadDocuments(apiStoreCategories.categories);
  }, apiStoreCategories.categories);

  console.log(apiStoreDocuments.documents)

  return (
    <div className="App">
      <h1>Hello Team3!</h1>
    </div>
  );
}

export default App;
