import { Header } from './components/header'
import { Post } from './components/post'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <Post
        author="Igor Silva"
        content="No dia a dia, Igor cuida de toda a trajetória dos colaboradores aqui da empresa, desde a chegada até o desligamento. Sempre pronto para ajudar com qualquer problema nas máquinas ou ferramentas do Workspace, ele é um verdadeiro super-herói do escritório!"
      />

      <Post
        author="Bruna FéLix"
        content="Aqui na IPNET, Bruna faz parte do time de SDR Inbound. Isso significa que ela é a primeira pessoa a fazer contato com aqueles que buscam conhecer ou adquirir os produtos e serviços que oferecemos, incluindo o suporte da IPNET e os produtos da Google Cloud."
      />

    </div>

  )
}

export default App
