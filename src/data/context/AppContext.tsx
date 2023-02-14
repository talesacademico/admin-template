import { createContext, ReactNode } from "react";


type Tema = 'dark' | ''

interface AppContextProps {
  tema: Tema,
  children?: ReactNode,
  alterTema?: () => void
}

const AppContext = createContext({})

export function AppProvaider(props: AppContextProps) {

  function alterTema(){
    console.log('type')
  }

  return (
    <AppContext.Provider value={{
      tema: 'dark',
      alterTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext
