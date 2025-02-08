import { useNavigate } from "react-router-dom";
import { Logo } from "../UI/Logo";

const BlogHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="px-4 sm:px-6 lg:px-8 py-4 max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
            <Logo onClick={() => navigate("/")} />
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-4 w-full sm:w-auto">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
              Preview
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base">
              Donate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
