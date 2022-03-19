import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  const [Isactive, setIsactive] = useState(true)

  return (
    <header
      className={css`
        position: fixed;
        z-index: 20;
      `}
    >
      <div
        className={css`
          ${Isactive &&
          `@media (max-width: 769px) {
              display: none;
            }`}
          ${!Isactive &&
          `@media (max-width: 769px) {
            position: fixed;
            background-color: #000;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            color: white;
            display: inherit;
            padding: 50px;
            font-size: 42px;
            li {
              margin-bottom: 30px;
            }
           }`}
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #828282;
          background-color: rgba(255, 255, 255, 0.2);
          width: 960px;
          padding: 33px 0px 32px 0px;
          background-color: rgba(255, 255, 255, 0);
        `}
      >
        {!Isactive && (
          <div
            onClick={() => setIsactive(!Isactive)}
            className={css`
              ${Isactive &&
              `@media (max-width: 768px) {
                  display: none;
                }`}
              position: fixed;
              top: 20px;
              right: 20px;
              color: red;
            `}
          >
            &#10060;
          </div>
        )}
        <li>{LanguageENG ? 'Home' : 'Главная'}</li>
        <li>{LanguageENG ? 'About' : 'Обо мне'}</li>
        <li>{LanguageENG ? 'Skills' : 'Услуги'}</li>
        <li>{LanguageENG ? 'Comments' : 'Отзывы'}</li>
        <li>{LanguageENG ? 'Certificates' : 'Сертификаты'}</li>
        <li>{LanguageENG ? 'Contacts' : 'Контакты'}</li>
        <li>{LanguageENG ? 'Map' : 'Как меня найти'}</li>
      </div>

      <div
        onClick={() => setIsactive(!Isactive)}
        className={css`
          position: fixed;
          top: 15px;
          @media (min-width: 769px) {
            display: none;
          }
        `}
      >
        <svg viewBox='0 0 100 80' width='40' height='40'>
          <rect width='100' height='20' rx='8' />
          <rect y='30' width='100' height='20' rx='8' />
          <rect y='60' width='100' height='20' rx='8' />
        </svg>
      </div>
    </header>
  )
}
