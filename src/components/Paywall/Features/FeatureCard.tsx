import React from "react";
import { View, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";
import StyledText from "../../ui/StyledText";
import { wp, hp, fs } from "../../../utils/dimensions";
import colors from "../../../constants/colors";

interface FeatureCardProps {
  title: string;
  subtitle: string;
  Icon: React.FC<any>;
}

const FeatureCard = ({ title, subtitle, Icon }: FeatureCardProps) => {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIcon}>
        <Icon width={wp(4)} height={wp(4)} />
      </View>
      <StyledText variant="bold" style={styles.featureTitle}>
        {title}
      </StyledText>
      <StyledText variant="light" style={styles.featureSubtitle}>
        {subtitle}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  featureCard: {
    backgroundColor: colors.cardDark,
    borderRadius: 14,
    padding: wp(3.8),
    width: wp(38),
    height: hp(16),
  },
  featureIcon: {
    width: wp(8.7),
    height: wp(8.7),
    borderRadius: wp(2),
    backgroundColor: colors.overlayDark,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(1.7),
  },
  featureTitle: {
    fontSize: fs(19),
    color: colors.textWhite,
    marginBottom: hp(0.5),
  },
  featureSubtitle: {
    fontSize: fs(11),
    color: colors.textWhite,
    opacity: 0.8,
  },
});

export default FeatureCard;
