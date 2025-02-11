import { useState } from "react";

const Blog = () => {
  return (
    <div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Welcome to Dolapo Ayeni Diaries: <br /> Your Passport to Information
          </h1>
          <p className="text-sm text-gray-500 mb-8 text-center">
            Stay Updated with Innovations, Reviews, and How-To Guides for Tech
            Enthusiasts
          </p>
          <BlogPost />
        </div>
      </div>
    </div>
  );
};

export default Blog;

import { ArrowRight } from "lucide-react";
import classNames from "classnames";

const categories = ["All Post", "Products", "Engineering", "Company", "Growth"];

const posts = [
  {
    id: 1,
    image: "/assets/blog1.svg",
    category: "Product",
    date: "October 23, 2023",
    title: "Accenture on the future of payments and financial automation",
    description:
      "Vel egestas ultricies condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pr...",
  },
  {
    id: 2,
    image: "/assets/blog2.svg",
    category: "Product",
    date: "October 23, 2023",
    title: "Accenture on the future of payments and financial automation",
    description:
      "Vel egestas ultricies condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pr...",
  },
  {
    id: 3,
    image: "/assets/blog3.svg",
    category: "Product",
    date: "October 23, 2023",
    title: "Accenture on the future of payments and financial automation",
    description:
      "Vel egestas ultricies condimentum consectetur enim non elit aenean lacus. Justo rutrum libero urna id quis ipsum. Dictumst vel posuere nec lobortis. Porttitor pr...",
  },
];

const BlogPost = () => {
  const [activeTab, setActiveTab] = useState("All Post");

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex space-x-6 border-b pb-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={classNames(
              "pb-2 text-sm font-medium",
              activeTab === category
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            )}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow p-4 gap-6"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-60 h-40 object-cover rounded-lg"
            />
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
              </div>
              <button className="flex items-center text-blue-600 hover:text-blue-800 transition mt-4">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
