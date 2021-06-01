import React from "react"
import {createStackNavigator} from "react-navigation-stack"
import Donate from "../screens/donate"
import UserDetails from "../screens/userDetails"

export const AppStackNavigator=createStackNavigator({
    donate:{
        screen:Donate
    },
    userDetails:{
        screen:UserDetails
    }
},
{
    initialRouteName:"donate"
})
