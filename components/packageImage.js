import React from 'react'
import LottieView from "lottie-react-native"

export default class PackageImage extends React.Component{
    render(){
        return(
            <LottieView
            source={require("../assets/17431-package-delivery.json")}
            style={{width:"60%"}}
            autoPlay loop/>
        )
    }
}