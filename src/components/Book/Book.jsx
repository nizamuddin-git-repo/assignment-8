import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const Book = () => {
  const book = useLoaderData();

  return (
    <div className="mt-15">
      <LineChart width={1170} height={750} data={book}>
        <XAxis dataKey={"author"} stroke="blue"></XAxis>
        <YAxis dataKey={"id"} stroke="red"></YAxis>
        <Line dataKey={"rating"}></Line>
      </LineChart>
    </div>
  );
};

export default Book;
