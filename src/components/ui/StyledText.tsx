import { Text, TextStyle, StyleSheet, TextProps } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
  variant?: "regular" | "bold" | "medium" | "light" | "semiBold" | "extraBold";
} & TextProps;

const StyledText = ({
  children,
  style,
  variant = "regular",
  ...props
}: Props) => {
  return (
    <Text {...props} style={[styles.text, styles[variant] || {}, style]}>
      {children}
    </Text>
  );
};

export default StyledText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "regular",
  },
  regular: {
    fontFamily: "regular",
  },
  bold: {
    fontFamily: "bold",
  },
  medium: {
    fontFamily: "medium",
  },
  light: {
    fontFamily: "light",
  },
  semiBold: {
    fontFamily: "semiBold",
  },
  extraBold: {
    fontFamily: "extraBold",
  },
});
