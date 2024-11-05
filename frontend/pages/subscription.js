import React from "react";
import style from "../styles/subscription.module.css";
import Subscription from "@/Subscription/Subscription";
const subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$4.99/month",
      popular: "",
      service: ["Automated Reporting", "Faster processing", "Customizations"],
      info: "Great deal for new users to explore our platform's capabilities without commitment.",
    },
    {
      plan: "BASIC",
      price: "$9.99/month",
      popular: "POPULAR",
      service: [
        "Automated Reporting",
        "Faster processing",
        "Customizations",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PREMIUM",
      price: "$14.99/month",
      popular: "Most Popular",
      service: [
        "Automated Reporting",
        "Faster Processing",
        "Customizations",
        "Priority Support",
        "Advanced Analytics",
      ],
      info: "A step up from the Starter plan, offering more features and faster processing times.",
    },
    {
      plan: "ENTERPRISE",
      price: "$39.99/month",
      popular: "",
      service: [
        "Automated Reporting",
        "Faster Processing",
        "Customizations",
        "Priority Support",
        "Unlimited Builds",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Custom Integrations",
        "Company Evaluations",
      ],
      info: "Designed for businesses that need the most out of our platform, with additional support and customization options.",
    },
  ];
  return (
    <div className={style.subscription}>
      <div className={style.subscription_box}>
        <div className={style.subscription_box_info}>
          <h1>Unleash Your Potential with Our Subscription Plans</h1>
          <p>
            Elevate your experience with our curated subscription plans. Choose
            from our Starter, Premium, and Enterprise options, each tailored to
            meet your unique needs.
          </p>
        </div>
        <div className={style.subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
