import { useContext } from "react";
import AppContext from "../context/AppContext";

export function useAppData(){return useContext(AppContext)}

console.log(useAppData)

export default useAppData