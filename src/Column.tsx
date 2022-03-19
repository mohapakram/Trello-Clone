import React, { Children } from 'react'
import { ColumnContainer, ColumnTitle } from './styles'

interface ColumnProps {
    text: string
}

export const Column = ({ text }: React.PropsWithChildren<ColumnProps>) => (
    <ColumnContainer>
        <ColumnTitle>
            Column Title
        </ColumnTitle>
        {Children}
    </ColumnContainer>
)