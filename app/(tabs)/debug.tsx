import { NASA_API_KEY } from "@/src/settings";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <Text>Api Key</Text>
      <Text>{NASA_API_KEY}</Text>
    </SafeAreaView>
  );
}
