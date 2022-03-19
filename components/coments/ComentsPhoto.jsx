import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const ComentsPhoto = () => {
  const { comentImg, LanguageENG } = useSelector((state) => state.data)
  
  const settings = {
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: comentImg ? 4 : 2,
    slidesToScroll: 1,
    speed: 2000,
    dots: true,
  }

  return (
    <div
      className={css`
        position: relative;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 567px) {
          max-width: 520px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
          height: auto;
        }
      `}
    >
      <div
        className={css`
          margin-bottom: 60px;
        `}
      >
        <h3
          className={css`
            padding-top: 30px;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
            text-align: center;
            margin-bottom: 30px;
          `}
        >
          {LanguageENG ? 'Comments' : 'Отзывы'}
        </h3>
        <div>
          <Slider {...settings}>
            {comentImg.map((coment) => (
              <div key={coment.id}>
                <img
                  className={css`
                    width: 200px;
                    height: 380px;
                    @media (max-width: 768px) {
                      width: 170px;
                      height: 350px;
                    }
                    @media (max-width: 420px) {
                      width: 80px;
                      height: 150px;
                    }
                  `}
                  src={coment.photo}
                  alt='ph1'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
