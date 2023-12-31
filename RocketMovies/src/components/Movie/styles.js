import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.button`
  
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;
    > h1 {
      flex: 1;
      text-align: left;
      font-weight: 700;
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > p {
      overflow: hidden;
      color: var(--Gray, #999591);
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-top: 15px;
    }

    > footer {
      width: 100%;
      display: flex;
      margin-top: 24px;
    }
  
`
