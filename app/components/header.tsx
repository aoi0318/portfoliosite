import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex p-[32px]">
      <header className="">portfoliosite</header>
      <div className="hidden sm:flex absolute right-0">
        <Link href="/" className="mr-[32px]">
          Home
        </Link>
        <Link href="/projects" className="mr-[32px]">
          Projects
        </Link>
        <Link href="/setting" className="mr-[32px]">
          Setting
        </Link>
        <Link href="/login" className="mr-[32px]">
          Login
        </Link>
      </div>
      <div className=" fixed right-0 mr-[32px] sm:hidden max-[180px]:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="i-lucide-menu size-6"></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="font-normal text-[#29261b] text-base font-serif">
              Home
            </DropdownMenuItem>
            <DropdownMenuItem className="font-normal text-[#29261b] text-base font-serif">
              Projects
            </DropdownMenuItem>
            <DropdownMenuItem className="font-normal text-[#29261b] text-base font-serif">
              Setting
            </DropdownMenuItem>
            <DropdownMenuItem className="font-normal text-[#29261b] text-base font-serif">
              Login
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default Header
