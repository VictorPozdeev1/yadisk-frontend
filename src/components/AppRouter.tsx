import React, { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./Ui/Spinner/Spinner";

const AppRouter: FC<any> = ({
  Layout,
  ItemsList,
  Category,
  Component404,
  ItemFull,
}) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={Layout}>
          <Route index path="/" element={ItemsList}></Route>
          <Route path="/:category" element={Category} />
          <Route path="/:category/:id" element={ItemFull} />
          <Route path="*" element={Component404}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
