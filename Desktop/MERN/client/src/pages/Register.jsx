// to store the current variable values in a state
import { useState } from "react";

// the register component getting exported
export const Register = () => {
    // creating a new use state, the state has 4 fields (we could have also made 4 use states)
    // user stored the state values and setUser is the update function
    const[user, setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",

    });

    //function to handle input (change of state value)
    // e is the event object
    const handleInput = (e) =>{

        let name = e.target.name;
        let value= e.target.value;
        // making an object
        setUser({
            // to fetch current values of user state, using spread operator
            ...user,
            // updating any values that changed
            // square brackets make name field dynamic, so it can be used as any of the 4 fields in useState
            [name]: value

        });
    };

    // function to handle submit of form
    const handleSubmit = (e) => {
        // to prevent page from reloading when button clicked
        e.preventDefault();
        console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            {/* div containing our 2 components: image and form */}
            <div className="container grid grid-two-cols">

              <div className="registration-image reg-img">
                <img
                  src="images/register.png"
                  alt="Register img not found"
                  width="400"
                  height="500"
                />
              </div>

              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );


};