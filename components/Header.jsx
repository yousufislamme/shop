import Link from "next/link";

const Header = () => {
   return (
      <header>
         <div className="items-center justify-between px-10 py-3 bg-slate-700 flex text-white">
            <div>
               <Link href="/">
                  <h1>Logo</h1>
               </Link>
            </div>
            <div>
               <ul className="flex gap-5">
                  <li><Link href='/products'>Products</Link></li>
                  <li><Link href='/about'>About</Link></li>
                  <li><Link href='/cart'>Cart</Link></li>
               </ul>
            </div>
         </div>
      </header>
   );
};

export default Header;
