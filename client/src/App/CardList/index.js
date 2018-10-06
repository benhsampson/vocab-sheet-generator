import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';

import Card from './Card';

import { Container } from './style';

class CardList extends React.Component {
  render() {
    const { cards, show, removeCard } = this.props;
    return (
      <Container>
        {cards.map((card, index) => (
          <Card
            key={`card-${index}`}
            index={card.index}
            show={show}
            card={card}
            removeCard={removeCard}
          />
        ))}
      </Container>
    );
  }
}

export default SortableContainer(CardList);
