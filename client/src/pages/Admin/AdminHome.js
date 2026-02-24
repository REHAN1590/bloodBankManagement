import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            As an administrator of our Blood Bank App, you play a vital role in ensuring the smooth operation of our platform. Your dedication and expertise are crucial in managing the day-to-day activities of our app, from overseeing blood donations to coordinating with hospitals and medical facilities. Our app is designed to streamline the process of blood donation, making it easier for donors to register, schedule appointments, and track their donations. As an admin, you have access to a range of features and tools that enable you to monitor and manage the entire process, from donor registration to blood storage and distribution.

            With our app, you can easily track donor information, manage blood inventory, and generate reports to help you make informed decisions. You can also use our app to communicate with donors, hospitals, and other stakeholders, ensuring that everyone is informed and up-to-date on the latest developments. Our app is designed to be user-friendly and intuitive, making it easy for you to navigate and perform your duties with ease.

            As an admin, you are also responsible for ensuring the security and integrity of our app. This includes managing user access, monitoring system activity, and implementing security protocols to prevent unauthorized access or data breaches. Our app is built with security in mind, and we have implemented robust measures to protect sensitive information and prevent cyber threats.

            We are committed to providing you with the tools and resources you need to succeed in your role. Our support team is available 24/7 to assist you with any questions or issues you may have. We also provide regular updates and training to ensure that you are always up-to-date on the latest features and best practices. Thank you for your hard work and dedication to our Blood Bank App. Together, we can make a difference in the lives of patients and donors alike.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;