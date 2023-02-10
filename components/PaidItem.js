import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import GlobalStyles from '../styles/GlobalStyles';
import CoursesOverview from './CoursesOverview';

const PaidItem = ({totalPrice, date, courseDetails}) => {

    const [isShowing, setIsShowing] = useState(false);
    const handleShow = () => {
        setIsShowing( prevState => !prevState);
    }
    return (
        <ScrollView style={styles.paidItemContainer}>
            <View style={styles.paidItem}>
                <Text style={styles.paidTotal}>{totalPrice.toFixed(2)} €</Text>
                <Text style={styles.paidAt}>{date}</Text>
            </View>

            <TouchableOpacity
                style={styles.seeDetailBtn}
                onPress={() => handleShow()}   
            >
                <AntDesign 
                    name={!isShowing ? "pluscircleo" : "minuscircleo"}
                    size={24}
                    color={GlobalStyles.green} 
                />
            </TouchableOpacity>

            {
                isShowing && (
                    <View style={styles.paidItemDetail}>
                        {
                            courseDetails.courses.map(course => (
                                <CoursesOverview 
                                    key={course.id}
                                    title={course.title}
                                    price={course.price}
                                />
                            ))
                        }
                    </View>
                )
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    paidItemContainer: {
        backgroundColor: GlobalStyles.white,
        borderRadius: 10,
        margin: 20,
        padding: 15
    },
    paidItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    paidTotal: {
        fontSize: 18
    },
    paidAt: {
        fontSize: 16
    },
    seeDetailBtn: {
        alignSelf: 'flex-end'
    },
    paidItemDetail: {
        marginTop: 20,
        borderTopColor: GlobalStyles.lightGrey,
        borderTopWidth: 1
    }
})

export default PaidItem
