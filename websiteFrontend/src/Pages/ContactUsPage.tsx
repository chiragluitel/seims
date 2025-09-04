import TwoColumn from "../components/Layout/TwoColumn";
import BackButton from "../components/BackButton";

const ContactLeft = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50 p-8">
            <h2 className="text-xl font-semibold text-gray-900">Get in Touch</h2>
            <p className="mt-2 text-gray-700">We’re here to help with product queries, stock checks, or general questions.</p>
            <div className="mt-6 space-y-4 text-gray-700">
                <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="font-semibold">(555) 123-4567</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold">support@seims.store</div>
                </div>
                <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="font-semibold">123 Market St, Your City</div>
                </div>
            </div>
        </div>
    </div>
);

const ContactRight = () => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
            Send us a message and we’ll get back to you as soon as we can. For urgent requests, please call the store directly.
        </p>
        <form className="mt-6 grid grid-cols-1 gap-4">
            <input className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your name"/>
            <input type="email" className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Email address"/>
            <textarea rows={5} className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Message"/>
            <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors">Send Message</button>
        </form>
    </div>
);

const ContactUsPage = () => {
    return (
        <div className="min-h-screen pt-25 bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-8">
                <BackButton linkTo='/' label='Back to Home' />
                <TwoColumn left={<ContactLeft/>} right={<ContactRight/>} />
            </div>
        </div>
    )
}

export default ContactUsPage;