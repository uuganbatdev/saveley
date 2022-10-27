import { toast } from "react-toastify";
import { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import Cookies from 'js-cookie'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {setAppState} = useContext(AppContext);

  async function getOneTimePassword() {
    const id = toast.loading("Уншиж байна...");
    const res = await axios.post("http://localhost:3001/oneTimePassword", {
      email,
    });
    if (res.data === "send") {
      toast.update(id, {
        render: "И-мэйл илгээсэн",
        type: "success",
        autoClose: 3000,
        isLoading: false,
      });
      setIsPasswordVisible(true);
    } else {
      toast.update(id, {
        render: "Алдаа гарлаа",
        type: "error",
        autoClose: 3000,
        isLoading: false,
      });
    }
  }

  async function login() {
    const id = toast.loading("Уншиж байна...");
    const res = await axios.post("http://localhost:3001/login", {
      email,
      password,
    });
    if (res.data === "user") {
      toast.update(id, {
        render: "Тавтай морил.",
        type: "success",
        autoClose: 3000,
        isLoading: false,
      });
      Cookies.set('email', email, { expires: 7 })
      setAppState(prev => ({...prev, email, isLoggedIn: true}));
    } else {
      toast.update(id, {
        render: "Таарахгүй байна.",
        type: "error",
        autoClose: 3000,
        isLoading: false
      });
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white space-y-5 rounded-md py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                И-мэйл хаяг
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-main focus:outline-none focus:ring-main sm:text-sm"
                />
              </div>
            </div>
            {isPasswordVisible && (
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Нэг удаагийн нууц үг
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full text-black appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-main focus:outline-none focus:ring-main sm:text-sm"
                  />
                </div>
              </div>
            )}

            {isPasswordVisible ? (
              <div>
                <button
                  type="button"
                  onClick={login}
                  className="flex w-full justify-center rounded-md border border-transparent bg-main py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2"
                >
                  Нэвтрэх
                </button>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={getOneTimePassword}
                  className="flex w-full justify-center rounded-md border border-transparent bg-main py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-main focus:outline-none focus:ring-2 focus:ring-main focus:ring-offset-2"
                >
                  Нэг удаагийн нууц үг авах
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
