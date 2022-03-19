import { css } from '@emotion/css'
import React from 'react'
import { useSelector } from 'react-redux'
import { ModalMAS } from './modal/ModalMAS'
import { PedMedModal } from './modal/PedMedModal'
import { PedModalCOS } from './modal/PedModalCOS'
import { PedModalSmile } from './modal/PedModalSmile'
import { SkilsOnePage } from './SkilsOnePage'

export const SkillsHome = () => {
  const { LanguageENG } = useSelector((state) => state.data)
  return (
    <div
      className={css`
        padding-bottom: 50px;
        border-radius: 5px;
        background-color: #fff;
        @media (max-width: 768px) {
          max-width: 710px;
        }
        @media (max-width: 567px) {
          max-width: 520px;
        }
        @media (max-width: 420px) {
          max-width: 350px;
        }
      `}
    >
      <h2
        className={css`
          font-family: GilroyBold;
          font-size: 34px;
          line-height: 42px;
          text-align: center;
          margin-bottom: 15px;
          padding-top: 30px;
        `}
      >
        {LanguageENG ? 'Skills' : "Навыки"}
      </h2>
      <div>
        <SkilsOnePage />
      </div>
      <div>
        <PedMedModal />
        <PedModalCOS />
        <ModalMAS />
        <PedModalSmile />
      </div>
    </div>
  )
}
