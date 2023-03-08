import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Discover from "../../features/Discover/screens";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
    )
}