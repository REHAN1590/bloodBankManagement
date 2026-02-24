import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
   <div className="ultra-wrapper">
  <div className="ultra-card">
        <form
          onSubmit={(e) => {
            if (formType === "login")
              return handleLogin(e, email, password, role);
            else if (formType === "register")
              return handleRegister(
                e,
                name,
                role,
                email,
                password,
                phone,
                organisationName,
                address,
                hospitalName
              );
          }}
        >
          <h2 className="text-center mb-3">{formTitle}</h2>
          <hr />

          {/* ROLE SELECTOR */}
          <div className="role-selector mb-3">
            <label>
              <input
                type="radio"
                name="role"
                value="donar"
                onChange={(e) => setRole(e.target.value)}
                defaultChecked
              />
              Donar
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                onChange={(e) => setRole(e.target.value)}
              />
              Admin
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="hospital"
                onChange={(e) => setRole(e.target.value)}
              />
              Hospital
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="organisation"
                onChange={(e) => setRole(e.target.value)}
              />
              Organisation
            </label>
          </div>

          {/* SWITCH FORM */}
          {(() => {
            switch (true) {
              case formType === "login":
                return (
                  <>
                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </>
                );

              case formType === "register":
                return (
                  <>
                    {(role === "admin" || role === "donar") && (
                      <InputType
                        labelText={"Name"}
                        labelFor={"forName"}
                        inputType={"text"}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    )}

                    {role === "organisation" && (
                      <InputType
                        labelText={"Organisation Name"}
                        labelFor={"fororganisationName"}
                        inputType={"text"}
                        name={"organisationName"}
                        value={organisationName}
                        onChange={(e) =>
                          setOrganisationName(e.target.value)
                        }
                      />
                    )}

                    {role === "hospital" && (
                      <InputType
                        labelText={"Hospital Name"}
                        labelFor={"forHospitalName"}
                        inputType={"text"}
                        name={"hospitalName"}
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    )}

                    <InputType
                      labelText={"Email"}
                      labelFor={"forEmail"}
                      inputType={"email"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputType
                      labelText={"Password"}
                      labelFor={"forPassword"}
                      inputType={"password"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputType
                      labelText={"Address"}
                      labelFor={"forAddress"}
                      inputType={"text"}
                      name={"address"}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <InputType
                      labelText={"Phone"}
                      labelFor={"forPhone"}
                      inputType={"text"}
                      name={"phone"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </>
                );

              default:
                return null;
            }
          })()}

          {/* FOOTER */}
          <div className="premium-footer">
            {formType === "login" ? (
              <p>
                Not registered? <Link to="/register">Register here</Link>
              </p>
            ) : (
              <p>
                Already user? <Link to="/login">Login here</Link>
              </p>
            )}

            <button className="premium-btn" type="submit">
              {submitBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;