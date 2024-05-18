export function Alert({message, type}: {message: string, type: string}){
    return(
        <div className={`alert alert-warning`}>
            {message}
        </div>
    )
}