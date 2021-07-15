---
---

# useDevice

O hook `useDevice` verifica a largura da janela para determinar o dispositivo usado e nos oferece três `booleans`, que são:
`isMobile`, `isTablet` e `isDesktop`. Com isso e possível utilizar valores diferentes e também renderizar elementos diferentes
baseado no dispositivo do usuário.

```js
import { useCallback, useEffect, useState } from "react";

const getDevice = (width) => {
  if (width < 600) return "mobile";
  if (width < 960) return "tablet";
  return "desktop";
};

const useDevice = () => {
  const [device, setDevice] = useState(getDevice(window.innerWidth));

  const onResize = useCallback(() => {
    setDevice(getDevice(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return {
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
};

export default useDevice;
```
