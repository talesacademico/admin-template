
interface ContentProps {
  children?: any
}

export function Content({ children }: ContentProps) {
  return (
    <>
      <div className="flex flex-col mt-7">
        {children}
      </div>
    </>
  )
}