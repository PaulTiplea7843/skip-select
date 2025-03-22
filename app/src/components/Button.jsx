const Button = ({isSelected, text, onClick})=>{
    return(
        <button
        className={`mt-2 border border-slate-300 p-2 text-center text-white rounded-2xl w-1/2 cursor-pointer ${isSelected ? 'bg-green-600': 'bg-blue-600'}`}
        onClick={onClick}
      >
        {isSelected ? 'Selected': text}
      </button>
    )
}

export default Button;