import { Button, ButtonProps, Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

interface MenuButtonProps extends ButtonProps{
    children:ReactNode
}

function MenuButtons(){
    return(
        <Flex width="100%" flexGrow={1} boxShadow="rgb(0 0 0 / 3%) 0px -7px 7px 0px,rgb(0 0 0 / 17%) 0px 8px 10px -7px">
            <MenuButton>1.Montar</MenuButton>
            <MenuButton>2.Extras</MenuButton>
            <MenuButton>3.Vela+</MenuButton>
            <MenuButton>4.Pagar</MenuButton>
        </Flex>
    )
}

function MenuButton({children}:MenuButtonProps){
    return(
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
    )
}

export default MenuButtons