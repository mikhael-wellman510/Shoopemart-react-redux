import React from "react";
import Loading from "../Component/Loading";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// HOC
import aa from "../assets/a1.jpg";
import Navbar from "../Component/Navbar";
import { useSelector } from "react-redux";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.datas);
  const { id, images, name, harga, kota } = product;

  const products = id.map((productId, index) => ({
    id: productId,
    images: images[index],
    name: name[index],
    harga: harga[index],
    kota: kota[index],
  }));

  const nextPage = (id) => {
    navigate(`/detailProduct/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="d1">
        <div className="grid">
          {products.map((datas) => (
            <div key={datas.id}>
              <Card>
                <CardBody>
                  <img src={datas.images} />
                  <div className="dd1">
                    <center>
                      <div className="d2">
                        <p>{datas.name}</p>
                        <p>{datas.harga}</p>
                        <p>{datas.kota}</p>
                      </div>
                      <div className="dd2">
                        <Button
                          onClick={() => nextPage(datas.id)}
                          style={{
                            width: "80px",
                            height: "19px",
                            fontSize: "10px",
                          }}
                          colorScheme="green"
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </center>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  //   return null;
};

export default Dashboard;
