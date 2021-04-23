const FlexContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between font-sans">
      {children}
    </div>
  );
};

export default FlexContainer;
