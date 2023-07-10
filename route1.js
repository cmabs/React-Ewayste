import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout4 from "./app/route4";
import Layout2 from "./app/route2";
import Layout6 from "./app/route6";


const Stack = createNativeStackNavigator();

export default function Layout1() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='firstRoute' component={Layout4} options={{ headerShown: false }} />
                <Stack.Screen name='appRoute' component={Layout2} options={{ headerShown: false }} />
                <Stack.Screen name='collectorAppRoute' component={Layout6} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};