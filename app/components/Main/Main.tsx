import * as styled from './Main.styles';

export default function Main() {
    return (
        <styled.main>

            <styled.section>
                <styled.name>Daniel Mazzeu</styled.name>
                <styled.presentation>Desenvolvedor Full Stack proativo, focado em resolver desafios complexos através de tecnologia e inovação. Minha missão é evoluir constantemente para entregar experiências digitais excepcionais, unindo performance no back-end e elegância no front-end.</styled.presentation>
            </styled.section>

            <styled.section>
                <styled.grid>

                    <styled.card>
                        <styled.cardTitle>Front-end</styled.cardTitle>
                        <styled.cardText>Design, elegância, mas além de tudo responsividade e funcionalidade, precisa ser agradável e informativo.</styled.cardText>
                        <styled.cardTags>
                            <styled.cardTag>Html5</styled.cardTag>
                            <styled.cardTag>Css3</styled.cardTag>
                            <styled.cardTag>Javascript</styled.cardTag>
                            <styled.cardTag>React.Js</styled.cardTag>
                            <styled.cardTag>Next.Js</styled.cardTag>
                            <styled.cardTag>React Native</styled.cardTag>
                        </styled.cardTags>
                    </styled.card>

                    <styled.card>
                        <styled.cardTitle>Back-end</styled.cardTitle>
                        <styled.cardText>Pensamento sempre na manutenção e implementação de futuras novas funcionalidades, o código precisa ser clean.</styled.cardText>
                        <styled.cardTags>
                            <styled.cardTag>Node.Js</styled.cardTag>
                            <styled.cardTag>Python</styled.cardTag>
                            <styled.cardTag>PHP</styled.cardTag>
                            <styled.cardTag>MySQL</styled.cardTag>
                            <styled.cardTag>PostgreSQL</styled.cardTag>
                            <styled.cardTag>SQL Server</styled.cardTag>
                        </styled.cardTags>
                    </styled.card>

                    <styled.card>
                        <styled.cardTitle>Utilidades</styled.cardTitle>
                        <styled.cardText>Alguns conhecimentos auxiliam tanto no front-end quanto no back-end, estes são os que diferenciam um profissional dos demais.</styled.cardText>
                        <styled.cardTags>
                            <styled.cardTag>TypeScript</styled.cardTag>
                            <styled.cardTag>Git / GitHub</styled.cardTag>
                            <styled.cardTag>Firebase</styled.cardTag>
                            <styled.cardTag>Vercel</styled.cardTag>
                            <styled.cardTag>Supabase</styled.cardTag>
                            <styled.cardTag>Scrum & Kanban</styled.cardTag>
                            <styled.cardTag>Tailwind Css</styled.cardTag>
                            <styled.cardTag>Configurações DNS</styled.cardTag>
                            <styled.cardTag>Configurações SMTP</styled.cardTag>
                            <styled.cardTag>Configuração de ambiente</styled.cardTag>
                            <styled.cardTag>SEO</styled.cardTag>
                        </styled.cardTags>
                    </styled.card>

                </styled.grid>
            </styled.section>

        </styled.main>
    );
}