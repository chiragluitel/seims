interface CTAProps {
    onClick: () => void
}

const CTA:React.FC<CTAProps> = ({onClick}) => {
    return (
        <div className="mt-8">
            <button
                onClick={onClick}
                className="w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
            >
                Purchase (Click and Collect)
            </button>
        </div>
    )
}

export default CTA;