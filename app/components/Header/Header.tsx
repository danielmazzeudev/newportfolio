import Carousel from "../Carousel/Carousel";

import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <section className="section">
                <h1 className="name">Daniel<br/>Mazzeu</h1>
                <span className="subtitle">{`<full-stack dev />`}</span>
                <p className="presentation">
                    Desenvolvedor Full Stack proativo, focado em resolver desafios complexos através de tecnologia e inovação. 
                    Minha missão é evoluir constantemente para entregar experiências digitais excepcionais, 
                    unindo performance no back-end e elegância no front-end.
                </p>
            </section>
            <Carousel />
        </header>
    );
}