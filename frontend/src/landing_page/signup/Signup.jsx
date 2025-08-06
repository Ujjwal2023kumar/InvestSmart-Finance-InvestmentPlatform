import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup(){
    return(
        <section className="container mt-5 mb-5 d-flex justify-content-center">
            <form>
                <div className="card p-5">
                    <h3 className="text-center mb-3">SIGN UP</h3>
                    <div class="row mb-3">
                        <label for="fullName" class="col-form-label">Full Name</label>
                        <input type="text" class="form-control" id="fullName" required/>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email" required/>
                    </div>
                    <div class="row mb-3">
                        <label for="password" class="col-form-label">Password</label>
                        <input type="password" class="form-control" id="password" required/>
                    </div>
                    <p>Already have an account <Link to="/login">Click here</Link></p>
                    <div className="d-flex justify-content-center mt-3"><button class="btn btn-primary">Signup</button></div>
                </div>
            </form>
        </section>
    );
}

