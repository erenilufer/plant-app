import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { QuestionType } from "../../types/question";
import { spacing } from "../../utils/dimensions";
import QuestionCard from "./QuestionCard";

interface QuestionsProps {
  questions: QuestionType[];
}

const QuestionsSection: React.FC<QuestionsProps> = ({ questions }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.questionsList}
      data={questions}
      renderItem={({ item }) => <QuestionCard question={item} />}
    />
  );
};

const styles = StyleSheet.create({
  questionsList: {
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
  },
});

export default QuestionsSection;
