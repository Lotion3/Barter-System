import React from "react"
import {View,Text,TouchableOpacity,FlatList} from "react-native"
import firebase from "firebase"
import db from "../config"
import {ListItem} from "react-native-elements"

export default class Donate extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            requestedBooksList:[]
        }
        this.requestRef=null
    }
    getRequestedBooksList=()=>{
        this.requestRef=db.collection("request")
        .onSnapshot((snapshot)=>{
            var requestedBooksList=snapshot.docs.map((doc)=>{
            this.setState({
                requestedBooksList:[...this.state.requestedBooksList,doc.data()]
            })
         })
        })
    }
    componentDidMount(){
        this.getRequestedBooksList()
    }
    componentDidUnmount(){
        this.requestRef()
    }
    keyExtractor=(item,index)=>{index.toString()}
    renderItem=({item,i})=>{
        return(
            <View>
            <Text>{item.bookName}</Text>
            <Text>{item.reason}</Text>
            <TouchableOpacity style={{borderWidth:3,width:200,height:30}} onPress={()=>{
                this.props.navigation.navigate("userDetails",{"details":item})
            }}><Text>Trade</Text></TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
            <View style={{margin:50}}>
                <Text style={{marginBottom:100}}>This is the offer screen, you can offer to trade items others have put here.(This is where the items you put on the ask screen go for other people.)</Text>
                {
                    this.state.requestedBooksList.length===0
                    ?
                    (<View>
                        <Text>List of All Requested Books</Text>
                    </View>)
                    :
                    (
                      <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.requestedBooksList}
                      renderItem={this.renderItem}/>
                    )
                }
            </View>
        )
    }
}