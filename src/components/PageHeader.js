import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbs, backgroundImage }) => {
  return (
    <div className="relative py-16 bg-gray-800 text-white">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        ></div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4">
            <ol className="flex flex-wrap items-center text-sm">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <li className="mx-2 text-gray-300">/</li>
                  )}
                  <li>
                    {item.url ? (
                      <Link to={item.url} className="hover:text-accent transition duration-200">
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-accent">{item.label}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}
        
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
          {title}
        </h1>
        
        {/* Optional Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;