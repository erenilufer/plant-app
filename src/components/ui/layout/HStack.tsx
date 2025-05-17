import { View, ViewProps } from "react-native";

const HStack = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
        },
        props.style,
      ]}
    />
  );
};

export default HStack;
