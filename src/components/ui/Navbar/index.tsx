import { View, Text, StatusBar } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";

interface IProps {
    title: string
}

export const Navbar = (props: IProps) => {
    return (
        <View style={styles.navbar}>
            <StatusBar backgroundColor={"#FFFFFF"} />
            <Text style={styles.screenTitle}>{props.title}</Text>
            {/* <AntDesign style={styles.searchIcon} name="search1" size={24} color="black" /> */}
        </View>
    )
}