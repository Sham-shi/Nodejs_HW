import './group.css'
import olegAbramov from '../../assets/group/oleg-abramov.jpg'

export default function InfoTable() {
    return (
        <div className='group-table-container'>
            <table className='group-table'>
                <thead>
                    <tr>
                        <th className="group-table-header" colSpan={2}>Основная информация</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Жанр</td>
                        <td>Кавер-версия, рок-музыка, хэви-метал, метал, альтернативный метал</td>
                    </tr>
                    <tr>
                        <td>Годы</td>
                        <td>2016 - н.в.</td>
                    </tr>
                    <tr>
                        <td>Руководитель</td>
                        <td className='director-info'>
                            Олег Абрамов
                            <img className='abramov-img' src={olegAbramov} width="250" height="200" alt="Фото Олега Абрамова"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Состав</td>
                        <td>Олег Абрамов, Денис Цирельсон, Евгений Козлов, Александр Мамонтов, Александр Иванов, Александр Солдатов</td>
                    </tr>
                    <tr>
                        <td>Бывшие участники</td>
                        <td>Александр Евстифеев, Александр Магазеев, Данил Ивлев</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}