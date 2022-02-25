import { Flex,Image } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { api } from "../../services/api";
import { IState } from "../../store";
import { IBikeState } from "../../store/modules/selectedBike/type";


function MonteASUA(){
    const [bikePhotos,setBikePhotos]=useState<Array<Array<Array<string>>>>([[[],[],[],[]],[[],[],[],[]]])
    
    const bike=useSelector<IState, IBikeState>(state=>state.bike)

    useEffect(() => {
        api
        .get<Array<Array<Array<string>>>>("/bikePhoto")
        .then((response) => setBikePhotos(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    const {quadroId,colorId,sizeId}=bike
    console.log(quadroId-1)
    console.log(sizeId-1)
    console.log(colorId-1)

    const imageUrl=bikePhotos[quadroId-1][sizeId-1][colorId-1]    //                      
                                                         
return(
    <Flex align="center" justify="center" w="100%" bg="#EFEFEF" pt="16px">
        <Image objectFit="cover" alt="bike daohora" maxH="825px" src={`${imageUrl}`}/>
    </Flex>
)
}
export default MonteASUA