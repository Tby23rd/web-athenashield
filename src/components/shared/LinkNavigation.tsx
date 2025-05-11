"use client";

import React, { useMemo, useCallback } from 'react'; // Import React, useMemo, and useCallback

const LinkNavigation: React.FC = () => {
  const routes = useMemo(() => [
    { path: '/about', label: 'ABOUT' },
    { path: '/#features', label: 'FEATURES' },
    { path: '/#contact', label: 'CONTACT' },

  ], []);

  const navigate = useCallback((path: string) => {
    window.location.href = path;
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      {routes.map((route) => (
          <p key={route.path} 
             className="text-lg font-semibold  cursor-pointer  transition duration-300"
             onClick={() => navigate(route.path)}
          >
            {route.label}
          </p>
        )
      )}
    </div>
  );
}

export default LinkNavigation;
