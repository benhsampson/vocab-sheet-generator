import {
  INSERT_CARD,
  REMOVE_CARD,
  SET_VISIBILITY,
  UPDATE_CARDS,
} from '../actions/types';

const initialState = {
  cards: [],
  show: {
    characters: true,
    pinyin: true,
    english: true,
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_CARD:
      console.log('INSERT_CARD called');
      return {
        ...state,
        cards: [
          ...state.cards,
          action.payload,
        ],
      };
    case SET_VISIBILITY:
      console.log('SET_VISIBILITY called');
      return {
        ...state,
        show: action.payload,
      };
    case REMOVE_CARD:
      console.log('REMOVE_CARD called');
      return {
        ...state,
        cards: state.cards.filter(({ _id }) => _id !== action.payload),
      };
    case UPDATE_CARDS:
      console.log('UPDATE_CARDS called');
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
