import { useEffect, useState } from "react";
import axios from "../../axios";
import { jwtDecode } from "jwt-decode";

const CreateAnnonce = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    required_skills: "",
    type_id: "", // Assuming type_id is a required field
  });
  const [error, setError] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const role = decodedToken.role;
      setUserRole(role);
    //   console.log(role);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/annonce", formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4 py-8 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Create Annonce</h1>
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-1">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="required_skills" className="block mb-1">
            Required Skills:
          </label>
          <input
            type="text"
            id="required_skills"
            name="required_skills"
            value={formData.required_skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type_id" className="block mb-1">
            Type ID:
          </label>
          <input
            type="number"
            id="type_id"
            name="type_id"
            value={formData.type_id}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md focus:outline-none focus:bg-indigo-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateAnnonce;
