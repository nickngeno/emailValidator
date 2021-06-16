import React from 'react'

interface Props {
    status: string;
    reason: string;
    show: boolean;
}

const ShowValidation:React.FC<Props> = ({ status, reason, show }) => {
    return (
        <div>
            {status === 'valid' ?
                <p className="validation valid">Valid!</p>
                : status === 'invalid' ? <p className="validation invalid">Invalid!</p> : ""}
            {show ? reason : null}
        </div>
    )
}

export default ShowValidation
