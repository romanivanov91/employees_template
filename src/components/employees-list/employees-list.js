import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryChange}) => {
    //С помощью метода перебора map (перебирает массив и возвращает новый массив с новыми данными) выводим каждого сотрудника на страницу
    const elements = data.map((item, index) => {
        const {id, name, salary, increase, star} = item
        return (
            <EmployeesListItem key={id} 
                                name={name} 
                                salary={salary} 
                                increase={increase}
                                star={star}
                                onDelete={()=>onDelete(id)}
                                onToggleProp={(e)=>onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                                onSalaryChange={(id, value) => onSalaryChange(id, value)}
                                item={data[index]}/>
        );
    });

    console.log(elements);

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;