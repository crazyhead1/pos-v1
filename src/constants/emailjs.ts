import dayjs from "dayjs";

export const PUBLIC_KEY = "HqnD_n5aapqSlSllO";
export const TEMPLATE_ID_INVENTORY_RUNNING_OUT = "template_h7s4ioa";
export const SERVICE_ID_GMAIL = "service_0z8m0v8";

export const getInvnetoryRunningOutEmailTemplate = ({
  invoice: { invoiceNumber, customer, date },
  products,
  total,
  tax,
  company: { email, phone, address },
}) => {
  return `<div class="invoice-info">
        <p><strong>Invoice Number:</strong> #${invoiceNumber}</p>
        <p><strong>Customer:</strong> ${customer}</p>
        <p><strong>Date:</strong> ${date}</p>
      </div>
<br/>
<h3>Order Summary</h3>
      <table>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total</th>
        </tr>
        ${products.map((product) => {
          return `
            <tr>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>Rs ${product.unitPrice}</td>
                <td>Rs ${product.unitPrice * product.quantity}</td>
            </tr>`;
        })}
      </table>
        <br/>
        <div class="total">
            <p><strong>Subtotal:</strong> Rs ${total}</p>
            <p><strong>Tax:</strong> Rs ${tax}</p>
            <p><strong>Total:</strong> Rs ${total + tax}</p>
    </div>

    <div class="footer">
      <p>Thank you for your purchase!</p>
      <p>For any inquiries, contact us at:</p>
      <p>Email: ${email ?? "---"} | Phone: ${phone ?? "---"}</p>
      <p>Address: ${address ?? "---"}</p>
    </div>`;
};
