import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: "Бородай Г.", salary: 1000, increase: false, star: true, id:1},
        {name: "Ермолаев В.", salary: 500, increase: true, star: false, id:2},
        {name: "Кириллов И.", salary: 1500, increase: false, star: false, id:3}
      ],
      term: "",//переменная для поиска
      filter: "all",//переменная для фильтра
      error: "Введите числовое значение!!!",
      // display: "d-none"
    }
    this.maxId = 4;//Добавляем идентификатор нового сотрудника
  }

  //Удаление сотрудников из списка
  deleteItem = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  //Добавление новых сотрудников в список
  addItem = (name, salary) => {
    //Создаем объект с данными нового сотрудника полученные из формы
    const newItem = {
      name,
      salary,
      increase: false,
      stare: false,
      id: this.maxId++
    }
    //Добавляем объект нового сотрудника в новую копию массива с сотрудниками и выводим на страницу
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  //Удаление и добавление классов increase и like в одном методе сотруднику при клике на печеньку (подсветка желтым сотрудника) и при клике на имя сотрудника (добавление звездочки). Ниже этого метода представлены закоментированные методы этого же функционала для отдельно для increase и like
  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      //Перебираем массив с помощью метода map. В нем если id совпадет с id одного из перебираемых обьектов, то изменяем свойства этого обьекта и перезаписываем его. Остальные обьекты остаются без изменений
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  // //Удаление и добавление класса increase сотруднику при клике на печеньку (подсветка желтым сотрудника)
  // onToggleIncrease = (id) => {
  //   this.setState(({data}) => ({
  //     //Перебираем массив с помощью метода map. В нем если id совпадет с id одного из перебираемых обьектов, то изменяем свойства этого обьекта и перезаписываем его. Остальные обьекты остаются без изменений
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, increase: !item.increase}
  //       }
  //       return item;
  //     })
  //   }))
  // }
  // //Другой вариант метода выше. Полностью рабочая и лучше для понимания, но длинее запись
  // // onToggleIncrease = (id) => {
  // //   this.setState(({data}) => {
  // //     const index = data.findIndex(item => item.id === id);//получаем индекс обьекта из массива данных совпадающий по id
  // //     const old = data[index];//Записываем в переменную обьект совпавший по id
  // //     const newItem = {...old, increase: !old.increase}//Заменяем свойсво в этом обьекте на новое в данном случае свойство increase меняем на противоположное
  // //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]//Записываем в новый массив новый измененный обьект
  // //     return {
  // //       data: newArr//присваимваем значение нового массива массиву с данными
  // //     }
  // //   })
  // // }
   

  // //Удаление и добавление класса like сутруднику при клике на имя сотрудника (добавление звездочки)
  // onToggleStar = (id) => {
  //   this.setState(({data}) => ({
  //     //Перебираем массив с помощью метода map. В нем если id совпадет с id одного из перебираемых обьектов, то изменяем свойства этого обьекта и перезаписываем его. Остальные обьекты остаются без изменений
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, star: !item.star}
  //       }
  //       return item;
  //     })
  //   }))
  // }

  //Метод для поиска имени в массиве. items - это массив в котором будет осущесвляться поиск. term - это значение строки поиска который приходит из search-panel
  searchEmp = (items, term) => {
    //Проверка term на пустоту, если пустой, то возвращаем массив в первоначальном виде
    if (term.length === 0) {
      return items;
    }
    //Если не пустой то фильтруем его по значению term
    return items.filter(item => {
      return item.name.indexOf(term) > -1//метод indexOf проверет строку на наличие в нем подстроки (символа и т.д.)
    })
  }

  //Метод извлечения term из search-panel. Его передаем в компонент
  onUpdateSearch = (term) => {
    this.setState ({term})//просто term в скобках -это сокращенная запись term: term
  }

  //Метод для фильтров. Item - массив с данными, filter - это состояние фильтра который будет записан в state и его значение будет приходить из app-filter
  filterPost = (items, filter) => {
    switch (filter) {
      case 'star':
        return items.filter(item => item.star)
      case 'moreThen1000': 
      return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  // //Пытался сделать фильтр сам. Работает, но неправильно использовал массив с данными - изменяется массив из state, а это не правильно
  // //Метод сортировки отображающий сотрудников претендующих на повышение (свойство increase)
  // onEmployeesIncrease = (items) => {
  //   this.setState(({data}) => {
  //     return {
  //       data: items.filter(item => item.increase)
  //     }
  //   })
  // }

  // //Метод сортировки отображающий сотрудников у кого зарплата выше 1000 (свойство increase)
  // onEmployeesSalary = (items) => {
  //   this.setState(({data}) => {
  //     return {
  //       data: items.filter(item => item.salary > 1000)
  //     }
  //   })
  // }

  //Меняем в state значение filter для того чтобы отфильтровать массив. Значение придет из app-filter
  onFilterSelect = (filter) => {
    this.setState(({filter}));
  }

  //Изменение зарплаты из интпута с зарплатой
  onSalaryChange = (id, value) => {
    if (!(isNaN(value))) {
      this.setState(({data}) => ({
        //Перебираем массив с помощью метода map. В нем если id совпадет с id одного из перебираемых обьектов, то изменяем свойства этого обьекта и перезаписываем его. Остальные обьекты остаются без изменений
        data: data.map(item => {
          if (item.id === id) {
            return {...item, salary: value}
          }
          return item;
        })
      }))
    }
  }

  render() {
    //Учет сотрудников и тех кто получает премии
    const {data, term, filter} = this.state;
    const numberOfEmployees = this.state.data.length;
    const increaseOfEmployees = this.state.data.filter(item => item.increase === true).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);//Как оргумент передаем отфильтрованный по поиску массив, а filter берем из state

    return (
      <div className="app">
          <AppInfo
              numberOfEmployees={numberOfEmployees}
              increaseOfEmployees={increaseOfEmployees}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList 
              data={visibleData}
              onDelete={this.deleteItem}
              onToggleProp={this.onToggleProp}
              onSalaryChange={this.onSalaryChange}/>
          <EmployeesAddForm
              onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
