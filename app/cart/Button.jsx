const Button = ({ onClick, disabled, buttonText }) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        className="rounded-lg bg-sky-500 px-5 py-2 text-white shadow-md hover:shadow-lg disabled:opacity-60"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
