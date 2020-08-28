import React from "react";
import withRouter from "react-router-dom/withRouter";
import { useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";
import { GET_USER } from "./ProfileQueries";
export default withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    return <ProfilePresenter loading={loading} data={data} />;
  }
);
