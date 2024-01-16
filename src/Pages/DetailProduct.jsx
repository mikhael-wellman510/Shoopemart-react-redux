import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "../Style/Dashboard.css";
import "../Style/Style.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQty, minQty } from "../Redux/ProductSlice";
import { addData } from "../Redux/KeranjangSlice";
const DetailProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.datas);
  const quantity = useSelector((state) => state.product.datas.qty);

  const { id, images, name, harga, kota } = product;

  const products = id.map((productId, index) => ({
    id: productId,
    images: images[index],
    name: name[index],
    harga: harga[index],
    kota: kota[index],
  }));

  // Hasil Params
  const { idProduct } = useParams();

  const productById = products.find((product) => product.id == idProduct);
  // console.log("haha : ", productById);
  //Set HargaTotal
  const [hargaTotal, setHargaTotal] = useState("");

  const change = productById.harga.replaceAll(".", "");
  const [count, setCount] = useState(1);
  const hargaFix = parseInt(change);

  // const datas = {
  //   id: productById.id,
  // };
  // console.log("hha", { ...productById, count: count });
  const datas = { ...productById, qty: count };
  useEffect(() => {
    setHargaTotal(hargaFix);
  }, []);

  const add = () => {
    // dispatch(addQty());
    setCount(count + 1);

    setHargaTotal(hargaTotal + hargaFix);
  };
  const min = () => {
    // dispatch(minQty());
    if (count > 1) {
      setCount(count - 1);
      setHargaTotal(hargaTotal - hargaFix);
    }
  };

  const addToCart = () => {
    dispatch(addData(datas));
  };
  const navigate = useNavigate();
  const beliSekarang = () => {
    navigate("/keranjang");
  };

  return (
    <>
      <Navbar />

      <div className="t3">
        <Card>
          <CardBody>
            <div className="t0">
              <img className="foto" src={productById.images} />

              {/* card desc */}
              <div className="t7">
                <div>
                  <p>{productById.name}</p>
                </div>
                <div className="t9">
                  <p>Rating : 5.0</p>
                  <p>48 ulasan</p>
                  <p>104 terjual</p>
                </div>
                <div>
                  <p>Total Harga : {hargaTotal}</p>
                </div>
                {/* // Pengiriman */}
                <div className="o1">
                  <div>
                    <p>Pengiriman</p>
                  </div>
                  <div className="ok1">
                    <p>Pengiriman Ke : Kota Bogor</p>
                    <p>Ongkos Kirim : Rp.9000</p>
                  </div>
                </div>
                {/* Kuantitas */}
                <div className="o2">
                  <div>
                    <p>Kuantitas</p>
                  </div>
                  <div className="o3">
                    <Button
                      onClick={() => min()}
                      style={{
                        color: "black",
                        border: "1px black solid",
                        height: "20px",
                        width: "20px",
                      }}
                      colorScheme="white"
                    >
                      -
                    </Button>
                    <p>{count}</p>
                    <Button
                      onClick={() => add()}
                      style={{
                        color: "black",
                        border: "1px black solid",
                        height: "20px",
                        width: "20px",
                      }}
                      colorScheme="white"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="as1">
                  <Button
                    onClick={() => addToCart()}
                    style={{
                      height: "30px",
                      width: "90px",
                      fontSize: "12px",
                    }}
                    colorScheme="blue"
                  >
                    Add To Cart
                  </Button>
                  <Button
                    onClick={() => beliSekarang()}
                    style={{
                      height: "30px",
                      width: "90px",
                      fontSize: "12px",
                    }}
                    colorScheme="green"
                  >
                    Beli Sekarang
                  </Button>
                  <Button
                    onClick={() => navigate("/dashboard")}
                    style={{
                      height: "30px",
                      width: "90px",
                      fontSize: "12px",
                    }}
                    colorScheme="green"
                  >
                    Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default DetailProduct;
