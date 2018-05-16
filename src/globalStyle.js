import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Lobster');

  td {
    font-family: Lobster, cursive;
  }

  th {
    font-family: Montserrat;
  }
`;
