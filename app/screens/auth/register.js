import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

//Styling
import { loadFonts } from '../../utils/fonts'
import { defaultStyles, fonts } from '../../styles'

//Package Components
import { TextInput, Button, Divider } from 'react-native-paper'
import DividerWithText from '../../components/DividerWithText'

const Register = () => {
    useEffect(() => {
        loadFonts();
    }, [])

    return (
        <View style={defaultStyles.container}>
            <View style={[defaultStyles.fluidContainer, defaultStyles.xyCenter]}>
                <View style={[defaultStyles.loginContainer]}>
                    <View style={defaultStyles.spaced}>
                        <Text style={[ fonts.xlFont, fonts.emphasize, { textAlign: 'center' } ]}>
                            Create an Account
                        </Text>
                    </View>
                    <View style={defaultStyles.spaced}>
                        <Divider />
                    </View>
                    <View style={[defaultStyles.formInput, defaultStyles.row, {height: 60}]}>
                        <TextInput style={[{ flex: 1 }]} mode="outlined" label="First Name"  />
                        <TextInput style={[{ flex: 1 }]} mode="outlined" label="Last Name"  />
                    </View>
                    <View style={[defaultStyles.formInput]}>
                        <TextInput style={{flex: 1}} mode="outlined" label="Email"  />
                    </View>
                    <View style={[defaultStyles.formInput]}>
                        <TextInput style={{flex: 1}} mode="outlined" label="Password"  />
                    </View>
                    <View style={[defaultStyles.formInput, defaultStyles.row, {height:50}]}>
                        <Button 
                            contentStyle={{ height: 50 }} 
                            labelStyle={{ fontSize: 16, color: 'white' }}  style={{flex: 1, backgroundColor: '#663399'}} mode="elevated">
                                Sign Up
                        </Button>
                        <Button 
                            style={[{ flex: 1, borderWidth: 2, borderColor: '#663399' }]} 
                            contentStyle={{ height: 50 }} 
                            labelStyle={{ fontSize: 16 }}
                            mode="outlined">
                                Go Back
                        </Button>    
                    </View>
                </View>

            </View>
        </View>
  )
}

export default Register