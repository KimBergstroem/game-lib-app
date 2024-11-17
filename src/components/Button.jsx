const Button = ({
  variant = "primary",
  children,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
  className = "",
}) => {
  const variants = {
    primary: "bg-indigo-900 hover:bg-indigo-800",
    secondary: "bg-gray-800 hover:bg-gray-700",
  };

  const baseStyles =
    "text-white px-3 py-2 rounded-full transition-colors text-sm break-words text-center";
  const variantStyle = variants[variant];
  const width = fullWidth ? "w-full" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyle} ${width} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
