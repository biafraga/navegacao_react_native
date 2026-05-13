import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Product from "../screens/Product";

export type StackRouterParamList = { //define o tipo de parâmetros para cada rota.
    home: undefined; // A rota "home" e a rota "product" não espera nenhum parâmetro, por isso está undefined.
    product: undefined;
}

const Stack = createNativeStackNavigator<StackRouterParamList>() //Cria uma instância para simplificação.

export function StackRoutes() {
    return(
        <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: true}}>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="product" component={Product} options={{headerTitle: "Produtos"}}/>
        </Stack.Navigator>
    )
}