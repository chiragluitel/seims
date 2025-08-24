
///Implementing Search and OnClick Remaining
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CurrentPageIndicator from './CurrentPageIndicator';

type ScrollableBoxProps = {
  children: React.ReactNode;
};

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};

const ScrollableBox: React.FC<ScrollableBoxProps> = ({ children }) => {

  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const itemsPerPage = 8;
  const pages: React.ReactNode[][] = [];
  const childrenArray = React.Children.toArray(children);
  for (let i = 0; i < childrenArray.length; i += itemsPerPage) {
    pages.push(childrenArray.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;
    if (newPage < 0 || newPage >= totalPages) return;
    setPage([newPage, newDirection]);
  };

  const goToPage = (newPage: number) => {
    const newDirection = newPage > page ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  return (
    <div className="w-full max-w-5xl p-5 border-4 border-teal-400 rounded-2xl bg-white shadow-lg">
      <div className="relative h-90 overflow-hidden flex items-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            className="grid grid-cols-4 grid-rows-2 gap-4 w-full absolute"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
                paginate(1);
              } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
                paginate(-1);
              }
            }}
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>
        {/* <div
          className="arrow right-0 translate-x-1/2"
          onClick={() => paginate(1)}
        >›</div>
        <div
          className="arrow left-0 -translate-x-1/2"
          onClick={() => paginate(-1)}
        >‹</div> */}
      </div>
      <CurrentPageIndicator totalPages={totalPages} currentPage={page} onClick={goToPage} />
    </div>
  );
};


export default ScrollableBox;