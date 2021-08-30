import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { SEARCH } from "../../../Queries/search";
import debounce from "lodash/debounce";
import { toast } from "react-toastify";

export const useNav = (setSearchResults) => {
  const [searchParam, setSearchParam] = useState({
    query: "",
    type: "USER",
    last: 30,
  });

  const [getUsers, { loading: searchLoading }] = useLazyQuery(SEARCH, {
    onCompleted: ({ search: { userCount, nodes } }) => {
      setSearchResults({
        userCount,
        nodes,
      });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Something went wrong!");
    },
  });

  const setSearch = (text) => {
    setSearchParam({ ...searchParam, query: text });
    return debounce(
      () =>
        getUsers({
          variables: { ...searchParam, query: text },
        }),
      300,
      { leading: true }
    )();
  };

  return {
    searchInput: searchParam.query,
    setSearch,
    searchLoading,
  };
};
