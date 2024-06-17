export const getTransactionStatusStyle = (state: string) => {
  switch (state) {
    case 'SUCCEED':
      return { color: 'green' };
    case 'PENDING':
      return { color: 'orange' };
    case 'FAILED':
      return { color: 'red' };
    default:
      return {};
  }
}

export const getAuctionStatusStyle = (state: string) => {
  switch (state) {
    case 'ONGOING':
      return { color: '#28a745', fontWeight: 'bold' };
    case 'WAITING':
      return { color: '#ff9800', fontWeight: 'bold' };
    case 'FAILED':
      return { color: '#dc3545', fontWeight: 'bold' };
    case 'FINISHED':
      return { color: '#007bff', fontWeight: 'bold' };
    case 'PAUSED':
      return { color: '#6f42c1', fontWeight: 'bold' };
    case 'DELETED':
      return { color: '#c82333', fontWeight: 'bold' };
    default:
      return { fontWeight: 'bold' };
  }
}