import React, { useContext, useEffect, useState } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import useForm from '../../hooks/useForm';

function Profile({ responseSuccess, responseError, handleSignOut, handleUpdateUser}) {
    const currentUser = useContext(CurrentUserContext);

    const { enteredValues, handleChange, isFormValid, resetForm } = useForm();
    const [isLastValues, setIsLastValues] = useState(false);

  
    useEffect(() => {
      if (currentUser) {
        resetForm(currentUser);
      }
    }, [currentUser, resetForm]);
  
    function handleSubmit(e) {
      e.preventDefault();
      handleUpdateUser({
        name: enteredValues.name,
        email: enteredValues.email,
      });

    }
  
    useEffect(() => {
      if (currentUser.name === enteredValues.name && currentUser.email === enteredValues.email) {
        setIsLastValues(true);
      } else {
        setIsLastValues(false);
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enteredValues]);

    return (
        <form onSubmit={handleSubmit} className="profile">
            <h2 className="profile__greet">
                Привет, {currentUser.name}!
            </h2>
            <div className="profile__name">
                <p className="profile__placeholder">Имя</p>
                <input
                 name="name"
                 className="profile__input"
                 id="name-input"
                 type="text"
                 minLength="2"
                 maxLength="40"
                 required
                 onChange={handleChange}
                 value={enteredValues.name || ''} />
            </div>
            <div className="profile__email">
                <p className="profile__placeholder">E-mail</p>
                <input
                 name="email"
                 className="profile__input"
                 id="email-input"
                 type="email"
                 required
                 onChange={handleChange}
                 value={enteredValues.email || ''} />
            </div>
            <span className={`profile__error ${responseSuccess ? 'profile__error_success' : responseError ? 'profile__error_unsuccess' : ''}`}>{(responseSuccess ?? '') || (responseError ?? '')}</span>
            <button type="submit" disabled={!isFormValid ? true : false} to="/edit" className={
              !isFormValid || isLastValues ? 'profile__link profile__link_inactive' : 'profile__link'}>Редактировать</button>
            <button onClick={handleSignOut} className="profile__link profile__link_signout">Выйти из аккаунта</button>
        </form>
    )
}

export default Profile