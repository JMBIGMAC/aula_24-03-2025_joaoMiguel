const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name} - R$ {Number(expense.amount).toFixed(2)} ({expense.category})
          <button onClick={() => onDeleteExpense(expense.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;