import './App.css'
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/api/expenses/";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => setExpenses(response.data));
  }, []);

  return <div>{/* Componentes aqui */}</div>;
};

export default App;