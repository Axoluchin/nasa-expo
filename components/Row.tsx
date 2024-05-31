import { ReactElement } from "react";
import { View, ViewProps } from "react-native";

interface RowProps extends ViewProps {
  children: ReactElement[];
}

export default function Row({ children, style, ...props }: RowProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
