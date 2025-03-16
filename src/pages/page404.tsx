import { Link } from 'react-router-dom';


function Page404() {
  return (
    <>
      <h1>Ошибка 404. Страницы не существует.</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </>);
}

export {Page404};
