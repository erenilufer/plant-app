import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = (percentage: number) => {
  return (width * percentage) / 100;
};

export const hp = (percentage: number) => {
  return (height * percentage) / 100;
};

export const fs = (size: number) => {
  return wp(size * 0.25);
};

export const screenWidth = width;
export const screenHeight = height;

export const spacing = {
  xs: wp(2),
  sm: wp(4),
  md: wp(6),
  lg: wp(8),
  xl: wp(10),
};
