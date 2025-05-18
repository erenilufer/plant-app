import React from "react";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import HapticWrapper from "./HapticWrapper";
import colors from "../constants/colors";
import StyledText from "./ui/StyledText";
import { wp, hp, fs, spacing } from "../utils/dimensions";

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onPress,
  title,
  style,
}) => {
  return (
    <HapticWrapper style={[styles.button, style]} onPress={onPress}>
      <StyledText variant="semiBold" style={styles.buttonText}>
        {title}
      </StyledText>
    </HapticWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: wp(3),
    width: "100%",
    alignItems: "center",
    zIndex: 1000,
    marginBottom: spacing.xl,
    paddingVertical: spacing.sm,
    marginTop: hp(2),
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: fs(15),
  },
});

export default PrimaryButton;
