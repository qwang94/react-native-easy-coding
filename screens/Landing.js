import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import CourseItem from '../components/CourseItem'
import Empty from '../components/Empty'

const Landing = () => {

    const existingCourses = useSelector(state => state.courses.existingCourses);
    
    if (existingCourses.length) {
        return (
            <FlatList 
                data={existingCourses}
                renderItem={({item}) => (
                    <CourseItem 
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        viewDetails={() => alert('details')}
                        addToCart={() => alert('panier')}
                    />
                )}
            />
        )
    }

    return <Empty text="Pas de cours à afficher" />
}

export default Landing
