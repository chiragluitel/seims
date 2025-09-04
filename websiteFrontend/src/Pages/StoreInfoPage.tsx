import TwoColumn from "../components/Layout/TwoColumn";
import BackButton from "../components/BackButton";

const StoreLeft = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-hidden rounded-xl">
            <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590473!3d-37.81627974201119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzEzLjQiRQ!5e0!3m2!1sen!2s!4v1614033400000!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[420px]"
            />
        </div>
    </div>
);

const StoreRight = () => (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Store</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
            Find us at the heart of the community. Easy access, friendly faces, and fresh products every day. The map shows our exact location—drop by anytime during store hours.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-700">
            <div>
                <div className="text-sm text-gray-500">Address</div>
                <div className="font-semibold">123 Main Street, Kathmandu, Nepal</div>
            </div>
            <div>
                <div className="text-sm text-gray-500">Hours</div>
                <div className="font-semibold">Mon–Sun: 8:00 AM – 8:00 PM</div>
            </div>
        </div>
    </div>
);

const StoreInfoPage = () => {
    return (
        <div className="min-h-screen pt-25 bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-8">
                <BackButton linkTo='/' label='Back to Home' />
                <TwoColumn left={<StoreLeft/>} right={<StoreRight/>} />
            </div>
        </div>
    )
}

export default StoreInfoPage;