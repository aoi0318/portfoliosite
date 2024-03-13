import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const flexmenu = () => {
  return (
    <div>
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
  )
}

export default flexmenu
