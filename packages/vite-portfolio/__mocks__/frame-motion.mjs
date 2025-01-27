export const motion = {
    div: 'div',
    h1: 'h1',
    p: 'p',
    span: 'span',
    a: 'a',
  };
  
  export const AnimatePresence = ({ children }) => children;
  
  export const useScroll = () => ({ scrollYProgress: { get: () => 0 } });
  export const useSpring = () => 0;