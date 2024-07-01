import React from 'react'
import { Transaction } from '../../../models/Transaction';
import { getTransactionStatusStyle } from '../../../utils/cssStyle';
import { formatNumber } from '../../../utils/formatNumber';
import { DeleteTransactionModal, ViewTransactionModal } from '../Modal/Modal';
import { StateTransaction } from './StateTransaction';
interface TransactionSingleProps {
  transaction: Transaction;
}

export const TransactionSingle: React.FC<TransactionSingleProps> = ({ transaction }) => {

  return (
    <>
      <tr >
        <td>{transaction.id}</td>
        <td>{transaction.user?.fullName}</td>
        <td>{transaction.user?.email}</td>
        <td>{transaction.user?.phone}</td>
        <td>{formatNumber(transaction.totalPrice)}</td>
        <td>
          <a className="fw-bold" style={getTransactionStatusStyle(transaction.state)}><StateTransaction state={transaction.state} /></a>
        </td>
        <td>
          <ViewTransactionModal transaction={transaction} />
          <DeleteTransactionModal transaction={transaction} />
        </td>
      </tr>
    </>
  )
}
