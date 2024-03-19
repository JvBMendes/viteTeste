import Graficos from "./Graficos"

export const Home = () => {
    return (
        <>
        <Graficos text="Graficos de linha" color= "lightpink" whatChart = "line"/>
        <Graficos text="Graficos de area" color= "lightblue"  whatChart = "area"/>
        <Graficos text="Graficos de pizza" color= "lightyellow"  whatChart = "line"/>
        <Graficos text="Graficos de barra" color= "lightgreen"  whatChart = "line"/>

        </>
    )
}