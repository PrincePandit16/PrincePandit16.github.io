import React from 'react';

const ExternalLink = ({ href, children, className = '', ...props }) => {
  const isExternal = /^https?:\/\/|mailto:|tel:/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }
  return <a href={href} className={className} {...props}>{children}</a>;
};

export default ExternalLink;
