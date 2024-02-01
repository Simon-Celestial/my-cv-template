import React, {useEffect, useState} from 'react'
import styles from "./MouseFollower.module.scss";

export const MouseFollower = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let frame = 0;

        const handleMouseMove = (e) => {
            frame++;
            if (frame % 2) {
                const mouseX = e.pageX - window.scrollX;
                const mouseY = e.pageY - window.scrollY;
                setMousePosition({ x: mouseX, y: mouseY });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <>
            <div className={`${styles.mouseFollower} mouse-follower`}
                 style={{left: mousePosition.x, top: mousePosition.y}}></div>
            <div className={`${styles.mouseFollowerDot} mouse-follower-dot`}
                 style={{left: mousePosition.x, top: mousePosition.y}}></div>
        </>

    )
}
