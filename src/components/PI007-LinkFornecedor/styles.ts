import styled from "styled-components";
import bgImage from "../../assets/imgs/background.svg";


export const ContainerProducts = styled.section`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 2rem;

  @media (max-width: 915px) {
    flex-direction: column;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .List {
    display: none;
  }

  @media (max-width: 915px) {
    width: 100%;

    .List {
      display: flex;
      position: fixed;
      left: 0;
      top: 55%;
      cursor: pointer;
    }
  }
`;

export const AdContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-image: url(${bgImage});
  padding: 1rem 5rem;

  h1 {
    font-size: 3rem;
    max-width: 588px;
  }
  .phrase {
    margin-top: 1rem;
  }
  .items_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    margin-top: 2rem;
  }

  .items {
    display: flex;
    align-items: center;
    p {
      margin-left: 0.5rem;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 50%;
  }

  .cart_icon {
    color: white;
    background-color: #c47f17;
  }
  .package_icon {
    color: white;
    background-color: #574f4d;
  }

  .timer_icon {
    color: white;
    background-color: #dbac2c;
  }

  .coffee_icon {
    color: white;
    background-color: #8047f8;

  }
  @media (max-width: 915px) {
    width: 100%;
    padding: 2rem;
    h1 {
      font-size: 1.75rem;
    }
    img {
      display: none;
    }
    .items {
      display: flex;
      align-items: center;
      p {
        margin-left: 0.2rem;
      }
    }
    .items_container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Stores = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;
  span {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .OptionsName{
    cursor: pointer;
    &.active {
      color: #c47f17;
    }
    &:hover {
      color: #c47f17;
    }
  }
  @media (max-width: 915px) {
    width: 100%;
    span {
      font-size: 1.2rem;
    }
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 915px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
export const Options = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;

  width: 15rem;
  left: 8rem;
  top: 35rem;

  background: #f3f2f2;
  border-radius: 6px;

  .options span {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .input_options {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin-top: 2rem;
  }
  .input_options label {
    padding: 1rem;
    cursor: pointer;
  }

  .radio_style {
    cursor: pointer;
    appearance: none;
    border-radius: 50%;
    background-color: #f3e2c2;
    border: 1px solid #f3e2c2;
    width: 1rem;
    height: 1rem;
  }
  input[type="radio"]:checked {
    content: "";
    background-color: #8047f8;
    border: 1px solid #8047f8;
  }
  @media (max-width: 915px) {
    position: fixed;
    left: -500px;

    &.seeMore {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    &.seeMore  aside {
      
      overflow: auto;

      height: 600px;
    }
  }

`;
