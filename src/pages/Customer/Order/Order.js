import style from "./Order.module.scss";
import classNames from "classnames/bind";

import { Button } from "~/components";

const cx = classNames.bind(style);

function Order() {
  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("heading")}>Orders</h3>
      <table className={cx("table")}>
        <thead className={cx("thead")}>
          <th style={{ width: 15 + "%" }} className={cx("order", "text-left")}>
            Order
          </th>
          <th style={{ width: 30 + "%" }} className={cx("date", "text-left")}>
            Date
          </th>
          <th style={{ width: 15 + "%" }} className={cx("status", "text-left")}>
            Status
          </th>
          <th style={{ width: 20 + "%" }} className={cx("total", "")}>
            Total
          </th>
          <th style={{ width: 20 + "%" }} className={cx("action", "")}>
            Action
          </th>
        </thead>
        <tbody className={cx("tbody")}>
          <tr>
            <td className={cx("order")}>#1553</td>
            <td className={cx("date")}>Fri Dec 08 11:30:02 ICT 2023</td>
            <td className={cx("status")}>Payed</td>
            <td className={cx("total", "text-center")}>$ 613.00</td>
            <td className={cx("action", "text-center")}>
              <Button hover small bold>
                VIEW
              </Button>
            </td>
          </tr>
          <tr>
            <td className={cx("order")}>#1553</td>
            <td className={cx("date")}>Fri Dec 08 11:30:02 ICT 2023</td>
            <td className={cx("status")}>Payed</td>
            <td className={cx("total", "text-center")}>$ 613.00</td>
            <td className={cx("action", "text-center")}>
              <Button hover small bold>
                VIEW
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Order;
