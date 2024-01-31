import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

type PowerWasherProps = {
  imageBefore: string;
  imageAfter: string;
};

const PowerWasher: React.FC<PowerWasherProps> = ({ imageBefore, imageAfter }) => {
    const [maskPosition, setMaskPosition] = useState({ x: -100, y: -100 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    console.log(imageAfter, imageBefore);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setMaskPosition({ x, y });
        }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);




return (
    <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{position: 'relative', width: '300px', height: 40}}
        >

    </div>
)
//     return (
//         <div
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             style={{ position: 'relative', width: '300px', height: '300px', overflow: 'hidden' }}
//         >
//             <img src={imageAfter} alt="After" style={{ width: '100%', height: '100%', zIndex: 10 }} />

//             <motion.div
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundImage: `radial-gradient(circle 30px at ${maskPosition.x}px ${maskPosition.y}px, transparent, black)`,
//                     maskImage: `radial-gradient(circle 30px at ${maskPosition.x}px ${maskPosition.y}px, transparent, black)`,
//                     maskMode: 'alpha',
//                     backgroundColor: 'black',
//                     mixBlendMode: 'multiply',
//                     opacity: isHovered ? 1 : 0,
//                 }}
//             >
//                <img src={imageBefore} alt="Before" style={{ width: '100%', height: '100%', zIndex: 10 }} /> 
//             </motion.div>
//         </div>
//     );
// }

export default PowerWasher;
