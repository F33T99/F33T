import { Metadata } from "next";
import Cart, { CartToggleProvider } from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StyledComponentsRegistry from "../lib/registry";
import CartProvider from "./(client)/CartProvider";
import { GlobalStyles } from "./(client)/GlobalStyles";
import ThemeProvider from "./(client)/ThemeProvider";
import { colors } from "../consts/colors";

export const metadata: Metadata = {
  metadataBase: new URL("https://feet.cz"),
  title: {
    default: "F33T\u2002—\u2002Every step counts",
    template: "F33T\u2002|\u2002%s",
  },
  description:
    "Ortopedické vložky do bot s nanotechnologií pro každodenní nošení na sport i do kanceláře.",
  themeColor: colors.black,
  colorScheme: "dark",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": colors.red400,
  },
  icons: {
    icon: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"cs"}>
      <StyledComponentsRegistry>
        <body>
          <ThemeProvider>
            <CartToggleProvider>
              <CartProvider>
                <GlobalStyles />
                <Navbar />
                <Cart />
                {children}
                <Footer />
              </CartProvider>
            </CartToggleProvider>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
