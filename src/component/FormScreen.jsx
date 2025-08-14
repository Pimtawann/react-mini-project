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

    const inputBase = "mt-1 rounded-xl border px-4 py-2.5 text-slate-100 placeholder-slate-400 bg-slate-900/50 border-slate-700 shadow-sm outline-none transition focus:ring-1 focus:ring-amber-500 focus:border-amber-500";

    return(
        <form noValidate onSubmit={handleSubmit} className="min-h-screen w-xl">
            <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-yellow-500">Movie Survey</h1>
            <div className="flex items-center justify-center mb-5">
                <div className="flex items-center">
                <label className="ิblock mr-3 ml-3 text-xl font-medium">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className = {`${inputBase} w-[350px]`}
                />
                </div>
                {errors.name &&  <p className="mt-1 ml-3 text-sm text-red-400">{errors.name}</p>}
            </div>
            <div className="flex items-center justify-center mb-5">
                <label className="ิblock mr-3 ml-3 text-xl font-medium">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className = {`${inputBase} w-[350px]`}
                />
                {errors.email &&  <p className="mt-1 ml-3 text-sm text-red-400">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="mb-2 block font-medium text-2xl">Movie</label>
                <div className="space-y-3 rounded-2xl border border-slate-200 p-4">
                    {movies.map((movie,index) => (
                        <label key={index} className="flex items-center justify-between gap-3 rounded-xl border border-blue-200 p-3 transition">
                        <span>{movie.title} ({movie.year}) - {movie.director}</span>
                        <input
                          type="radio"
                          name="movie"
                          value={movie.title}
                          checked={selectedMovie === movie.title}
                          onChange={(event) => setSelectedMovie(event.target.value)}
                          className="h-3 w-3 text-blue-600"
                        />
                      </label>            
                    ))}
                    {errors.selectedMovie && <p className="mt-1 ml-3 text-sm text-red-400">{errors.selectedMovie}</p>}
                </div>
            </div>
            <div className="flex items-center mb-7">
                <textarea
                   placeholder="Write your comment (optional)"
                   value={comment}
                   onChange={(event) => setComment(event.target.value)}
                   className ={`${inputBase} h-28 w-150`}
                />
            </div>
            <div className="flex items-center justify-end gap-3">
                <button type="button" onClick={handleReset} className="rounded-xl border border-slate-300 px-4 py-2 bg-slate-500 text-slate-900 hover:bg-slate-50">Reset</button>
                <button type="submit" className="rounded-xl bg-yellow-500 px-4 py-2 font-medium text-slate-900 hover:bg-blue-700">Submit</button>
            </div>
        </form>
    )

}

export default FormScreen;