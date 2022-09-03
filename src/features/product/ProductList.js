import {useTheme} from "../../shared/context/ThemeContext";
import {useDepedency} from "../../shared/hook/UseDepedency";
import {useEffect, useState} from "react";
import Item from "./componenets/ProductItem";
import MainContainer from "../../shared/components/MainContainer";
import AppBackground from "../../shared/components/AppBackground";
import {FlatList, View} from "react-native";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";

const ProductList = () =>{
    const theme = useTheme();
    const {productService} = useDepedency();
    const [products , setProducts ] = useState([]);
    const [isFetching,setFetching] = useState(false);
    const [page,setPage] = useState(1);
    const [isNext , setIsNext] = useState(true)

    let preOpenedRow;
    const row = []

    useEffect(() =>{
        onGetAllProduct()
    },[page])

    const onGetAllProduct = async () =>{
        setFetching(true)
        try {
            const response = await productService.getAllProduct(page)
            if (page === 1){
                setProducts([
                    ...response
                ])
            }else {
                setProducts( prevState =>[
                    ...prevState,
                    ...response
                ])
            }
            setFetching(false);
            setIsNext(true)
        }catch (e) {
            console.log(e)
            setFetching(false)
            setIsNext(false)
        }
    }

    const onFetchMore = async () =>{
        if (isNext){
            setPage(prevState => prevState + 1)
        }else {
            onGetAllProduct();
        }
    }
    const onRefresh = () =>{
        setPage(1)
    }

    const  onDeleteItem = (index) =>{
        console.log('Delete Item' , products[index])
    }

    const renderItem = ({item, index}) =>{
        return <Item productName={item.productName} idx={index} onDelete={()=> onDeleteItem(index)} refRow={refRows}
        closeRow={() => closeRow(index)}
        />
    }

    const refRows = (index,ref) =>{
        row[index] = ref
    }

    const closeRow = (index) =>{
        if (preOpenedRow && preOpenedRow !== row[index]){
            preOpenedRow.close();
        }
        preOpenedRow = row[index]
    }

    return(
        <MainContainer>
            <AppBackground>
                <View style={{margin : theme.spacing.s}}>
                    <HeaderPageLabel text={'Product'}/>
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        onRefresh={onRefresh}
                        refreshing={isFetching}
                        onEndReached={onFetchMore}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    )
}

export default ProductList;