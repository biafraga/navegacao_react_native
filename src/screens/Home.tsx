import { Text, View } from "react-native";
import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";
import Title from "../components/Title";

//Tela inicial
export default function Home (){
    return(
        <View style={{flex:1, padding: 32, paddingTop: 54}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon icon="add-circle"/>
            </Header>
        </View>
    );
}