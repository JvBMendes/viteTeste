import Graficos from "./Graficos"

export const Home = () => {
    return (
        <>
        <Graficos text="Graficos de linha" color= "lightpink"/>
        <Graficos text="Graficos de area" color= "lightblue"/>
        <Graficos text="Graficos de pizza" color= "lightyellow"/>
        <Graficos text="Graficos de barra" color= "lightgreen"/>

        </>
    )
}