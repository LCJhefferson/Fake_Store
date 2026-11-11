import { router } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='mt-3'>
                <Pressable
                    className='bg-blue-800 mb-2 p-3 rounded active:opacity-90'
                    onPress={() => router.push('./products')}
                >
                    <Text className='text-center color-white'>Todos los Productos</Text>
                </Pressable>

                
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen