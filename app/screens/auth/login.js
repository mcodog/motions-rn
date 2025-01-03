import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

//Styling
import { loadFonts } from '../../utils/fonts'
import { defaultStyles, fonts } from '../../styles'

//Package Components
import { TextInput, Button, Divider } from 'react-native-paper'
import DividerWithText from '../../components/DividerWithText'

const Login = () => {
    useEffect(() => {
        loadFonts();
    }, [])

    return (
        <View style={defaultStyles.container}>
            <View style={[defaultStyles.fluidContainer, defaultStyles.xyCenter]}>
                <View style={[defaultStyles.loginContainer]}>
                    <View style={[defaultStyles.formInput]}>
                        <TextInput mode="outlined" label="Email"  />
                    </View>
                    <View style={[defaultStyles.formInput]}>
                        <TextInput mode="outlined" label="Password"  />
                    </View>
                    <View style={[defaultStyles.formInput, defaultStyles.row]}>
                        <Button 
                            contentStyle={{ height: 50 }} 
                            labelStyle={{ fontSize: 16, color: 'white' }}  style={{flex: 1, backgroundColor: '#663399'}} mode="elevated">
                                Login
                        </Button>
                        <Button 
                            style={[{ flex: 1, borderWidth: 2, borderColor: '#663399' }]} 
                            contentStyle={{ height: 50 }} 
                            labelStyle={{ fontSize: 16 }}
                            mode="outlined">
                                Sign Up
                        </Button>    
                    </View>
                    <View style={[defaultStyles.spaced]}>
                        <DividerWithText text="OR" />
                    </View>
                    <View style={[defaultStyles.smSpaced]}>
                        <Text style={fonts.center}>Continue with the following:</Text>
                    </View>
                    <View style={[defaultStyles.spaced, defaultStyles.row]}>
                        <Button
                            mode="elevated"
                            icon="google"
                            style={{ flex: 1 }}
                        >
                            Google
                        </Button>
                        <Button
                            mode="elevated"
                            icon="facebook"
                            style={{ flex: 1 }}
                        >
                            Facebook
                        </Button>
                    </View>
                </View>

            </View>
        </View>
  )
}

export default Login