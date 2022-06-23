import { useContext, useState } from "react";
import { IService } from "../../../domain/types";
import { cardItemBgImg, cardItemContainer, cardItemTag, cardItemTitle } from "./card.styles";
import { SelectedServiceContext } from "../../../domain/context/selectedServiceContext";

interface ICardItemProps {
    service: IService
}

const CardItem: React.FC<ICardItemProps> = ({ service }: ICardItemProps) => {

    const [cardItem] = useState<IService>(service)
    const { setState } = useContext(SelectedServiceContext);


    return (
        <div className={cardItemContainer().className} onClick={() => setState(cardItem)}>
            {
                cardItem.bgImg &&
                <img src={cardItem.bgImg} alt={`imagem ilustrativa ${cardItem.title}`} className={cardItemBgImg().className} />
            }
            <span>{cardItem.time}</span>
            <span className={cardItemTitle().className}>{cardItem.title}</span>
            <div>
                {cardItem.tags.split(';').map(tag =>
                    <div key={tag} className={cardItemTag().className}>
                        <img src={`src/assets/icons/${tag}.svg`} alt={`icone ${tag}`} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardItem;