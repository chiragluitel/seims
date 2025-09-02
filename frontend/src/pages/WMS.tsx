import LowerWMS from "../components/WMS/MainPage/lowerWMS";
import UpperWMS from "../components/WMS/MainPage/upperWMS";

const WMS = () => {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white text-black font-inter">
            <header className="p-4 text-left">
                <h1 className="text-3xl font-bold">SEIMS Admin Center</h1>
            </header>
            <main className="flex-grow flex flex-col">
                <div className="flex-grow overflow-hidden flex flex-col" style={{ flex: '60%' }}>
                    <UpperWMS />
                </div>
                <hr className="bg-gray-900" />
                <div className="flex-grow overflow-hidden flex flex-col" style={{ flex: '40%' }}>
                    <LowerWMS />
                </div>
            </main>
        </div>
    );
};

export default WMS;