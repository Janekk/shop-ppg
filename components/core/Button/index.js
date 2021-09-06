import cx from "classnames";

const Button = ({ children, isSelected, className, ...props }) => {
  return (
    <button
      type="button"
      className={cx(
        "text-sm font-bold border-2 border-black disabled:border-gray disabled:bg-gray disabled:cursor-not-allowed",
        {
          "bg-black text-white": isSelected,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
