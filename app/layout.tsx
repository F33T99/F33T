import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "./(client)/GlobalStyles";
import ThemeProvider from "./(client)/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://feet.cz"),
  title: {
    default: "F33T",
    template: "F33T\u2002|\u2002%s",
  },
  themeColor: "black",
  colorScheme: "dark",
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#da532c",
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
            <GlobalStyles />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
