const Title = () => {
    return (
        <div className="space-y-6">
            <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Welcome to{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                        SEIMS
                    </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Nepalese Grocery Store
                </h2>
            </div>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Fresh groceries, authentic Nepalese ingredients, and traditional products delivered to your doorstep. Your one-stop shop for quality food and household essentials.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Fresh Products</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Authentic Nepalese</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Affordable Prices</span>
                </div>
            </div>
        </div>
    )
}

export default Title;