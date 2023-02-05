import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons'

import GlobalStyles from "../styles/GlobalStyles"

const CourseDetail = ({navigation, route}) => {
    const courseId = route.params.courseId;
    const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId));

    return (
        <View>
            <ScrollView style={styles.scroll}>
                <Image 
                    source={{uri: selectedCourse.image}}
                    style={styles.courseImage}
                />
                <View style={styles.courseDetail}>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                    <Text style={styles.courseDescription}>{selectedCourse.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.footerContainer}>
                <View style={styles.footerTop}>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.coursePrice}>{selectedCourse.price.toFixed(2)} €</Text>
                    </View>
                </View>
                <View style={styles.footerBottom}>
                    <MaterialIcons 
                        name="arrow-back-ios"
                        size={24}
                        color={GlobalStyles.white}
                        onPress={() => navigation.goBack()}
                    />
                    <TouchableOpacity
                        onPress={() => alert('ajouté au panier')}
                    >
                        <View style={styles.btnAddToCart}>
                            <Text style={styles.btnText}>Ajouter au panier</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: GlobalStyles.white,
        height: '80%'
    },
    courseImage: {
        width: '100%',
        height: 250
    },
    courseDetail: {
        padding: 20,
        alignItems: 'center'
    },
    courseDescription: {
        color: GlobalStyles.dimGray,
        fontSize: 17,
        marginHorizontal: 20,
        marginVertical: 10
    },
    footerContainer: {height: '20%'},
    footerTop: {
        height: '40%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    priceWrapper: {
        paddingRight: 40
    },
    coursePrice: {
        fontSize: 24,
        color: GlobalStyles.green
    },
    footerBottom: {
        backgroundColor: GlobalStyles.green,
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    btnAddToCart: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: GlobalStyles.lightOrange
    },
    btnText: {fontSize: 19}
})

export default CourseDetail
