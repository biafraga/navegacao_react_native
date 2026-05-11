import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator() //Cria uma instância para simplificação.

export function StackRoutes(){
    return(
        <Stack.Navigator> {/* Utiliza para criar a navegação */}
            <Stack.Screen name="product" component={Product}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    )
}