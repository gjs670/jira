import { useEffect } from "react";
import { Project } from "types/project";
import { cleanData } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useProject = (params?: Partial<Project>) => {
  const request = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(request("projects", { data: cleanData(params || {}) }));
  }, [params]);

  return result;
};
