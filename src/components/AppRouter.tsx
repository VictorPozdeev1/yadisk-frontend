import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Ui/Spinner/Spinner";
import Category from "./pages/Category/Category";

const AppRouter: FC<any> = ({ Layout, ItemsList, Component404, ItemFull }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={Layout}>
          <Route index element={ItemsList}></Route>
          <Route path="*" element={Component404}></Route>
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={ItemFull} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
