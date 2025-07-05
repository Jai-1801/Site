import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, onClick }) => {
  // Disable animation for long text
  const isLong = title.length > 22;
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-blue-600 text-white px-7 py-3",
        containerClass
      )}
      onClick={onClick}
    >
      {leftIcon}
      <span
        className={
          isLong
            ? "block w-full font-general text-xs uppercase text-center whitespace-normal"
            : "relative inline-flex overflow-hidden font-general text-xs uppercase"
        }
        style={{ minWidth: 0, maxWidth: '100%' }}
      >
        {isLong ? (
          <span className="block w-full truncate">{title}</span>
        ) : (
          <>
            <span className="block w-full transition duration-500 group-hover:-translate-y-full">
              {title}
            </span>
            <span className="absolute left-0 top-0 block w-full translate-y-full transition duration-500 group-hover:translate-y-0">
              {title}
            </span>
          </>
        )}
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
