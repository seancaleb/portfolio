"use client";

import { motion, MotionProps as FramerMotionProps } from "framer-motion";
import { useState, useEffect, forwardRef } from "react";

type MotionProps = FramerMotionProps & React.HTMLAttributes<HTMLDivElement>;

const Motion = forwardRef<HTMLDivElement, MotionProps>(
    ({ children, ...props }, ref) => {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        if (!isClient) return <div className="opacity-0">{children}</div>;

        return (
            <motion.div ref={ref} {...props}>
                {children}
            </motion.div>
        );
    }
);

Motion.displayName = "Motion";

export default Motion;
