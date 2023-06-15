import { useState } from "react";

function AddMovieForm ({onAddMovie}){
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [synopsis, setSynopsis] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        //Use this for AddCatForm to create new object!!! 06/10/23 3:18 PM exercise 4
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data))
        //Use this for AddCatForm to create new object!!! 06/10/23 3:18 PM exercise 4

        onAddMovie({title, year, synopsis})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Movie Title:
                    <input name="title" value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                </label>

                <label>
                    Year:
                    <input name="year" value={year}
                    onChange={(e) => setYear(e.target.value)} />
                </label>

                <label>
                    Synopsis:
                    <input name="synopsis" value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)} />
                </label>

                <button>Add Movie</button>
            </form>
        </div>
    )

}

export default AddMovieForm