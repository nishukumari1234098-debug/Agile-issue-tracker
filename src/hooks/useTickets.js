import { 
  useQuery, 
  useMutation, 
  useQueryClient 
} from "@tanstack/react-query";

import { 
  getTickets, 
  updateTicketStatus 
} from "../api/tickets";


export const useTickets = () => {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};



export const useUpdateTicket = () => {

  const queryClient = useQueryClient();


  return useMutation({

    mutationFn: ({ id, status }) =>
      updateTicketStatus(id, status),


    onMutate: async ({ id, status }) => {

      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });


      const previousTickets =
        queryClient.getQueryData(["tickets"]);


      queryClient.setQueryData(
        ["tickets"],
        (old = []) =>
          old.map((ticket) =>
            ticket.id === id
              ? {
                  ...ticket,
                  status,
                }
              : ticket
          )
      );


      return {
        previousTickets,
      };

    },


    onError: (error, variables, context) => {

      queryClient.setQueryData(
        ["tickets"],
        context.previousTickets
      );

    },


    onSettled: () => {

      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });

    },

  });

};

export const useDeleteTicket = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (ticketId) => {
      const response = await fetch(`http://localhost:5000/tickets/${ticketId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the ticket");
      }
    },
    onSuccess: () => {
      // Re-fetches the tickets list automatically after a successful delete
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
  });
};