import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
// import ItemFull from "./ItemFull/ItemFull";

const AppRouter: FC<any> = ({ Layout, ItemsList, Component404, ItemFull }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={Layout}>
          <Route path="/" element={ItemsList}></Route>
          <Route path="/items/:id" element={ItemFull}></Route>
          <Route path="*" element={Component404}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
