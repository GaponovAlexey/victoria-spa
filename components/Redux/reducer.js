import { createSlice } from '@reduxjs/toolkit'
//photo

// sert
import sert1 from '/public/img/VSertificat/1.jpg'
import sert2 from '/public/img/VSertificat/2.jpg'
import sert3 from '/public/img/VSertificat/3.jpg'
import sert4 from '/public/img/VSertificat/4.jpg'
import sert6 from '/public/img/VSertificat/6.jpg'
import sert7 from '/public/img/VSertificat/7.jpg'
// const video1 = 'https://www.youtube.com/watch?v=YTNvrTUrlro'
const video1 = '<iframe width="1467" height="718" src="https://www.youtube.com/embed/YTNvrTUrlro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

const initialState = {
  LanguageENG: true,
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
    { id: 1, photo: '/img/VCom/1-min.jpg' },
    { id: 2, photo: '/img/VCom/2-min.jpg' },
    { id: 3, photo: '/img/VCom/3-min.jpg' },
    { id: 4, photo: '/img/VCom/4-min.jpg' },
    { id: 5, photo: '/img/VCom/5-min.jpg' },
    { id: 6, photo: '/img/VCom/6-min.jpg' },
    { id: 7, photo: '/img/VCom/7-min.jpg' },
    { id: 8, photo: '/img/VCom/8-min.jpg' },
    { id: 9, photo: '/img/VCom/9-min.jpg' },
    { id: 10, photo: '/img/VCom/10-min.jpg' },
  ],
  Certificates: [
    // { id: 1, certificate: video1 },
    { id: 4, certificate: '/img/VSertificat/3.jpg' },
    { id: 2, certificate: '/img/VSertificat/1.jpg' },
    { id: 3, certificate: '/img/VSertificat/2.jpg' },
    { id: 6, certificate: '/img/VSertificat/4.jpg' },
    { id: 7, certificate: '/img/VSertificat/6.jpg' },
    { id: 8, certificate: '/img/VSertificat/7.jpg' },
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
