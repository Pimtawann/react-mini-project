import { useState } from "react";
import movies from "../data/movies";

function FormScreen({onSubmit}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({});

    function isValidEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleSubmit(event){
        event.preventDefault();
        const newErrors = {};

        if (!name) {
            newErrors.name = "Name is required."
        }
        if (!email) {
            newErrors.email = "Email is required."
        } else if (!isValidEmail(email)){
            newErrors.email = "Invalid email format."
        }
        if (!selectedMovie){
            newErrors.selectedMovie = "Please select your favorite movie."
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0){
            onSubmit({
                name,
                email,
                selectedMovie,
                comment,
              });
        }
    }

    function handleReset(){
        setName("");
        setEmail("");
        setSelectedMovie("");
        setComment("");
        setErrors({});
      };

    return(
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className=""
                />
                {errors.name &&  <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className=""
                />
                {errors.email &&  <p>{errors.email}</p>}
            </div>
            <div>
                <label>Movie</label>
                <div>
                    {movies.map((movie,index) => (
                        <label key={index}>
                        <span>{movie.title} ({movie.year}) - {movie.director}</span>
                        <input
                          type="radio"
                          name="movie"
                          value={movie.title}
                          checked={selectedMovie === movie.title}
                          onChange={(event) => setSelectedMovie(event.target.value)}
                        />
                      </label>            
                    ))}
                    {errors.selectedMovie && <p>{errors.selectedMovie}</p>}
                </div>
            </div>
            <div>
                <textarea
                   placeholder="Write your comment (optional)"
                   value={comment}
                   onChange={(event) => setComment(event.target.value)}
                />
            </div>
            <div>
                <button type="button" onClick={handleReset}>Reset</button>
                <button type="submit">Submit</button>
            </div>

        </form>
    )

}

export default FormScreen;