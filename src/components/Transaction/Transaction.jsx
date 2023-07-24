//import { useDispatch } from 'react-redux';
//import { deleteContact } from 'redux/operations';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import css from './transaction.module.css';

export const Transaction = ({ transaction }) => {
  //const dispatch = useDispatch();
  const handleEdit = () => {
    console.log('edit');
    //dispatch(editTransaction(transaction.id));
  };

  const handleDelete = () => {
    //dispatch(deleteTransaction(transaction.id));
    console.log('delete');
  };
  return (
    <>
      <td className={css.Date} data-label="Date">
        <span>{transaction.date}</span>
      </td>
      <td className={css.Type} data-label="Type">
        <span>{transaction.type}</span>
      </td>
      <td className={css.Category} data-label="Category">
        <span>{transaction.category}</span>
      </td>
      <td className={css.Comment} data-label="Comment">
        <span>{transaction.comment}</span>
      </td>
      <td
        data-label="Sum"
        className={transaction.type === '+' ? css.Income : css.Outcome}
      >
        {transaction.sum}
      </td>
      <td>
        <button className={css.EditButton} onClick={handleEdit}>
          <EditOutlinedIcon style={{ fontSize: '16px' }} />{' '}
          <span className={css.EditButtonText}>Edit</span>
        </button>
        <button className={css.DeleteButton} onClick={handleDelete}>
          Delete
        </button>
      </td>
    </>
  );
};
