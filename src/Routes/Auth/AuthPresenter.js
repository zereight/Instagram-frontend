import React from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Helmet from "react-helmet";

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

export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret,
}) => {
  return (
    <Wrapper>
      <Form>
        {action === "logIn" && (
          <>
            <Helmet>
              <title>Log In | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input type="email" {...email} placeholder="Email" />
              <Button text="Log In" />
            </form>
          </>
        )}
        {action === "signUp" && (
          <>
            <Helmet>
              <title>Sign In | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input {...username} type="text" placeholder="Username" />
              <Input {...email} type="email" placeholder="email" />
              <Input {...firstName} type="text" placeholder="firstName" />
              <Input {...lastName} type="text" placeholder="lastName" />
              <Button text="Sign Up" />
            </form>
          </>
        )}
        {action === "confirm" && (
          <>
            <Helmet>
              <title>Confirm | Instagram</title>
            </Helmet>
            <form onSubmit={onSubmit}>
              <Input
                placeholder="Paste your secret code."
                required
                {...secret}
              />
              <Button text="Confirm" />
            </form>
          </>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" && (
          <>
            Don't have an account?{" "}
            <Link onClick={() => setAction("signUp")}>Sign up</Link>
          </>
        )}
        {action === "signUp" && (
          <>
            Have an account?{" "}
            <Link onClick={() => setAction("logIn")}>Log in</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
