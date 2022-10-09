import { useSelector } from "react-redux";

export const useGlobalTheme = () => {
  const theme = useSelector((state) => state.theme.theme);
  return theme;
};
