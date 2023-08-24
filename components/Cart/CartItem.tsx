import { useCartLine } from "@shopify/hydrogen-react";
import { formatPrice } from "../../helpers/formatPrice";
import { Large } from "../Typography/Large";
import { Micro } from "../Typography/Micro";
import CartQuantityInput from "./CartQuantityInput";
import { QuantityContainer, StyledCartItem } from "./Styles/StyledCartItem";

interface CartItemProps {}

const CartItem = ({}: CartItemProps) => {
  const { merchandise, cost } = useCartLine();
  return (
    <StyledCartItem>
      <Large className='uppercase black' style={{ gridArea: "title" }}>
        {merchandise.product.title}
      </Large>
      <Large className='black' style={{ gridArea: "price" }}>
        {formatPrice(cost.totalAmount.amount)}
      </Large>
      <QuantityContainer style={{ gridArea: "quantity" }}>
        <Micro className='black uppercase'>počet kusů</Micro>
        <CartQuantityInput />
      </QuantityContainer>
    </StyledCartItem>
  );
};

export default CartItem;
