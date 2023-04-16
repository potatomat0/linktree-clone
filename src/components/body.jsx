import React from 'react';

const PageBody = ({ children }) => {
  return (
    <div className="max-w-4/5 md:max-w-full lg:max-w-4/5 mx-auto text-center page-body">
      {children}
    </div>
  );
};

export default PageBody;