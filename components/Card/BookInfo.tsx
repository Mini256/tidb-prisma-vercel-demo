import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { VariantType, useSnackbar } from "notistack";

import { shoppingCartState } from "atoms";
import { useRecoilState } from "recoil";

import { BookProps } from "const";

function currencyFormat(num: number | string) {
  return parseFloat(`${num}`)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default function BasicCard(props: BookProps) {
  const { id, title, type, price, averageRating, authors, ratings } = props;
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);

  const { enqueueSnackbar } = useSnackbar();
  const handleClick = () => {
    enqueueSnackbar(`"${title}" was successfully added.`, {
      variant: "success",
    });
  };

  const addItem = () => {
    setShoppingCart((oldShoppingCart) => {
      const existingItem = oldShoppingCart.find((i) => i.id === id);
      if (existingItem) {
        const newItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        return [...oldShoppingCart.filter((i) => i.id !== id), newItem];
      }
      return [
        ...oldShoppingCart,
        {
          ...props,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <Card sx={{ width: 256 }}>
      <CardMedia
        component="img"
        height="140"
        image={`https://picsum.photos/seed/${id}/200/300`}
        alt={title}
      />
      <CardContent>
        {type && (
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {type}
          </Typography>
        )}
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {authors.map((author) => author.author.name).join(`, `)}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Rating
            name="read-only"
            precision={0.5}
            value={averageRating}
            size="small"
            readOnly
          />
          <Typography component="div" variant="body2" sx={{ color: "#616161" }}>
            {ratings}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton
          aria-label="add to cart"
          onClick={() => {
            handleClick();
            addItem();
          }}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <Typography
          variant="h5"
          sx={{ marginLeft: "auto", marginRight: "8px" }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ paddingRight: 0.5 }}
          >
            $
          </Typography>
          {currencyFormat(price)}
        </Typography>
      </CardActions>
    </Card>
  );
}
