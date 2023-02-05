import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';

const CourseDetail = ({navigation, route}) => {
    const courseId = route.params.courseId;
    // const selectedCourse = useSelector(state => state.courses.existingCourses.find(course => course.id === courseId));

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: selectedCourse.title
    //     })
    // }, [navigation]);

    return (
        <View>
            <Text>CourseDetail</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CourseDetail
