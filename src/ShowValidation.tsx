import React from 'react'

interface Props  {
    status: string;
    reason:string;
    show:boolean;

}

const ShowValidation: React.FC<Props> = (props) => {
    return (
        <div>
            {props.status === 'valid' ?
            <p className="validation valid">Valid!</p>
            :<p className="validation invalid">Invalid</p>}
            {props.show ?
            props.reason
            : null}
        </div>
    )
}

export default ShowValidation
