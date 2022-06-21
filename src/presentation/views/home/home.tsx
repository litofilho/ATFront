import { bgContainer, Logo, Button, TextField, gridContainer, categoryTitle, flex1 } from "../../base.styles"
import { useContext, useState } from "react";
import { loginWithEmail, createUser } from "../../../sevices/services"
import Header from "../../components/header/header";
import { ECategory, IService } from "../../../domain/types";
import CardList from "../../components/card/card";
import CardDetails from "../../components/card/cardDetails";
import { DEFAULT_VALUE, SelectedServiceContext } from "../../../domain/context/selectedServiceContext";

const services: IService[] = [
    {
        title: "Exposição XPTO - MASP",
        data: new Date(),
        tags: ["pago", "arte"],
        location: "",
        bgImg: "https://classic.exame.com/wp-content/uploads/2022/03/candido-potinari-exposicao.jpeg?quality=70&strip=info&w=1024",
        description: "",
        category: ECategory.Lazer
    },
    {
        title: "Ibis Budget",
        data: new Date(),
        tags: ["pago", "hospedagem"],
        location: "",
        bgImg: "https://www.ahstatic.com/photos/9610_ho_00_p_1024x768.jpg",
        description: "",
        category: ECategory.Utilidades
    },
    {
        title: "Hospital",
        data: new Date(),
        tags: ["saúde"],
        location: "",
        bgImg: "",
        description: "",
        category: ECategory.Emergência
    },
]

function Home() {

    const { setState, state } = useContext(SelectedServiceContext);

    const onSearchEvent = (text: string) => {
        //não implementado
    }

    const onDetailsClose = () => {
        console.log('closou')
        setState(DEFAULT_VALUE.state)
    }

    return (
        <>
            <div className={bgContainer().className}>
                <Header onSearch={(t) => onSearchEvent(t)} />
                <div className={gridContainer().className}>
                    <div className={flex1().className}>
                        <h2 className={categoryTitle({ size: "large" }).className}>Lazer</h2>
                        <CardList services={services.filter(s => s.category == ECategory.Lazer)} />
                    </div>
                    <div className={flex1().className}>
                        <h2 className={categoryTitle({ size: "large" }).className}>Utilidade</h2>
                        <CardList services={services.filter(s => s.category == ECategory.Utilidades)} />
                    </div>
                </div>

            </div>
            {
                state.title.length > 0 && <CardDetails service={state} closeDetails={() => onDetailsClose()} />
            }
        </>

    )
}

export default Home
