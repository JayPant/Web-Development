function Tours(){
    return(
        <div>
            <div>
                <h2>Plan Your Vacation</h2>
            </div>

            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour}></Card>
                    } )
                }
            </div>
        </div>
    )
}

export default Tours;