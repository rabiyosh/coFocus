
import "./Notes.scss";
import { useEffect, useState } from "react";

function Notes() {
    const [notes, setNotes] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes"));
        return savedNotes || "";
    });
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

 

    return (
        <div className="glassWidgets notes">
            <div className="notes_title">
                <h1>NOTES</h1>
            </div>
            <textarea
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder='Type anything to remember'
                className="notes_input"
            />
        </div>
    );
}

export default Notes;
