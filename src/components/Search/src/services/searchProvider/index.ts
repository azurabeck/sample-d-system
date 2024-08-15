import api from "../../api";
import { useMutation } from "@tanstack/react-query";

interface ISearch {
  pathUrl: string;
  paramsUrl: string;
}

export function SearchProvider() {
  const { mutateAsync: getSearchValues } = useMutation(
    ["getRequestConfigByPage"],
    async (search: ISearch) => {
      return await api.get(`${search.pathUrl}${search.paramsUrl}`);
    },
  );

  return {
    getSearchValues,
  };
}
