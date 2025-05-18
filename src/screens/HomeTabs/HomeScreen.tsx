import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  useGetCategoriesQuery,
  useGetQuestionsQuery,
} from "../../store/api/plantsApi";
import HomeHeader from "../../components/ui/layout/HomeHeader";
import PremiumBanner from "../../components/PremiumBanner";
import QuestionsSection from "../../components/Questions/QuestionsSection";
import Categories from "../../components/Categories/Categories";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import StyledText from "../../components/ui/StyledText";
import { hp } from "../../utils/dimensions";
import { fs } from "../../utils/dimensions";
import { spacing } from "../../utils/dimensions";
import VStack from "../../components/ui/layout/VStack";
import colors from "../../constants/colors";

const HomeScreen = () => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: questions } = useGetQuestionsQuery();

  const { top } = useSafeAreaInsets();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <VStack style={[styles.container, { paddingTop: top }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          { paddingBottom: bottomTabBarHeight },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <PremiumBanner />
        <StyledText variant="medium" style={styles.getStartedText}>
          Get Started
        </StyledText>
        <QuestionsSection questions={questions || []} />
        <Categories categories={categories || []} />
      </ScrollView>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  scrollView: {
    flex: 1,
    backgroundColor: colors.bgPrimary,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  getStartedText: {
    fontSize: fs(15),
    color: colors.textPrimary,
    paddingHorizontal: spacing.sm,
    marginBottom: hp(2),
  },
});

export default HomeScreen;
