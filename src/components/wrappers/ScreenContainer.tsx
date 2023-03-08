import { StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface IProps {
    children: ReactNode,
    screenTitle?: string
}

export const ScreenContainer = ({ children, screenTitle, ...rest }: IProps) => {
    return (
        <View style={styles.container} {...rest}>
            {screenTitle &&
                <Navbar title={screenTitle} />}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F6F5FF"
    },
})