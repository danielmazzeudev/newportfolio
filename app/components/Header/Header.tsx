import * as styled from './Header.styles';

export default function Header() {
    return (
        <styled.Header>
            <styled.HeaderContent>
                <styled.Title>Daniel<br/>Mazzeu</styled.Title>
                <styled.Role>{`<FullStack Dev />`}</styled.Role>
            </styled.HeaderContent>
            <styled.HeaderContent>
                <styled.Description>Criação de experiências digitais focadas em Design, Inovação e Tecnologia. Portfólio desenvolvido com NextJS, TypeScript, CSS3, HTML e NodeJS.</styled.Description>
                <styled.Links>
                    <styled.Link href='' target='_blank' aria-label="Linkedin">
                        <styled.linkedin />
                    </styled.Link>
                    <styled.Link href='' target='_blank' aria-label="Github">
                        <styled.github />
                    </styled.Link>
                </styled.Links>
            </styled.HeaderContent>
        </styled.Header>
    );
}