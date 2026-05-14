import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function MyPagePage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 16, color: "red" }}>
        マイページ
      </Text>
      <Link href="/" asChild>
        <Button title="Homeへ" />
      </Link>
    </View>
  );
}
