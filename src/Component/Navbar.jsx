import React from "react";
import { Input, Stack } from "@chakra-ui/react";
import shop from "../assets/shop.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="n1">
      <div className="n2">
        <div className="n3">
          <img src={shop} />
        </div>

        <div className="n5">
          <Input
            width={"100%"}
            height={"100%"}
            backgroundColor={"white"}
            placeholder="Cari Barang"
            size="sm"
          />

          <div style={{ marginRight: "10px" }}>
            <FaSearch />
          </div>
        </div>
        <div className="n4">
          <FaCartShopping color="white" />
          <p style={{ color: "white" }}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
