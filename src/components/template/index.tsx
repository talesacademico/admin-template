import { Content } from "./Content";
import { HeaderTemplate } from "./HeaderTemplate";
import { SideOfMenu } from "./SideOfMenu";

interface LayoutProps {
  title: string,
  subtitle: string,
  children?: any,
}

export function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <SideOfMenu />
      <div className="flex flex-col w-full p-7 bg-gray-300">
        <HeaderTemplate title={title} subtitle={subtitle} />
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}