import { useEffect, useState } from 'react';
import axios from 'axios';

interface Review {
    author_name: string;
    rating: number;
    text: string;
}

export default function Reviews() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=PLACE_ID&fields=name,rating,reviews&key=API_KEY`
                );
                setReviews(response.data.result.reviews);
            } catch (error) {
                console.log(error);
            };
        };
        fetchReviews();
    }, []);

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.author_name}>
                    <h4>{review.author_name}</h4>
                    <p>{review.rating} stars</p>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    );
}
