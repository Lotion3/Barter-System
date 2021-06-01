import {createBottomTabNavigator} from "react-navigation-tabs"
import Donate from "../screens/donate"
import Request from "../screens/request"
import React from "react"

export const BottomTab=createBottomTabNavigator({
 offer:{screen:Donate},
 ask:{screen:Request}
})