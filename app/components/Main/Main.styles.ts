import styled from 'styled-components';

export const main = styled.main`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    background-color: #ffffff;
    background-image: radial-gradient(#e5e5e5 1px, transparent 1px);
    background-size: 40px 40px; 
    color: #000;
`;

export const section = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const name = styled.h1`
    font-size: clamp(4rem, 12vw, 8rem);
    line-height: 0.8;
    letter-spacing: -0.05em;
    font-weight: 900;
    margin-bottom: 24px;
    text-transform: uppercase;
    color: #000;
  
    @media (max-width: 768px) {
        letter-spacing: -0.02em;
    }
`;

export const presentation = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    max-width: 500px;
    font-weight: 500;
    border-left: 2px solid #000;
    padding-left: 20px;
    margin-left: 5px;
`;

export const grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1px;
    background-color: #eee;
    border: 1px solid #eee;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`;

export const card = styled.div`
    background: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: #000;
        transition: width 0.4s ease;
    }

    &:hover::before {
        width: 100%;
    }
`;

export const cardTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    text-transform: uppercase;
`;

export const cardText = styled.p`
    font-size: 0.95rem;
    line-height: 1.7;
    color: #888;
    font-weight: 400;
`;

export const cardTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const cardTag = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    padding: 8px;
    background: #f0f0f0;
    color: #000;
    border-radius: 8px;
    letter-spacing: 1px;
`;