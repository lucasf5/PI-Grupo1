import React, { useState } from "react";
import { CurrencyDollarSimple, CreditCard, ArrowsLeftRight, Money } from 'phosphor-react';

import { PayMethodContainer } from "./style";
import { useCart } from "../../contexts/useCart";
import classNames from "classnames";

const PayMethod = () => {
    const [value, setValue] = useState("Cartão de Crédito");

    const { setPagamento } = useCart();

    const handleRadio = (type: string) => {
        setValue(type);
        setPagamento(type);
    };
    console.log(value);
    return (
        <PayMethodContainer>
            <div className="header">
                <CurrencyDollarSimple className="icon" size={32} />
                <div>
                    <h2>Pagamento</h2>
                    <p>Escolha a forma que deseja pagar</p>
                </div>
            </div>
            <div className="payOptionsContainer">
                <div className={classNames({
                    button: true,
                    "select": value === "Cartão de Crédito",
                })} onClick={() => handleRadio('Cartão de Crédito')}>
                    <CreditCard className="icon" size={25} />
                    <p>Cartão de Crédito</p>
                </div>
                <div className={classNames({
                    button: true,
                    "select": value === "Dinheiro",
                })} onClick={() => handleRadio('Dinheiro')}>
                    <Money className="icon" size={25} />
                    <p>Dinheiro</p>
                </div>
                <div className={classNames({
                    button: true,
                    "select": value === "Transferência",
                })} onClick={() => handleRadio('Transferência')}>
                    <ArrowsLeftRight className="icon" size={25} />
                    <p>Transferência</p>
                </div>
            </div>
        </PayMethodContainer >
    )
};

export default PayMethod;