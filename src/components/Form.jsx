import { BsCurrencyDollar } from "react-icons/bs";
import { BsSortNumericUp } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
const Form = () => {
  return (
    <div className="h-full">
      <h2 className="text-green-400 text-xl font-bold mb-10">CRUD FORM</h2>

      <div className="space-y-6 border-gray-600 px-6 border-2 py-10 rounded">
        <label className="input input-bordered flex items-center gap-2">
          <FaUser />
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <BsSortNumericUp />
          <input type="text" className="grow" placeholder="Age" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <BsCurrencyDollar />

          <input type="text" className="grow" placeholder="Salary" />
        </label>
        <button className="btn btn-primary btn-sm">Submit</button>
      </div>
    </div>
  );
};

export default Form;
