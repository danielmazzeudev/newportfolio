import { Link } from 'lucide-react';
import './Main.css';

export default function Main() {
    return (
        <main className="main">
            <section className="section">
                <h1 className="name">Daniel<br/>Mazzeu</h1>
                <span className="subtitle">{`<full-stack dev />`}</span>
                <p className="presentation">
                    Desenvolvedor Full Stack proativo, focado em resolver desafios complexos através de tecnologia e inovação. 
                    Minha missão é evoluir constantemente para entregar experiências digitais excepcionais, 
                    unindo performance no back-end e elegância no front-end.
                </p>
            </section>

            <section className="section">
                <div className="grid">
                    <div className="card">
                        <h2 className="card-title">Front-end</h2>
                        <p className="card-text">Design, elegância, mas além de tudo responsividade e funcionalidade, precisa ser agradável e informativo.</p>
                        <div className="card-tags">
                            <span className="card-tag">Html5</span>
                            <span className="card-tag">Css3</span>
                            <span className="card-tag">Javascript</span>
                            <span className="card-tag">React.Js</span>
                            <span className="card-tag">Next.Js</span>
                            <span className="card-tag">React Native</span>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="card-title">Back-end</h2>
                        <p className="card-text">Pensamento sempre na manutenção e implementação de futuras novas funcionalidades, o código precisa ser clean.</p>
                        <div className="card-tags">
                            <span className="card-tag">Node.Js</span>
                            <span className="card-tag">Python</span>
                            <span className="card-tag">PHP</span>
                            <span className="card-tag">MySQL</span>
                            <span className="card-tag">PostgreSQL</span>
                            <span className="card-tag">SQL Server</span>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="card-title">Utilidades</h2>
                        <p className="card-text">Conhecimentos auxiliares que diferenciam um profissional dos demais no mercado atual.</p>
                        <div className="card-tags">
                            <span className="card-tag">TypeScript</span>
                            <span className="card-tag">Git / GitHub</span>
                            <span className="card-tag">Firebase</span>
                            <span className="card-tag">Vercel</span>
                            <span className="card-tag">Supabase</span>
                            <span className="card-tag">Tailwind Css</span>
                            <span className="card-tag">SEO</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="grid">
                    <div className="card">
                        <h2 className="card-title">Projeto<br/>JSON Generator</h2>
                        <p className="card-text">Gere estruturas complexas instantaneamente usando IA. Ferramenta ideal para criar mocks e esquemas de dados.</p>
                        <a className='card-link' href='https://jsongenerator.danielmazzeu.com.br' target='_blank'><Link /> Acessar</a>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Projeto<br/>Nepbot</h2>
                        <p className="card-text">Agente de IA responsável por direcionar novos clientes da empresa Neppo para seus canais de atentimento.</p>
                        <a className='card-link' href='https://chatbot.danielmazzeu.com.br' target='_blank'><Link /> Acessar</a>
                    </div>
                    <div className="card">
                        <h2 className="card-title">Projeto<br/>Pokemon Data API</h2>
                        <p className="card-text">Explore o universo Pokémon através desta aplicação que demonstra consumo de APIs REST e exibição estruturada de dados.</p>
                        <a className='card-link' href='https://pokeapi.danielmazzeu.com.br/' target='_blank'><Link /> Acessar</a>
                    </div>
                </div>
            </section>
        </main>
    );
}