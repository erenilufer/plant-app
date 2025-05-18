import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import StyledText from "../ui/StyledText";
import { wp, hp, fs, spacing } from "../../utils/dimensions";
import { CategoryType } from "../../types/category";
import HapticWrapper from "../HapticWrapper";
import colors from "../../constants/colors";
import { Image } from "expo-image";

interface CategoriesProps {
  categories: CategoryType[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      scrollEnabled={false}
      data={categories}
      contentContainerStyle={styles.categoriesList}
      columnWrapperStyle={styles.categoryRow}
      renderItem={({ item }) => (
        <HapticWrapper style={styles.categoryCard}>
          <View style={styles.categoryTextContainer}>
            <StyledText variant="semiBold" style={styles.categoryTitle}>
              {item.title}
            </StyledText>
          </View>
          <Image
            source={{ uri: item.image.url }}
            style={styles.categoryImage}
            contentFit="cover"
          />
        </HapticWrapper>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  categoriesList: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  categoryRow: {
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  categoryCard: {
    position: "relative",
    width: wp(44),
    height: hp(24),
    borderRadius: wp(3),
    overflow: "hidden",
    backgroundColor: colors.cardLight,
    borderWidth: 0.5,
    borderColor: colors.borderLight,
  },
  categoryTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1,
    padding: spacing.sm,
  },
  categoryTitle: {
    fontSize: fs(16),
    color: colors.textPrimary,
  },
  categoryImage: {
    width: "100%",
    height: "100%",
  },
});

export default Categories;
