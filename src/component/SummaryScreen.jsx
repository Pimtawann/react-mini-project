function SummaryScreen({formData, onRestart}){
    return(
        <div>
            <h2>Thank you for submitting your information</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Favorite Movie: {formData.selectedMovie}</p>
        {formData.comment && <p>Comment: {formData.comment}</p>}
        <button onClick={onRestart}>Begin New Submission</button>
        </div>
    )

}

export default SummaryScreen;