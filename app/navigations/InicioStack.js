import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicios from "../screens/Inicio";

const Stack = createStackNavigator();

export default function InicioStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="inicio"
                component={Inicios}
                options={{ title: "Nuevos Postres" }}
            />
        </Stack.Navigator>
    );
}