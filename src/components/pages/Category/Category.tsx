import { FC } from "react";
import { useParams } from "react-router-dom";
import { DocumentTable } from "../../Ui/DocumentTable/DocumentTable";
import Document from "../../../data/contracts/Document";

interface IItem {
  items: Document[];
}

const Category: FC<IItem> = ({ items }) => {
  const { category } = useParams();
  const filterItems = category
    ? items.filter((el: any) => el.category === category)
    : items;
  //const [items, setItems] = useState<IItem[]>([]);

  // useEffect(() => {
  //     getAllItems(category).then((items) => {
  //         let item_url: IItem[] = [] //url item - массив собранных объектов каждой картинки
  //         items.forEach((item: never) => {
  //             const item_object: IItem = {
  //                 id: item["resource_id"],
  //                 name: item["name"],
  //                 category: item["category"]
  //             }
  //             item_url = [...item_url, item_object]
  //         })
  //         setItems(item_url);
  //     })
  // }, [category]);

  return (
    // <div>
    //     {items.map((item: any) => (
    //         <Item key={item.id} {...item} />
    //     ))}
    // </div>
    <>
      <h1 data-testid={"toggle-el"}>{`${category ?? "Все документы"}`}</h1>
      <DocumentTable documentList={filterItems}></DocumentTable>
      {/* <ItemsList items={filterItems} category={category}></ItemsList> */}
    </>
  );
};

export default Category;
