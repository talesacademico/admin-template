import { iconAlert, iconHome, iconLogout, iconSettings } from "../icons";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";

export function SideOfMenu() {
  const items = [
    { text: "Início", icon: iconHome, url: '/' },
    { text: "Ajustes", icon: iconSettings, url: '/settings' },
    { text: "Notificações", icon: iconAlert, url: '/notifications' },

  ]
  return (
    <aside className="flex flex-col">
      <div className={`
      h-20 w-20 bg-gradient-to-r
      from-indigo-500 to-purple-800
        flex flex-col items-center justify-center
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        {items.map((item, index) =>
          <MenuItems key={index}
            icon={item.icon} url={item.url}
            text={item.text} />
        )}
      </ul>
      <ul>
        <MenuItems onClick={()=>console.log('ok')} text="Sair" icon={iconLogout} />
      </ul>
    </aside>
  )
}