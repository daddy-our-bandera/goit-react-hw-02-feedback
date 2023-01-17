import { StateList, FeedbackList, Name, State } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StateList>
      <li>
        <Name>Good:</Name>
        <State>{good}</State>
      </li>
      <li>
        <Name>Neutral:</Name>
        <State>{neutral}</State>
      </li>
      <li>
        <Name>Bad:</Name>
        <State>{bad}</State>
      </li>
      <FeedbackList>
        <li>
          <Name>Total:</Name>
          <State>{total}</State>
        </li>
        <li>
          <Name>Positive feedback:</Name>
          <State>{positivePercentage}%</State>
        </li>
      </FeedbackList>
    </StateList>
  );
};
