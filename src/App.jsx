import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'


export default function App(){
return (
<div className="min-h-dvh flex flex-col bg-slate-50 text-slate-800">
<Navbar/>
<main className="flex-1"> <Outlet/> </main>
<Footer/>
<WhatsAppFloat/>
</div>
)
}