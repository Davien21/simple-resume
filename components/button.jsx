function Button({ children, className, ...rest }) {
  let buttonClasses = "btn ";
  if (className) buttonClasses += className;
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
