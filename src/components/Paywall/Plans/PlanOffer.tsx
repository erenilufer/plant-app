import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StyledText from "../../ui/StyledText";
import HapticWrapper from "../../HapticWrapper";
import { wp, hp, fs } from "../../../utils/dimensions";
import colors from "../../../constants/colors";

interface PlanOfferProps {
  id: string;
  title: string;
  price: string;
  badge?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const PlanOffer = ({
  id,
  title,
  price,
  badge,
  isSelected,
  onSelect,
}: PlanOfferProps) => {
  const renderBackground = () => {
    if (isSelected) {
      return (
        <LinearGradient
          colors={[`${colors.primary}00`, `${colors.primary}3D`]}
          start={{ x: 0.3, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
    return null;
  };

  return (
    <HapticWrapper
      style={[styles.planOption, isSelected && styles.selectedPlan]}
      onPress={() => onSelect(id)}
    >
      {renderBackground()}
      <View style={styles.radioContainer}>
        <View
          style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}
        >
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </View>
      <View style={styles.planDetails}>
        <StyledText variant="semiBold" style={styles.planTitle}>
          {title}
        </StyledText>
        <StyledText style={styles.planPrice}>{price}</StyledText>
      </View>
      {badge && (
        <View style={styles.saveBadge}>
          <StyledText variant="bold" style={styles.saveBadgeText}>
            {badge}
          </StyledText>
        </View>
      )}
    </HapticWrapper>
  );
};

const styles = StyleSheet.create({
  planOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cardDark,
    borderRadius: 14,
    padding: wp(3.8),
    paddingVertical: hp(1.5),
    marginBottom: hp(1.5),
    borderWidth: 1,
    borderColor: colors.borderTranslucent,
    position: "relative",
    overflow: "hidden",
  },
  selectedPlan: {
    borderColor: colors.primary,
    backgroundColor: "transparent",
  },
  radioContainer: {
    marginRight: wp(3.75),
    backgroundColor: colors.overlayLight,
    borderRadius: wp(4),
    width: wp(6),
    height: wp(6),
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuter: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(3),
    borderWidth: 1,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  radioOuterSelected: {
    borderColor: colors.primaryLight,
    backgroundColor: colors.primary,
  },
  radioInner: {
    width: wp(1.9),
    height: wp(1.9),
    borderRadius: wp(1),
    backgroundColor: colors.textWhite,
  },
  planDetails: {
    flex: 1,
  },
  planTitle: {
    fontSize: fs(15),
    color: colors.textWhite,
    marginBottom: hp(0.5),
  },
  planPrice: {
    fontSize: fs(12),
    color: colors.textWhite,
    opacity: 0.8,
  },
  saveBadge: {
    backgroundColor: colors.primary,
    position: "absolute",
    right: 0,
    top: 0,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 20,
    paddingHorizontal: wp(3),
    height: hp(3.2),
    justifyContent: "center",
  },
  saveBadgeText: {
    color: colors.textWhite,
    fontSize: fs(11),
  },
});

export default PlanOffer;
