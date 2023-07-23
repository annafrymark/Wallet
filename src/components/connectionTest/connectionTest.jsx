let base_url = 'localhost:4000/transactions';


export async function fetchTransactions() {
  const transactionsResponse = await fetch(`http://${base_url}`, {
    method: 'GET',
  });
  if (!transactionsResponse.ok) {
    const message = `An error has occured: ${transactionsResponse.status}`;
    throw new Error(message);
  }
  const data = await transactionsResponse.json();
  console.log(data);
}
fetchTransactions();

//in console at localhost:3000/wallet we get array of transactions from http://localhost:4000/transactions


