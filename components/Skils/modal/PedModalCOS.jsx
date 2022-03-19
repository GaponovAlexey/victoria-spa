import { css } from '@emotion/css'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { isPedModalCOSReducer } from '../../../Redux/reducer'

export const PedModalCOS = () => {
  const { isPedModalCOS } = useSelector((store) => store.data)
  const dispatch = useDispatch()

  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  return (
    <div
      className={css``}
      onClick={() => dispatch(isPedModalCOSReducer(false))}
    >
      <div
        className={css`
          min-height: 100%;
          min-width: 100%;
          top: 0;
          right: 0;
          position: fixed;
          ${!isPedModalCOS ? `visibility: hidden;` : ``}
        `}
      ></div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={css`
          position: fixed;
          top: 20px;
          left: auto;
          background-color: red;
          height: 500px;
          width: 960px;
          ${!isPedModalCOS ? `visibility: hidden;` : ``}
        `}
      >
        <div>Cosmetic</div>
        <div>
          <div>
            <div>
              <h2>Slider Syncing (AsNavFor)</h2>
              <h4>First Slider</h4>
              <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                <div
                  className={css`
                    background-color: white;
                    height: 300px;
                  `}
                >
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
              <h4>Second Slider</h4>
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={4}
                focusOnSelect={true}
              >
                <div
                  className={css`
                    background-color: green;
                    height: 100px;
                  `}
                >
                  <h3>diva</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
            <div>
              <div
                onClick={() => dispatch(isPedModalCOSReducer(false))}
                className={css`
                  position: absolute;
                  top: 0;
                  right: 0;
                  cursor: pointer;
                `}
              >
                &#9747;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
