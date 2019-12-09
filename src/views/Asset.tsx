import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  Avatar,
  Button,
  Modal,
  TextField,
  Paper,
  Typography
} from "@material-ui/core";
import bitcoinLogo from "../assets/img/bitcoin-logo.svg";
import xrpLogo from "../assets/img/xrp-logo.svg";
const { TradingViewEmbed, widgetType } = require("react-tradingview-embed");
// const cc = require("cryptocompare");

// cc.setApiKey(
//   "c48db3e2dd3340651fd7738563214e582a3094a50ea127e24b0b4d72c38d1e2a"
// );

const InvestButton = styled(Button)`
  width: 100%;
  color: white;
  height: 50px;
`;

const ConfirmButton = styled(Button)`
  width: 90%;
  color: white;
  height: 50px;
  margin: 10px;
`;

const InvestModal = styled(Modal)`
  margin: 20px;
`;

const ModalHeader = styled(Typography)`
  margin: 30px 20px 0;
`;

const AmountInput = styled(TextField)`
  margin: 20px;
`;

interface AssetProps {
  match: any;
}

const Asset: React.FC<AssetProps> = ({ match }) => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await cc.coinList();
  //     console.log(res.Data);
  //     setData(res.Data);
  //   };
  //   fetchData();
  // }, []);
  const [modalOpen, setModalOpen] = useState(false);

  const renderCardHeader = () => {
    const symbol = match.params.symbol;
    if (symbol === "BTC") {
      return (
        <CardHeader
          title="Bitcoin"
          subheader="BTC"
          avatar={<Avatar alt="Bitcoin logo" src={bitcoinLogo} />}
        />
      );
    } else if (symbol === "XRP") {
      return (
        <CardHeader
          title="Ripple"
          subheader="XRP"
          avatar={<Avatar alt="Ripple logo" src={xrpLogo} />}
        />
      );
    }
  };

  const handleInvestClick = () => {
    setModalOpen(true);
  };

  const handleConfirmClick = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card>{renderCardHeader()}</Card>
      <TradingViewEmbed
        widgetType={widgetType.MINI_CHART}
        widgetConfig={{
          colorTheme: "light",
          width: "100%",
          height: "230",
          symbol: `Coinbase:${match.params.symbol}USD`,
          dateRange: "1d"
        }}
      />
      <div className="center">
        <InvestButton
          color="secondary"
          variant="contained"
          onClick={handleInvestClick}
        >
          Invest
        </InvestButton>
      </div>
      <InvestModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Paper>
          <ModalHeader variant="subtitle1">
            Specify the amount you wish to invest
          </ModalHeader>
          <AmountInput id="amount" label="amount" variant="outlined" />
          <ConfirmButton
            color="primary"
            variant="contained"
            onClick={handleConfirmClick}
          >
            Confirm
          </ConfirmButton>
        </Paper>
      </InvestModal>
    </>
  );
};

export default Asset;
