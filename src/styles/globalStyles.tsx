import { css, Global, useTheme } from "@emotion/react";

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          font-family: "Poppins", sans-serif !important;
          -webkit-tap-highlight-color: transparent;
          &::selection {
            background-color: ${theme.primary + "e1"};
            color: ${theme.primary};
            text-shadow: 0 0 12px ${theme.primary + "b9"};
          }
        }
        :root {
          font-family: "Poppins", sans-serif;
          line-height: 1.5;
          font-weight: 400;
          color-scheme: ${theme.darkmode ? "dark" : "light"};
          color: ${theme.secondary};
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
          --rsbs-backdrop-bg: rgba(0, 0, 0, 0.3);
          --rsbs-bg: ${theme.darkmode ? "#383838" : "#ffffff"};
        }
        img {
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -o-user-select: none;
          user-select: none;
        }

        a {
          text-decoration: none;
          -webkit-text-decoration: none;
          color: inherit;
        }

        input[type="file"]::-webkit-file-upload-button {
          display: none;
        }
        div[role="dialog"] {
          border-radius: 42px 42px 0 0;
          z-index: 9999999;
        }

        div[data-rsbs-backdrop] {
          z-index: 999;
        }

        div[data-rsbs-header] {
          z-index: 999999;
          &::before {
            width: 60px;
            height: 6px;
            border-radius: 100px;
            background: ${theme.darkmode ? "#717171" : "#cfcfcf"};
            margin-top: 3px;
          }
        }
        div[data-rsbs-header] {
          box-shadow: none;
        }
        body {
          margin: 8px 16vw;
          touch-action: manipulation;
          background: ${theme.secondary};
          background-attachment: fixed;
          background-size: cover;
          transition: 0.3s background;
          @media (max-width: 1024px) {
            margin: 20px;
          }

          /* Custom Scrollbar Styles */
          ::-webkit-scrollbar {
            width: 8px;

            background-color: ${theme.secondary};
          }

          ::-webkit-scrollbar-thumb {
            background-color: ${theme.primary};
            border-radius: 64px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: ${theme.primary + "d8"};
          }

          ::-webkit-scrollbar-track {
            border-radius: 64px;
            background-color: ${theme.secondary};
          }
        }
      `}
    />
  );
};
