import { useDeviceSelectors } from "react-device-detect";

export const useIsMobile = (): boolean => {
  const [selectors] = useDeviceSelectors(window.navigator.userAgent);

  const { isMobile } = selectors;

  return isMobile as boolean;
};
