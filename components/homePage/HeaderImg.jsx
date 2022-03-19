import { css } from '@emotion/css'
import React from 'react'

import logoImg from '../../img/2.jpg'

export const HeaderImg = () => {
  return (
    <div
      className={css`
        @media (max-width: 768px) {
          width: 350px;
          height: 300px;
        }
        @media (max-width: 420px) {
          width: 350px;
          height: 220px;
        }
      `}
    >
      <img
        className={css`
          object-fit: cover;
          object-position: 0px -360px;
          width: 960px;
          height: 400px;
          border-radius: 5px;
          padding-top: 20px;
          @media (max-width: 768px) {
            max-width: 710px;
            object-position: 0px -260px;
          }
          @media (max-width: 420px) {
            max-width: 350px;
            object-position: 0px -90px;
            height: 200px;
          }
        `}
        src={logoImg}
        alt='logo'
      />
    </div>
  )
}
