import { User } from "Pages/HooksTest/Search";
import { useEffect } from "react";
import { cleanData } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (params?: Partial<User>) => {
  const request = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(request("users", { data: cleanData(params || {}) }));
  }, [params]);

  return result;
};
