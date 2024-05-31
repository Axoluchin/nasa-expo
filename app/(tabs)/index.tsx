import { useEffect, useState } from "react";

import { Image } from "expo-image";
import * as Linking from "expo-linking";
import { ScrollView, View, StyleSheet } from "react-native";
import { ActivityIndicator, Button, Divider, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { getAPOD } from "@/src/api";
import { apodType } from "@/src/api/interface";
import Row from "@/components/Row";

export default function HomeScreen() {
  const [pictureData, setPictureData] = useState<apodType>();

  useEffect(() => {
    getAPOD().then((data) =>
      data ? setPictureData(data) : alert("Error al obtener la foto")
    );
  }, []);

  const openPhoto = () => {
    if (pictureData) Linking.openURL(pictureData?.hdurl);
  };

  if (!pictureData)
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text variant="titleLarge">Loading...</Text>
      </View>
    );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={pictureData.url}
            style={styles.photo}
            contentPosition="center"
            contentFit="contain"
          />
          <View style={styles.desc}>
            <Text variant="titleLarge" style={styles.title}>
              {pictureData.title}
            </Text>
            <Row>
              <Text variant="labelMedium">{pictureData.copyright}</Text>
              <Text variant="labelMedium">{pictureData.date}</Text>
            </Row>
            <Divider />
            <Text variant="bodyMedium" style={styles.explanation}>
              {pictureData.explanation}
            </Text>
            <Button mode="contained-tonal" onPress={openPhoto}>
              Download Image
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 20,
  },
  desc: {
    gap: 10,
    paddingHorizontal: 16,
  },
  photo: {
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
  },
  explanation: {
    textAlign: "left",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
