import styled from 'styled-components';

import pinkDustTexture from '../assets/pink-dust.png';

const Wrapper = styled.div`
  background: #1a1e24;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  padding: 5rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  color: #FFFFFF;
  font-size: 4.5em;
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 1.5rem;
  text-align: center;
`;

const Subheading = styled.h3`
  color: rgba(255,255,255,1);
  font-size: 1.385em;
  line-height: 1.8;
  margin: 0 0 1.5rem;
  text-align: center;
`;

const CreatedBy = styled.a`
  color: rgba(255,255,255,1);
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 2;
  margin: 0 auto 5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
`;

const Input = styled.input`
  background: #FFFFFF;
  ${'' /* border: 1px solid #FFFFFF; */}
  border: 0;
  ${'' /* border-left-width: 0; */}
  border-radius: 0;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
  'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
  'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
  'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: ${({ characters }) => characters ? '1.5em' : '1.25em'};
  font-weight: 500;
  min-width: 0;
  outline: none;
  padding: 1rem 1.75rem;

  ::placeholder {
    color: ${({ characters }) => characters ? '#999' : '#555'};
    font-weight: ${({ characters }) => characters ? 600 : 400};
  }

  &:first-child {
    ${'' /* border-left-width: 1px; */}
    border-radius: 8px 0 0 8px;
  }

  &:focus {
    background: #EEEEEE;
  }
`;

const AddCardButton = styled.button`
  background: #FFFFFF;
  border: 0;
  border-radius: 0 8px 8px 0;
  color: #222;
  cursor: pointer;
  font-family: 'Inter UI', -apple-system, system-ui, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 2em;
  outline: none;
  padding: 1rem;
  width: 78px;

  &:hover {
    background: #EEEEEE;
  }

  &:focus {
    background: #E0E0E0;
  }
`;

const Checkboxes = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin: 1.5rem 0 5rem;
`;

const Checkbox = styled.input`
  margin: 0 1rem 0 0;
  height: 1.25rem;
  width: 1.25rem;
`;

const CheckboxLabel = styled.label`
  color: #FFF;
  font-size: 1.125em;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export {
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
};
