'use client';

import { Linkedin, GithubIcon } from 'lucide-react';
import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
`;

export const Title = styled.h1`
    font-size: 34px;
    font-weight: 900;
    line-height: 1;
    text-transform: uppercase;
    
    @media (max-width: 900px) {
        font-size: 24px;
        text-align: center;
    }
`;

export const Role = styled.p`
    padding: 8px 15px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    border-radius: 8px;
    background-color: #000;
    
    @media (max-width: 900px) {
       font-size: 12px; 
    }
`;

export const Description = styled.p`
    font-size: 14px;
    line-height: 1.3;
    text-align: right;
    max-width: 600px;
    color: #444;

    @media (max-width: 900px) {
        font-size: 12px;
        text-align: center;
    }
`;

export const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;

    @media (max-width: 900px) {
        justify-content: inherit;
    }
`;

export const Link = styled.a`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 8px;
    background-color: #000;

    @media (max-width: 900px) {
        width: 30px;
        height: 30px;
    }
`;

export const linkedin = styled(Linkedin)`
    width: 20px;
    height: auto;

    @media (max-width: 900px) {
        width: 16px;
        height: auto; 
    }
`;

export const github = styled(GithubIcon)`
    width: 20px;
    height: 20px;

    @media (max-width: 900px) {
        width: 16px;
        height: auto; 
    }
`;