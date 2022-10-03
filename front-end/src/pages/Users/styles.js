import styled from 'styled-components';

export const TableContainer = styled.div`
  text-align: center;
  margin: 0 auto;
`;

export const TableTitle = styled.h3`
  color: #29abe2;
  font-size: 2.5rem;
  padding-top: 3rem;
`;

export const Table = styled.table`
  margin: 5rem auto 0;
  border: 1px solid #29abe2;
  /* display: flex; */

  & tr {
    color: #29abe2;
    /* display: flex;
    flex-direction: column; */
  }

  & tr > th {
    /* border: 1px solid #29abe2; */
    /* color: #29aaa7; */
    /* text-transform: none; */
    text-transform: uppercase;
  }

  & thead {
  }

  > td {
    border-top: #29abe2;
  }
`;

// .table thead th {
// }

// .table th {
//   border - top: none;
//   text - transform: uppercase;
// }

// .table td {
//   border-top: #29abe2;
// }

// th, td {
//   padding: 10px 30px;
//   text - align: center;
//   border - right: 1px solid #29abe2;
//   border - bottom: 1px solid #29abe2;
// }

// th: last - child, td: last - child {
//   border - right: none;
// }

// .td - bottom {
//   border - bottom: none;
// }

// .topo - home {
//   position: absolute;
//   bottom: 210px;
//   right: 50px;
//   width: 50px;
// }
