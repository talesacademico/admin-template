import { Layout } from "@/components/template";
import  useAppData from "@/data/hook/useAppData";


export default function Notifications() {

  const data = useAppData()
  console.log(data)

  return (
    <Layout
      title="Notificações"
      subtitle="ok">
      <p>conteudo</p>
    </Layout>
  )
}
