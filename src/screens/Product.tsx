import { Text, View } from "react-native";
import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";

export default function Product (){
    const navigation = useNavigation(); //Um hook pronto do react para navegação
    return (
        <View style={{flex:1, padding: 32, paddingTop: 54}}>
            <Header>
                <ButtonIcon 
                    icon="arrow-circle-left"
                    onPress={() => navigation.goBack()}
                />
                <Title>Products</Title>
            </Header>
        </View>
    );
}