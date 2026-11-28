import { useState } from "react";
import { useAddTransaction } from "@/hooks/useTransactions";

// Create a reusable form that accepts a type and success callback.
function TransactionForm({ type, onSuccess }) {
  // Get the mutation function and loading state.
  const { mutateAsync, isPending } = useAddTransaction();

  // Store the user's form inputs.
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    amount: "",
    transaction_date: new Date().toISOString().slice(0, 10),
  });

  // Store form error messages.
  const [message, setMessage] = useState("");

  // Handle changes to the form fields.
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the changed field without losing other values.
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear the previous error message.
    setMessage("");

    try {
      // Save the transaction through Supabase.
      await mutateAsync({
        ...formData,
        type,
        amount: Number(formData.amount),
      });

      // Notify the user that the transaction was saved.
      setMessage("Transaction saved successfully!");

      // Reset the form fields.
      setFormData({
        name: "",
        category: "",
        amount: "",
        transaction_date: new Date().toISOString().slice(0, 10),
      });

      // Notify the parent component to close the dialog.
      onSuccess?.();
    } catch (error) {
      // Display the error if saving fails.
      setMessage(error.message || "Something went wrong.");
    }
  };

  // Render the transaction form.
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Display the appropriate form heading. */}
      <h2 className="text-lg font-semibold">
        {type === "income" ? "Income Details" : "Expense Details"}
      </h2>

      {/* Collect the income source or expense name. */}
      <div className="space-y-2">
        <label htmlFor="name">
          {type === "income" ? "Income Source" : "Expense Name"}
        </label>

        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={type === "income" ? "e.g. Salary" : "e.g. Rent"}
          required
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Collect the transaction category. */}
      <div className="space-y-2">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full rounded-md border p-2"
        >
          <option value="">Select category</option>

          {/* Display income categories. */}
          {type === "income" ? (
            <>
              <option value="Salary">Salary</option>
              <option value="Business">Business</option>
              <option value="Freelance">Freelance</option>
              <option value="Investment">Investment</option>
              <option value="Other">Other</option>
            </>
          ) : (
            /* Display expense categories. */
            <>
              <option value="Rent">Rent</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Education">Education</option>
              <option value="Savings Contribution">Savings Contribution</option>
              <option value="Other">Other</option>
            </>
          )}
        </select>
      </div>

      {/* Collect the transaction amount. */}
      <div className="space-y-2">
        <label htmlFor="amount">Amount (TZS)</label>

        <input
          id="amount"
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Collect the transaction date. */}
      <div className="space-y-2">
        <label htmlFor="transaction_date">Date</label>

        <input
          id="transaction_date"
          name="transaction_date"
          type="date"
          value={formData.transaction_date}
          onChange={handleChange}
          required
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* Display any errors returned from the submission. */}
      {message && (
        <p className="text-sm text-destructive" role="alert">
          {message}
        </p>
      )}

      {/* Submit the transaction to Supabase. */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-primary p-2 text-primary-foreground disabled:opacity-50"
      >
        {isPending ? "Saving..." : "Save Transaction"}
      </button>
    </form>
  );
}

// Export the reusable transaction form.
export default TransactionForm;
