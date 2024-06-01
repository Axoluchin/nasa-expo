import { NASA_API_KEY } from "@/src/settings";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Text variant="headlineMedium">Api Key</Text>
      <Text style={styles.code}>{NASA_API_KEY}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  code: {
    fontFamily: "SpaceMono",
    backgroundColor: "#00000066",
    padding: 4,
    margin: 4,
    borderRadius: 8,
  },
});
