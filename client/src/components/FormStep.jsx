

const FormStep = ({ children, show, onNext, onPrev, showNext = true, showPrev = true }) => {
  if (!show) return null;

  return (
    <div className="flex flex-col gap-5">
      {children}
      <div className="flex gap-5 ml-auto mr-auto">
        {showPrev && (
          <button className="p-2 px-10 mt-5 font-semibold text-white bg-red-500 rounded-lg w-fit hover:bg-red-600" onClick={onPrev}>
            Prev
          </button>
        )}
        {showNext ? (
          <button className="p-2 px-10 mt-5 font-semibold text-white bg-red-500 rounded-lg w-fit hover:bg-red-600" onClick={onNext}>
            Next
          </button>
        ):(
            <button className="p-2 px-10 mt-5 font-semibold text-white bg-indigo-500 rounded-lg w-fit hover:bg-indigo-600" type="submit">
                Create User
            </button>
        )}
      </div>
    </div>
  );
};

export default FormStep;
