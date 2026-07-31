import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../api/tickets";

export const useTickets = () => {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
  });
};