import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import CourseItem from '../components/CourseItem'
import Empty from '../components/Empty'
import { addToCart } from '../redux/actions/ActionAddToCart'

const Landing = ({navigation}) => {

    const dispatch = useDispatch();
    const handleAddToCart = (course) => {
        dispatch(addToCart(course));
        alert('Article ajouté au panier');
    }

    const existingCourses = useSelector(state => state.courses.existingCourses);
    const courseToDisplay = existingCourses.filter(course => course.selected === false);

    if (courseToDisplay.length) {
        return (
            <FlatList 
                data={courseToDisplay}
                renderItem={({item}) => (
                    <CourseItem 
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        viewDetails={() => navigation.navigate('Details', {
                            courseId: item.id,
                            title: item.title
                        })}
                        addToCart={() => handleAddToCart(item)}
                    />
                )}
            />
        )
    }

    return <Empty text="Pas de cours à afficher" />
}

export default Landing
