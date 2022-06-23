import { bgContainer, gridContainer, categoryTitle, flex1 } from "../../base.styles"
import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/header";
import { ECategory, IService } from "../../../domain/types";
import CardList from "../../components/card/card";
import CardDetails from "../../components/card/cardDetails";
import { DEFAULT_VALUE, SelectedServiceContext } from "../../../domain/context/selectedServiceContext";
import { useNavigate } from "react-router-dom";
import { getServices } from "../../../sevices/services";


function Home() {

    const { setState, state } = useContext(SelectedServiceContext);
    const [services, setServices] = useState<IService[]>()

    let navigate = useNavigate();

    useEffect(() => {
        const cookie = sessionStorage.getItem("user_logged")
        if (!cookie) {
            navigate("/")
        }

        getServices().then(snapshot => {
            setServices(Object.values(snapshot.val()) as unknown as IService[])
        })
    }, [])

    const onSearchEvent = (text: string) => {
        //não implementado
    }

    const onDetailsClose = () => {
        setState(DEFAULT_VALUE.state)
    }

    return (
        <>
            {
                services && services.length > 0 &&
                <div className={bgContainer().className}>
                    <Header onSearch={(t) => onSearchEvent(t)} />
                    <div className={gridContainer().className} role="main">
                        <div className={flex1().className}>
                            <h2 className={categoryTitle({ size: "large" }).className}>Lazer</h2>
                            <CardList services={services.filter(s => s.category == ECategory.Lazer)} />
                        </div>
                        <div className={flex1().className}>
                            <h2 className={categoryTitle({ size: "large" }).className}>Utilidade</h2>
                            <CardList services={services.filter(s => s.category == ECategory.Utilidades)} />
                        </div>
                        <div className={flex1().className}>
                            <h2 className={categoryTitle({ size: "large" }).className}>Emergência</h2>
                            <CardList services={services.filter(s => s.category == ECategory.Emergência)} />
                        </div>
                    </div>

                </div>
            }
            {
                state.title.length > 0 && <CardDetails service={state} closeDetails={() => onDetailsClose()} />
            }
        </>

    )
}

export default Home
