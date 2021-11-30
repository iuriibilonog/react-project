import Button from '@mui/material/Button';

const Authorization = () => {
  return (
    <div>
      <p>Вы можете авторизоваться с помощью Google Account:</p>
      <button type="button">Google</button>
      <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
      <label>
        {' '}
        Электронная почта
        <input type="text" />
      </label>
      <label>
        {' '}
        Пароль
        <input type="pasword" />
      </label>
      <Button variant="contained">Войти</Button>
      <Button variant="contained">Зарегистрироваться</Button>
    </div>
  );
};

export default Authorization;
