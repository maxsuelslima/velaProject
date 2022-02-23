import { Button, ButtonProps, Flex, FlexProps } from "@chakra-ui/react"
import { cloneElement, ReactElement, ReactNode, useContext } from "react"
import VelaContext from "../../../Context/vela2context"

interface SelectButtonProps extends ButtonProps{
    children?:ReactNode;
    isActived?:boolean;
}

interface ActiveButtonProps extends FlexProps{
    children:ReactElement
    isActivedx?:boolean
}

function SelectButton({children,isActived=false,...rest}:SelectButtonProps){

    const stateStatus=useContext(VelaContext)
    
    return(
        <ActiveButton isActivedx={isActived}>
            <Button 
            fontSize="0.8em" 
            fontWeight={600} 

            boxSizing="border-box" 
            p="0.7em" 
            h="75px"
            bg="#EFEFEF" 
            
            my="0.3em"
            mx="0.3em"
            
            borderRadius="0.6rem" 
            border="1px"
            
            
            w="154px"
            
            

            flexDir="column"
            align="center"
            justify="center"
            
            cursor="pointer"
            {...rest} 
            >
                {children}
                
            </Button>
        </ActiveButton>

    )
}
function ActiveButton({children,isActivedx=false}:ActiveButtonProps){
    
    return(
        <Flex 
        align="center" 
        flexDirection="column" 
        justify="center" 
        flexShrink={0}>
            {cloneElement(children,{
                color:isActivedx? "green.400":'#7b7b7b',
                bg:isActivedx?"white":'#EFEFEF',
                borderColor:isActivedx?"green.400":"#D4D4D6"
            })}
        </Flex>
    )
}
export default SelectButton