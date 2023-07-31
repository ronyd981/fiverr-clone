import { useEffect, useState } from "react";

const useCarouselEffect = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 0) {
        setCounter(counter + 1);
      } else if (counter === 1) {
        setCounter(counter + 1);
      } else if (counter === 2) {
        setCounter(counter + 1);
      } else if (counter === 3) {
        setCounter(counter + 1);
      } else if (counter === 4) {
        setCounter(counter + 1);
      } else if (counter === 5) {
        setCounter(0);
      }
    }, 5500);

    return () => clearInterval(interval);
  }, [counter]);

  return counter;
};

export default useCarouselEffect;
