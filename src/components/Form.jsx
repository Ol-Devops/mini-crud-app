import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
const Form = () => {
  return (
    <div className="grid gap-y-6">
      <h2 className="text-green-400 text-xl font-bold">CRUD FORM</h2>

      <div className="w-10 grid gap-y-4">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <AiOutlineSearch />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <AiOutlineMail />
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <FaUser />

          <input type="text" className="grow" placeholder="Username" />
        </label>
      </div>

      <button className="btn btn-primary btn-sm">Submit</button>
    </div>
  );
};

export default Form;
