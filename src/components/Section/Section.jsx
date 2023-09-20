const Section = ({ titleText, title: Title, children }) => {
  return (
    <section>
      <Title>{titleText}</Title>
      {children}
    </section>
  );
};

export default Section