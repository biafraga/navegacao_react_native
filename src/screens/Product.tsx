import { Text, View } from "react-native";
import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";
import Title from "../components/Title";

export default function Product (){
    return(
        <View style={{flex:1, padding: 32, paddingTop: 54}}>
            <Header>
                <ButtonIcon icon="arrow-circle-left"/>
                <Title>Products</Title>
            </Header>
        </View>
    );
}