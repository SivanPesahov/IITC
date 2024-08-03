import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import { AuthProvider } from "./components/AuthProvider";
import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/loginPage";
import { ProductsPage } from "./pages/productsPage";
import { ProductDetailsPage } from "./pages/productDetailsPage";
import { CartPage } from "./pages/cartPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<ProductsPage />} />
            <Route
              path="products/:productId"
              element={
                <ProtectedRoute>
                  <ProductDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<div>register</div>} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
