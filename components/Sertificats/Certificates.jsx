import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const Certificates = () => {
  const { Certificates, LanguageENG } = useSelector((state) => state.data)

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  }

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
          {LanguageENG ? 'Certificates' : 'Сертификаты'}
        </h3>
        <div className={css`max-width: 470px; margin: 0 auto; `} >
          <Slider {...settings}>
            <div
              className={css`
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                margin: o auto;
                width: 370px;
                height: 400px;
                @media (max-width: 768px) {
                  width: 270px;
                  height: 300px;
                }

                @media (max-width: 420px) {
                  width: 170px;
                  height: 200px;
                  settings: {
                    slidestoshow: 1;
                  }
                }
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
                  src='https://www.youtube.com/embed/YTNvrTUrlro'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
              </div>
            </div>
            {Certificates.map((coment) => (
              <div key={coment.id}>
                <img
                  className={css`
                  width: 470px;
                  height: 400px;
                  @media (max-width: 768px) {
                    width: 350px;
                    margin: 0 auto;
                    height: 300px;
                  }
                  @media (max-width: 420px) {
                    width: 300px;
                    margin: 0 auto;
                    height: 200px;
                  `}
                  src={coment.certificate}
                  alt='sertificate'
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
