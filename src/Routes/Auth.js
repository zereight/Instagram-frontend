import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Components/Button";
import Input from "../Components/Input";
import useInput from "../Hooks/useInput";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${(props) => props.theme.whiteBox};
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled.div`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
  }
`;

export default () => {
  const [action, setAction] = useState("logIn");

  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"Email"} type={"email"} {...email} />
            <Button text={"Log In"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"Username"} type={"text"} {...username} />
            <Input placeholder={"Email"} type={"email"} {...email} />
            <Input placeholder={"First Name"} type={"text"} {...firstName} />
            <Input placeholder={"Last Name"} type={"text"} {...lastName} />
            <Button text={"Sign Up"} />
          </form>
        )}
      </Form>

      <StateChanger>
        {action === "logIn" ? (
          <>
            Don't hava an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        ) : (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
