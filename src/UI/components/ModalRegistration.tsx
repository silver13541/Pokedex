import React, { useState } from "react";
import { usePokemonContext } from "../../../context/PokemonContext";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

export const ModalRegistration = () => {
  const { modalRegistration, setModalRegistration } = usePokemonContext();
  const [login, setLogin] = useState(true);
  const router = useRouter();

  return (
    <>
      {modalRegistration && (
        <Container>
          <Modal>
            <Type>
              <Login
                onClick={() => setLogin(true)}
                style={{ background: login && "#73d677" }}
              >
                <p style={{ fontSize: 12 }}>Login</p>
              </Login>
              <SignIn
                onClick={() => setLogin(false)}
                style={{ background: !login && "#07D6F2" }}
              >
                <p style={{ fontSize: 12 }}>Sign in</p>
              </SignIn>
            </Type>
            <Email>
              <Text>Email</Text>
              <Input></Input>
            </Email>
            <Password style={{ marginBottom: 20 }}>
              <Text>Password</Text>
              <Input></Input>
            </Password>
            {login ? (
              <Forgot>Forgot password?</Forgot>
            ) : (
              <RememberMe>
                <Square></Square>
                <Forgot>Remember me</Forgot>
              </RememberMe>
            )}
            <Button
              onClick={() => {
                setModalRegistration(false);
                router.push("/pokedex");
              }}
            >
              {login ? "Login" : "Sign in"}
            </Button>
          </Modal>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  top: 1;
  left: 1;
`;

const Modal = styled.div`
  background: #ffffff;
  padding: 30px 50px;
  width: 360px;
  border-radius: 12px;
  height: 404px;
`;

const Type = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Login = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  width: 117px;
  height: 32px;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
`;

const SignIn = styled(Login)``;

const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Square = styled.div`
  border: 0.5px solid #5bc7fa;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;

const Email = styled.div`
  margin-top: 30px;
`;

const Password = styled.div`
  margin-top: 20px;
`;

const Forgot = styled.text`
  font-size: 12px;
  font-weight: bold;
  color: #5bc7fa;
`;

const Button = styled.button`
  width: 100%;
  height: 66px;
  margin-top: 34px;
  background: #f2cb07;
  cursor: pointer;
  border-width: 0;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
`;

const Text = styled.p`
  color: #bbc5d5;
  font-size: 12px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-top: 8px;
  padding-left: 10px;
  width: 100%;
  height: 44px;
  border: 1px solid#BBC5D5;
  border-radius: 6px;
`;
