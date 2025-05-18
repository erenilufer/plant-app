import SpeedometerIcon from "../components/ui/icons/SpeedometerIcon";
import PlantIdentfiyIcon from "../components/ui/icons/PlantIdentfiyIcon";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp, Screens } from "../types/navigation";
import { PlanType } from "../types/plan";
import { FeatureType } from "../types/feature";

// This is a mock impl of offers and feature cards. offers can be fetched from iap providers
const featureCards: FeatureType[] = [
  {
    id: "identify",
    title: "Unlimited",
    subtitle: "Plant Identify",
    icon: PlantIdentfiyIcon,
  },
  {
    id: "speed",
    title: "Faster",
    subtitle: "Process",
    icon: SpeedometerIcon,
  },
  {
    id: "care",
    title: "Detailed",
    subtitle: "Plant Care",
    icon: PlantIdentfiyIcon,
  },
];

const offers: PlanType[] = [
  {
    id: "monthly",
    title: "1 Month",
    price: "$2.99/month, auto renewable",
  },
  {
    id: "yearly",
    title: "1 Year",
    price: "First 3 days free, then $529,99/year",
    badge: "Save 50%",
  },
];

export const usePaywall = () => {
  const navigation = useNavigation<RootNavigationProp>();

  const presentPaywall = () => {
    navigation.navigate(Screens.Paywall);
  };

  return {
    featureCards,
    offers,
    presentPaywall,
  };
};
