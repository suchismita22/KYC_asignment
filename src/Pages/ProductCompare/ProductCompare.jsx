import React, { useEffect, useState } from "react";
import { Row, Col, Card, Flex, Typography } from "antd";
import { useSelector } from "react-redux";

const { Text } = Typography;

// const CompareContainer = ({products}) => {
//   if (products.length === 1) {
//     return (
//       <Row>
//         <Col span={12}>
//           <Card
//             style={{
//               width: 240,
//             }}
//             cover={<img alt="example" src={products[0].images} />}
//           >
//             <p>{products[0].title}</p>
//             <p>{products[0].brand}</p>
//             <p>Card content</p>
//           </Card>
//         </Col>
//         <Col span={12}>
//             <Button>Add Items to Compare</Button>
//         </Col>
//       </Row>
//     );
//   } else {
//     return (
//       <Row>
//         {products.map((product) => {
//           <Col>
//             <Card
//               style={{
//                 width: 240,
//               }}
//               cover={<img alt="example" src={product.images} />}
//             >
//               <p>{product.title}</p>
//               <p>{product.brand}</p>
//               <p>Card content</p>
//             </Card>
//           </Col>;
//         })}
//       </Row>
//     );
//   }
// };

const ProductCompare = () => {
  const [products, setProducts] = useState([]);

  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  useEffect(() => {
    setProducts(selectedProducts);
  }, [selectedProducts]);

  return selectedProducts.length > 0 ? (
    <div style={{ height: "90%", width: "95%", margin: "20px" }}>
      <Row justify={"space-evenly"}>
        {products.map((product) => (
          <Col>
            <Card
              style={{
                width: 280,
              }}
              cover={<img alt="example" src={product.images} />}
            >
              <Card.Meta title={product.title} description={product.brand} />
              <Flex gap="middle" vertical>
                <Text mark>Price: {product.price} $</Text>
                <Text mark> Discount: {product.discountPercentage} %</Text>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    // <CompareContainer products={products}/>
  ) : (
    <p>No items to compare</p>
  );
};

export default ProductCompare;
