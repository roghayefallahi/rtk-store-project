import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
