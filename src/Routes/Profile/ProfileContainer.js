import React from "react";
import withRouter from "react-router-dom/withRouter";
import { useQuery, useMutation } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { GET_USER, LOG_OUT } from "./ProfileQueries";
export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    const logOut = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
  }
);
