import {Text ,Image as ChakraImage,Box, Flex, Tabs, TabsProps, TextProps, ButtonProps, Button, ImageProps as ChakraImageProps } from "@chakra-ui/react"
import axios from "axios"
import { GetStaticProps } from "next"
import { ReactNode, useContext, useEffect, useState } from "react"
import VelaContext from "../../../Context/vela2context"
import SelectButton from "./SelectButton"

interface HeadingProps extends TextProps{
    children:ReactNode
}

interface ImageProps extends ChakraImageProps{

}

type QuadroName={
    name:string,
}
type Cores={
    id:string,
    name:string,
    imgUrl:string
}
type Tamanho={
    id:number,
    name:string,
    imgUrl:string,
    size:string
}



const api = axios.create({
    baseURL: "http://localhost:3333/",
});

function handle(id:number){
    console.log('ola'+id)
}
function Montar(){
    const [data,setData]=useState<QuadroName[]>([])
    const [cores,setCores]=useState<Cores[]>([])
    const [tamanho,setTamanho]=useState<Tamanho[]>([])
   


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



    const velaContext=useContext(VelaContext)

    return(
        <Box p="2em 2em 2em 2.5em" boxSizing="border-box">
            <Box>
                <Heading1 mt="0">Geometria:</Heading1>
                <Flex wrap="wrap" justify="center" align="center">
         
                    <Flex justify="center" align="center">
                    {data.map(x=>{
                            return(
                        <SelectButton onClick={()=>handle(x.id)} isActived={velaContext.bike.quadro==x.id} h="36px">{x.name}</SelectButton>
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
                                <SelectButton  isActived={velaContext.bike.cor===parseInt(x.id)}>
                                        <Image flexShrink={0} width="22px" height="22px" src={x.imgUrl}></Image>
                                        <Text mt="5px" flexShrink={0}>{x.name} {x.id}</Text>
                                    </SelectButton>
                            )
                        })}
                                    
                    </Flex>
            </Box>
            <Box>
                <Heading1>Tamanho:</Heading1>
                    <Flex wrap="wrap" boxSizing="border-box" align="center" justify="center">
                        {tamanho.map((x,y)=>{
                            return(<>
                                {(y>0 && velaContext.bike.quadro==1)&& 
                                <SelectButton isActived={velaContext.bike.tam===x.id}>
                                    {console.log(velaContext.bike.tam)}
                                    {console.log(x.id)}
                                    {console.log(velaContext.bike.tam===x.id)}
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


export const getStaticProps: GetStaticProps = async () => {

    const response=await api
    .get("/bikeQuadro")
    .then((response) =>(response))
    .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
    });
    console.log('response')
    return {
        props: {
        },
    }
}


export default Montar