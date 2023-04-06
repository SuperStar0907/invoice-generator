import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteInvoice } from '../redux/InvoiceSlice';
import './styles/listStyles.css';
const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const invoices = useSelector((state) => state.invoices.invoices);

  const handleAddButtonClick = () => {
    navigate('/invoice', { state: null });
  };

  const handleEditButtonClick = (invoice) => {
    navigate(`/invoice/${invoice.invoiceNumber}`, { state: {...invoice,copymode:false} });
  };

  const handleCopyButtonClick = (invoice) => {
    navigate('/invoice', { state: {...invoice,copymode:true} });
  };

  const handleDeleteInvoice = (invoiceNumber) => {
    dispatch(deleteInvoice(invoiceNumber));
  };
  useEffect(() => {
    console.log('invoices', invoices);
  }, [invoices]);
  return (
    <div className='invoices-container'>
      <h1>Invoices</h1>
      <button className='add-invoice-button' onClick={handleAddButtonClick}>Add Invoice</button>
      <table className='invoices-table'>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Invoice Date</th>
            <th>Billed To</th>
            <th>Billed From</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.invoiceNumber}>
              <td>{invoice.invoiceNumber}</td>
              <td>{invoice.dateOfIssue}</td>
              <td>{invoice.billTo}</td>
              <td>{invoice.billFrom}</td>
              <td>
                <button className='edit-invoice-button' onClick={() => handleEditButtonClick(invoice)}>Edit</button>
                <button className='delete-invoice-button' onClick={() => handleDeleteInvoice(invoice.invoiceNumber)}>Delete</button>
                <button className='copy-invoice-button' onClick={() => handleCopyButtonClick(invoice)}>Copy</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
