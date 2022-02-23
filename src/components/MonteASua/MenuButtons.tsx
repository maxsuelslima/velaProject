import { Box, BoxProps, Button, ButtonProps, Flex } from "@chakra-ui/react"
import { Children, cloneElement, ReactElement, ReactNode } from "react"

interface MenuButtonProps extends ButtonProps{
    children:ReactNode,
    isActive?:boolean,
}

interface ActiveTabProps extends BoxProps{
    children:ReactElement,
    isActive:boolean,

}

function MenuButtons(){
    return(
        <Flex width="100%" flexGrow={1} boxShadow="rgb(0 0 0 / 3%) 0px -7px 7px 0px,rgb(0 0 0 / 17%) 0px 8px 10px -7px">
            <MenuButton isActive={true}>1.Montar</MenuButton>
            <MenuButton>2.Extras</MenuButton>
            <MenuButton>3.Vela+</MenuButton>
            <MenuButton>4.Pagar</MenuButton>
        </Flex>
    )
}

function MenuButton({children,isActive=false}:MenuButtonProps){
    return(
        <ActiveTab isActive={isActive}>
        <Button 
        textAlign="center" 
        fontSize="0.9em" 
        bg="white" 
        height="48px" 
        borderRadius={0} 
        width="25%" 
        fontWeight={400} 
        color="gray.800" 
        border="1px" 
        borderColor="gray.300">{children}</Button>
        </ActiveTab>
    )
}

function ActiveTab({children, isActive}:ActiveTabProps){
    return(
        <>
            {cloneElement(children,{
                color:isActive? "green.500" :'',
            })}
        </>
    )
}

export default MenuButtons