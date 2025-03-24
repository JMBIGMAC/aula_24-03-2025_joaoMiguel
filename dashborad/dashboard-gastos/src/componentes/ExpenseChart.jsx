import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ExpenseChart = ({ expenses }) => {
  const data = Object.values(
    expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) acc[expense.category] = { name: expense.category, value: 0 };
      acc[expense.category].value += expense.amount;
      return acc;
    }, {})
  );

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8">
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseChart;