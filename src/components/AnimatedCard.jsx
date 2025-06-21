import { m } from "framer-motion";
import React from "react";
import { useAnimation } from "../contexts/AnimationContext";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AnimatedCard = ({
  children,
  className = "card group",
  delay = 0,
  index = 0,
  ...props
}) => {
  const { animationConfig } = useAnimation();
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <m.div
      ref={ref}
      className={className}
      {...animationConfig.fadeInOnScroll(isVisible)}
      transition={{
        ...animationConfig.fadeInOnScroll(isVisible).transition,
        delay: delay + index * 0.1,
      }}
      {...props}
    >
      {children}
    </m.div>
  );
};

export default AnimatedCard;
