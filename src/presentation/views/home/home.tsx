import { bgContainer, Logo, Button, TextField, gridContainer, categoryTitle, flex1 } from "../../base.styles"
import { useState } from "react";
import { loginWithEmail, createUser } from "../../../sevices/services"
import Header from "../header/header";
import { ECategory, IService } from "../../../domain/types";
import Card from "../card/card";

const services: IService[] = [
    {
        title: "Exposição XPTO - MASP",
        data: new Date(),
        tags: ["pago", "arte"],
        location: "",
        bgImg: "",
        description: "",
        category: ECategory.Lazer
    },
    {
        title: "Ibis Budget",
        data: new Date(),
        tags: ["pago", "hospedagem"],
        location: "",
        bgImg: "",
        description: "",
        category: ECategory.Utilidades
    },
    {
        title: "Hospital",
        data: new Date(),
        tags: ["saúde", "gratuito"],
        location: "",
        bgImg: "",
        description: "",
        category: ECategory.Emergência
    },
]

function Home() {

    const onSearchEvent = (text: string) => {
        //não implementado
    }

    return (
        <div className={bgContainer().className}>
            <Header onSearch={(t) => onSearchEvent(t)} />
            <div className={gridContainer().className}>
                <div className={flex1().className}>
                    <h2 className={categoryTitle({ size: "large" }).className}>Lazer</h2>
                    <Card services={services.filter(s => s.category.toLocaleString() == "Lazer")} />
                </div>
                <div className={flex1().className}>
                    <h2 className={categoryTitle({ size: "large" }).className}>Utilidade</h2>
                    <Card services={services.filter(s => s.category.toLocaleString() == "Utilidades")} />
                </div>
            </div>

        </div>

    )
}

export default Home;