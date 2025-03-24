const Button = ({ isSelected, text }) => {
  return (
    <button
      className={`mt-2 border  border-slate-300 p-2 text-center text-white rounded-2xl w-full  cursor-pointer ${
        isSelected ? "bg-green-600" : "bg-blue-600"
      }`}
    >
      {isSelected ? "Selected" : text}
    </button>
  );
};

export default Button;
