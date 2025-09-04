interface CTAProps {
    onClick: () => void
}

const CTA:React.FC<CTAProps> = ({onClick}) => {
    return (
        <>  
            <button onClick={onClick}> Purchase (Click and Collect)</button>
        </>
    )
}

export default CTA;