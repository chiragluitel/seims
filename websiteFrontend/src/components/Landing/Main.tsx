import CTAButtons from "./CTAButtons";
import HeroImage from "./heroImage";
import Title from "./Title";

const Main = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-8">
                    <div className="flex-1 lg:max-w-2xl space-y-8">
                        <Title/>
                        <CTAButtons/>
                    </div>
                    
                    <div className="flex-1 lg:max-w-lg">
                        <HeroImage/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;