import { useEffect} from "react";
import "./App.css";
import { apiStoreCategories, apiStoreDocuments } from "./store";
import { observer } from "mobx-react";
import { toJS } from "mobx";

function App() {
  
  useEffect(()=>{
    apiStoreCategories.loadCategories()
  },[]);
  
  useEffect(()=>{
    apiStoreDocuments.loadDocuments(toJS(apiStoreCategories.categories));
  },[...apiStoreDocuments.categories])

  let el = apiStoreDocuments.documents.map((i)=>{
    return(
      <div key={i.resource_id}>
        <img src={i.file} alt="" />
        <p>{i.name}</p>
      </div>
    )
  })
  
  return (
    <div className="App">
      <h1>Hello Team3!</h1>
      {el}
    </div>
  );
}

export default observer(App);
