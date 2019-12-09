import React from "react";
import styled from "styled-components";
import { Card, CardHeader, Avatar } from "@material-ui/core";
import bitcoinLogo from "../assets/img/bitcoin-logo.svg";
import xrpLogo from "../assets/img/xrp-logo.svg";
const { TradingViewEmbed, widgetType } = require("react-tradingview-embed");

interface AssetProps {
  match: any;
}

const Asset: React.FC<AssetProps> = ({ match }) => {
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
    </>
  );
};

export default Asset;
