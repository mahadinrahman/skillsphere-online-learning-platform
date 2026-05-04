
import Link from "next/link";
import {GraduationCap} from '@gravity-ui/icons';

const NavBar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      
      <p className="font-extrabold text-2xl flex items-center gap-2 text-fuchsia-900 "><GraduationCap className="w-8 h-8"/>SkillSphere</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/courses">Courses</Link></li>
      <li><Link href="/profile">My Profile</Link></li>
    </ul>
  </header>
</nav>
        </div>
    );
};

export default NavBar;