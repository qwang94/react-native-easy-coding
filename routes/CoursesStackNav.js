import React from "react";
import { createStackNavigator, Header } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Landing from "../screens/Landing";
import CourseDetail from "../screens/CourseDetail";
import GlobalStyles from "../styles/GlobalStyles";
import CustomHeaderButton from "../components/CustomHeaderButton";

const CoursesStackNavigator = createStackNavigator();

const CoursesNavigator = () => {
    return (
        <CoursesStackNavigator.Navigator
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
            <CoursesStackNavigator.Screen name="Landing" component={Landing} options={{title: 'Catalogue'}} />
            <CoursesStackNavigator.Screen 
                name="Details" 
                component={CourseDetail} 
                options={({route}) => ({title: route.params.title})}
            />
        </CoursesStackNavigator.Navigator>
    )
}

export default CoursesNavigator