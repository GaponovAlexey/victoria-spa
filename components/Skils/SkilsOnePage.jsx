import { css } from '@emotion/css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skilimg1 from '../../img/Skils/p1.jpg'
import Skilimg2 from '../../img/Skils/p2.jpg'
import Skilimg3 from '../../img/Skils/p3.jpg'
import Skilimg4 from '../../img/Skils/p4.jpg'
import {
  isModalMASReducer,
  isModalMedReducer,
  isPedModalCOSReducer,
  isPedModalSmileReducer,
} from '../../Redux/reducer'

export const SkilsOnePage = () => {
  const dispatch = useDispatch()

  return (
    <div>
      {/* grid */}
      <div
        className={css`
          display: grid;
          grid-column-gap: 40px;
          grid-row-gap: 30px;
          grid-template-columns: repeat(2, 1fr);
          justify-items: center;
          
        `}
      >
        {/* one */}
        <div
          onClick={() => dispatch(isModalMedReducer(true))}
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img
            className={css``}
            className='skilimg1'
            src={Skilimg4}
            alt='Skilimg4'
          />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-size: 21px;
            `}
          >
            Podiatry
          </h3>
        </div>
        {/* {two} */}
        <div
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img
            onClick={() => dispatch(isPedModalCOSReducer(true))}
            className='skilimg1'
            src={Skilimg1}
            alt='Skilimg1'
          />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-size: 21px;
            `}
          >
            Cosmetic pedicure
          </h3>
        </div>
        {/* three */}
        <div
          onClick={() => dispatch(isModalMASReducer(true))}
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img className='skilimg1' src={Skilimg2} alt='Skilimg2' />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-size: 21px;
            `}
          >
            Massage
          </h3>
        </div>
        {/* four */}
        <div
          onClick={() => dispatch(isPedModalSmileReducer(true))}
          className={css`
            position: relative;
            &:hover {
              opacity: 0.6;
              cursor: pointer;
            }
          `}
        >
          <img className='skilimg1' src={Skilimg3} alt='Skilimg3' />
          <h3
            className={css`
              position: absolute;
              top: 0;
              left: 70%;
              font-size: 21px;
            `}
          >
            Teeth whitening
          </h3>
        </div>
      </div>
    </div>
  )
}
