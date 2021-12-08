export const Button = ({ label, onclick }) => {
  return (
    <button data-testid="button" onClick={onclick}>
      {label}
    </button>
  );
};
