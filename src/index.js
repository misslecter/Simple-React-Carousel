import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './App.css';

import Carousel from "./Carousel";

let ImageCarousel = (
    <Carousel>
        <img src="./img/1.jpg"/>
        <img src="./img/2.jpg"/>
        <img src="./img/3.jpg"/>
        <img src="./img/4.jpg"/>
    </Carousel>
);

let HtmlCarousel = (
    <Carousel>
        <div className="HtmlContent">
            <img src="./img/1.jpg"/>
            <h2>Html Content 1</h2>
            <p>Lorem ipsum dolor sit amet, et semper maiestatis cum, ne nobis nusquam abhorreant has, choro doming
                eirmod ei est. Adhuc mediocrem mel ex, mel agam ponderum disputando ad, eu vitae saperet has. Cum
                invenire quaestio petentium ei. Eam clita possit referrentur an, no munere numquam sea, justo
                voluptatibus te per. Mei cetero accusamus eu, denique volutpat interpretaris ex eos, te adhuc utinam
                vituperatoribus duo. Te numquam vulputate duo, eu eum sumo legimus.</p>
        </div>
        <div className="HtmlContent">
            <img src="./img/2.jpg"/>
            <h2>Html Content 2</h2>
            <p>Duis legimus ei sed, solum nemore nec te, fabulas dissentiet liberavisse id eam. Ad vis falli labore,
                dolorem facilis id eam. Iuvaret explicari cum et. His consulatu laboramus eu, per nostro malorum
                instructior ad, nam prima facete definiebas ut.</p>

            <p>Id graeci electram mel. Congue cetero electram cu ius, nam ludus alterum aliquando ne, an pro accusamus
                constituam. At convenire persecuti per. Vim ea iusto possim. Sed postea suscipit tincidunt et. Ius alii
                voluptua suscipiantur in, et usu illud soluta nostro. Ad usu delectus invenire evertitur.</p>
        </div>
        <div className="HtmlContent">
            <img src="./img/3.jpg"/>
            <h2>Html Content 3</h2>
            <p>Lorem ipsum dolor sit amet, et semper maiestatis cum, ne nobis nusquam abhorreant has, choro doming
                eirmod ei est. Adhuc mediocrem mel ex, mel agam ponderum disputando ad, eu vitae saperet has. Cum
                invenire quaestio petentium ei. Eam clita possit referrentur an, no munere numquam sea, justo
                voluptatibus te per. Mei cetero accusamus eu, denique volutpat interpretaris ex eos, te adhuc utinam
                vituperatoribus duo. Te numquam vulputate duo, eu eum sumo legimus.</p>
        </div>
        <div className="HtmlContent">
            <img src="./img/4.jpg"/>
            <h2>Html Content 4</h2>
            <p>Duis legimus ei sed, solum nemore nec te, fabulas dissentiet liberavisse id eam. Ad vis falli labore,
                dolorem facilis id eam. Iuvaret explicari cum et. His consulatu laboramus eu, per nostro malorum
                instructior ad, nam prima facete definiebas ut.</p>

            <p>Id graeci electram mel. Congue cetero electram cu ius, nam ludus alterum aliquando ne, an pro accusamus
                constituam. At convenire persecuti per. Vim ea iusto possim. Sed postea suscipit tincidunt et. Ius alii
                voluptua suscipiantur in, et usu illud soluta nostro. Ad usu delectus invenire evertitur.</p>
        </div>
    </Carousel>
);

ReactDOM.render(HtmlCarousel, document.getElementById('HtmlCarousel'));
ReactDOM.render(ImageCarousel, document.getElementById('ImageCarousel'));
registerServiceWorker();
