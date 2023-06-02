"use client";

import { useEffect, forwardRef } from "react";
import { useAnimate, useInView, stagger } from "framer-motion";

interface StagerMotionProps
    extends React.HTMLAttributes<HTMLUListElement | HTMLDivElement> {
    targetElement: keyof HTMLElementTagNameMap;
    parentElement?: "ul" | "div";
}

const StagerMotion = forwardRef<
    HTMLUListElement | HTMLDivElement,
    StagerMotionProps
>(({ targetElement, parentElement = "ul", children, ...props }, ref) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(
                targetElement,
                { opacity: 1 },
                {
                    delay: stagger(0.2, {
                        startDelay: 0.8,
                    }),
                    duration: 0.6,
                    type: "tween",
                }
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    return (
        <>
            {parentElement === "ul" ? (
                <ul
                    ref={(ref as React.ForwardedRef<HTMLUListElement>) || scope}
                    {...props}
                >
                    {children}
                </ul>
            ) : (
                <div
                    ref={(ref as React.ForwardedRef<HTMLDivElement>) || scope}
                    {...props}
                >
                    {children}
                </div>
            )}
        </>
    );
});

StagerMotion.displayName = "StagerMotion";

export default StagerMotion;
