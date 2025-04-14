
function Tables() {
  return (
    <div className="sectionsToDetails">
                    <div className="itemsRecent">
                        <table className='tableRecent'>
                            <thead>
                            <tr >
                                <th>Itens recentes</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>7 Wonders</td>
                                <td><button className='btnSee'>Ver</button></td>
                            </tr>
                            <tr>
                                <td>7 Wonders</td>
                                <td><button className='btnSee'>Ver</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="itemsOut">
                        <table>
                            <thead>

                            <tr>
                                <th>Itens acabando</th>
                                <th>Qntd.</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>7 Wonders</td>
                                <td>8</td>
                                <td><button className='btnSee'>Ver</button></td>
                            </tr>
                            <tr>
                                <td>7 Wonders</td>
                                <td>8</td>
                                <td><button className='btnSee'>Ver</button></td>
                            </tr>
                            <tr>
                                <td>7 Wonders</td>
                                <td>8</td>
                                <td><button className='btnSee'>Ver</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

  )
}

export default Tables