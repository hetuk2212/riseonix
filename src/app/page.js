'use client';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';


export default function Home() {
  const [openImg, setOpenImg] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  return (
    <div>
      <main>
        <div className='relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh] overflow-hidden'>
          <img
  src = '/images/banners/hero-banner.jpeg'
  alt = 'Home Banner'
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black bg-opacity-40'></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <span className="text-white text-2xl md:text-4xl font-bold animate-fadeIn opacity-0">
              Empowering Ideas
            </span>
            <span className='text-white text-3xl md:text-8xl font-bold animate-fadeIn opacity-0 delay-300'>
              Through Innovation
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row justify-between p-10 md:p-20 gap-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold">WE ARE A CREATIVE</h2>
        <h2 className='text-4xl md:text-5xl font-bold'>AGENCY FROM INDIA</h2>
      </motion.div>

      <div className='flex justify-center gap-5'>
        {[1, 2, 3].map((id) => (
          <motion.button
            key = {id} onClick = {() => setOpenImg(id)} initial =
            {
              { opacity: 0, scale: 0.9 }
            } animate =
            {
              { opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }
            } transition = {
              {
                duration: 1, delay: id * 0.2
              }
            } > <
                motion.img
            src = {`/images/creativeAgency/creative${id}.jpg`} className =
                'h-72 md:h-96 object-cover rounded-lg shadow-md'
              animate={
    { width: openImg === id ? '100%' : '9rem' }}
              transition={
    { duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.button>
        ))}
      </div>
    </div>
      </main>
    </div>
  );
}
