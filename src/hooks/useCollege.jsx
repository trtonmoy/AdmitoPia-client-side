import { useEffect, useState } from "react";

const useCollege = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://admitopia-server-side.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
        setLoading(false);
      });
  }, []);

  return [colleges, loading];
};

export default useCollege;
