import React from "react";
import NavigationTabs from "../../shared/NavigationTabs/NavigationTabs";

/**
 * Functional component representing the layout of the application.
 * @param {Object} props - React component properties.
 * @param {ReactNode} props.children - The child components to be rendered within the layout.
 * @param {string} [props.className] - Additional CSS classes to be applied to the layout container.
 * @returns {JSX.Element} The rendered layout component.
 */
function Layout({ children, className }) {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className="bg-dark w-[1034px] h-[836px] px-[25px] pt-6 pb-5 rounded-lg">
        <NavigationTabs />
        {children}
      </div>
    </div>
  );
}

export default Layout;
