"use client";

import {
  CartCheckoutButton,
  CartLineProvider,
  useCart,
} from "@shopify/hydrogen-react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { easing } from "../../consts/animationConfig";
import { colors } from "../../consts/colors";
import { formatPrice } from "../../helpers/formatPrice";
import Button from "../Button/Button";
import ModalClose from "../Icons/ModalClose";
import Line from "../Line/Line";
import Scrollbar from "../Scrollbar/Scrollbar";
import { Big } from "../Typography/Big";
import CartItem from "./CartItem";
import {
  CartContent,
  CartFooter,
  CartHeader,
  CartItemWrapper,
  CartItems,
  DisableScroll,
  Drawer,
  Overlay,
  StyledCart,
  TotalPrice,
} from "./Styles/StyledCart";

interface CartProps {}

export const CartToggleContext = createContext<{
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
}>(null);

export const CartToggleProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartToggleContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartToggleContext.Provider>
  );
};

const Cart = ({}: CartProps) => {
  const { lines, cost } = useCart();
  const pathname = usePathname();
  const { setShowCart, showCart } = useContext(CartToggleContext);

  useEffect(() => {
    setShowCart(false);
  }, [pathname]);

  return (
    <>
      {showCart && <DisableScroll />}
      <StyledCart>
        <Drawer
          initial={false}
          animate={{
            x: showCart ? "0%" : "100%",
            boxShadow: showCart
              ? `10px 0 70px ${colors.red400}`
              : `0px 0 0px ${colors.red400}`,
          }}
          transition={{ ease: easing, duration: 0.5 }}>
          <CartHeader>
            <Big className='uppercase black'>Košík</Big>
            <ModalClose onClick={() => setShowCart(false)} />
          </CartHeader>
          <CartContent>
            <Scrollbar neutral autoHide>
              {lines.length === 0 ? (
                <>
                  <Big className='black'>Váš košík je prázdný</Big>
                  <Button href={"/products"}>Přejít na produkty</Button>
                </>
              ) : (
                <CartItems>
                  {lines.map((line, i) => {
                    return (
                      <CartLineProvider line={line} key={i}>
                        <CartItemWrapper>
                          <CartItem />
                          {!(lines.length === i + 1) && (
                            <Line stroke='gray500' diagonalSize={20} />
                          )}
                        </CartItemWrapper>
                      </CartLineProvider>
                    );
                  })}
                </CartItems>
              )}
            </Scrollbar>
          </CartContent>
          <CartFooter>
            <TotalPrice>
              <Big className='black'>Celkem</Big>
              <Big className='black'>
                {formatPrice(cost?.totalAmount?.amount)}
              </Big>
            </TotalPrice>
            <Button as={"span"} className='big full-width'>
              <CartCheckoutButton style={{ all: "unset" }}>
                pokračovat
              </CartCheckoutButton>
            </Button>
          </CartFooter>
        </Drawer>
        <AnimatePresence>
          {showCart && (
            <Overlay
              key={"overlay"}
              onClick={() => setShowCart(false)}
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur( 5px )" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </StyledCart>
    </>
  );
};

export default Cart;