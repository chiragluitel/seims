import TwoColumn from "../components/Layout/TwoColumn";
import BackButton from "../components/BackButton";

const AboutLeft = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-gray-50">
            <img src="/logoexample.jpg" alt="SEIMS" className="w-full aspect-[4/3] object-contain p-8"/>
        </div>
    </div>
);

const AboutRight = () => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900">About SEIMS</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
            SEIMS is your community Nepalese grocery store. We focus on freshness, authenticity, and everyday convenience. From pantry staples to seasonal finds, our shelves are stocked with products we’re proud to share with our neighbors.
        </p>
        <ul className="mt-6 space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/><span>Authentic Nepalese selection</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/><span>Quality and freshness you can trust</span></li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"/><span>Friendly, reliable service</span></li>
        </ul>
    </div>
);

const AboutPage = () => {
    return (
        <div className="min-h-screen pt-25 bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-8">
                <BackButton linkTo='/' label='Back to Home' />
                <TwoColumn left={<AboutLeft/>} right={<AboutRight/>} />
            </div>
        </div>
    )
}

export default AboutPage;

