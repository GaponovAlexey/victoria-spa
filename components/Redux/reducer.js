import { createSlice } from '@reduxjs/toolkit'
//photo
import photo1 from '../img/VCom/1-min.jpg'
import photo2 from '../img/VCom/2-min.jpg'
import photo3 from '../img/VCom/3-min.jpg'
import photo4 from '../img/VCom/4-min.jpg'
import photo5 from '../img/VCom/5-min.jpg'
import photo6 from '../img/VCom/6-min.jpg'
import photo7 from '../img/VCom/7-min.jpg'
import photo8 from '../img/VCom/8-min.jpg'
import photo9 from '../img/VCom/9-min.jpg'
import photo10 from '../img/VCom/10-min.jpg'

// sert
import sert1 from '../img/VSertificat/1.jpg'
import sert2 from '../img/VSertificat/2.jpg'
import sert3 from '../img/VSertificat/3.jpg'
import sert4 from '../img/VSertificat/4.jpg'
import sert6 from '../img/VSertificat/6.jpg'
import sert7 from '../img/VSertificat/7.jpg'
// const video1 = 'https://www.youtube.com/watch?v=YTNvrTUrlro'

const initialState = {
  LanguageENG: false,
  isModalMed: false,
  isPedModalCOS: false,
  isModalMAS: false,
  isPedModalSmile: false,
  comentData: [
    {
      coment:
        'Обожаю этого мастера, я прихожу с сыном иногда, так у него вообще всегда все по вышке, и фрукты, и мультики, и мягко-удобно)) Ноготочки летний восторг 💞Спасибо!',
      user: 'Александра',
    },
    {
      coment:
        'Обалденно! 30 минут и белоснежный зубки готовы! Действует даже на виниры💪 супер!',
      user: 'Лилия',
    },
    {
      coment:
        'Отличный специалист и ее работа. Пришла по совету подруги и вот на протяжении более пяти лет доверяю рукам только данного мастера. Стерильно, быстро по времени и качественно. До последнего визита делала только педикюр, но в последний раз удалось урвать время на массаж лица, это было бесподобно, эффект был с первого раза 👍👍',
      user: 'Катя',
    },
    {
      coment:
        'Прекрасный мастер! Посещаю давно, более двух лет. Массаж и педикюр) Всем советую наводить красоту здесь!!!',
      user: 'Александра',
    },
    {
      coment:
        'Вика, спасибо большое за курс массажа лица!!! Результат отличный, за 6 сеансов изменения в лучшую сторону очевидны) Никогда не думала, что массаж настолько работает! Буду теперь делать регулярно)))',
      user: 'Инесса',
    },
    {
      coment:
        'Всё понравилось. Очень аккуратно работает мастер. Чисто в кабинете, есть телевизор можно посмотреть мультики, атмосферно. Кофе очень порадовало. Ещё раз спасибо 😇',
      user: 'Алексей',
    },
    {
      coment: 'Отличный мастер!!!',
      user: 'Марина',
    },
    {
      coment:
        'Благодарю Викторию за превосходное качество педикюра всегда !я очень дотошно отношусь к качеству услуг и Виктория оправдала все мои ожидания !супер! Хожу уже более 2х лет к ней!',
      user: 'Лиза',
    },
    {
      coment:
        'Как всегда превосходно! Виктория очень хороший и знающий мастер! Ножки замечательные!)',
      user: 'Ирина ',
    },
    {
      coment: 'Замечательный мастер! Я очень довольна!',
      user: 'Ирина ',
    },
    {
      coment:
        'Сегодня была первый раз, очень понравилось! Профессионально, очень аккуратно. Рекомендую и советую! Мастер отличный!',
      user: 'Ирина ',
    },
    {
      coment:
        'Прекрасный мастер! Довольна всеми услугами, которые она предоставляет. Лучше не нашла и искать уже не буду) Советую !!!',
      user: 'Александра ',
    },
    {
      coment: 'Отличный мастер!',
      user: 'Марина ',
    },
    {
      coment:
        'Самый лучший мастер👍🏼 Очень рекомендую! Хожу к Виктории уже около года и ни разу не пожалела! Отличный педикюр, обработка ножек, покрытия. Никогда не бывает ни скол, ни разводов. Хоть дождь, хоть песок, хоть любая погода, всегда ножки в идеальном состоянии👌🏼',
      user: 'Надежда ',
    },
  ],
  comentImg: [
    { id: 1, photo: photo1 },
    { id: 2, photo: photo2 },
    { id: 3, photo: photo3 },
    { id: 4, photo: photo4 },
    { id: 5, photo: photo5 },
    { id: 6, photo: photo6 },
    { id: 7, photo: photo7 },
    { id: 8, photo: photo8 },
    { id: 9, photo: photo9 },
    { id: 10, photo: photo10 },
  ],
  Certificates: [
    { id: 4, certificate: sert3 },
    { id: 2, certificate: sert1 },
    { id: 3, certificate: sert2 },
    { id: 6, certificate: sert4 },
    { id: 7, certificate: sert6 },
    { id: 8, certificate: sert7 },
  ],
}

const reducerData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    isModalMedReducer: (state, { payload }) => {
      state.isModalMed = payload
    },
    isPedModalCOSReducer: (state, { payload }) => {
      state.isPedModalCOS = payload
    },
    isModalMASReducer: (state, { payload }) => {
      state.isModalMAS = payload
    },
    isPedModalSmileReducer: (state, { payload }) => {
      state.isPedModalSmile = payload
    },
    addComents: (state, { payload }) => {
      state.comentData.push(payload)
    },
    isLanguageENG: (state, { payload }) => {
      state.LanguageENG = payload
    },
  },
})

export const {
  isModalMedReducer,
  isPedModalSmileReducer,
  isPedModalCOSReducer,
  isModalMASReducer,
  addComents,
  isLanguageENG,
} = reducerData.actions

export default reducerData.reducer
