import styled from '@emotion/styled';

export const StateList = styled.ul`
  list-style: none;

  margin: 0 auto;
  padding: 0;

  li {
    margin-left: auto;
    margin-right: auto;
    display: flex;

    gap: 8px;
  }
  li::before {
    flex-grow: 1;
    background-color: #000;
  }
  li:not(:first-of-type) {
    margin-top: 10px;
  }
`;
export const FeedbackList = styled.ul``;

export const Name = styled.span`
  display: inline-block;
  order: -1;
`;

export const State = styled.span`
  display: inline-block;
  font-weight: 700;
`;
