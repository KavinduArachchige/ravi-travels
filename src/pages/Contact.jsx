import LeadForm from '../components/LeadForm'
export default function Contact(){
return (
<div className="container py-10 grid md:grid-cols-2 gap-8">
<div>
<h1 className="text-3xl font-bold">Contact Us</h1>
<p className="text-slate-600">Call, WhatsApp, or send an inquiry. We’re quick!</p>
<div className="mt-4 card p-4">
<div><b>Phone:</b> +94 7X XXX XXXX</div>
<div><b>Email:</b> info@ravitravels.lk</div>
<div><b>Office:</b> Colombo, Sri Lanka</div>
</div>
</div>
<LeadForm/>
</div>
)
}