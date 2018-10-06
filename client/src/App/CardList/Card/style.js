import styled from 'styled-components';

const Container = styled.div`
  background: #FFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    border-bottom: 1px solid #E0E0E0;
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: auto repeat(3, 1fr) auto;
`;

const Section = styled.section`
  align-items: center;
  border-right: 1px solid #E0E0E0;
  color: #222;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const DragHandleWrapper = Section.extend`
  font-size: 1.5em;
  padding: 3rem 2rem;
`;

const Characters = Section.extend`
  font-size: 2em;
  padding: 3rem;

  &:hover {
    background: #F5F5F5;
  }
`;

const Pinyin = Section.extend`
  font-size: 1.25em;
  padding: 3rem;

  &:hover {
    background: #F5F5F5;
  }
`;

const English = Section.extend`
  font-size: 1.25em;
  padding: 3rem;

  &:hover {
    background: #F5F5F5;
  }
`;

const Actions = styled.div`
  justify-content: center;;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const RemoveButton = styled.button`
  background: #FFF;
  border: 0;
  border-radius: 50%;
  color: #222;
  cursor: pointer;
  font-size: 1.25em;
  padding: 0.75rem;
  outline: 0;
  min-width: 47px;

  &:hover {
    background: #EEE;
  }

  &:focus {
    background: #E0E0E0;
  }
`;

export {
  Container,
  Contents,
  DragHandleWrapper,
  Characters,
  Pinyin,
  English,
  Actions,
  RemoveButton,
};
