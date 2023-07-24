import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyCollegeCard from "./MyCollegeCard";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch(
      `https://admitopia-server-side.vercel.app/admission?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAdmissions(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-bold font-sans text-center text-teal-600 bg-teal-50 py-2 my-8">
        my college route
      </h3>
      <div>
        {admissions.map((admission) => (
          <MyCollegeCard
            key={admission._id}
            college={admission}
          ></MyCollegeCard>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
