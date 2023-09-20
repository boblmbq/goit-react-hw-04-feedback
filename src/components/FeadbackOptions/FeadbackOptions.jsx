import { Button } from './FeadbackOptions.styled';
const FeadbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  return (
    <ul>
      {options.map(el => (
        <li key={el}>
          <Button type={el} onClick={() => onLeaveFeedback(el)}>
            {el.charAt(0).toUpperCase() + el.slice(1)}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default FeadbackOptions;
