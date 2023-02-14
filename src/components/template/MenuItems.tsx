import Link from 'next/link'
interface MenuItemsProps {
  url?: string,
  text: string,
  icon: any,
  className?: string,
  onClick?: () => void
}
export function MenuItems(props: MenuItemsProps) {

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      <Link href={props.url || '#'}>
        <div className={`flex flex-col
        justify-center
        items-center h-20 w-20
        ${props.className}`}>

          {props.icon}
          <span className='text-xs font-light text-gray-600'>
            {props.text}
          </span>
        </div>
      </Link>
    </li>
  )
}