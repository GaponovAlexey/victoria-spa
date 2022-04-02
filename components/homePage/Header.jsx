import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {
  const { LanguageENG } = useSelector((state) => state.data)

  const [Isactive, setIsactive] = useState(true)

  return (
    <header
      id='home'
      className={css`
        position: fixed;
        z-index: 20;
      `}
    >
    
      <div
        className={css`
          color: white;
          ${Isactive &&
          `@media (max-width: 769px) {
              display: none;
            }`}
          ${!Isactive &&
          `@media (max-width: 769px) {
            position: fixed;
            background-color: #fff;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
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
              ${!Isactive &&
              `@media (max-width: 3968px) {
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
        <li>
          <a href='#home' onClick={() => setIsactive(!Isactive)}>
            {LanguageENG ? 'Home' : 'Главная'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#about'>
            {LanguageENG ? 'About' : 'Обо мне'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#skills'>
            {LanguageENG ? 'Skills' : 'Услуги'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#comments'>
            {LanguageENG ? 'Comments' : 'Отзывы'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#certificates'>
            {LanguageENG ? 'Certificates' : 'Сертификаты'}
          </a>
        </li>
        <li>
          <a onClick={() => setIsactive(!Isactive)} href='#contacts'>
            {LanguageENG ? 'Contacts' : 'Контакты'}
          </a>
        </li>
        <li>
          <a>{LanguageENG ? 'Map' : 'Как меня найти'}</a>
        </li>
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
