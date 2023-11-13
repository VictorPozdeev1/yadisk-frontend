import { runInAction,action, makeObservable,observable } from "mobx";
import { getCategories } from "../data/api/request";
import { Category } from "../data/contracts/category";

class ApiStoreCategories{
    categories: Array<Category>= [];
    
    async loadCategories(){
        const categories  = await getCategories() as Category[];
        runInAction(()=>{
            this.categories = categories;
        })
        
        
    }

    

    constructor(){
        
        makeObservable(this,{
            categories: observable,
            loadCategories:action
        });
    }

    
}

export default ApiStoreCategories