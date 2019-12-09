import React, {useEffect, useState} from 'react';

import styled from "styled-components";
import { Typography } from "@material-ui/core";
import addFundsIcon from "../assets/img/add-funds.svg";
import addFundsScreen from "../assets/img/add-funds-screen.png";

import { checkBalance } from '../api/index';

const AddFundsIcon = styled.img`
  width: 80px;
  height: 40px;
  float: left;
  margin: 10px 10px 0 40px;
`;

const AddFundsText = styled(Typography)`
  margin: 15px 0;
`;

const AddFundsImage = styled.img`
  height: 450px;
  margin: 10px 20px 10px 40px;
`;


export const AddFunds = () => {
    const [balance, setBalance] = useState('100');
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        checkBalance('rBfLmb4EVdPANsc7X7oNtbydYqxJHphTm3')
            .then( (res: any) => {
                setBalance(res.data.xrpBalance);
                setLoad(true);
            })
            .catch( (err: any) => {
                setError(err.message);
                setLoad(true)
            })
    }, []);


    if (load) {
        return (
          <>
            <AddFundsIcon src={addFundsIcon} alt="Add funds" />
            <AddFundsText variant="h5">
              Add Funds - <br/>
              current balance ({Math.round(parseInt(balance,10))} XRP)
            </AddFundsText>
            <AddFundsImage src={addFundsScreen} alt="Add funds" />
          </>
        );
    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
};

export default AddFunds;
