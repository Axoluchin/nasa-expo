import { ReactNode } from "react";
import { View, ViewProps } from "react-native";

interface RowProps extends ViewProps {
  children: ReactNode;
}

export default function Row({ children, style, ...props }: RowProps) {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
