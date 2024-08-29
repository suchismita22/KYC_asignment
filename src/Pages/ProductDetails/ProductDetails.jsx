import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setTotal,
  setSelectedProducts,
  removeSelectedProducts,
} from "../../Store/Slices/ProductSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const stateProducts = useSelector((state) => state.product.products);
  const stateTotal = useSelector((state) => state.product.total);
  const limitExceed = useSelector((state) => state.product.compareLimit);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const addToCompare = (item) => {
    let updatedItem = { ...item, selected: true };
    dispatch(setSelectedProducts(updatedItem));
    if (limitExceed) {
      return null;
    } else {
      setData((prevData) =>
        prevData.map((it) =>
          it.id === item.id ? { ...it, selected: true } : it
        )
      );
    }
    window.alert("Added to compare")
  };

  const removeFromCompare = (item) => {
    let updatedItem = { ...item, selected: false };
    dispatch(removeSelectedProducts(updatedItem));
    setData((prevData) =>
      prevData.map((it) =>
        it.id === item.id ? { ...it, selected: false } : it
      )
    );
    window.alert("Removed from compare")
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      sorter: true,
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      render: (text, record) => (
        <img src={record.thumbnail} alt={record.title} style={{ width: 50 }} />
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: "25%",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => `${price} $`,
      sorter: true,
      width: "10%",
    },
    {
      title: "Discount %",
      dataIndex: "discountPercentage",
      render: (discountPercentage) => `${discountPercentage} %`,
      sorter: true,
      width: "10%",
    },
    {
      title: "Action",
      key: "id",
      render: (text, record) =>
        record.selected === false ? (
          <Button key={record.id} onClick={() => addToCompare(record)}>
            Compare
          </Button>
        ) : (
          <Button key={record.id} onClick={() => removeFromCompare(record)}>
            Remove
          </Button>
        ),
    },
  ];

  const fetchData = () => {
    setLoading(true);
    // console.log("stateeeee",stateProducts);
    if(stateProducts.length > 0){
      setData(stateProducts);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: stateTotal,
        },
      });
      setLoading(false);
    } else {
      fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then(({ products, total }) => {
          products.map((item) => {
            item["selected"] = false;
          });
          dispatch(setProducts(products));
          dispatch(setTotal(total));
          setData(products);
          setLoading(false);
          setTableParams({
            ...tableParams,
            pagination: {
              ...tableParams.pagination,
              total: total,
            },
          });
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div style={{ height: "90%", width: "95%", margin: "20px" }}>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        size="small"
        style={{ width: "100%", height: "100%" }}
        scroll={{ y: 450, x: 600 }}
      />
    </div>
  );
};
export default ProductDetails;
