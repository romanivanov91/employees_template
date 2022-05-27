import {Component} from 'react'
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //Записываем в state значения введенные в форму [e.target.name] - это атрибут инпута name, т. е. у инпута как его зовут атрибут name="name", а у инпута с зарплатой name="salary" и им присваиваются значения введенных данных
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name == '' && this.state.salary == '') {
            alert('Данные не введены!!!!')
        }else if(this.state.name == '') {
            alert('Введите имя сотрудника!!!!')
        } else if(this.state.salary == '') {
            alert('Введите зарплату сотрудника!!!!')
        } else {
            this.props.onAdd(this.state.name, this.state.salary);//Вызываем через props метод onAdd (name, salary) (находится в App.js), аргументам присваиваются значения введенные в форму и записанные в методе onValueChange
        }
        //Очищаем значения
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {

        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;