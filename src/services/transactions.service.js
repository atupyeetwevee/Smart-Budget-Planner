// Import the configured Supabase client.
import { supabase } from "@/lib/supabase";

// Create a function for saving a new transaction.
export const addTransaction = async (transaction) => {
  // Get the currently authenticated user.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  // Stop if the user cannot be retrieved.
  if (userError) throw userError;

  // Ensure that someone is logged in before inserting.
  if (!user) throw new Error("You must be logged in.");

  // Insert the transaction into the database.
  const { data, error } = await supabase
    .from("budget_transactions")
    .insert({
      ...transaction, // Include the form data.
      user_id: user.id, // Associate the record with this user.
    })
    .select()
    .single();

  // Throw any database error.
  if (error) throw error;

  // Return the newly created transaction.
  return data;
};

// Create a function for retrieving transactions.
export const getTransactions = async () => {
  // Get the currently authenticated user.
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  // Stop if authentication fails.
  if (userError) throw userError;

  // Ensure a user is logged in.
  if (!user) throw new Error("You must be logged in.");

  // Retrieve only this user's transactions.
  const { data, error } = await supabase
    .from("budget_transactions")
    .select("*")
    .eq("user_id", user.id)
    .order("transaction_date", { ascending: false });

  // Throw any database error.
  if (error) throw error;

  // Return the retrieved transactions.
  return data;
};
