import React, {Component} from 'react';


class ReviewWrite extends Component {
    render = () => {
        <form>
            <div className="form-group">
                <label >Review:</label>
                <textarea className="form-control" rows={10} defaultValue={""} />
            </div>
        </form>
    }
}
export default ReviewWrite;