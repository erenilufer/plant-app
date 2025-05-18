import React from "react";
import { View, StyleSheet } from "react-native";
import { wp, hp } from "../../../utils/dimensions";
import PlanOffer from "./PlanOffer";
import { PlanType } from "../../../types/plan";

interface PlansSectionProps {
  plans: PlanType[];
  selectedPlan: string;
  onSelectPlan: (id: string) => void;
}

const PlansSection = ({
  plans,
  selectedPlan,
  onSelectPlan,
}: PlansSectionProps) => {
  return (
    <View style={styles.planOptions}>
      {plans.map((plan) => (
        <PlanOffer
          key={plan.id}
          id={plan.id}
          title={plan.title}
          price={plan.price}
          badge={plan.badge}
          isSelected={selectedPlan === plan.id}
          onSelect={onSelectPlan}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  planOptions: {
    marginTop: hp(3.7),
    paddingHorizontal: wp(5),
  },
});

export default PlansSection;
