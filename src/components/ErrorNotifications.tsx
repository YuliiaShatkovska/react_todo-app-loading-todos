import React from 'react';
import cn from 'classnames';
import { Errors } from '../types/Errors';

type Props = {
  errorMessage: Errors;
  handleResetErrorMessage: () => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  handleResetErrorMessage,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={cn('notification is-danger is-light has-text-weight-normal', {
        hidden: !errorMessage,
      })}
    >
      {/* DON'T use conditional rendering to hide the notification */}
      {/* Add the 'hidden' class to hide the message smoothly */}
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={handleResetErrorMessage}
      />

      {errorMessage}
    </div>
  );
};
