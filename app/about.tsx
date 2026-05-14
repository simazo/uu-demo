import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function AboutPage() {
    return (
        <View>
            <Text>About</Text>
            <Link href="/(tabs)" asChild>
                <Button title="Homeへ" />
            </Link>
        </View>
    );
}