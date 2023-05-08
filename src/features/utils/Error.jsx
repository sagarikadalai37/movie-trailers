export const Error = (status) => {
  return (
    <div className="light-red">
      {status === "Error" && "Something went wrong"}
    </div>
  );
};
