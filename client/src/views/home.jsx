export default function Home() {
    return (
        <div className="container">
            <div className="sideBarContainer">
                <nav>
                    <ul> Test Point
                        <li>Point</li>
                        <li>Point</li>
                        <li>Point</li>
                        <li>Point</li>
                    </ul>
                    <ul> Test Point2
                        <li>Point</li>
                        <li>Point</li>
                        <li>Point</li>
                        <li>Point</li>
                    </ul>
                </nav>
            </div>
            <div className="contentContainer" >
                <div className="header">
                    <h1>Admin Dashboard</h1>
                </div>
                <div className="content">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Header 1</th>
                                <th>Header 2</th>
                                <th>Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Data 1</td>
                                <td>Data 2</td>
                                <td>Data 3</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Data 4</td>
                                <td>Data 5</td>
                                <td>Data 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}