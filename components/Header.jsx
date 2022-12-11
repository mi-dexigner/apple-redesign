import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MagnifyingGlassIcon,ShoppingBagIcon,UserIcon } from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

const Header = () => {
    const session = false;
    const items = useSelector(selectBasketItems);
    console.log(items);
    const signOut = ()=>{
        alert();
    }
    const signIn = ()=>{
        alert();
    }

  return (
    <header className="sticky top-0 z-[999] flex w-full items-center justify-between bg-[#e7ecee] p-4">
        <div className="flex items-center justify-center md:w-1/5">
        <Link href={'/'}>
      <div className=" relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
        <Image src="https://rb.gy/vsvv2o" fill className="logoHeight" alt="Logo" />
      </div>
      </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link className="headerLink" href={'/'}>Product</Link>
        <Link className="headerLink" href={'/'}>Expore</Link>
        <Link className="headerLink" href={'/'}>Support</Link>
        <Link className="headerLink" href={'/'}>Business</Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
        <div className="relative cursor-pointer">
        {items.length > 0 && (
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">{items.length}</span>
            )}
            <ShoppingBagIcon className="headerIcon" />
            
        </div>
        </Link>
        {session === true ?(
                <Image 
                src={
                    session.user?.image || 
                    "https://s.gravatar.com/avatar/3745990a425cf002fc133e48d120a397?s=80"
                }
                alt=""
                width={34}
                height="34"
                onClick={()=>signOut()}
                />
            ):(
                <UserIcon className="headerIcon" onClick={()=>signIn()} />
            )
            
            }
      </div>
    </header>
  );
};

export default Header;
