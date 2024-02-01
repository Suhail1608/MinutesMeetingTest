'use client'
import Image from "next/image";
import './page.scss';
import InputBox from "@/components/Common/InputBox/InputBox";
import { useState } from "react";

import Button from "@/components/Common/Button/Button";

export default function Home() {
  const [teamId, setTeamId] = useState("")
  const [password, setPassword] = useState("")
  return (
    <>
      <div className="login-page">
        {/* <div className="login-form-box">
          <div className="login-form">
            <input></input>
          </div>
        </div> */}
        <div className="login-form-box">
          <div className="login-form">
            <label>Team ID</label>
            <InputBox value={teamId} setValue={setTeamId} placeholder={"Team ID"}/>
            <label>Password</label>
            <InputBox value={password} setValue={setPassword} placeholder={"Password"} pwd/>
            <Button label={"Login"}/>
          </div>
        </div>
      </div>
    </>
  );
}
