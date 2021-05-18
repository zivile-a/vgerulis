import NavItem from './components/NavItem';

const navItems = [
  { text: 'PRODUCTS', route: '/' },
  { text: 'VISION', route: '/vision' },
];

function NavBar() {
  return (
    <nav className="bg-blue-300">
      <ul className="flex">
        {navItems.map((x) => (
          <NavItem key={x.route} {...x} />
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
