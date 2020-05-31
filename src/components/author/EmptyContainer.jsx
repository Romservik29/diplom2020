import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  align-items: center;
  display: flex;
  background-color:grey;
  width: 100%;
  height: 250px;
  justify-content: center;
`;

export default function EmptyContainer() {
    return (
        <Box>
            <h1>Пусто</h1>
        </Box>
    )
}
