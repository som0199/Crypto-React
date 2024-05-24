import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoinCard from "../components/CoinCard";
import { fetchCoins } from "../store/coins/coinSlice";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { coins, isLoading } = useSelector((state) => state.coins);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(fetchCoins());
  }, [user]);

  if (isLoading || coins.length === 0 || !coins) {
    return (
      <Container sx={{ padding: "50px 0px" }} align="center">
        <CircularProgress color="secondary" />
      </Container>
    );
  }
  // console.log(coins.coins[3].item.large)
  return (
    <>
      <Box>
        <Typography variant="h3" align="center" sx={{ margin: "40px 20px" }}>
          Trending Coins
        </Typography>

        <Grid container spacing={4}>
          {coins.map((coin) => (
            <CoinCard key={coin.item.coin_id} coin={coin.item} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
