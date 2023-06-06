import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../pages/auth/auth.css'

const Register = () => {

    const navigate = useNavigate()
    const [ruser, setRuser] = useState({
        name: '', email: '', address: '', phone: '', adhaarno: '', work: '', vehicleno: '', vehiclebrand: '', vehiclemodel: '', licenseno: '', licenseissuedate: '', licenseenddate: '', insuranceno: '', insuranceissuedate: '', insuranceenddate: '', pucno: '', pucissuedate: '', pucenddate: '', password: ''
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value

        setRuser({ ...ruser, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, address, phone, adhaarno, work, vehicleno, vehiclebrand, vehiclemodel, licenseno, licenseissuedate, licenseenddate, insuranceno, insuranceissuedate, insuranceenddate, pucno, pucissuedate, pucenddate, password } = ruser;
        const res = await fetch('api/v1/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, address, phone, adhaarno, work, vehicleno, vehiclebrand, vehiclemodel, licenseno, licenseissuedate, licenseenddate, insuranceno, insuranceissuedate, insuranceenddate, pucno, pucissuedate, pucenddate, password
            })
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid! Details Entered!");
            console.log("Invalid something!");
        }
        else {
            window.alert("Registration Successfull!");
            console.log("Registartion Successfull!");

            navigate('/')
        }
    }

    return (
        <div className='registerContainer'>
            <p>REGISTER</p>
            <p>New User!</p>
            <form class="row g-3" method='POST'>
                <div class="col-md-6">
                    <label Htmlfor="inputName" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName" name='name' value={ruser.name} onChange={handleInputs} />
                </div>
                <div class="col-md-6">
                    <label Htmlfor="inputVehicleNo." class="form-label">Work</label>
                    <input type="text" class="form-control" id="inputVehicleNo" name='work' value={ruser.work} onChange={handleInputs} />
                </div>
                <div class="col-md-6">
                    <label Htmlfor="inputAdhaarNo." class="form-label">Aadhar Card No.</label>
                    <input type="text" class="form-control" id="inputAdhaarNo." name='adhaarno' value={ruser.adhaarno} onChange={handleInputs} />
                </div>
                <div class="col-md-6">
                    <label Htmlfor="inputPhoneNo" class="form-label">Phone No.</label>
                    <input type="text" class="form-control" id="inputPhoneNo" name='phone' value={ruser.phone} onChange={handleInputs} />
                </div>
                <div class="col-md-6">
                    <label Htmlfor="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" name='email' value={ruser.email} onChange={handleInputs} />
                </div>
                <div class="col-md-6">
                    <label Htmlfor="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" name='password' value={ruser.password} onChange={handleInputs} />
                </div>
                <div class="col-12">
                    <label Htmlfor="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" name='address' value={ruser.address} onChange={handleInputs} />
                </div>

                <p>Vehicle Details:</p>
                <div class="col-md-4">
                    <label Htmlfor="inputLicenseNo" class="form-label">Vehicle No.</label>
                    <input type="text" class="form-control" id="inputLicenseNo" placeholder="" name='vehicleno' value={ruser.vehicleno} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputLicDate" class="form-label">Vehicle Brand</label>
                    <input type="text" class="form-control" id="inputlicIDate" name='vehiclebrand' value={ruser.vehiclebrand} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputLicValid" class="form-label">Vehicle Model</label>
                    <input type="text" class="form-control" id="inputLicValid" placeholder="" name='vehiclemodel' value={ruser.vehiclemodel} onChange={handleInputs} />
                </div>

                <p>License Details:</p>
                <div class="col-md-4">
                    <label Htmlfor="inputLicenseNo" class="form-label">License No.</label>
                    <input type="text" class="form-control" id="inputLicenseNo" placeholder="" name='licenseno' value={ruser.licenseno} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputLicDate" class="form-label">Issue Date [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputlicIDate" name='licenseissuedate' value={ruser.licenseissuedate} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputLicValid" class="form-label">Valid Till [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputLicValid" placeholder="" name='licenseenddate' value={ruser.licenseenddate} onChange={handleInputs} />
                </div>

                <p>Insurance Details:</p>
                <div class="col-md-4">
                    <label Htmlfor="inputInsuranceNo" class="form-label">Insurance No.</label>
                    <input type="text" class="form-control" id="inputInsuranceNo" placeholder="" name='insuranceno' value={ruser.insuranceno} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputInsDate" class="form-label">Issue Date [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputInsIDate" name='insuranceissuedate' value={ruser.insuranceissuedate} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputInsValid" class="form-label">Valid Till [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputInsValid" placeholder="" name='insuranceenddate' value={ruser.insuranceenddate} onChange={handleInputs} />
                </div>

                <p>Pollution Certificate Details:</p>
                <div class="col-md-4">
                    <label Htmlfor="inputPUCNo" class="form-label">PUC No.</label>
                    <input type="text" class="form-control" id="inputPUCNo" placeholder="" name='pucno' value={ruser.pucno} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputPUCDate" class="form-label">Issue Date [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputPUCDate" name='pucissuedate' value={ruser.pucissuedate} onChange={handleInputs} />
                </div>
                <div class="col-md-4">
                    <label Htmlfor="inputPUCValid" class="form-label">Valid Till [DD-MM-YY]</label>
                    <input type="text" class="form-control" id="inputPUCValid" placeholder="" name='pucenddate' value={ruser.pucenddate} onChange={handleInputs} />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-danger" onClick={PostData}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register