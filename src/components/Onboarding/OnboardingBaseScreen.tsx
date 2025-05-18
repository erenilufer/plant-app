import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import PrimaryButton from "../PrimaryButton";
import ProgressDots from "../ProgressDots";
import VStack from "../ui/layout/VStack";
import colors from "../../constants/colors";

interface OnboardingBaseScreenProps {
  step: 1 | 2;
  onContinue: () => void;
  children: React.ReactNode;
}

const OnboardingBaseScreen: React.FC<OnboardingBaseScreenProps> = ({
  step,
  onContinue,
  children,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <VStack style={styles.content}>
        {children}
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Continue"
              onPress={onContinue}
            />
          </View>
          <ProgressDots totalSteps={3} currentStep={step} />
        </View>
      </VStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingTop: "5%",
  },
  buttonContainer: {
    paddingHorizontal: "5%",
  },
});

export default OnboardingBaseScreen; 