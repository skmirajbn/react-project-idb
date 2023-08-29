// eslint-disable-next-line react/prop-types
export default function Heading({ children }) {
  return (
    <div className="container">
      <h2 className="text-blue-500 text-center text-3xl font-bold py-2 underline underline-offset-4 decoration-orange-600">{children}</h2>
    </div>
  );
}
