import { FaLinkedinIn } from "react-icons/fa";

const SingleBlogPost = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-5 md:px-0">
      <div className="flex justify-center items-center space-x-2 text-gray-600 text-sm">
        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
          Engineering
        </span>
        <span>October 23, 2023</span>
      </div>

      <h1 className="text-3xl font-bold mt-3 text-gray-900 leading-tight text-center ">
        Introducing The Self-service <br /> Customer Portal
      </h1>

      <p className="mt-2 text-gray-500 text-sm text-center">
        Egpistas tellus viverra sed nulla. Quisque venenatis quis odio aliquet
        iaculis dui pellentesque. Sed dictum id venenatis sed viverra aliquam
        sapien.
      </p>

      <div className="mt-6 w-full h-[350px] bg-blue-500"></div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900">
          Tools to streamline the back office
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          If software is not implemented carefully, it can easily create new
          burdens of its own. In the CFO insights report, 63% of finance teams
          said they now use more than 10 different systems to get a unified view
          of their company’s financials, and 56% said they want to consolidate
          the number of software programs they use within the next two years.
        </p>

        <h3 className="mt-5 font-semibold text-gray-900">
          1. More visibility into Benefit-originated emails
        </h3>
        <p className="mt-1 text-gray-600 text-sm">
          Revenue recovery is a key part of how Stripe Billing maximizes
          revenue: we use machine learning to retry failed recurring payments at
          the optimal time, based on hundreds of dynamic signals.
        </p>

        <h3 className="mt-5 font-semibold text-gray-900">
          2. New Revenue Recognition features
        </h3>
        <p className="mt-1 text-gray-600 text-sm">
          One of the best ways for businesses to grow revenue is to enter new
          markets, but they’re often stymied by the compliance requirements.
          With Revenue Recognition, businesses can scale cross-border with ease.
        </p>
      </div>
      <img
        src="/assets/blogimg.svg"
        width={920}
        height={520}
        alt="img"
        className="mt-[1rem]"
      />
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900">
          3. Deeper Salesforce integration
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          Revenue recovery is a key part of how Stripe Billing maximizes
          revenue: we use machine learning to retry failed recurring payments at
          the optimal time, based on hundreds of dynamic signals. Our Smart
          Retries algorithm continuously gets better, and we’ve improved the
          recovery rate by 15.5% in 2023.
        </p>
        <p className="mt-2 text-gray-600 text-sm">
          Deliveroo has recovered more than £100 million in revenue with
          Billing’s revenue recovery features. “The work Stripe has done to
          improve payment success rates, from the use of Stripe Billing to
          rapidly enabling Deliveroo Plus, makes it clear why Stripe is embedded
          in some of our largest initiatives,” said Will Shu, cofounder and CEO
          of Deliveroo.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900">
          4. Improved Billing migrations
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          One of the best ways for businesses to grow revenue is to enter new
          markets, but they’re often stymied by the tax complexity that comes
          with it. We built Stripe Tax to solve that problem. Businesses can
          sell cross-border, and Tax takes care of tax collection for them,
          automatically. Now, Tax just got better, with support for 10 new
          countries (bringing the total number of countries supported to 50,
          including all of the EU).
        </p>
        <p className="mt-2 text-gray-600 text-sm">
          One of the best ways for businesses to grow revenue is to enter new
          markets, but they’re often stymied by the tax complexity that comes
          with it. We built Stripe Tax to solve that problem. Businesses can
          sell cross-border, and Tax takes care of tax collection for them,
          automatically. Now, Tax just got better, with support for 10 new
          countries (bringing the total number of countries supported to 50,
          including all of the EU).
        </p>
      </div>
      <img
        src="/assets/snipimg.svg"
        width={920}
        height={520}
        alt="img"
        className="mt-[1rem]"
      />
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-900">
          A foundation for the future
        </h3>
        <p className="mt-2 text-gray-600 text-sm">
          If software is not implemented carefully, it can easily create new
          burdens of its own. In the CFO insights report, 63% of finance teams
          said they now use more than 10 different systems to get a unified view
          of their company’s financials, and 55% said they want to consolidate
          the number of software programs they use within the next two years. To
          help, we’re adding new features to the revenue and finance automation
          suite that allow businesses to operate across multiple systems more
          easily, while accessing real-time data insights faster.
        </p>
        <p className="mt-2 text-gray-600 text-sm">
          Revenue recovery is a key part of how Stripe Billing maximizes
          revenue: we use machine learning to retry failed recurring payments at
          the optimal time, based on hundreds of dynamic signals. Our Smart
          Retries algorithm continuously gets better, and we’ve improved the
          recovery rate by 15.5% in 2023.
        </p>
        <p className="mt-2 text-gray-600 text-sm">
          Deliveroo has recovered more than £100 million in revenue with
          Billing’s revenue recovery features. “The work Stripe has done to
          improve payment success rates, from the use of Stripe Billing to
          rapidly enabling Deliveroo Plus, makes it clear why Stripe is embedded
          in some of our largest initiatives,” said Will Shu, cofounder and CEO
          of Deliveroo.
        </p>
      </div>
      <hr className="bg-[#f1f1f1] mt-[3rem]" />

      <div className="flex justify-between items-center">
        <div>
          <p className="">Dolapo Ayeni</p>
          <p className="text-[#5C6077] text-sm">Creative Director</p>
        </div>
        <div className="flex items-center gap-[.3rem] mt-[2rem]">
          <div className="w-[40] h-[40] rounded-full bg-[#e5e5e5] p-3">
            <FaLinkedinIn />
          </div>
          <div className="w-[40] h-[40] rounded-full bg-[#e5e5e5] p-3">
            <FaLinkedinIn />
          </div>
          <div className="w-[40] h-[40] rounded-full bg-[#e5e5e5] p-3">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
