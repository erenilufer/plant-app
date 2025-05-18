import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { RootNavigationProp, Screens } from "../../types/navigation";
import StyledText from "../../components/ui/StyledText";
import HapticWrapper from "../../components/HapticWrapper";
import { usePaywall } from "../../hooks/usePaywall";
import { Image } from "expo-image";
import { wp, hp, fs } from "../../utils/dimensions";
import FeaturesSection from "../../components/Paywall/Features/FeaturesSection";
import PlansSection from "../../components/Paywall/Plans/PlansSection";
import Animated, { FadeInDown } from "react-native-reanimated";
import colors from "../../constants/colors";
import HStack from "../../components/ui/layout/HStack";
import VStack from "../../components/ui/layout/VStack";
import { useDispatch, useSelector } from "react-redux";
import { setOnboardingCompleted } from "../../store/slices/onboardingSlice";
import { RootState } from "../../store/store";

const INITIAL_PLAN = "yearly"; // for now hardcoded it
const PaywallScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const [selectedPlan, setSelectedPlan] = useState(INITIAL_PLAN);
  const { featureCards, offers } = usePaywall();
  const { isCompleted: isOnboardingCompleted } = useSelector(
    (state: RootState) => state.onboarding
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    if (!isOnboardingCompleted) {
      dispatch(setOnboardingCompleted(true));
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: Screens.HomeTabs }],
        })
      );
      return;
    }
    navigation.goBack();
  };

  return (
    <Animated.View entering={FadeInDown.duration(700)} style={styles.container}>
      <StatusBar barStyle="default" />
      <VStack style={styles.overlay}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/paywall/image.png")}
            style={styles.image}
            contentFit="cover"
          />
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <StyledText style={styles.closeButtonText}>✕</StyledText>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <VStack style={styles.header}>
            <StyledText variant="extraBold" style={styles.title}>
              PlantApp{" "}
              <StyledText variant="light" style={styles.premium}>
                Premium
              </StyledText>
            </StyledText>
            <StyledText variant="light" style={styles.subtitle}>
              Access All Features
            </StyledText>
          </VStack>

          <FeaturesSection features={featureCards} />
          <PlansSection
            plans={offers}
            selectedPlan={selectedPlan}
            onSelectPlan={setSelectedPlan}
          />

          <HStack style={styles.buttonContainer}>
            <HapticWrapper style={styles.button}>
              <StyledText variant="medium" style={styles.buttonText}>
                Try free for 3 days
              </StyledText>
            </HapticWrapper>
          </HStack>
          <StyledText variant="light" style={styles.termsText}>
            After the 3-day free trial period you'll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </StyledText>

          <HStack style={styles.footer}>
            <StyledText variant="regular" style={styles.footerLink}>
              Terms
            </StyledText>
            <StyledText style={styles.footerDot}>•</StyledText>
            <StyledText variant="regular" style={styles.footerLink}>
              Privacy
            </StyledText>
            <StyledText style={styles.footerDot}>•</StyledText>
            <StyledText variant="light" style={styles.footerLink}>
              Restore
            </StyledText>
          </HStack>
        </View>
      </VStack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBlack,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.bgDark,
  },
  imageContainer: {
    position: "relative",
    height: hp(58),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    marginTop: -hp(28),
  },
  closeButton: {
    position: "absolute",
    top: hp(6),
    right: wp(5),
    width: wp(7.5),
    height: wp(7.5),
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: colors.textWhite,
    fontSize: fs(20),
  },
  header: {
    marginTop: hp(2.5),
    paddingHorizontal: wp(5),
  },
  title: {
    fontSize: fs(28),
    color: colors.textWhite,
  },
  premium: {},
  subtitle: {
    fontSize: fs(15),
    color: colors.textWhite,
    opacity: 0.8,
    marginTop: hp(0.6),
  },
  buttonContainer: {
    paddingHorizontal: wp(5),
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: hp(2.1),
    width: "100%",
    alignItems: "center",
    marginTop: hp(2.5),
  },
  buttonText: {
    color: colors.textWhite,
    fontSize: fs(16),
  },
  termsText: {
    fontSize: fs(9),
    color: colors.textWhite,
    opacity: 0.6,
    textAlign: "center",
    marginTop: hp(1),
    paddingHorizontal: wp(6.5),
    letterSpacing: 0,
    lineHeight: 12,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(1.25),
  },
  footerLink: {
    fontSize: fs(10),
    color: colors.textTranslucent,
    opacity: 0.8,
  },
  footerDot: {
    fontSize: fs(11),
    color: colors.textTranslucent,
    opacity: 0.8,
    marginHorizontal: wp(1.25),
  },
});

export default PaywallScreen;
