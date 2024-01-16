import React, { useEffect } from "react";
import Navbar from "../Component/Navbar";
import "../Style/keranjang.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../Redux/KeranjangSlice";
const Keranjang = () => {
  const navigate = useNavigate();

  const a = useSelector((state) => state.keranjang.datas);
  console.log("keranjang: ", a);
  const dispatch = useDispatch();
  //   const harga = a.map((item) => parseInt(item.harga.replace(/\./g, ""), 10));
  const deletedDatas = (id) => {
    console.log("iddd", id);
    dispatch(deleteData(id));
  };

  return (
    <>
      <Navbar />
      <div className="tt">
        <p>Daftar Belanja</p>
      </div>
      <div className="k1">
        <div>
          {a.map((data) => (
            <Card key={data.id}>
              <CardBody>
                <div className="k2">
                  <div className="k3">
                    <img className="foto1" src={data.images} />
                    <div className="k4">
                      <p>{data.name}</p>
                      <p>Qty : {data.qty}</p>
                      <p>
                        Total Harga :
                        {parseInt(data.harga.replace(/\./g, ""), 10) * data.qty}
                      </p>
                    </div>
                    <div className="k5">
                      <Button
                        style={{
                          height: "25px",
                          width: "30px",
                          fontSize: "11px",
                        }}
                        colorScheme="blue"
                      >
                        Bayar
                      </Button>
                      <Button
                        onClick={() => deletedDatas(data.id)}
                        style={{
                          height: "25px",
                          width: "35px",
                          fontSize: "11px",
                        }}
                        colorScheme="red"
                      >
                        hapus
                      </Button>

                      <Button
                        onClick={() => navigate("/dashboard")}
                        style={{
                          height: "25px",
                          width: "55px",
                          fontSize: "9px",
                        }}
                        colorScheme="green"
                      >
                        dashboard
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Keranjang;
