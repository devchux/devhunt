import { useState } from "react";

export const useUser = () => {
  const [component, setComponent] = useState('repo-list');

  return {
    component,
    setComponent,
  }
};