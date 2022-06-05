import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    width: 100%;
    top: 0;
    right: 0;
    padding: 20px 100px;
    transition: 0.5s;

    .shadow {
        background: var(--text-color);
        box-shadow: 0 0 4px rgb(14 55 54 / 15%);
    }

    @media (max-width: 991px) {
        padding: 18px 4%;
    }
    @media (max-width: 768px) {
        padding: 12px 4%;
    }

`;

export const Burguer = styled.div`
    display: none;
    color: var(--green);

    @media (max-width: 768px) {
        display: initial;
    }

`;

export const Logo = styled.a`
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--bg-color);

    :hover {
    color: var(--green);
}
`;

export const Menu = styled.ul`
    display: flex;
    gap: 4rem;

    @media (max-width: 768px) {
        position: absolute;
        width: 240px;
        height: auto;
        top: 100%;
        right: -100%;
        display: none;
        flex-direction: column;
        background: var(--bg-color);
        row-gap: 1.4rem;
        padding: 20px;
        box-shadow: 4pc 4px 0 4px rgb(14 55 54 / 15%);
        transition: 0.2s ease;
        text-align: left;
    }
`;

export const Item = styled.li`
    position: relative;
`;

export const Link = styled.a`
    font-size: 1rem;
    font-weight: 500;
    color: var(--bg-color);
`;
