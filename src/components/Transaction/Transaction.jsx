import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import css from './transaction.module.css';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../redux/transactions/operations';
import { EditModal } from '../../components/EditModalTrasaction/EditModalTransaction';
import { format } from 'date-fns';

export const Transaction = ({ transaction }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return format(date, 'dd.MM.yy');
  }
  const handleEdit = () => {
    <EditModal transaction={transaction} />;
  };

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTransaction(transaction._id));
    console.log('delete');
  };
  return (
    <>
      <td className={css.Date} data-label="Date">
        <span>{formatDate(transaction.date)}</span>
      </td>
      <td className={css.Type} data-label="Type">
        {transaction.type === true ? <span>+</span> : <span>-</span>}
      </td>
      <td className={css.Category} data-label="Category">
        <span>{transaction.category}</span>
      </td>
      <td className={css.Comment} data-label="Comment">
        <span>{transaction.comment}</span>
      </td>
      <td
        data-label="Sum"
        className={transaction.category === 'Income' ? css.Income : css.Outcome}
      >
        {transaction.sum.toFixed(2)}
      </td>
      <td>
        <button className={css.EditButton} onClick={handleEdit}>
          <EditOutlinedIcon style={{ fontSize: '16px' }} />
          <span className={css.EditButtonText}>Edit</span>
        </button>
        <button className={css.DeleteButton} onClick={handleDelete}>
          Delete
        </button>
      </td>
    </>
  );
};
