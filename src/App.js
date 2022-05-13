import logo from './logo.svg';
import './App.scss';
import { Alert, Card, DatePicker } from 'antd';

var date_test = '';

function App() {
  return (
    <div className="App">
      <div class='container'>
        <h1>Components Ant Design</h1>
        <span>Programacion III</span>
        <div>
          <Alert message='Success Text' type='success' />
          <Alert message='Info Text' type='info' />
          <Alert message='Warning Text' type='warning' />
          <Alert message='Error Text' type='error' />
        </div>
        <div>
          <label>Selecciona una fecha</label>
          <DatePicker onChange={date_test}></DatePicker>
        </div>
        <div>
          <Card size='small' title='Tarjeta de presentación' extra={<a href='#'>Ver más</a>} style={{width: 300}}>
            <p>Brayan Rios Valencia</p>
            <p>Ingenieria de sistemas</p>
            <p>
              <small>brayansriosv@autonoma.edu.co</small>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
