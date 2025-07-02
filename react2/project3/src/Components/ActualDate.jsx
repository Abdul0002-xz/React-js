function ActualDate(){

    let time = new Date()

    return <div className="text-size">
        This is the current date and time : {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </div>
}

export default ActualDate