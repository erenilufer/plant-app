import React from "react";
import { View, StyleSheet } from "react-native";
import OnboardingBaseScreen from "../../components/Onboarding/OnboardingBaseScreen";
import { Image } from "expo-image";
import StyledText from "../../components/ui/StyledText";
import { wp, hp, fs, spacing } from "../../utils/dimensions";
import HStack from "../../components/ui/layout/HStack";
import VStack from "../../components/ui/layout/VStack";
import colors from "../../constants/colors";
import { usePaywall } from "../../hooks/usePaywall";

const PlantCareGuidesScreen = () => {
  const { presentPaywall } = usePaywall();
  const handleContinue = () => {
    presentPaywall();
  };

  return (
    <OnboardingBaseScreen step={2} onContinue={handleContinue}>
      <VStack style={styles.header}>
        <VStack style={styles.titleContainer}>
          <HStack style={styles.titleRow}>
            <StyledText variant="medium" style={styles.title}>
              Get plant{" "}
            </StyledText>
            <View style={styles.highlightedTextContainer}>
              <StyledText variant="extraBold" style={styles.boldText}>
                care guides
              </StyledText>
              <Image
                source={require("../../../assets/images/onboarding/brush.png")}
                style={styles.brushImage}
              />
            </View>
          </HStack>
        </VStack>
      </VStack>

      <VStack style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/onboarding/leaves.png")}
          style={[styles.leavesImage]}
        />
        <VStack style={styles.contentContainer}>
          <Image
            source={require("../../../assets/images/onboarding/phone.png")}
            style={styles.mainImage}
            contentFit="contain"
          />
          <Image
            source={require("../../../assets/images/onboarding/artwork.png")}
            style={styles.artworkImage}
            contentFit="contain"
          />
        </VStack>
      </VStack>
    </OnboardingBaseScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: "7%",
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  titleContainer: {
    position: "relative",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: fs(30),
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  highlightedTextContainer: {
    position: "relative",
    alignSelf: "center",
    alignItems: "center",
  },
  boldText: {
    fontSize: fs(30),
    letterSpacing: -1,
  },
  brushImage: {
    width: wp(37.5),
    height: hp(1.5),
    position: "absolute",
    bottom: -hp(1.6),
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: hp(60),
    marginBottom: -hp(70),
  },
  leavesImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ rotate: "-70deg" }],
    height: hp(50),
  },
  contentContainer: {
    position: "relative",
    flex: 1,
    width: "100%",
  },
  mainImage: {
    width: "100%",
    height: hp(65),
    bottom: hp(60),
    position: "absolute",
  },
  artworkImage: {
    width: wp(100),
    height: wp(100),
    position: "absolute",
    top: -hp(6),
    right: 0,
  },
});

export default PlantCareGuidesScreen;
