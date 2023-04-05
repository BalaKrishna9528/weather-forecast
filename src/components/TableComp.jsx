const TableComp = ({ list }) => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>weather Description</th>
                    <th>Humidity</th>
                    <th>temperature Max</th>
                    <th>temperature Min</th>
                </tr>
            </thead>
            <tbody>
                {list?.map((report) => {
                    const { dt_txt, weather, main } = report
                    const { description } = weather[0]
                    const { humidity, temp_max, temp_min } = main
                    return (
                        <tr>
                            <td>{dt_txt}</td>
                            <td>{description}</td>
                            <td>{humidity}</td>
                            <td>{temp_max}</td>
                            <td>{temp_min}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableComp

