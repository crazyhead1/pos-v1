import React from "react";
import { Product } from "../../../../interfaces/product";

export interface ComponentProps {
  invoiceNumber?: string;
  products?: Product[];
}

const PrintableInvoice: React.FC<ComponentProps> = () => {
  return (
    <>
      <header>
        <h1>Invoice</h1>
        <address>
          <p>Jonathan Neal</p>
          <p>
            101 E. Chapman Ave
            <br />
            Orange, CA 92866
          </p>
          <p>(800) 555-1234</p>
        </address>
        <span>
          <img
            alt=""
            src="http://www.jonathantneal.com/examples/invoice/logo.png"
          />
          <input type="file" accept="image/*" />
        </span>
      </header>
      <article>
        <h1>Recipient</h1>
        <address>
          <p>Some </p>
        </address>
        <table className="meta">
          <tr>
            <th>
              <span>Invoice #</span>
            </th>
            <td>
              <span>101138</span>
            </td>
          </tr>
          <tr>
            <th>
              <span>Date</span>
            </th>
            <td>
              <span>January 1, 2012</span>
            </td>
          </tr>
          <tr>
            <th>
              <span>Amount Due</span>
            </th>
            <td>
              <span id="prefix">$</span>
              <span>600.00</span>
            </td>
          </tr>
        </table>
        <table className="inventory">
          <thead>
            <tr>
              <th>
                <span>Item</span>
              </th>
              <th>
                <span>Description</span>
              </th>
              <th>
                <span>Rate</span>
              </th>
              <th>
                <span>Quantity</span>
              </th>
              <th>
                <span>Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a className="cut">-</a>
                <span>Front End Consultation</span>
              </td>
              <td>
                <span>Experience Review</span>
              </td>
              <td>
                <span data-prefix>$</span>
                <span>150.00</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span data-prefix>$</span>
                <span>600.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        <a className="add">+</a>
        <table className="balance">
          <tr>
            <th>
              <span>Total</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span>600.00</span>
            </td>
          </tr>
          <tr>
            <th>
              <span>Amount Paid</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span>0.00</span>
            </td>
          </tr>
          <tr>
            <th>
              <span>Balance Due</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span>600.00</span>
            </td>
          </tr>
        </table>
      </article>
      <aside>
        <h1>
          <span>Additional Notes</span>
        </h1>
        <div>
          <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p>
        </div>
      </aside>
    </>
  );
};

export default PrintableInvoice;
