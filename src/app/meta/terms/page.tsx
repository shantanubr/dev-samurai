import { terms } from "./constants";

const Terms: React.FC = () => {
  const { lastUpdated, introduction, sections } = terms.termsOfUse;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 text-gray-800 dark:text-gray-100 mt-20">
      <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center mb-6">
        Last Updated: {lastUpdated}
      </p>

      <p className="mb-8 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
        {introduction}
      </p>

      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
            {section.title}
          </h2>

          {section.description && (
            <p className="mb-4 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {section.description}
            </p>
          )}

          {section.subsections &&
            section.subsections.map((sub, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-100">
                  {sub.subtitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}

          {section.contactDetails && (
            <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
              <p>
                <strong>Name:</strong> {section.contactDetails.name}
              </p>
              <p>
                <strong>Email:</strong> {section.contactDetails.email}
              </p>
              {section.contactDetails.address && (
                <p>
                  <strong>Address:</strong> {section.contactDetails.address}
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Terms;
