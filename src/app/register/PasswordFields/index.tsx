"use client";

import { ChangeEvent, useEffect, useState, useMemo } from "react";
import TextField from "../../../components/Form/TextField";

interface PasswordFieldsProps {
    className?: string;
}

const PasswordFields = ({ className }: PasswordFieldsProps) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatches, setPasswordMatches] = useState(true);
  const [strengthError, setStrengthError] = useState<string | null>(null);

  const strongPasswordRegex = useMemo(
    () => /^(?=.{6,}$)(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/,
    []
  );

  useEffect(() => {
    setPasswordMatches( confirmPassword === password);
  }, [password, confirmPassword]);

  useEffect(() => {
    if (!password) {
      setStrengthError(null);
      return;
    }
    if (!strongPasswordRegex.test(password)) {
      setStrengthError(
        "A senha precisa ter ao menos 6 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial."
      );
    } else {
      setStrengthError(null);
    }
  }, [password, strongPasswordRegex]);

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

const handleConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
  setConfirmPassword(e.target.value);
};

  return (
    <>
      <TextField
        label="Password"
        type="password"
        name="password"
        id="password"
        className={`${className} border-b-3 rounded-b-lg border-main-purple mt-3`}
        required
        value={password}
        onChange={handlePasswordChange}
        error={strengthError ?? false}
      />
      <TextField
        label="Confirm password"
        type="password"
        name="confirm-password"
        id="confirm-password"
        className={`${className} border-b-3 rounded-b-lg border-main-purple mt-3`}
        required
        value={confirmPassword}
        onChange={handleConfirmChange}
        error={passwordMatches ? false : "Passwords do not match"}
      />
    </>
  );
};

export default PasswordFields;
