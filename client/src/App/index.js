import React, { Component } from 'react';
import { connect } from 'react-redux';
import translate from 'translate';
import pinyinFunction from 'pinyin';
import uuid from 'uuid';
import { arrayMove } from 'react-sortable-hoc';

import {
  insertCard,
  setVisibility,
  removeCard,
  updateCards,
} from '../actions/cardsActions';

import CardList from './CardList';

import {
  Wrapper,
  Container,
  Heading,
  Subheading,
  CreatedBy,
  InputGroup,
  Input,
  AddCardButton,
  Checkboxes,
  Checkbox,
  CheckboxLabel,
} from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      characters: '',
      pinyin: '',
      english: '',
    };
  }

  // componentWillMount() {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(body => console.log(body));
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({ cards: nextProps.cards });
  }

  resetValues = () => this.setState({
    characters: '',
    pinyin: '',
    english: '',
  });

  onChangeCharacters = (e) => {
    if (!!e.target.value) {
      this.setState({ characters: e.target.value }, async () => {
        const english = await translate(this.state.characters, {
          from: 'zh',
          to: 'en',
          engine: 'yandex',
          key: 'trnsl.1.1.20180925T025556Z.40b34e474820d097.b5eafe80a9b8cdb5c97d149a05dd1533e92b0bb9',
        });

        const words = [];
        pinyinFunction(this.state.characters).forEach((arrayOfWord) => {
          words.push(arrayOfWord[0]);
        });
        const pinyin = words.join(' ');

        this.setState({
          pinyin,
          english,
        });
      });
    } else {
      this.resetValues();
    }
  };

  onChangePinyin = (e) => {
    if (!!e.target.value) {
      this.setState({ pinyin: e.target.value });
    } else {
      this.resetValues();
    }
  };

  onChangeEnglish = (e) => {
    if (!!e.target.value) {
      this.setState({ english: e.target.value }, async () => {
        const characters = await translate(this.state.english, {
          from: 'en',
          to: 'zh',
          engine: 'yandex',
          key: 'trnsl.1.1.20180925T025556Z.40b34e474820d097.b5eafe80a9b8cdb5c97d149a05dd1533e92b0bb9',
        });

        const words = [];
        pinyinFunction(characters).forEach((arrayOfWord) => {
          words.push(arrayOfWord[0]);
        });
        const pinyin = words.join(' ');

        this.setState({
          characters,
          pinyin,
        });
      });
    } else {
      this.resetValues();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.insertCard({
      index: this.state.cards.length,
      _id: uuid(),
      characters: this.state.characters,
      pinyin: this.state.pinyin,
      english: this.state.english,
    });

    this.resetValues();
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const cards = arrayMove(this.state.cards, oldIndex, newIndex);
    this.setState({ cards });
    this.props.updateCards(cards);
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Heading>Boom. Vocab Sheets.</Heading>
          <Subheading>
            Stop wasting your time in Word.<br />
            English to Chinese and vice versa.<br />
            Study effectively, not hard.
          </Subheading>
          <CreatedBy href="https://bensampson.me" target="_blank">
            BY BEN SAMPSON
          </CreatedBy>
          <form onSubmit={this.handleSubmit}>
            <InputGroup>
              <Input
                characters
                name="Characters"
                placeholder="中文"
                autoComplete="off"
                value={this.state.characters}
                onChange={this.onChangeCharacters}
              />
              <Input
                name="Pinyin"
                placeholder="pīn yīn"
                autoComplete="off"
                value={this.state.pinyin}
                onChange={this.onChangePinyin}
              />
              <Input
                name="English"
                placeholder="English"
                autoComplete="off"
                value={this.state.english}
                onChange={this.onChangeEnglish}
              />
              <AddCardButton>+</AddCardButton>
            </InputGroup>
          </form>
          <Checkboxes>
            <Checkbox
              type="checkbox"
              name="showCharacters"
              checked={this.props.show.characters}
              value={this.props.show.characters}
              onChange={() => this.props.setVisibility({
                characters: !this.props.show.characters,
                pinyin: this.props.show.pinyin,
                english: this.props.show.english,
              })}
            />
            <CheckboxLabel htmlFor="showCharacters">Show characters</CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="showPinyin"
              checked={this.props.show.pinyin}
              value={this.props.show.pinyin}
              onChange={() => this.props.setVisibility({
                characters: this.props.show.characters,
                pinyin: !this.props.show.pinyin,
                english: this.props.show.english,
              })}
            />
            <CheckboxLabel htmlFor="showPinyin">Show pinyin</CheckboxLabel>
            <Checkbox
              type="checkbox"
              name="showEnglish"
              checked={this.props.show.english}
              value={this.props.show.english}
              onChange={() => this.props.setVisibility({
                characters: this.props.show.characters,
                pinyin: this.props.show.pinyin,
                english: !this.props.show.english,
              })}
            />
            <CheckboxLabel htmlFor="showEnglish">Show English</CheckboxLabel>
          </Checkboxes>
          <CardList
            cards={this.state.cards}
            onSortEnd={this.onSortEnd}
            useDragHandle={true}
            show={this.props.show}
            removeCard={this.props.removeCard}
          />
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards.cards,
  show: state.cards.show,
});

export default connect(mapStateToProps, {
  insertCard,
  setVisibility,
  removeCard,
  updateCards,
})(App);
