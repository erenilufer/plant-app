import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { wp, hp } from "../../../utils/dimensions";
import FeatureCard from "./FeatureCard";
import { FeatureType } from "../../../types/feature";

interface FeaturesSectionProps {
  features: FeatureType[];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <View style={styles.features}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.featureRow}
        showsHorizontalScrollIndicator={false}
      >
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            subtitle={feature.subtitle}
            Icon={feature.icon}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  features: {
    marginTop: hp(2.5),
  },
  featureRow: {
    gap: wp(2.5),
    paddingHorizontal: wp(5),
  },
});

export default FeaturesSection;
