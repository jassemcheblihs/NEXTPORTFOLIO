import ehpLogo from "@assets/logo-blue-black.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img src={ehpLogo} alt="EHP Logo" className="h-10 bg-white rounded p-1" />
            </div>
            <p className="text-gray-400 max-w-md">
              Enhancing employee benefits while reducing payroll tax costs for businesses across the United States.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} EHP Benefits. All rights reserved.<br />
              Director of Client and Customer Experience: Kenny Salyer<br />
              Based in Fresno, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
