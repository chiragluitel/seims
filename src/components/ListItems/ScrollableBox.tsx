import {useRef, useState, useEffect} from "react"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import CurrentPageIndicator from "./CurrentPageIndicator"

interface ScrollableBoxProps {
    children: React.ReactNode[]
}

const ScrollableBox: React.FC<ScrollableBoxProps> = ( {children} ) => {
    
    const scrollContainerRef = useRef<HTMLDivElement | null> (null)
    const [page, setPage] = useState(0)
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const productsPerPage = 6;

    const totalPages = Math.ceil(children.length / productsPerPage);

    const handleScroll = () =>{
        if (!scrollContainerRef.current) return;
        const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current;
        const currentPage = Math.round(scrollLeft/clientWidth);
        setPage(currentPage);

        setIsAtStart ( scrollLeft <=0 );
        setIsAtEnd ( scrollLeft + clientWidth >= scrollWidth - 1);
    }

    const handleNext = () =>{
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left: scrollContainerRef.current.clientWidth,
                behavior: 'smooth'
            })
        }
    }
    const handlePrev = () =>{
        if (scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left: -scrollContainerRef.current.clientWidth,
                behavior: 'smooth'
            })
        }
    }

    const handlePageClick = (page: number) => {
        setPage(page);
        if (scrollContainerRef.current){
            const scrollPosition = scrollContainerRef.current.clientWidth * page;
            scrollContainerRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            })
        }
    }

    useEffect (() => {
        const currentRef = scrollContainerRef.current;
        if (currentRef){
            currentRef.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (currentRef){
                currentRef.removeEventListener('scroll', handleScroll);
            }
        }
    }, [])

    return (
        <>
        <div className="relative">
            
            <div
                ref={scrollContainerRef}
                className="grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4"
                style={{ gridAutoFlow: 'column' }}
            >
                {Array.from({ length: totalPages }, (_, pageIndex) => (
                    <div
                        key={pageIndex}
                        className="grid grid-cols-3 grid-rows-2 gap-4 snap-start w-full p-4"
                    >
                        {children.slice(
                            pageIndex * productsPerPage,
                            (pageIndex + 1) * productsPerPage
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-4 absolute w-full top-1/2 -translate-y-1/2 px-4">
                <button
                    onClick={handlePrev}
                    className={`p-2 rounded-full bg-gray-200 text-gray-800 transition-opacity duration-300 ${isAtStart ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={isAtStart}
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className={`p-2 rounded-full bg-gray-200 text-gray-800 transition-opacity duration-300 ${isAtEnd ? 'opacity-0 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={isAtEnd}
                >
                    <FiChevronRight size={24} />
                </button>
            </div>

            <CurrentPageIndicator totalPages={totalPages} currentPage={page} onClick={handlePageClick}/>
        </div>
        </>
    )
}

export default ScrollableBox;