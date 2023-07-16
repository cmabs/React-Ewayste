import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingLayout from "./app/landingRoute";
import UserLayout from "./app/userRoute";
import CollectorLayout from "./app/collectorRoute";

const Stack = createNativeStackNavigator();

export default function Layout1() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='landingRoute' component={LandingLayout} options={{ headerShown: false }} />
                <Stack.Screen name='userRoute' component={UserLayout} options={{ headerShown: false }} />
                <Stack.Screen name='collectorRoute' component={CollectorLayout} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};