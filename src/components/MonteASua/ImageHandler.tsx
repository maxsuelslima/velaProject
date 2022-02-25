import { Flex,Image } from "@chakra-ui/react"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import VelaContext from "../../Context/vela2context";

type BikePhoto={
    bpURL:string
}

const api = axios.create({
    baseURL: "http://localhost:3333/",
});
function MonteASUA(){
    const [bikePhotos,setBikePhotos]=useState<BikePhoto[]>([])
    
    const velaContext=useContext(VelaContext)
    useEffect(() => {
        api
        .get<BikePhoto[]>("/bikePhoto")
        .then((response) => setBikePhotos(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    const imageIndex=velaContext.bike.cor*velaContext.bike.tam

return(
    <Flex align="center" justify="center" w="100%" bg="#EFEFEF" pt="16px">
        <Image objectFit="cover" alt="bike daohora" maxH="825px" src={bikePhotos[imageIndex-1]}/>
    </Flex>
)
}
export default MonteASUA