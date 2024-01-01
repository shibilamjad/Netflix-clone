import { createGlobalStyle } from "styled-components";

const GlobalThemes = createGlobalStyle`
  #root {
  
    &,&.dark-mode {
      --color-textColor: rgba(117, 117, 117, 1);
      --color-logo: rgba(214, 45, 48, 1);
      --color-light: #ffffff;
      --color-black: #232f3e;
      --color-input: rgba(51, 51, 51, 1);
      --color-inputFont: rgba(140, 140, 140, 1);
      --color-btnsign: rgba(229, 9, 20, 1);
      --color-blacklight: rgba(0, 0, 0, 0.75);
      --color-bg: rgba(0, 0, 0, 0.15);
    }
    &.light-mode   {
        --color-textColor: rgb(23, 23, 23);
  --color-logo: rgba(214, 45, 48, 1);
  --color-light: #ffffff;
  --color-black: #232f3e;
  --color-input: rgb(15, 15, 15);
  --color-inputFont: rgba(140, 140, 140, 1);
  --color-btnsign: rgba(229, 9, 20, 1);
  --color-blacklight: rgba(255, 255, 255, 0.80);
  --color-bg: rgba(255, 255, 255, 0.10);
    }
  }
`;
export default GlobalThemes;
