import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "src/constants/query-keys";
import { helloApi } from "src/api/hello";

export const useFetchHello = () =>
  useQuery({
    queryKey: [QUERY_KEYS.HELLO],
    queryFn: helloApi.hello,
  });
