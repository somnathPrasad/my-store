import { ScrollView } from "react-native";
import { ScreenContainer } from "../../../components"
import { CategoryCard } from "../components";

export default function Discover() {
    return (
        <ScreenContainer screenTitle="Discover">
            <ScrollView style={{ marginTop: 20 }} contentContainerStyle={{ paddingHorizontal: 20 }}>
                <CategoryCard title="Kitchen Essentials" />
                <CategoryCard title="Masalas" />
                <CategoryCard title="Daily Needs" />
            </ScrollView>
        </ScreenContainer>
    )
}