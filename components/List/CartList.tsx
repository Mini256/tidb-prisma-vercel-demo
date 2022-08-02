import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { shoppingCartState } from "atoms";

import CartItemCard from "components/Card/CartItem";

export default function CartList() {
  const [shoppingCart] = useRecoilState(shoppingCartState);

  return (
    <>
      {shoppingCart.map((cartItem) => (
        <CartItemCard key={cartItem.id} {...cartItem} />
      ))}
    </>
  );
}
