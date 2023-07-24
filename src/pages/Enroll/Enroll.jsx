import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Enroll = () => {
  const { user } = useContext(AuthContext);
  const myCollege = useLoaderData();
  const { college_name, _id, image, rating } = myCollege;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const phone = form.phone.value;
    const birth = form.birth.value;
    const address = form.address.value;
    const info = {
      name,
      email,
      subject,
      phone,
      birth,
      address,
      collegeId: _id,
      rating,
      image,
    };
    // console.log(info);

    fetch("http://localhost:5000/admission", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Enrollment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="pb-8 px-4 bg-gradient-to-r from-teal-600 via-teal-200 to-teal-600">
      <div>
        <h1 className="text-5xl text-center py-4 font-mono font-bold tracking-wide text-teal-800">
          Welcome to {college_name} for Your Admission
        </h1>
      </div>
      <div className="max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="candidateName"
              className="block text-gray-700 font-bold mb-2"
            >
              Candidate Name
            </label>
            <input
              type="text"
              id="candidateName"
              name="name"
              defaultValue={user?.displayName}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-bold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="candidateEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Candidate Email
            </label>
            <input
              type="email"
              id="candidateEmail"
              name="email"
              defaultValue={user?.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="candidatePhone"
              className="block text-gray-700 font-bold mb-2"
            >
              Candidate Phone Number
            </label>
            <input
              type="tel"
              id="candidatePhone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-gray-700 font-bold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="birth"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
