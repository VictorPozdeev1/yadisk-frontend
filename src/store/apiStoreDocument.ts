import { runInAction, makeAutoObservable, reaction } from "mobx";
import { getDocuments } from "../data/api/request";
import { Documents } from "../data/contracts/document";
import { apiStoreCategories } from ".";
import { Category } from "../data/contracts/category";

class ApiStoreDocument{
    
    documents: Array<Documents>= [];
    categories: Array<Category>=[];
    
    loadDocuments(category:Array<Category>){
        
        category.forEach(async (item:Category)=>{
            let file:Array<Documents>= [];
            
            file = await getDocuments(item.name) as Documents[];
            file.forEach((i:Documents)=>{
                runInAction(()=>{
                    i["categoryId"] = item.resource_id;
                    this.documents.push(i);
                }) 
                
            })
            
        })
        
    }

    constructor(){
        
        reaction(
            ()=>({categories:apiStoreCategories.categories}),
            ({categories})=>{
                this.categories = categories;            
            }  
        )
        
        makeAutoObservable(this);
        
    }
    
}

export default ApiStoreDocument;