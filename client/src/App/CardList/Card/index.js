import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

import {
  Container,
  Contents,
  DragHandleWrapper,
  Characters,
  Pinyin,
  English,
  Actions,
  RemoveButton,
} from './style';

const DragHandle = SortableHandle(() => <DragHandleWrapper>::</DragHandleWrapper>);

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show });
  }

  render() {
    return (
      <Container>
        <Contents>
          <DragHandle />
          <Characters onClick={() => this.setState({
            show: { ...this.state.show, characters: !this.state.show.characters }
          })}>{this.state.show.characters ? this.props.card.characters : '?'}</Characters>
          <Pinyin onClick={() => this.setState({
            show: { ...this.state.show, pinyin: !this.state.show.pinyin }
          })}>{this.state.show.pinyin ? this.props.card.pinyin : '?'}</Pinyin>
          <English onClick={() => this.setState({
            show: { ...this.state.show, english: !this.state.show.english }
          })}>{this.state.show.english ? this.props.card.english : '?'}</English>
          <Actions>
            <RemoveButton onClick={() => this.props.removeCard(this.props.card._id)}>X</RemoveButton>
          </Actions>
        </Contents>
      </Container>
    );
  }
}

export default SortableElement(Card);
