import React from 'react'

const Footer = () => {
  return (
    <div className="min-h-[10vh] bg-violet-300 flex items-center p-6">
      &copy; {new Date().getFullYear()} Vivin.co. All rights reserved.
    </div>
  );
}

export default Footer