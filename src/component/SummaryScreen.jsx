function SummaryScreen({formData, onRestart}){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-slate-100">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-yellow-500">Thank you for submitting your information</h2>
            <div className="w-full max-w-2xl text-center rounded-2xl border border-slate-700/70 bg-slate-800/40 p-8 shadow-lg backdrop-blur">
            <div className="space-y-3">
            <p className="font-semibold text-slate-200">Name: {formData.name}</p>
            <p className="font-semibold text-slate-200">Email: {formData.email}</p>
            <p className="font-semibold text-slate-200">Favorite Movie: {formData.selectedMovie}</p>
            {formData.comment && <p className="font-semibold text-slate-200">Comment: {formData.comment}</p>}
            </div>
            </div>
        <button onClick={onRestart} className="rounded-xl border mt-8 bg-yellow-500 border-slate-600 px-5 py-2 text-black hover:bg-slate-700/50">Begin New Submission</button>
        </div>
    )

}

export default SummaryScreen;