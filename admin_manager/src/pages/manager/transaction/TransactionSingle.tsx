import React from 'react'
import { Transaction } from '../../../models/Transaction';
import { getTransactionStatusStyle } from '../../../utils/cssStyle';
interface TransactionSingleProps {
  transaction: Transaction;
}

const TransactionSingle: React.FC<TransactionSingleProps> = ({ transaction }) => {

  return (
    <>
      <tr >
        <td>{transaction.id}</td>
        <td>{transaction.user?.fullName}</td>
        <td>{transaction.user?.email}</td>
        <td>{transaction.user?.phone}</td>
        <td>{transaction.totalPrice}</td>
        <td>
          <a className="fw-bold" style={getTransactionStatusStyle(transaction.state)}>{transaction.state}</a>
        </td>
        <td>
          <div className="btn-group">
            Xem
          </div>
        </td>
      </tr>
    </>
  )
}

export default TransactionSingle
