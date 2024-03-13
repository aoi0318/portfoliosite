import FlexMenu from './flexmenu'

const Header = () => {
  return (
    <div className="flex p-[32px]">
      <header className="">portfoliosite</header>
      <div className="hidden sm:flex absolute right-0">
        <a href="" className="mr-[32px]">
          Home
        </a>
        <a href="" className="mr-[32px]">
          Projects
        </a>
        <a href="" className="mr-[32px]">
          Setting
        </a>
        <a href="" className="mr-[32px]">
          Login
        </a>
      </div>
      <div className=" fixed right-0 mr-[32px] sm:hidden max-[180px]:hidden">
        <FlexMenu />
      </div>
    </div>
  )
}

export default Header
