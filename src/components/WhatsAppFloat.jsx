export default function WhatsAppFloat(){
const phone = import.meta.env.VITE_WHATSAPP
const url = `https://wa.me/${phone.replace(/[^\d+]/g,'')}?text=${encodeURIComponent('Hi Ravi Travels & Tours, I have a question about Dubai tours!')}`
return (
<a href={url} target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 rounded-full shadow-lg bg-green-500 text-white px-5 py-3">
WhatsApp Us
</a>
)
}