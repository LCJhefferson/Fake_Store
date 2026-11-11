import { FlatList, Text, View } from 'react-native'
import { products } from '../../../../store/products.stores'

const ProductsScreen = () => {
    return (
        <View className='flex flex-1 px-4'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-bold'>{item.title}</Text>
                       
                        
                     <View className='flex flex-row justify-between'>
                            <Text className='font-bold' >{item.price}</Text>
                        </View> 
                        <Text>{item.description}</Text>
                        <Text>{item.category}</Text>
                        <Text>{item.image}</Text>
                        <Text>{item.rating.count}</Text>
                        <Text>{item.rating.rate}</Text>
                    </View>
                )}

            />
        </View>
    )
}

export default ProductsScreen