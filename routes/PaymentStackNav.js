import React from "react";
import { createStackNavigator, Header } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Payments from "../screens/Payments";
import GlobalStyles from "../styles/GlobalStyles";
import CustomHeaderButton from "../components/CustomHeaderButton";

const PaymentStackNavigator = createStackNavigator();

const PaymentNavigator = () => {
    return (
        <PaymentStackNavigator.Navigator
            screenOptions={({navigation}) => ({
                headerStyle: {backgroundColor: GlobalStyles.green},
                headerTitleStyle: { fontWeight: "bold"},
                headerTintColor: GlobalStyles.white,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item 
                            iconName="shopping-cart"
                            onPress={() => {navigation.navigate('Cart')}}
                        />
                    </HeaderButtons>
                ),
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item 
                            iconName="menu"
                            onPress={() => {navigation.openDrawer()}}
                        />
                    </HeaderButtons>
                )
            })}
        >
            <PaymentStackNavigator.Screen name="Payment" component={Payments} options={{title: 'Mes Achats'}} />
        </PaymentStackNavigator.Navigator>
    )
}

export default PaymentNavigator