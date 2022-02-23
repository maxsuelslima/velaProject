import { Image,Text,Box,Flex, Button, ButtonProps, TextProps, TabsProps, Tabs } from "@chakra-ui/react"
import { ReactElement, ReactNode, useState } from "react"
import Extras from "../src/components/MonteASua/Extras"
import ImageHandler from "../src/components/MonteASua/ImageHandler"
import MenuButtons from "../src/components/MonteASua/MenuButtons"
import Montar from "../src/components/MonteASua/Montar"

interface SelectButtonProps extends TabsProps{
    children:ReactNode;
    isActived?:boolean;
}
interface HeadingProps extends TextProps{
    children:ReactNode
}


function Vela2(){
    const [tab,setTab]=useState(2)
    return(
        <Box w="100%" color="#2D2D2D">
            <Flex  w="100%" flexShrink={0}  maxH="calc(100vh - 130px)">
                <ImageHandler/>
                <Box bg="white" w="416px" h="845px" flexShrink={0} maxH="calc(100vh - 130px)">
                <MenuButtons/>
                    {tab==1 && <Montar/>}
                    {tab==2 && <Extras/>}
                </Box>
            </Flex>
            <Flex bg="white" width="100%" height="7.8vh" borderTop="1px" borderColor="gray.300" boxSizing="border-box"></Flex>
        </Box>
    )
}



export default Vela2