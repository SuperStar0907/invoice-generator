# Invoice App  [Hosted Website](https://invoice-generator-ruby.vercel.app)
<img width="1280" alt="Screenshot 2023-07-21 at 5 08 12 PM" src="https://github.com/SuperStar0907/invoice-generator/assets/74975220/ab3cc010-6d6f-48db-be46-10b3db1895e0">

This app allows you to manage invoices by adding, editing, deleting, and copying them. It also includes a list of all invoices and allows you to edit specific invoices as well as copy them as a boilerplate for a new invoice.

## Changes Made

The following changes were made to the app:

1. **Added Redux using Slice with reducers `addInvoice`, `editInvoice`, and `deleteInvoice` to implement add, edit, delete, and copy functionality** : The app now uses Redux with Slice to manage the state and implement CRUD operations for invoices. The `addInvoice` reducer adds a new invoice to the list, `editInvoice` updates an existing invoice, `deleteInvoice` removes an invoice from the list, and `copyInvoice` creates a new invoice based on an existing one.
2. **Added routes to app with specific ID while editing, homepage as a list of invoices** : The app now includes routes to navigate to different pages. When editing an invoice, the app uses a dynamic route that includes the invoice ID. The homepage displays a list of all invoices, and you can click on an invoice to view its details or edit it.

## Changes in Files

1. redux/InvoiceSlice.js

   * The `InvoiceSlice.js` file defines a Redux slice for the list of invoices, with reducers for adding, editing, and deleting an invoice and defines an intial state for the list of invoices.
2. App.js

   * The `App.js` file now contains routes for the homepage and editing an invoice based on its id.
3. Index.js

   * As the entry point of the app This `index.js` file now contains setup for the Redux store using the `Provider` component and renders the `App` component.
4. store.js

   * The `store.js` file creates a Redux store using the `configureStore` function from the `@reduxjs/toolkit` package. It imports the `InvoiceSlice` reducer from `./redux/InvoiceSlice`, and sets it as the reducer for the `invoices` state.
5. withRouter.js

   * This `withRouter.js` file exports a higher-order component called `withRouter` that takes a component as an argument and returns a new component that has access to the `useNavigate` and `useLocation` hooks from `react-router-dom`.
   * This higher-order component is used to pass the `navigate` and `location` props to the wrapped component, which can be useful for handling navigation and retrieving information about the current URL path.
   * This implementation was needed because in version 6 of `react-router-dom`, there is no `withRouter` higher-order component for class components, so this file was created to provide similar functionality.
6. components/InvoiceForm.js

   * To use Functionality of Routing and Redux , first wrapped the component with connect and withRouter.
   * Made the invoiceNumber as the identifying id for invoice in the list of invoices and made it's component from formcontrol to a non-editable div component
   * Using location from routes and it's state , deciding if it is add mode , edit mode or copy mode using simple if else.
7. components/InvoiceModal.js

   * To use Functionality of Routing and Redux , first wrapped the component with `connect` and `withRouter`.
   * Made the Button of Save Invoice to be the deciding factor between add or edit and used basic if else for deciding between add and edit
8. components/InvoiceList.js

   * This component renders a table with headers for the invoice number, date of issue, bill
     to, bill from, and actions. Each row in the table displays the
     corresponding invoice data and provides buttons to edit, copy, or delete
     the invoice.
   * Functionalities for add, edit and copy are implemented using the component of InvoiceForm and routing taking the use of  `this.props.location.state` and  `copymode:boolean` .
9. components/styles/listStyles.css

   * contains css styling for the page `component/InvoiceList.js`

## Usage

Once the app is running, you can perform the following actions:

* **Add a new invoice** : Click on the "Add Invoice" button on the homepage, fill in the required fields, and click "Save".
* **Edit an invoice** : Click on an invoice in the list on the homepage to view its details, then click on the "Edit" button and make the desired changes. Click "Save" to update the invoice.
* **Copy an invoice** : Click on an invoice in the list on the homepage to view its details, then click on the "Copy" button. This will create a new invoice based on the existing one, with a unique ID.
* **Delete an invoice** : Click on an invoice in the list on the homepage to view its details, then click on the "Delete" button. This will remove the invoice from the list.

## Technologies Used for the Change

* React
* Redux with Slice
* React Rout
