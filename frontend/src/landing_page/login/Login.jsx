import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <section className="container mt-5 mb-5 d-flex justify-content-center">
            <form>
                <div className="card p-5">
                    <h3 className="text-center mb-3">LOGIN</h3>
                    <div class="row mb-3">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email" required/>
                    </div>
                    <div class="row mb-3">
                        <label for="passwordInput" class="col-form-label">Password</label>
                        <input type="password" class="form-control" id="password" required/>
                    </div>
                    <p>Don't have an account <Link to="/signup" style={{textDecoration:"none"}}>Click here</Link></p>
                    <div className="d-flex justify-content-center mt-3"><button class="btn btn-primary">Login</button></div>
                </div>
            </form>
        </section>
    );
}
