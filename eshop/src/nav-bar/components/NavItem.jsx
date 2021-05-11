import { Link } from 'react-router-dom';

function NavItem({ text, route }) {
  return (
    <li className="p-2 font-semibold text-xl hover:text-white">
      <Link to={route}>{text}</Link>
    </li>
  );
}

export default NavItem;
