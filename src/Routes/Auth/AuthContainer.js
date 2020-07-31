import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import { toast } from "react-toastify";
import { useMutation } from "react-apollo-hooks";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("duaxka7@naver.com");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value },
    update: (_, { data }) => {
      const { requestSecret } = data;
      if (!requestSecret) {
        toast.error("You don't have an account yet.");
        setTimeout(() => setAction("signUp"), 3000);
      }
    },
  });

  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (action === "logIn") {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("Eamil is required");
      }
    } else if (action == "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        createAccount();
      } else {
        toast.error("All filed are required");
      }
    }
  };

  return (
    <AuthPresenter>
      setAction={setAction}
      action={action}
      username={username}
      firstName={fistName}
      lastName={lastName}
      email={email}
      onLogin={onSubmit}
    </AuthPresenter>
  );
};
