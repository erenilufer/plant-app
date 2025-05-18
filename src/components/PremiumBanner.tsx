import React from "react";
import { View, StyleSheet } from "react-native";
import { wp, hp, fs } from "../utils/dimensions";
import MailIcon from "./ui/icons/MailIcon";
import StyledText from "./ui/StyledText";
import RightArrow from "./ui/icons/RightArrow";
import HapticWrapper from "./HapticWrapper";
import colors from "../constants/colors";
import { usePaywall } from "../hooks/usePaywall";

const PremiumBanner = () => {
  const { presentPaywall } = usePaywall();
  const handlePress = () => {
    presentPaywall();
  };

  return (
    <HapticWrapper style={styles.premiumBanner} onPress={handlePress}>
      <MailIcon />
      <View style={styles.premiumTextContainer}>
        <StyledText variant="semiBold" style={styles.premiumText}>
          FREE Premium Available
        </StyledText>
        <StyledText style={styles.premiumSubtext}>
          Tap to upgrade your account!
        </StyledText>
      </View>
      <RightArrow color={colors.textGold} />
    </HapticWrapper>
  );
};

const styles = StyleSheet.create({
  premiumBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgPremium,
    borderRadius: 12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    marginHorizontal: wp(2),
    marginBottom: hp(2),
    gap: wp(2),
  },
  premiumTextContainer: {
    flex: 1,
  },
  premiumText: {
    fontSize: fs(16),
    color: colors.textGold,
    marginBottom: hp(0.5),
  },
  premiumSubtext: {
    fontSize: fs(13),
    color: colors.textGold,
    opacity: 0.7,
  },
  closeButton: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    backgroundColor: colors.overlayLight,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: fs(16),
    color: colors.textWhite,
  },
});

export default PremiumBanner;
