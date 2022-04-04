import { useEffect, useState } from "react";

const useLoad = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch("reviewData.json")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    return [review, setReview];
};

export default useLoad;
