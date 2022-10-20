import {TitleHeader, ImgPerfil} from './styled'


export const Header = (props) => {

    return(
        <TitleHeader>
            <p>{props.dadosHeader.nomeHeader}</p>
            <ImgPerfil src={props.dadosHeader.fotoHeader}/>
            Insta4
        </TitleHeader>
    )
}