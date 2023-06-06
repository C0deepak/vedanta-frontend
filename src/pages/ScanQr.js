import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const ScanQr = () => {
    const navigate = useNavigate()
    const [inputId, setInputId] = useState('')
    const [reqUserData, setReqUserData] = useState('')
    const [dataReceived, setDataReceived] = useState(false)

    const ScanQrFun = async () => {
        try {
            const res = await fetch(`/api/v1/user/${inputId}`, {
                method: 'POST',
                headers: {
                    Accept: 'appllication/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const reqUserData = await res.json()
            setReqUserData(reqUserData)
            setDataReceived(true)

            if (!res.status === 200) {
                navigate('/')
            }
        }
        catch (err) {
            console.log(err)
            navigate('/')
        }
    }

    return (
        <>
            <div className="scanQrWrapper">
                <img src="/img/qrscananimation.gif" alt="" />
                <form action='POST'>
                    <div class="mb-3">
                        <label for="inputID" class="form-label">(Scan any QR to get user's Id)Input ID</label>
                        <input type="text" class="form-control" id="inputID" name='inputId' placeholder='Input ID..' value={inputId} onChange={(e) => setInputId(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-danger loginButton" onClick={ScanQrFun}>Search User</button>
                </form>

                {dataReceived ? (
                    <div>Received</div>
                ) : (
                    <div>Not Received</div>
                )}
            </div>
        </>
    )
}

export default ScanQr