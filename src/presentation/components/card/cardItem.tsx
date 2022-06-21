import { bgContainer, Logo, Button, TextField, Avatar } from "../../base.styles"
import { useContext, useEffect, useState } from "react";
import { IService } from "../../../domain/types";
import { cardItemBgImg, cardItemContainer, cardItemTag, cardItemTitle } from "./card.styles";
import { SelectedServiceContext } from "../../../domain/context/selectedServiceContext";

interface ICardItemProps {
    service: IService
}

const CardItem: React.FC<ICardItemProps> = ({ service }: ICardItemProps) => {

    const [cardItem, setCardItem] = useState<IService>(service)
    const { setState, state } = useContext(SelectedServiceContext);


    return (
        <div className={cardItemContainer().className} onClick={() => setState(cardItem)}>
            {
                cardItem.bgImg &&
                <img src={cardItem.bgImg} className={cardItemBgImg().className} />
            }
            <span>{cardItem.data!.getHours().toLocaleString()}h</span>
            <span className={cardItemTitle().className}>{cardItem.title}</span>
            <div>
                {cardItem.tags.map(tag =>
                    <div key={tag} className={cardItemTag().className}>
                        <img src={`src/assets/icons/${tag}.svg`} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardItem;