import { 
    Image, 
    StyleSheet, 
    Text, 
    TouchableHighlight, 
    TouchableOpacity, 
    View 
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import GlobalStyles from '../styles/GlobalStyles'

const CourseItem = (props) => {
  return (
    <TouchableHighlight
        onPress={props.viewDetails}
        underlayColor={GlobalStyles.green}
    >
        <View style={styles.courseContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}
                />
            </View>
            <View style={styles.courseDetailContainer}>
                <Text style={styles.courseTitle}>{props.title}</Text>
                <Text style={styles.coursePrice}>{props.price.toFixed(2)} €</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    onPress={props.viewDetails}
                >
                    <MaterialIcons name='remove-red-eye' size={35} color={GlobalStyles.green}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.addToCart}
                >
                    <MaterialIcons name='shopping-basket' size={35} color={GlobalStyles.green} />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: GlobalStyles.white,
        borderRadius: 10,
        height: 300,
        margin: 25,
        borderColor: GlobalStyles.lightGrey,
        borderWidth: 1
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    courseDetailContainer: {
        alignItems: 'center',
        height: '20%',
        padding: 10
    },
    courseTitle: {
        fontSize: 18,
        marginVertical: 4,
        color: GlobalStyles.green,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    coursePrice: {
        color: GlobalStyles.darkGrey,
        fontSize: 16
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 30
    }
})

export default CourseItem
