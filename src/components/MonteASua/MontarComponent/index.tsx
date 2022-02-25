import {Text ,Image as ChakraImage,Box, Flex, Tabs, TabsProps, TextProps, ButtonProps, Button, ImageProps as ChakraImageProps } from "@chakra-ui/react"
import axios from "axios"
import { ReactNode, useCallback, useContext, useEffect, useState } from "react"
import VelaContext from "../../../Context/vela2context"
import { handleSelectecdBike } from "../../../store/modules/selectedBike/action"
import SelectButton from "./SelectButton"
import {useDispatch, useSelector, useStore} from "react-redux"
import { IBikeState } from "../../../store/modules/selectedBike/type"
import { IState } from "../../../store"
interface HeadingProps extends TextProps{
    children:ReactNode
}

interface ImageProps extends ChakraImageProps{

}

type QuadroName={
    name:string,
    id:number,
}
type Cores={
    id:number,
    name:string,
    imgUrl:string
}
type Tamanho={
    id:number,
    name:string,
    imgUrl:string,
    size:string
}

type changeOrder={
    payloadId:number,
    orderId:number
}

const api = axios.create({
    baseURL: "http://localhost:3333/",
});


function Montar(){
    const [data,setData]=useState<QuadroName[]>([])
    const [cores,setCores]=useState<Cores[]>([])
    const [tamanho,setTamanho]=useState<Tamanho[]>([])
    const dispatch=useDispatch()

    useEffect(() => {
        api
        .get<QuadroName[]>("/bikeQuadro")
        .then((response) => setData(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    useEffect(() => {
        api
        .get<Cores[]>("/cores")
        .then((response) => setCores(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    useEffect(() => {
        api
        .get<Tamanho[]>("/tamanho")
        .then((response) => setTamanho(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const handleBikeProps =useCallback((id:changeOrder)=>{
        dispatch(handleSelectecdBike(id))
    },[dispatch])

    const bike=useSelector<IState, IBikeState>(state=>state.bike)

    return(
        <Box p="2em 2em 2em 2.5em" boxSizing="border-box">
            <Box>
                <Heading1 mt="0">Geometria:</Heading1>
                <Flex wrap="wrap" justify="center" align="center">
                    <Flex justify="center" align="center">
                    {data.map(x=>{
                            return(
                        <SelectButton onClick={()=>handleBikeProps({payloadId:x.id,orderId:1})} isActived={bike.quadroId==x.id} h="36px">{x.name}</SelectButton>
                        )
                    })}
                    </Flex>
                </Flex>
            </Box>
            <Box>
                <Heading1>Cor:</Heading1>
                    <Flex wrap="wrap" justify="center" align="center">
                        {cores.map(x=>{
                            return(
                                <SelectButton onClick={()=>handleBikeProps({payloadId:x.id,orderId:2})}  isActived={bike.colorId===x.id}>
                                        <Image flexShrink={0} width="22px" height="22px" src={x.imgUrl}></Image>
                                        <Text mt="5px" flexShrink={0}>{x.name} {x.id}</Text>
                                    </SelectButton>
                            )
                        })}
                                    
                    </Flex>
            </Box>
            <Box>
                <Heading1>Tamanho:</Heading1>
                    <Flex  wrap="wrap" boxSizing="border-box" align="center" justify="center">
                        {tamanho.map((x,y)=>{
                            return(
                            <>
                                {(y>0 && bike.quadroId==2)&& 
                                <SelectButton onClick={()=>handleBikeProps({payloadId:x.id,orderId:3})} isActived={bike.sizeId===x.id}>
                                    <Image src={x.imgUrl}></Image>
                                    <Text>{x.size}</Text>
                                </SelectButton>
                                }
                            </>
                            )
                        })}
                    </Flex>      
            </Box>
        </Box>
    )
}

function Image({...rest}:ImageProps){
    return(
    <ChakraImage m="0.7em" {...rest}></ChakraImage>
    )
}

function Heading1({children, ...rest}:HeadingProps){
    return(
        <Text my="0.7em" fontWeight={500} fontSize="1.1rem" lineHeight="1.5em" {...rest}>{children}</Text>
    )
}

export default Montar