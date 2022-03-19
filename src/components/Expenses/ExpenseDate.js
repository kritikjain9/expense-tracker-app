import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const MM = props.date.toLocaleString("en-US", { month: "long" });
  const DD = props.date.toLocaleString("en-US", { month: "2-digit" });
  const YY = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{MM}</div>
      <div className="expense-date__day">{DD}</div>
      <div className="expense-year">{YY}</div>
    </div>
  );
};

export default ExpenseDate;
