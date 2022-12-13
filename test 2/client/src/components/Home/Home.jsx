import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchList } from '../../redux/actions/listActions';

export default function Home() {
  const list = useSelector((store) => store.list);
  const error = useSelector((store) => store.errorList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  // console.log({ list, error });

  return (
    <div style={{ margin: '100px' }}>
      <div>Список услуг</div>
      {(list.length === 0 && !error) ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Наименование услуги</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((el, i) => (
              <tr key={el.id}>
                <th scope="row">{i}</th>
                <td>
                  {' '}
                  <Link key={el.id} to={`/${el.id}/details`}>
                    {' '}
                    {el.name}
                  </Link>
                </td>
                <td>{el.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {error ? (
        <button onClick={() => { dispatch(fetchList()); }} type="button" className="btn btn-danger">Ошибка на сервере, попробовать еще</button>
      ) : (null)}
    </div>
  );
}
