import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../Style/Style.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WithStyleButton from "../HOC/StyleButton";

const LoginButton = ({ children, ...props }) => {
  return (
    <Button {...props} size="md" colorScheme="blue" type="submit">
      {children}
    </Button>
  );
};

const StyledLoginButton = WithStyleButton(LoginButton);

import Loading from "../Component/Loading";
const Login = () => {
  const name = useSelector((state) => state.login.username);
  const pass = useSelector((state) => state.login.password);
  console.log("redux name : ", name);
  console.log("reduk pass : ", pass);

  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validation = (e) => {
    e.preventDefault();

    if (userName == name && password == pass) {
      console.log("benar");

      setLoading(true);
      setTimeout(() => {
        // Setelah selesai loading, atur status loading menjadi false
        navigate("/dashboard");
      }, 1000); // Contoh: Loading selama 2 detik

      //   navigate("/dashboard");
    } else {
      console.log("Password Salah");
    }
  };

  return (
    <>
      <div>
        {loading ? (
          <div className="l90">
            <Loading />
          </div>
        ) : (
          <div className="l1">
            <div className="l3">
              <Card>
                <CardBody>
                  <form onSubmit={validation}>
                    <div className="l2">
                      <div>
                        <h1>Login</h1>
                      </div>

                      <div className="l4">
                        <label>Username</label>
                        <Input
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                      </div>
                      <div>
                        <label>Password</label>
                        <Input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <StyledLoginButton>Login</StyledLoginButton>
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
