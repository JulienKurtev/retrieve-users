import styled from 'styled-components';

const Col = styled.div`
position: relative;
   &.col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
   }
   &.col-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
   }
   &.col-2 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
   }
   &.col-3 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
   }
   &.col-4 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
   }
   &.col-5 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
   }
   &.col-6 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
   }
   &.col-7 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
   }
   &.col-8 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
   }
   &.col-9 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
   }
   &.col-10 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
   }
   &.col-11 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
   }
   &.col-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
   }
   &.offset-1 {
    margin-left: 8.333333%;
   }
   &.offset-2 {
    margin-left: 16.666667%;
   }
   &.offset-3 {
    margin-left: 25%;
   }
   &.offset-4 {
    margin-left: 33.333333%;
   }
   &.offset-5 {
    margin-left: 41.666667%;
   }
   &.offset-6 {
    margin-left: 50%;
   }
   &.offset-7 {
    margin-left: 58.333333%;
   }
   &.offset-8 {
    margin-left: 66.666667%;
   }
   &.offset-9 {
    margin-left: 75%;
   }
   &.offset-10 {
    margin-left: 83.333333%;
   }
   &.offset-11 {
    margin-left: 91.666667%;
   }

   @media(max-width: 767px) {
      &.col-1,
      &.col-2,
      &.col-3,
      &.col-4,
      &.col-5,
      &.col-6,
      &.col-7,
      &.col-8,
      &.col-9,
      &.col-10,
      &.col-11,
      &.col-12 {
         flex: 100%;
         width: 100%;
         max-width: 100%;
      }

      &.offset-1,
      &.offset-2,
      &.offset-3,
      &.offset-4,
      &.offset-5,
      &.offset-6,
      &.offset-7,
      &.offset-8,
      &.offset-9,
      &.offset-10,
      &.offset-11 { margin-left: 0;}
   }
`

export default Col;