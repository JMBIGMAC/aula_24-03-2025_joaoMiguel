import { useState, useEffect } from 'react';
import axios from 'axios';
import ExpenseList from '../componentes/ExpenseList';
import ExpenseForm from '../componentes/ExpenseForm';

const API_URL = 'https://cautious-cod-vxjg65wxwvg2w4xr-8000.app.github.dev/api/expenses/';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setExpenses(response.data));
  }, []);

  const addExpense = (expense) => {
    console.log("Enviando dados:", expense); // Verificar os dados enviados
    axios.post(API_URL, expense).then((response) => {
      setExpenses((prev) => [...prev, response.data]);
    });
  };

  const deleteExpense = (id) => {
    axios.delete(`${API_URL}${id}/`).then(() => {
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    });
  };

  return (
    <div>
      <h1>Lista de Gastos</h1>
      <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
      <h2>Adicionar Gastos</h2>
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
};

export default Home;