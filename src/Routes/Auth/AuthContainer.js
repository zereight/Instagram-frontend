import React from "react";
import { useState } from "react";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "./AuthQueries";
import { toast } from "react-toastify";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: email.value,
    },
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: username.value,
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (action === "logIn") {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            // 유저가 존재하지 않을경우
            toast.error("You don't have an account yet, create one.", {
              position: "bottom-left",
              autoClose: 3000,
            });
            setTimeout(() => setAction("signUp"), 3000);
          } else {
            toast.success("Check your email, get the secret code.", {
              position: "bottom-left",
              autoClose: 3000,
            });
            setAction("confirm");
          }
        } catch (error) {
          toast.error(error.message, {
            position: "bottom-left",
            autoClose: 3000,
          });
        }
      } else {
        toast.error("Email is required", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    } else if (action === "signUp") {
      if (
        email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== ""
      ) {
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create Account", {
              position: "bottom-left",
              autoClose: 3000,
            });
          } else {
            toast.success("Account created! Log in now", {
              position: "bottom-left",
              autoClose: 3000,
            });
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch (error) {
          toast.error(error.message, {
            position: "botton-left",
            autoClose: 3000,
          });
        }
      } else {
        toast.error("All field are required", {
          position: "bottom-left",
          autoClose: 3000,
        });
      }
    } else if (action === "confirm") {
      try {
        const {
          data: { confirmSecret },
        } = await confirmSecretMutation();

        if (!confirmSecret) {
          toast.error("Secret code is invalid.", {
            position: "botton-left",
            autoClose: 3000,
          });
        } else {
          await localLogInMutation({
            variables: {
              token: confirmSecret,
            },
          });
          toast.success("Secret code is accepted.", {
            position: "bottom-left",
            autoClose: 3000,
          });
          //   window.location = "/";
        }
      } catch (error) {
        toast.error(error.message, {
          position: "botton-left",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <>
      <AuthPresenter
        setAction={setAction}
        action={action}
        username={username}
        email={email}
        firstName={firstName}
        lastName={lastName}
        onSubmit={onSubmit}
        secret={secret}
      />
    </>
  );
};
