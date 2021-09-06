import React from "react";

// contact form for get info
export default function Contact() {
  return (
    <div className="center">
      {/* form for data */}
      <form action="#">
        <table>
          <tr>
            <td>Name</td>
            <td>
              {/* autofocus for 1st input */}
              <input name="nm" autoFocus={true} required />
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input type="number" name="age" min="25" max="45" required />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input name="emailid" type="email" required />
            </td>
          </tr>
          <tr>
            <td>Message</td>
            <td>
              <textarea name="message" required maxLength="255"></textarea>
            </td>
          </tr>

          <tr>
            <td></td>
            <td>
              <button type="submit">Submit</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
