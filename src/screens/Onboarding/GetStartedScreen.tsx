import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingStackNavigationProp, Screens } from "../../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StyledText from "../../components/ui/StyledText";
import { wp, hp, fs, spacing } from "../../utils/dimensions";
import { Image } from "expo-image";
import HapticWrapper from "../../components/HapticWrapper";
import colors from "../../constants/colors";
import VStack from "../../components/ui/layout/VStack";
import HStack from "../../components/ui/layout/HStack";

const GetStartedScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();
  const { top } = useSafeAreaInsets();
  const handleNavigate = () => {
    navigation.navigate(Screens.PlantIdentificationScreen);
  };
  return (
    <ImageBackground
      source={require("../../../assets/images/onboarding/welcome-background.png")}
      style={[styles.container, { paddingTop: top }]}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <View style={styles.header}>
          <StyledText style={styles.title}>
            Welcome to{" "}
            <StyledText variant="bold" style={styles.boldTitle}>
              PlantApp
            </StyledText>
          </StyledText>
          <StyledText style={styles.subtitle}>
            Identify more than 3000+ plants and{"\n"}88% accuracy.
          </StyledText>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/onboarding/plant.png")}
            style={styles.plantImage}
            contentFit="contain"
          />
        </View>

        <View style={styles.buttonContainer}>
          <HapticWrapper style={styles.button} onPress={handleNavigate}>
            <Text style={styles.buttonText}>Get Started</Text>
          </HapticWrapper>
        </View>

        <VStack>
          <StyledText style={styles.termsText}>
            By tapping next, you are agreeing to PlantID
          </StyledText>
          <HStack style={{ justifyContent: "center" }}>
            <StyledText
              variant="light"
              style={[styles.termsText, styles.termsLink]}
            >
              Terms of Use{" "}
            </StyledText>
            <StyledText variant="regular" style={styles.termsText}>
              &{" "}
            </StyledText>
            <StyledText
              variant="regular"
              style={[styles.termsText, styles.termsLink]}
            >
              Privacy Policy
            </StyledText>
          </HStack>
        </VStack>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: spacing.md,
    paddingBottom: hp(10),
  },
  header: {
    marginBottom: hp(8),
    paddingHorizontal: wp(8),
  },
  title: {
    marginBottom: hp(1),
    color: colors.textPrimary,
    fontSize: fs(28),
  },
  boldTitle: {
    color: colors.textPrimary,
  },
  subtitle: {
    color: colors.textPrimary,
    opacity: 0.7,
    fontSize: fs(16),
  },
  imageContainer: {
    width: "100%",
    height: hp(65),
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp(-5),
  },
  plantImage: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    paddingHorizontal: wp(5),
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: hp(2),
    paddingVertical: 20,
  },
  buttonText: {
    color: colors.textWhite,
    fontWeight: "700",
    fontSize: fs(15),
  },
  termsText: {
    color: colors.textPrimary,
    opacity: 0.5,
    textAlign: "center",
    lineHeight: 15,
    fontSize: fs(11),
  },
  termsLink: {
    textDecorationLine: "underline",
  },
});

export default GetStartedScreen;
