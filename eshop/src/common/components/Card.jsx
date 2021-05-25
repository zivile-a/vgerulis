function Card({ className, children }) {
  return <div className={`bg-white border shadow-sm rounded p-2 ${className}`}>{children}</div>;
}

export default Card;
