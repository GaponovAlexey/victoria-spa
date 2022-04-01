import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'

export const Map = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  return (
    <div
      className={css`
        @media (max-width: 768px) {
          max-width: 710px;
        }

        @media (max-width: 420px) {
          max-width: 350px;
        }
      `}
    >
      <div
        className={css`
          margin: 30px 0;
          font-family: GilroyBold;
          font-size: 34px;
          line-height: 42px;
          text-align: center;
        `}
      >
        {LanguageENG ? 'Map' : 'Карта'}
      </div>
      <div
        className={css`
          position: relative;
        `}
      >
        <div
          className={css`
            padding-top: 56.25%;
          `}
        >
          <iframe
            className={css`
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            `}
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A7ee18f36e2ecb5172e291ab5317e29f5464db154304505d820b4539531b9b338&amp;source=constructor'
            // frameborder='0'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
