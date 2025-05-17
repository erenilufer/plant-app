import { View, ViewProps } from "react-native";

const VStack = (props: ViewProps) => {
  return (
    <View
      {...props}
      style={[
        {
          flexDirection: "column",
          justifyContent: "center",
        },
        props.style,
      ]}
    />
  );
};

export default VStack;
