import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Alimentação");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;

    onAddExpense({ name, amount: parseFloat(amount), category });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Descrição" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Valor" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Alimentação">Alimentação</option>
        <option value="Transporte">Transporte</option>
        <option value="Lazer">Lazer</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ExpenseForm;