import React from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { wp, hp, fs } from "../../../utils/dimensions";
import StyledText from "../StyledText";
import SearchIcon from "../icons/SearchIcon";
import colors from "../../../constants/colors";

const HomeHeader = () => {
  return (
    <View style={{ marginBottom: hp(2) }}>
      <View style={{ paddingHorizontal: wp(6) }}>
        <StyledText variant="regular" style={styles.greeting}>
          Hi, plant lover!
        </StyledText>
        <StyledText variant="medium" style={styles.welcomeText}>
          Good Afternoon! ⛅
        </StyledText>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <SearchIcon />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for plants"
            placeholderTextColor={colors.textSecondary}
          />
        </View>
        <Image
          source={require("../../../../assets/images/header/background.png")}
          style={styles.backgroundImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  header: {
    paddingTop: hp(2),
    paddingBottom: hp(1),
    paddingHorizontal: wp(4),
  },
  greeting: {
    fontSize: fs(16),
    color: colors.textPrimary,
  },
  welcomeText: {
    fontSize: fs(24),
    color: colors.textPrimary,
    marginTop: hp(0.5),
  },
  searchContainer: {
    marginVertical: hp(1),
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
    backgroundColor: colors.bgWhite + "E0", // trsnparency add
    borderRadius: 12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    marginHorizontal: wp(6),
    borderWidth: 0.2,
    borderColor: colors.borderSeparator,
    marginBottom: hp(1.5),
  },
  searchIcon: {
    fontSize: fs(16),
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    fontSize: fs(16),
    color: colors.textPrimary,
  },
});

export default HomeHeader;
