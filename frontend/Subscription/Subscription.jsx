import React from "react";
import "animate.css";
import style from "./Subscription.module.css";
import { Button } from "@/components/componentIndex";
import { TiTick } from "react-icons/ti";
const Subscription = ({ el, i }) => {
  const btn = (
    <Button
      btnName="Buy Plan"
      classStyle={style.button}
      handleClick={() => {}}
    />
  );
  return (
    <div className={style.SubscriptionBox}>
      <div className={style.SubscriptionBox_box}>
        <span className={style.SubscriptionBox_box_plan}>{el.plan}</span>
        <Button classStyle={style.btn} btnName="Buy Plan"></Button>

        {el.popular && (
          <small className={style.SubscriptionBox_box_popular}>
            {el.popular}
          </small>
        )}

        <p className={style.SubscriptionBox_box_price}>{el.price}</p>

        <div className={style.SubscriptionBox_box_info}>
          {el.service.map((el, i) => (
            <p className={style.SubscriptionBox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {el}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
