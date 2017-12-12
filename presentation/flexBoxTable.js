import React, { Component } from "react";
import styled from "styled-components";

class FlexBoxTable extends Component {
  render() {
    return (
      <Table>
        <thead>
          <Tr>
            <Th style={{ textAlign: "center" }} />
            <Th style={{ textAlign: "center" }}>Options (Default:Yeşil)</Th>
            <Th style={{ textAlign: "left" }}>Açıklama</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td style={{ textAlign: "center" }}><code>flexDirection</code></Td>
            <Td style={{ textAlign: "center" }}>
              <code>row,<Default>column</Default></code>
            </Td>
            <Td style={{ textAlign: "left" }}>
              (
              <Strong>column</Strong>
              ) seçerseniz elementleri dikey, (
              <Strong>row</Strong>
              ) seçerseniz elementleri yatay sıralar.    Bu seçim çok önemli çünkü bizim
              {" "}
              <Strong>primary axis</Strong>
              {" "}
              'imiz ne olacak onu belirler. Diğeri
              {" "}
              <Strong>secondary axis</Strong>
              {" "}
              olur
            </Td>
          </Tr>
          <Tr>
            <Td style={{ textAlign: "center" }}><code>justifyContent</code></Td>
            <Td style={{ textAlign: "center" }}>
              <code>
                <Default>flex-start</Default>
                , center, flex-end,   space-around, space-between
              </code>
            </Td>
            <Td style={{ textAlign: "left" }}>
              Child elementlerimiz
              {" "}
              <Strong>primary axis</Strong>
              {" "}
              boyunca Container içinde nasıl dağılsın.
            </Td>
          </Tr>
          <Tr>
            <Td style={{ textAlign: "center" }}><code>alignItems</code></Td>
            <Td style={{ textAlign: "center" }}>
              <code>
                flex-start, center, flex-end,<Default>stretch</Default>
              </code>
            </Td>
            <Td style={{ textAlign: "left" }}>
              Child elementlerimiz
              {" "}
              <Strong>secondary axis</Strong>
              {" "}
              boyunca Container içinde nasıl dağılsın.
            </Td>
          </Tr>
        </tbody>
      </Table>
    );
  }
}

const Table = styled.table`
    border:1px solid black;
    widTh:100%;
    height:100%;
`;

const Tr = styled.tr`
   border:1px solid black;
`;

const Th = styled.th`
   border:1px solid black;
`;

const Td = styled.td`
   border:1px solid black;
`;

const Strong = styled.strong`
   color:red;
`;

const Default = styled.code`
    color:green
`;

export default FlexBoxTable;
