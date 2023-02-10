import React from "react";
import { createStackNavigator, Header } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Cart from "../screens/Cart";
import GlobalStyles from "../styles/GlobalStyles";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CartStackNavigator = createStackNavigator();

const CartNavigator = () => {
    return (
        <CartStackNavigator.Navigator
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
            <CartStackNavigator.Screen name="Cart" component={Cart} options={{title: 'Panier'}} />
        </CartStackNavigator.Navigator>
    )
}

export default CartNavigator