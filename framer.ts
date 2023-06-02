export const ease = [0.6, -0.05, 0.01, 0.99];

export const animateFadeUp = {
    initial: {
        y: 12,
        opacity: 0,
    },
    whileInView: { y: 0, opacity: 1 },
    viewport: {
        once: true,
        amount: 1,
    },
};

export const animateFade = {
    initial: {
        opacity: 0,
    },
    whileInView: { opacity: 1 },
    viewport: {
        once: true,
        amount: 1,
    },
};

export const transition = {
    type: "tween",
    ease,
    duration: 0.6,
};
