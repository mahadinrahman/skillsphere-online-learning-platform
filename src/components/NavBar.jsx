'use client';
import Link from "next/link";
import {GraduationCap} from '@gravity-ui/icons';
import { Avatar, Button } from "@heroui/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const NavBar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <p className="font-bold md:font-extrabold text-lg md:text-2xl flex items-center gap-2 text-fuchsia-900 "><GraduationCap className="w-8 h-8"/>SkillSphere</p>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
            <li><Link href="/" className={` ${pathname === "/" ? "font-bold text-fuchsia-900" : ""}`}>Home</Link></li>
      <li><Link href="/courses" className={` ${pathname === "/courses" ? "font-bold text-fuchsia-900" : ""}`}>Courses</Link></li>
      <li><Link href="/profile" className={` ${pathname === "/profile" ? "font-bold text-fuchsia-900" : ""}`}>My Profile</Link></li>
        </ul>
        {
        user?
        <div className="flex gap-2">
        <Button variant="danger" onClick={async()=>{await authClient.signOut(); toast.success("Signed out successfully!");}}>Sign Out</Button>
         <Avatar>
        <Avatar.Image alt="User Image" src={user?.image} />
        <Avatar.Fallback className="text-xl">{user?.name[0]}</Avatar.Fallback>
      </Avatar>
        </div>
        
        :
        
        <><div className="space-x-2 flex ">
       <Link href="/signin">
      <Button  className={pathname === "/signin" ? "bg-fuchsia-900 text-white font-bold" : "text-fuchsia-900 bg-white border-2 border-fuchsia-900 font-semibold"} >
        Sign In
      </Button>
    </Link>
    <Link href="/register">
      <Button   className={pathname === "/register" ? "bg-fuchsia-900 text-white font-bold" : "text-fuchsia-900 bg-white border-2 border-fuchsia-900 font-semibold"}>
        Register
      </Button>
    </Link>
       </div></>}
       

      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link href="/" className={`block py-2 ${pathname === "/" ? "font-bold text-fuchsia-900" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className={`block py-2 ${pathname === "/courses" ? "font-bold text-fuchsia-900" : ""}`}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="/profile" className={`block py-2 ${pathname === "/profile" ? "font-bold text-fuchsia-900" : ""}`}>
                My Profile
              </Link>
            </li>
          </ul>
          
        </div>
        
      )}
      
    </nav>


          
        </div>
    );
};

export default NavBar;