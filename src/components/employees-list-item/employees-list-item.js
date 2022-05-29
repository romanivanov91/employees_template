import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component{
    constructor (props) {
        super(props);
        this.state = {
            classError: 'error d-none'
        }
    }

    onSalaryChange = (e) => {
      if (isNaN(e.target.value)) {
            this.setState(({classError}) => {
            return {
            classError: 'error d-block'
            }
          })
      } else {
            console.log(this.props.item.id);
            this.setState(({classError}) => {
            this.props.onSalaryChange(this.props.item.id, e.target.value);
            return {
                classError: 'error d-none'
                }
          })
      }
    }
   
   render () {
    const {name, salary, onDelete, onToggleProp, increase, star, onSalaryChange} = this.props;
    //Переменная с текстом класса для элемента списка
    let classNames = "list-group-item d-flex justify-content-between";
    //Условие добавляющее или убирающее класс increase (подсветка желтым сотрудника)
    if (increase) {
        classNames += " increase"
    }
    //Условие добавляющее или убирающее класс like (добавляет сотруднику звездочку)
    if (star) {
        classNames += " like"
    }

    return (
        <li className={classNames}>
            <span onClick={onToggleProp} className="list-group-item-label" data-toggle="star">{name}</span>
            <p className={this.state.classError}>Введите числовое значение!!!</p>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={this.onSalaryChange}/>
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
    }

export default EmployeesListItem;

// // Старый вариант с компонетом React
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