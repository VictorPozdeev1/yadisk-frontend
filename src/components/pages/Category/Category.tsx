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
  return (
    <>
      <DocumentTable documentList={filterItems}></DocumentTable>
    </>
  );
};

export default Category;
