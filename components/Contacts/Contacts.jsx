import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import insta from '../../img/svg/insta.svg'
import what from '../../img/svg/whatsapp.svg'
import { isLanguageENG } from '../../Redux/reducer'

export const Contacts = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  const dispatch = useDispatch()
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
      <div>
        <h2
          className={css`
            padding-top: 114px;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
            text-align: center;
          `}
        >
          {LanguageENG ? 'Contacts' : 'Контакты'}
        </h2>
        <div
          className={css`
            font-size: 18px;
            line-height: 22px;
            text-align: center;
          `}
        >
          <div
            className={css`
              width: 273px;
              margin: 0 auto;
              margin-top: 20px;
              margin-bottom: 20px;
            `}
          >
            {LanguageENG
              ? 'Want to know more or just chat? You are welcome!'
              : 'Хотите узнать больше или просто спросить? Пожалуйста! '}
          </div>
          <div  >
            <span>
              <a href='https://wa.me/79811654228?text=Я%20хочу%20у%20вас%20спросить'>
                <img
                  className={css`
                    height: 5%;
                    width: 5%;
                  `}
                  src={what}
                  alt='whatsapp'
                />
              </a>
            </span>
            <span className={css` margin-left: 20px; `} >
              <a href='https://www.instagram.com/pedicurecomenda/'>
                <img
                  className={css`
                    height: 5%;
                    width: 5%;
                  `}
                  src={insta}
                  alt='insta'
                />
              </a>
            </span>
          </div>
          <div
            className={css`
              padding-top: 20px;
            `}
          >
           Подпишись на меня в Instagram
          </div>
          <div>
            <div
              className={css`
                text-align: center;
                font-size: 22px;
                margin-bottom: 10px;
              `}
            >
              <span onClick={() => dispatch(isLanguageENG(false))}>RU </span> |{' '}
              {''}
              <span onClick={() => dispatch(isLanguageENG(true))}>ENG </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
