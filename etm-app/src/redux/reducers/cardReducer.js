import { GET_CARD } from "../actionTypes/cardAT.js";


const initialState = {
  rows: [
    {
      id: '00001',
      title: 'Автоматический выключатель 10A',
      vendor: 'ABB',
      pack: 100,
      price: 1500
    },
    {
      id: '00002',
      title: 'Автоматический выключатель 20A',
      vendor: 'ABB',
      pack: 100,
      price: 1500
    },
    {
      id: '00003',
      title: 'Корпус металлический',
      vendor: 'ABB',
      pack: 1,
      price: 6800
    },
    {
      id: '00004',
      title: 'Корпус пластиковый',
      vendor: 'IEK',
      pack: 1,
      price: 1200
    },
    {
      id: '00005',
      title: 'Шина медная МТ 60х8',
      vendor: 'DKC',
      pack: 1,
      price: 1200
    },
    {
      id: '00006',
      title: 'DLP Кабель- канал 105x50',
      vendor: 'DKC',
      pack: 1,
      price: 350
    },
    {
      id: '00007',
      title: 'DLP Кабель-канал 80x50',
      vendor: 'DKC',
      pack: 1,
      price: 300
    },
    {
      id: '00008',
      title: 'ЭТЮД Выключатель одноклавишный',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 85
    },
    {
      id: '00009',
      title: 'Контактор E 12А катушка управления 220В',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 3800
    },
    {
      id: '00010',
      title: 'Лоток для систем освещения',
      vendor: 'Schneider Electric',
      pack: 1,
      price: 1859
    }
  ]
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD:
      return { ...state, rows: action.payload }
    default:
      return state
  }
}
