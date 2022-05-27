import "./app-info.css";

const AppInfo = (props) => {
    const {numberOfEmployees, increaseOfEmployees} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {numberOfEmployees}</h2>
            <h2>Премию получат: {increaseOfEmployees}</h2>
        </div>
    )
}

export default AppInfo;