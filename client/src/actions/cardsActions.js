import {
  INSERT_CARD,
  REMOVE_CARD,
  SET_VISIBILITY,
  UPDATE_CARDS,
} from './types';

// export const insertCard = cardData => dispatch =>
//   fetch('/api/insert-card', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(cardData),
//   })
//     .then(res => res.json())
//     .then(newCard => dispatch({
//       type: INSERT_CARD,
//       payload: cardData,
//     }));
//
// export const removeCard = cardId => dispatch =>
//   fetch('/api/remove-card', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify(cardId),
//   })
//     .then(res => res.json())
//     .then(removedCard => dispatch({
//       type: REMOVE_CARD,
//       payload: cardId,
//     }));

export const insertCard = cardData => ({
  type: INSERT_CARD,
  payload: cardData,
});

export const removeCard = cardId => ({
  type: REMOVE_CARD,
  payload: cardId,
});

export const setVisibility = (visibilitySettings) => ({
  type: SET_VISIBILITY,
  payload: visibilitySettings,
});

export const updateCards = (cards) => ({
  type: UPDATE_CARDS,
  payload: cards,
});
