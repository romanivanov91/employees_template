import './employees-list-item.css';

const EmployeesListItem = (props) => {
   
    const {name, salary, onDelete, onToggleProp, increase, star} = props;
    //Переменная с текстом класса для элемента списка
    let classNames = "list-group-item d-flex justify-content-between";
    //Условие добавляющее или убирающее класс increase (подсветка желтым сотрудника)
    if (increase) {
        classNames += " increase"
    }
    ////Условие добавляющее или убирающее класс like (добавляет сотруднику звездочку)
    if (star) {
        classNames += " like"
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="star">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
               <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
        )
    }

export default EmployeesListItem;

// // Старый вариант
// class EmployeesListItem extends Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             increase: false,
//             star: false
//         }
//     }

//     //Меняем increase на true или false при клике на печеньку
//     onIncrease = () => {
//         this.setState(state => ({             //Круглые скобки ставим чтобы не писать return
//             increase: !state.increase         //Отталкиваемся от предыдущего значения increase
//         }))
//     }
//     //функция выше равносильно закоментированной функции ниже. Ниже используется синтаксис деструктуризации: вместо state пишется ({increase})
//     // onIncrease = () => {
//     //     this.setState(({increase}) => ({
//     //         increase: !increase
//     //     }))
//     // }

//     //Меняем star на true или false при клике на пользователя
//     onNameClick = () => {
//         this.setState(state => ({
//             star: !state.star
//         }))
//     }

//     render () {
//         const {name, salary, onDelete} = this.props;
//         const {increase, star} = this.state;
//         //Переменная с текстом класса для элемента списка
//         let classNames = "list-group-item d-flex justify-content-between";
//         //Условие добавляющее или убирающее класс increase (подсветка желтым сотрудника)
//         if (increase) {
//             classNames += " increase"
//         }
//         ////Условие добавляющее или убирающее класс like (добавляет сотруднику звездочку)
//         if (star) {
//             classNames += " like"
//         }

//         return (
//             <li className={classNames}>
//                 <span onClick={this.onNameClick} className="list-group-item-label">{name}</span>
//                 <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
//                 <div className='d-flex justify-content-center align-items-center'>
//                    <button type="button"
//                         className="btn-cookie btn-sm "
//                         onClick={this.onIncrease}>
//                         <i className="fas fa-cookie"></i>
//                     </button>

//                     <button type="button"
//                         className="btn-trash btn-sm "
//                         onClick={onDelete}>
//                         <i className="fas fa-trash"></i>
//                     </button>
//                     <i className="fas fa-star"></i>
//                 </div>
//             </li>
//         )
//     }

    
// }

// export default EmployeesListItem;