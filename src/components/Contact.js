
import { useState } from 'react'

function Contact() {

    const [commentInfo, setCommentInfo] = useState({ name: '', email: '', comment: '' });


    const handleChange = (e) => {
        setCommentInfo({ ...commentInfo, [e.target.name]: e.target.value })
    }


    return (
        <div className="container w-50 text-left">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Name" value={commentInfo.name} name="name" onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={commentInfo.email} name="email" onChange={handleChange} />
                </div><br />

                <div className="form-group">
                    <label htmlFor="comment">comment</label>
                    <textarea className="form-control" id="comment" rows="3" value={commentInfo.comment} name="comment" onChange={handleChange}></textarea>
                </div>
                <br />

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>

            {JSON.stringify(commentInfo)}

        </div>
    )
}

export default Contact