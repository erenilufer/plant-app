import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackNavigationProp, Screens } from "../../types/navigation";
import OnboardingBaseScreen from "../../components/Onboarding/OnboardingBaseScreen";
import { Image } from "expo-image";
import StyledText from "../../components/ui/StyledText";
import { wp, hp, fs, spacing } from "../../utils/dimensions";
import VStack from "../../components/ui/layout/VStack";
import HStack from "../../components/ui/layout/HStack";
import colors from "../../constants/colors";

const PlantIdentificationScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate(Screens.PlantCareGuidesScreen);
  };

  return (
    <OnboardingBaseScreen step={1} onContinue={handleContinue}>
      <VStack style={styles.container}>
        <VStack style={styles.header}>
          <VStack style={styles.titleContainer}>
            <HStack style={styles.titleRow}>
              <StyledText variant="medium" style={styles.title}>
                Take a photo to{" "}
              </StyledText>
              <View style={styles.highlightedTextContainer}>
                <StyledText variant="extraBold" style={styles.boldText}>
                  identify
                </StyledText>
                <Image
                  source={require("../../../assets/images/onboarding/brush.png")}
                  style={styles.brushImage}
                />
              </View>
            </HStack>
            <StyledText variant="medium" style={styles.title}>
              the plant!
            </StyledText>
          </VStack>
        </VStack>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/onboarding/scan.png")}
            style={styles.image}
            contentFit="contain"
          />
        </View>
      </VStack>
    </OnboardingBaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
    flex: 1,
  },
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
    fontSize: fs(28),
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  highlightedTextContainer: {
    position: "relative",
    alignSelf: "center",
    alignItems: "center",
  },
  boldText: {
    fontSize: fs(28),
    letterSpacing: -1,
  },
  brushImage: {
    width: wp(35),
    height: hp(1.5),
    position: "absolute",
    bottom: -hp(1.6),
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: hp(100),
    marginBottom: -hp(20),
    transform: [{ scale: 1.2 }],
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default PlantIdentificationScreen;
