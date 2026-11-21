
import React, { useContext, useEffect, useState } from 'react';
import {
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowRight,
  FiShoppingBag,
} from 'react-icons/fi';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } =
    useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      if (currentState === 'Sign up') {
        const response = await axios.post(
          backendUrl + '/api/user/register',
          { name, email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      } else if (currentState === 'Login') {
        const response = await axios.post(
          backendUrl + '/api/user/login',
          { email, password }
        );

        if (response.data.token) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      toast.error(
        error.response?.data?.message ||
        'Something went wrong!'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, [token, setToken]);

  const isLogin = currentState === 'Login';

  return (
    <div className="min-h-[85vh] flex items-center justify-center
      bg-[#f6f5f2] px-4 py-10 sm:px-6">

      <div className="w-full max-w-5xl bg-white rounded-3xl
        overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.08)]
        grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE - BRAND SECTION */}
        <div className="hidden md:flex flex-col justify-between
          relative overflow-hidden bg-[#242622] text-white p-10 lg:p-14">

          <div className="absolute w-72 h-72 rounded-full
            border border-white/10 -top-20 -right-20" />

          <div className="absolute w-96 h-96 rounded-full
            border border-white/10 -bottom-48 -left-32" />

          <div className="relative z-10 flex items-center gap-3">
            <div className="w-11 h-11 bg-[#d7c4a3] rounded-xl
              flex items-center justify-center text-[#242622]">
              <FiShoppingBag size={23} />
            </div>
            <span className="text-2xl font-semibold tracking-wide">
              FOREVER
            </span>
          </div>

          <div className="relative z-10">
            <p className="text-[#d7c4a3] text-xs uppercase
              tracking-[4px] mb-5">
              Discover Your Style
            </p>

            <h1 className="text-4xl lg:text-5xl font-light
              leading-tight mb-6">
              Style is a way
              <br />
              to say who
              <br />
              <span className="font-semibold text-[#d7c4a3]">
                you are.
              </span>
            </h1>

            <p className="text-gray-400 text-sm leading-7 max-w-sm">
              Explore timeless collections, discover new
              trends and find pieces that make every moment
              special.
            </p>

            <div className="w-16 h-[2px] bg-[#d7c4a3] mt-8" />
          </div>

          <div className="relative z-10 flex justify-between
            text-xs text-gray-500">
            <span>© 2026 FOREVER</span>
            <span>Fashion. Lifestyle. You.</span>
          </div>
        </div>

        {/* RIGHT SIDE - AUTHENTICATION */}
        <div className="flex flex-col justify-center
          px-6 py-12 sm:px-10 lg:px-14">

          <div className="mb-9">
            <div className="md:hidden flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#242622] text-[#d7c4a3]
                rounded-xl flex items-center justify-center">
                <FiShoppingBag size={21} />
              </div>
              <span className="font-semibold text-xl tracking-wide">
                FOREVER
              </span>
            </div>

            <p className="text-[#a58c69] text-xs font-semibold
              tracking-[3px] uppercase mb-3">
              {isLogin ? 'Welcome Back' : 'Join Our Community'}
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold
              text-[#242622] mb-3">
              {isLogin ? 'Sign in' : 'Create account'}
            </h2>

            <p className="text-gray-500 text-sm">
              {isLogin
                ? 'Enter your details to access your account.'
                : 'Create an account and start exploring.'}
            </p>
          </div>

          <form onSubmit={onSubmitHandler}
            className="flex flex-col gap-5">

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium
                  text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2
                    -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-[#f8f8f6] border
                      border-gray-200 rounded-xl py-3.5 pl-11 pr-4
                      text-sm outline-none transition-all
                      focus:border-[#a58c69] focus:bg-white
                      focus:ring-2 focus:ring-[#a58c69]/10"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium
                text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2
                  -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-[#f8f8f6] border
                    border-gray-200 rounded-xl py-3.5 pl-11 pr-4
                    text-sm outline-none transition-all
                    focus:border-[#a58c69] focus:bg-white
                    focus:ring-2 focus:ring-[#a58c69]/10"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium
                text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <FiLock className="absolute left-4 top-1/2
                  -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full bg-[#f8f8f6] border
                    border-gray-200 rounded-xl py-3.5 pl-11 pr-12
                    text-sm outline-none transition-all
                    focus:border-[#a58c69] focus:bg-white
                    focus:ring-2 focus:ring-[#a58c69]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2
                    -translate-y-1/2 text-gray-400
                    hover:text-[#242622] transition-colors"
                  aria-label={showPassword
                    ? 'Hide password'
                    : 'Show password'}
                >
                  {showPassword
                    ? <AiFillEye size={20} />
                    : <AiFillEyeInvisible size={20} />}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center
              text-sm mt-[-3px]">

              <button
                type="button"
                className="text-gray-500 hover:text-[#a58c69]
                  transition-colors"
                onClick={() => toast.info(
                  'Password recovery is not available yet.'
                )}
              >
                Forgot password?
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentState(isLogin ? 'Sign up' : 'Login');
                  setShowPassword(false);
                }}
                className="font-semibold text-[#a58c69]
                  hover:text-[#242622] transition-colors"
              >
                {isLogin ? 'Create Account' : 'Login here'}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#242622] hover:bg-[#3a3d36]
                text-white rounded-xl py-4 mt-3 font-medium
                text-sm flex items-center justify-center gap-3
                transition-all duration-300 disabled:opacity-60
                disabled:cursor-not-allowed group"
            >
              {loading
                ? 'Please wait...'
                : isLogin ? 'Sign In' : 'Create Account'}

              {!loading && (
                <FiArrowRight
                  className="group-hover:translate-x-1
                    transition-transform"
                  size={18}
                />
              )}
            </button>

          </form>

          <p className="text-center text-xs text-gray-400 mt-9">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
