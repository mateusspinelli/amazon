import React from 'react'
import Produto from "./Produto"
import './css/Home.css'

function Home() {
    return (
        <div className="home">


            <img className="home__img"
            src="https://images-na.ssl-images-amazon.com/images/G/32/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_pt-BR_FT_PVD6152._CB414514693_.jpg"
            alt=""></img>


            <div className="home__linhaProdutos">


                <Produto
                    id = "0000001"
                    titulo="Mouse Gamer RGB Logitech G403 HERO com Tecnologia LIGHTSYNC, 6 Botões Programáveis, Ajuste de Peso e Sensor HERO 25K"
                    preco={199}
                    avaliacao={5}
                    img="https://m.media-amazon.com/images/I/51g8GGBXJwL._AC_UL320_.jpg"
                />


                <Produto
                    id = "0000002"
                    titulo="Teclado Mecânico Gamer Redragon Dark Avenger Branco Switch Outemu Red RGB ABNT2 - K568W-RGB"
                    preco={276}
                    avaliacao={5}
                    img="https://m.media-amazon.com/images/I/61GJ+nWRoYL._AC_UL320_.jpg"
                />

            </div>







            <div className="home__linhaProdutos">

                <Produto
                    id = "0000003"
                    titulo="Mouse Razer Deathadder Essential"
                    preco={200}
                    avaliacao={4}
                    img="https://m.media-amazon.com/images/I/712FFQs35IL._AC_UL320_.jpg"
                />

                <Produto
                    id = "0000004"
                    titulo="Razer Headset Kraken X Lite Multi Platform, Razer, Fone de Ouvido com Microfone"
                    preco={328}
                    avaliacao={3}
                    img="https://m.media-amazon.com/images/I/31LsJuF1X-L._AC_UL320_.jpg"
                />

                <Produto
                    id = "0000005"
                    titulo="Razer Headset Hammerhead Ios"
                    preco={779}
                    avaliacao={4}
                    img="https://m.media-amazon.com/images/I/51gXy2Mtl3L._AC_UL320_.jpg"
                />

            </div>




            <div className="home__linhaProdutos">

                <Produto
                    id = "0000006"
                    titulo="MONITOR LG 29 PRO GAMER ULTRAWIDE FULL HD - 29UM69G-B"
                    preco={1700}
                    avaliacao={5}
                    img="https://m.media-amazon.com/images/I/41RdVswUGDL._AC_UL320_.jpg"
                />

            </div>


        </div>
    )
}

export default Home
