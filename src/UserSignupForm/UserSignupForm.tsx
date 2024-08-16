import { useStorage } from "./SessionStoreService";
import "./UserSignupForm.css";
import { InputAndLabel } from "./InputAndLabel";

/**
 * Some assumptions in this problem:
 * 1. Form state is considered "onChange", not "onSubmit".
 * Thusly, the error state shows anytime the passwords differ, including the blank state.
 * This is probably not ideal UX but simpler for the code side.
 * 2. Default form behavior is used for simplicity.
 * In a real app, we'd probably handle the onClick event for form submission and send the request to the backend ourselves.
 * 3. Hard-coding string values isn't the best but it's okay to prevent overengineering.
 */
export function UserSignupForm(): JSX.Element {
  const [username, setUsername] = useStorage("username");
  const [password, setPassword] = useStorage("password");
  const [confirmPassword, setConfirmPassword] = useStorage("confirmPassword");

  // Show the error if both inputs have values and they don't match.
  const showPasswordMatchError = password !== confirmPassword;

  // Only allow submitting if all form inputs are valid.
  const isSubmitDisabled =
    !password || !confirmPassword || !username || showPasswordMatchError;

  return (
    <form>
      <InputAndLabel
        id="username"
        label="Username"
        value={username}
        onChange={setUsername}
      />
      <InputAndLabel
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        className={showPasswordMatchError ? "invalid" : ""}
      />
      <InputAndLabel
        id="confirm-password"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        className={showPasswordMatchError ? "invalid" : ""}
      />
      <p>Passwords {showPasswordMatchError && "do not"} match!</p>
      <button type="submit" disabled={isSubmitDisabled}>
        Submit
      </button>
    </form>
  );
}
