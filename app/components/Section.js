import styles from '../styles/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-green-600 mb-4">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
};

export default Section;
