import { css } from '@emotion/css'
import React from 'react'

export const Button = () => {
  return (
    <a href='https://dikidi.net/141929?p=0.pi'>
      <button
        className={css`
          text-decoration: none;
          display: inline-block;
          color: white;
          padding: 20px 70px;
          margin: 10px 20px;
          border-radius: 5px;
          border: none;
          text-transform: uppercase;
          letter-spacing: 2px;
          background-image: linear-gradient(
            to right,
            #9eefe1 0%,
            #4830f0 51%,
            #9eefe1 100%
          );
          background-size: 200% auto;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          transition: 0.5s;
          @media (max-width: 768px) {
            padding: 10px 10px;
          }
          @media (max-width: 420px) {
            padding: 5px 5px;
            margin: 0 auto;
          }
        `}
      >
        Цены <br /> и <br /> запись
      </button>
    </a>
  )
}
