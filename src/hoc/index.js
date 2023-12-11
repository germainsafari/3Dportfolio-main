import SectionWrapper from "./SectionWrapper";

const SectionWrapper = () => {
  // Your component logic goes here

  return (
    // Your JSX for the SectionWrapper component
    <div>
      <div className="section-wrapper">
      <h2 className="section-title">Section Title</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
    </div>
  );
};

// Export the SectionWrapper component
export default SectionWrapper;


export { SectionWrapper };
