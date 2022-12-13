import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../../redux/actions/detailsActions';

export default function Details() {
  const details = useSelector((store) => store.details);
  const error = useSelector((store) => store.errorDetails);
  const dispatch = useDispatch();

  const id = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, []);

  // console.log({ details, error });

  return (

    <div style={{ margin: '100px' }}>
      <p>Детальная информаци</p>
      {(!details?.id && !error) ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{details?.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Цена:
              {' '}
              {details?.price}
            </h6>
            <p className="card-text">{details?.content}</p>
          </div>
        </div>
      )}
      {error ? (
        <button onClick={() => { dispatch(fetchDetails(id)); }} type="button" className="btn btn-danger">Ошибка на сервере, попробовать еще</button>
      ) : (null)}
    </div>
  );
}
