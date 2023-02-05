import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
        {...props}
        IconComponent={MaterialIcons}
        iconSize={24}
        color={GlobalStyles.white}
    />
  )
}

export default CustomHeaderButton