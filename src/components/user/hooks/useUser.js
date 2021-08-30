import { useQuery } from "@apollo/client";
import { useState } from "react";
import { USER } from "../../../Queries/user";
import { toast } from "react-toastify";


export const useUser = (profile) => {
  const [component, setComponent] = useState('repositories');

  const variables = {
    ...profile,
    repositories: profile.repositories > 100 ? 100 : profile.repositories,
    followers: profile.followers > 100 ? 100 : profile.followers,
    following: profile.following > 100 ? 100 : profile.following,
  };

  const { data, error, loading: userLoading } = useQuery(USER, {
    variables,
  })

  if (error) {
    console.log(error.message);
    toast.error("Something went wrong!");
  }

  return {
    component,
    setComponent,
    data,
    userLoading,
  }
};