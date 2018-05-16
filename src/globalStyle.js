import { injectGlobal } from "styled-components";

const MAP_SIDE = 200;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Lobster');

  td {
    font-family: Lobster, cursive;
  }

  th {
    font-family: Montserrat;
  }

  .mapboxgl-map {
    position:relative;
    top:0;
    bottom:0;
    width: ${MAP_SIDE}px;
    height: ${MAP_SIDE}px;
  }
`;
