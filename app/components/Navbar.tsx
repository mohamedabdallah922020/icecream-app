import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/ice-cream-cone.png" alt="Vanilla Ice Cream" className="h-12 mr-2" />
          <Link href="/" className="text-white font-bold text-lg">
           Ice Cream Shop
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li className="mr-4 divide-x-2 divide-white-500">
              <Link href="/order" className="text-white">
                Place Order
              </Link>
            </li>
            <li className="mr-4 divide-x divide-white-500">
              <Link href="/previous-order-list" className="text-white">
                Previous Order List
              </Link>
            </li>
            <li className="mr-4 divide-x divide-white-500">
              <Link href="/login" className="text-white">
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;