import clsx from 'clsx';
import { Link } from 'react-router-dom';

const defaultClasses = 'text-blue-400 hover:bg-gray-50 p-1 focus:outline-none rounded';

function Button({ className, children, to, onClick }) {
  const mergedClasses = clsx(defaultClasses, className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
