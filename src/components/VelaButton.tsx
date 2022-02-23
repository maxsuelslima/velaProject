import { Button, ButtonProps, Link } from "@chakra-ui/react"
import { ReactElement } from "react"

interface VelaButtonProps extends ButtonProps{
    buttonName:string;
    href:string
}

function VelaButton({href="/",buttonName,...rest}:VelaButtonProps){
    return(
        <>  
        <Link href={href}>
            <Button _hover={{style:'unstyled'}} bg="green.400">
                {buttonName}
            </Button>
        </Link>
        </>
    )
}
export default VelaButton