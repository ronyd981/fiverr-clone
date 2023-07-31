import { useState, useEffect } from "react";

interface InitialState {
  firstMenu: boolean;
  secondMenu: boolean;
}

const useMenuEffect = () => {
  const [hasStyle, setHasStyle] = useState<InitialState>({
    firstMenu: false,
    secondMenu: false,
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 && window.scrollY < 200) {
        setHasStyle({
          firstMenu: true,
          secondMenu: false,
        });
      } else if (window.scrollY > 200) {
        setHasStyle({
          firstMenu: true,
          secondMenu: true,
        });
      } else {
        setHasStyle({
          firstMenu: false,
          secondMenu: false,
        });
      }
    });
  }, []);

  return hasStyle;
};

export default useMenuEffect;
