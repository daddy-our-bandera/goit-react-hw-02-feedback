export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button onClick={() => onLeaveFeedback(option)} key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};
