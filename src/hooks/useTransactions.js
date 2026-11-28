// Import the React Query hooks.
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Import the service functions.
import {
  addTransaction,
  getTransactions,
} from "@/services/transaction.service";

// Create a hook for retrieving transactions.
export const useTransactions = () => {
  // Fetch transactions and manage their loading and error states.
  return useQuery({
    queryKey: ["transactions"], // Identify the cached transaction data.
    queryFn: getTransactions, // Execute the Supabase fetching function.
  });
};

// Create a hook for adding transactions.
export const useAddTransaction = () => {
  // Access the React Query cache.
  const queryClient = useQueryClient();

  // Create a mutation for inserting transactions.
  return useMutation({
    mutationFn: addTransaction, // Execute the Supabase insert function.

    // Run this after a transaction has been successfully saved.
    onSuccess: () => {
      // Refresh the transaction query so the table displays new data.
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
    },
  });
};
