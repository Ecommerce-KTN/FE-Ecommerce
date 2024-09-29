// src/components/SignUp.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please enter your name'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Please enter your email'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter your password'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
    }),
    onSubmit: values => {
      // Handle sign-up logic here (e.g., call sign-up API)
      console.log('Signing up with:', values);

      // Assume sign-up is successful, navigate to login page
      navigate('/');
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              placeholder="Confirm your password"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;