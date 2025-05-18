import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

interface ProgressDotsProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({
  totalSteps,
  currentStep,
}) => {
  const { width } = Dimensions.get("window");
  const dotSize = width * 0.02;

  return (
    <View style={styles.progressDots}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentStep === index + 1 && styles.activeDot,
            {
              marginBottom: 30,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressDots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    backgroundColor: colors.dotInactive,
    marginHorizontal: 4,
    width: 6,
    height: 6,
    borderRadius: 100,
  },
  activeDot: {
    backgroundColor: colors.dotActive,
    width: 10,
    height: 10,
    borderRadius: 100,
  },
});

export default ProgressDots;
