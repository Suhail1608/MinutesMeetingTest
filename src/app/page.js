'use client'
import Image from "next/image";
import './page.scss';
import InputBox from "@/components/Common/InputBox/InputBox";
import { useState } from "react";

import Button from "@/components/Common/Button/Button";
import { userVerify } from "../../utils/getData";
import { useRouter } from "next/navigation";

export default function Home() {
  const [teamId, setTeamId] = useState("")
  const [password, setPassword] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const router = useRouter()
  const handleLogin = async (teamId, password) =>{
    const loginAuth = await userVerify(teamId,password)
    if(loginAuth !== null){
      // window.alert(JSON.stringify(loginAuth))
      localStorage.setItem("isAuth", JSON.stringify({auth:true,id:loginAuth.id,district:loginAuth.district}))
      window.alert(localStorage.getItem("isAuth"))
      router.push("/dashboard")
    }else{
      // window.alert("Invalid")
      setInvalid(true)
      
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="login-form-box">
          <div className="login-form">
            {invalid && <span className="err">Invalid User Login</span>}
            <label>Team ID</label>
            <InputBox value={teamId} setValue={setTeamId} placeholder={"Team ID"}/>
            <label>Password</label>
            <InputBox value={password} setValue={setPassword} placeholder={"Password"} pwd/>
            <Button label={"Login"} cb={()=>{handleLogin(teamId,password)}}/>
          </div>
        </div>
      </div>
    </>
  );
}
