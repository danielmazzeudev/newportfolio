import './Main.css';

export const dynamic = 'force-dynamic';

export default function Main() {
    return (
        <main className="main-container">

            <section className="section">
                <h1 className="name">Daniel Mazzeu</h1>
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
                        <p className="card-text">Alguns conhecimentos auxiliam tanto no front-end quanto no back-end, estes são os que diferenciam um profissional dos demais.</p>
                        <div className="card-tags">
                            <span className="card-tag">TypeScript</span>
                            <span className="card-tag">Git / GitHub</span>
                            <span className="card-tag">Firebase</span>
                            <span className="card-tag">Vercel</span>
                            <span className="card-tag">Supabase</span>
                            <span className="card-tag">Scrum & Kanban</span>
                            <span className="card-tag">Tailwind Css</span>
                            <span className="card-tag">Configurações DNS</span>
                            <span className="card-tag">Configurações SMTP</span>
                            <span className="card-tag">Configuração de ambiente</span>
                            <span className="card-tag">SEO</span>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}