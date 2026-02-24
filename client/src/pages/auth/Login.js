import React from 'react';
import Form from '../../components/shared/Form/Form';
import { useSelector } from "react-redux";
import Spinner from './../../components/shared/Spinner';

const Login = () => {

  const { loading, error } = useSelector(state => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}

      {loading ? (
        <Spinner />
      ) : (

        <div className="premium-layout">

          {/* LEFT SIDE IMAGE */}
          <div className="premium-left">
            <img src="./assets/images/nd.jpg" alt="loginImages" />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="premium-right">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>

        </div>

      )}
    </>
  );
};

export default Login;