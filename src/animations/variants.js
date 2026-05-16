export const fadeInUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 8px 40px rgba(10,8,4,0.18)' },
  hover: { y: -6, boxShadow: '0 0 32px rgba(201,162,39,0.22)', transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export const imageFloat = {
  rest:  { y: 0, scale: 1 },
  hover: { y: -4, scale: 1.05, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export const dropdown = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
};

export const accordionContent = {
  collapsed: { height: 0, opacity: 0, overflow: 'hidden' },
  expanded:  { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export const loadingExit = {
  opacity: 0, y: -20,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Design System compatibility object
export const variants = {
  fadeInUp,
  stagger: staggerContainer,
  cardLift: cardHover,
  imageFloat,
  dropdown,
  accordion: accordionContent,
  loadingExit
};
