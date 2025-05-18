import React, { useCallback } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Image } from "expo-image";
import StyledText from "../ui/StyledText";
import { QuestionType } from "../../types/question";
import { wp, hp, fs, spacing } from "../../utils/dimensions";
import colors from "../../constants/colors";

interface QuestionCardProps {
  question: QuestionType;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const handlePress = () => {
    Linking.openURL(question.uri);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.questionCard}>
      <View style={styles.questionTextContainer}>
        <StyledText
          ellipsizeMode="tail"
          variant="semiBold"
          numberOfLines={2}
          style={styles.questionTitle}
        >
          {question.title}
        </StyledText>
      </View>
      <Image
        source={{ uri: question.image_uri }}
        style={styles.questionImage}
        contentFit="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  questionCard: {
    position: "relative",
    width: wp(60),
    height: hp(20),
    borderRadius: wp(3),
    overflow: "hidden",
  },
  questionTextContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1,
    padding: spacing.sm,
  },
  questionTitle: {
    color: colors.textWhite,
    fontSize: fs(15),
  },
  questionImage: {
    width: "100%",
    height: "100%",
  },
});

export default QuestionCard;
