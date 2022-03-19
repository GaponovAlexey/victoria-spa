import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'

export const About = () => {
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
          padding-top: 72px;
          text-align: center;
          line-height: 42px;
          marign: 0 auto;
          @media (max-width: 768px) {
            padding-top: 142px;
          }
          @media (max-width: 420px) {
            padding-top: 0;
          }
        `}
      >
        <h2
          className={css`
            text-align: center;
            font-family: GilroyBold;
            font-size: 34px;
            line-height: 42px;
            margin: 20px;
          `}
        >
          {LanguageENG ? `About me` : `Обо мне`}
        </h2>
        <p
          className={css`
            font-size: 21px;
            line-height: 32px;
            @media (max-width: 420px) {
              padding-bottom: 30px;
              padding-top: 0;
              line-height: 22px;
              font-size: 16px;
            }
          `}
        >
          {LanguageENG
            ? `My name is Victoria and I most of all I love to see the results of my work.
        I started in profession in 2014.
        Finished more than 20 courses.
        Did more than 6000 procedures.
        In spite of that I'm not burnout emotionally because:
        I love what I'm doing, I always grow as a professional, I work in different  areas. 
        Now I'm getting my second high education in psychology. 
        By the way, my first education is English teacher 🙃
        On this site you can find some information about my services and answers to your questions about particular problems. 
        You can  make an appointment here.`
            : `Меня зовут Виктория и я обожаю видеть плоды своей работы. В профессии
          с 2014 года. Прошла более 20 курсов Провела больше 6000 процедур Не
          выгораю по трём причинам: Очень люблю то, чем занимаюсь; Постоянно
          развиваюсь; Работаю в разных направлениях. Получаю второе высшее
          образование по специальности "психолог" По первому образованию
          "учитель английского" так что май инглиш из квайт вэл🙃 На этом сайте
          вы сможете увидеть то, чем я могу быть вам полезна, и, возможно, найти
          некоторые ответы на свои вопросы по конкретным проблемам. Записаться
          на процедуру можно `}{' '}
          <span>
            <a className={css`color: blue;`}  href='https://dikidi.net/141929?p=0.pi'>здесь</a>
          </span>
        </p>
      </div>
    </div>
  )
}
