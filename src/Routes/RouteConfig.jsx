//Icons
import { FileExcelOutlined, FileSyncOutlined } from "@ant-design/icons";

//Pages
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ProductCompare from "../Pages/ProductCompare/ProductCompare";
import NotFound from "../Pages/NotFound/NotFound";

export const routes = [
  {
    path: "/",
    element: <ProductDetails />,
    label: "Product Details",
    icon: <FileExcelOutlined />,
  },
  {
    path: "/productcompare",
    element: <ProductCompare />,
    label: "Product Compare",
    icon: <FileSyncOutlined />,
  },
  { path: "*", element: <NotFound /> },
];
