import { View, Text, ScrollView, Pressable } from "react-native"
import { cardStyles } from "../styles"
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    title: string
}

const CardProduct = () => {
    return (
        <Pressable style={{ width: 100, height: 100, backgroundColor: "#78624d", borderRadius: 24, marginBottom: 10, marginHorizontal: 5 }} />
    )
}

export const CategoryCard = ({ title }: IProps) => {
    return (
        <View style={cardStyles.card}>
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <Text style={cardStyles.cardTitle}>{title}</Text>
                <Pressable style={cardStyles.cardSeeMoreText}>
                    <Ionicons name="open-outline" size={24} color="white" />
                </Pressable>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <Text style={{ color: "white", fontSize: 15, paddingLeft: 20 }}>See more</Text>
            </ScrollView>
        </View>
    )
}