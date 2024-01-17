import "./widgetlg.css";
import Prashanth from "../../../assets/Screenshot 2024-01-07 221835.png";
import Pavan from "../../../assets/pawan.jpg";
import aditya from "../../../assets/aditya.jpg";
import jabi from "../../../assets/jabi.jpg";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Prashanth} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Prashanth Aruri</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$110.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={Pavan} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Pavan Kalyan Singavarapu </span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$150.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={jabi} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Jabilla Poola</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$130.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Shivani Madisetty</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={aditya} alt="" className="widgetLgImg" />
            <span className="widgetLgName">Aditya Vuyyuri</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$130.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
