import { useState } from "react";

interface StoriesInterviewsProps {
  marginTop?: string;
}

const StoriesInterviews: React.FC<StoriesInterviewsProps> = ({ marginTop = "lg:mt-[150px] md:mt-[110px] mt-[92px]" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className={`${marginTop} flex flex-col md:justify-center md:items-center lg:px-162 md:px-112 px-32`}>
      <div className="flex flex-col justify-center items-center md:text-center">
        <span className="text-[#7F56D9] text-lg font-semibold">Newlatters</span>
        <h2 className="font-bold text-mainText text-5xl w-full mt-3 mb-6">
          Stories and interviews
        </h2>
        <p className="font-normal text-secText text-xl md:w-[63.1578%] w-full">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </p>
      </div>

      <div className="mt-12 w-full max-w-md flex-col md:flex-row">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:border-transparent text-mainText bg-bg"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-[#7F56D9] w-max text-white font-medium rounded-lg hover:bg-[#6941C6] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7F56D9] focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default StoriesInterviews;
